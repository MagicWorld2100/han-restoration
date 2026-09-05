import { readFile, writeFile, mkdir, copyFile, realpath, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { build } from 'esbuild';
import { createHash } from 'node:crypto';
import { normalizeAudioConfig } from './src/audio.mjs';

const root=path.dirname(fileURLToPath(import.meta.url));
const pkg=JSON.parse(await readFile(path.join(root,'package.json'),'utf8'));
const audioConfig=normalizeAudioConfig(JSON.parse(await readFile(path.join(root,'public/audio/config.json'),'utf8')));
const audioPack={config:audioConfig,assets:{}},audioFiles=[];
const audioRoot=await realpath(path.join(root,'public/audio'));
for(const file of new Set([audioConfig.music.src,...Object.values(audioConfig.effects)].filter(Boolean))){
  try{
    const target=await realpath(path.join(root,'public',file));
    if(!target.startsWith(audioRoot+path.sep))throw new Error('音频路径超出 audio 目录：'+file);
    if((await stat(target)).size>32*1024*1024)throw new Error('单个打包音频超过 32 MB：'+file);
    const bytes=await readFile(target),extension=path.extname(file).slice(1).toLowerCase();
    const mime={mp3:'audio/mpeg',m4a:'audio/mp4',ogg:'audio/ogg',wav:'audio/wav',aac:'audio/aac',flac:'audio/flac'}[extension];
    audioPack.assets[file]='data:'+mime+';base64,'+bytes.toString('base64');audioFiles.push('public/'+file);
    console.log('音频已纳入离线包：'+file+'（'+bytes.length+' 字节）');
  }catch(error){if(error.code==='ENOENT')console.log('未提供音频，保留合成／本机选择回退：'+file);else throw error;}
}
await mkdir(path.join(root,'public','3d'),{recursive:true});
await build({entryPoints:[path.join(root,'src/main.js')],outfile:path.join(root,'public/3d/world.bundle.js'),bundle:true,minify:true,format:'iife',target:['es2020'],legalComments:'eof',define:{__HAN_VERSION__:JSON.stringify(pkg.version)}});
await copyFile(path.join(root,'node_modules/three/LICENSE'),path.join(root,'public/3d/THREE-LICENSE.txt'));
const [html,css,engine,app,worldHtml,worldCss,bundle]=await Promise.all(['classic.html','style.css','engine.js','app.js','index.html','3d/world.css','3d/world.bundle.js'].map(file=>readFile(path.join(root,'public',file),'utf8')));
const standalone=html.replace('<link rel="stylesheet" href="style.css">',()=>'<style>'+css+'</style>')
  .replace('<script src="engine.js"></script><script src="app.js"></script>',()=>'<script>'+engine.replace(/<\/script/gi,'<\\/script')+'</script><script>'+app.replace(/<\/script/gi,'<\\/script')+'</script>');
await writeFile(path.join(root,'再出隆中.html'),standalone);
console.log('已生成独立离线游戏：再出隆中.html（'+Buffer.byteLength(standalone)+' 字节）');
const license=await readFile(path.join(root,'node_modules/three/LICENSE'),'utf8');
const audioScript='<script>window.__HAN_AUDIO__='+JSON.stringify(audioPack).replace(/</g,'\\u003c')+';</script>';
const worldStandalone=worldHtml.replace('<link rel="stylesheet" href="3d/world.css">',()=>'<style>'+worldCss+'</style>')
  .replace('<script src="3d/world.bundle.js" defer></script>',()=>audioScript+'<script>'+bundle.replace(/<\/script/gi,'<\\/script')+'</script>')
  .replaceAll('href="classic.html"','href="再出隆中.html"')+'\n<!-- Three.js MIT License\n'+license+'\n-->\n';
await writeFile(path.join(root,'再出隆中-三维版.html'),worldStandalone);
console.log('三维局域网版与单文件离线版构建完成：'+(Buffer.byteLength(worldStandalone)/1024/1024).toFixed(2)+' MB，无外部模型、字体或 CDN 请求。');
const assets={};
for(const file of ['public/index.html','public/3d/world.css','public/3d/world.bundle.js','public/3d/THREE-LICENSE.txt','public/engine.js','public/classic.html','public/app.js','public/style.css','public/audio/config.json',...audioFiles,'再出隆中-三维版.html','再出隆中.html']){const bytes=await readFile(path.join(root,file));assets[file]={bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex')};}
const manifest={product:'再出隆中 · 山河三维',version:pkg.version,candidate:assets['public/3d/world.bundle.js'].sha256.slice(0,16),assets};
await writeFile(path.join(root,'release-manifest.json'),JSON.stringify(manifest,null,2)+'\n');
await writeFile(path.join(root,'public/release.json'),JSON.stringify({version:pkg.version,candidate:manifest.candidate,assets:Object.fromEntries(Object.entries(assets).filter(([file])=>file.startsWith('public/')).map(([file,value])=>[file.slice(7),value]))},null,2)+'\n');
console.log('交付版本 '+pkg.version+' · 候选指纹 '+manifest.candidate);
