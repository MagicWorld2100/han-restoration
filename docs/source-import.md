# 首次 Source Import 验收

验收日期：2026-09-05。本文记录此次公开源码导入的实际检查，不代表重新发布或完整重做历史产品验收。

## 来源与边界

- 已运行的本地产品：v2.1.1；三维 bundle 指纹：`1f9fd1382555c3bb`。
- Canonical：`MagicWorld2100/han-restoration`；导入基线：`f86811ac3b770a9fdbf27ef0ace44f2e97719c89`。
- 使用独立 fresh canonical integration worktree，在 canonical main 的历史上导入，没有初始化、修改或重置原始产品目录。
- `origin` 为 `yanxi1024-git/han-restoration` fork；`upstream` 为 Human canonical repository。导入分支为 `bootstrap/import-existing-product`。
- 本次不部署、不修改 Ruleset、不向 main 推送、不合并；由 Human 审核 PR。

## 产品拓扑

| 版本 | 网页入口 | 离线入口 | 存档 namespace |
| --- | --- | --- | --- |
| Classic / 2D | `public/classic.html` | `再出隆中.html` | `han-restoration-v1` |
| 3D | `public/index.html` | `再出隆中-三维版.html` | `han-restoration-3d-v2` |

两版共享 `public/engine.js`。经典版使用 `public/app.js` 和 `public/style.css`；三维版使用 `src/`、`public/3d/`，地形、城池和队伍由代码生成，不依赖外部模型、贴图或字体。音乐接口和本地合成音效属于三维版。两个存档不会互相覆盖；三维版可以重放经典存档，不删除原存档。两版由同一个构建生成，并放入同一个 Pages 静态输出目录。

## 公开分发与隐私

Human 已确认主题曲没有公开再分发权。`MUSIC_REDISTRIBUTION=NOT_AUTHORIZED_ASSET_EXCLUDED`：仓库仅保留 `public/audio/music/theme.mp3` 文件名和加载接口，未导入 MP3，也未导入含它的 Base64。原素材留在原始本地产品；本次没有换音乐或修改游戏源码。

保留源码、锁文件、原有测试、历史说明、两个离线交付文件、构建清单和 Three.js MIT 许可。Human 的 Apache-2.0 `LICENSE` 保持原样；它不授权被排除的音乐。

排除依赖目录、缓存、浏览器配置与存储、日志、截图与录屏、Cloudflare 认证、本机部署配置和个人路径。历史文档中的真实部署地址、部署标识、本地路径与私有证据链接已经脱敏；原始记录仍留在本地。历史文档不是此次重新执行的验收记录。

本机专用配置为被忽略的 `wrangler.local.jsonc` 和 `deploy/local.json`；仓库只提供无真实地址的示例。生成脚本会把存在的本地音频嵌入离线 HTML，因此仅忽略 MP3 不足以防止误分发；增加了沿用 Node test runner 的三项公开分发检查。

## 构建与自动检查

环境：Node.js 22.23.1、npm 12.0.2。

| 检查 | 实际结果 |
| --- | --- |
| `npm ci` | PASS；锁文件未改变，安装审计未报告已知漏洞 |
| `npm run build:cloudflare` | PASS；包含 `npm run build`，只生成文件、不上传 |
| `npm test` | PASS；原有 30 项：引擎 11、场景 6、音频演出 7、安全响应头 6 |
| `npm run check:distribution` | PASS；新增 3 项：无内嵌音频、发布包排除主题曲、无隐式生产目标 |
| 两个部署脚本 `node --check` | PASS |
| `git diff --cached --check` | 生成的 Three.js shader 文本有既存空白告警；排除 bundle 与其三维离线副本后其余文件 PASS |
| lint / typecheck | NOT_DEFINED |
| Gitleaks 8.30.1 | PASS；对排除本机配置后的公开候选文件扫描，使用 redaction，不添加忽略基线或规则豁免 |

当前环境限制依赖安装脚本，未为此放宽策略；实际构建仍成功。依赖审计和 secret scan 不是无漏洞或无隐私风险的绝对保证。

## 可复现性

`BUILD_REPRODUCIBILITY=REPRODUCIBLE_FUNCTIONAL`，不是含本地音乐交付包的字节复刻。

- 全部 9 个三维源码模块与原产品逐字节一致；原规则引擎、经典资源、构建脚本和锁文件一致。
- 原 release manifest 的 12 项中，10 项字节与 SHA-256 一致，1 项主题曲被排除，1 项三维离线 HTML 因移除内嵌音频而改变。
- `package.json`、两个 release manifest 均为 2.1.1；三维 bundle 指纹仍为 `1f9fd1382555c3bb`。
- 公开三维离线 HTML 为 754,691 bytes，经典离线 HTML 为 62,173 bytes。
- 连续两次公开构建的两个离线 HTML、`release-manifest.json`、`public/release.json`、Pages manifest 共五个文件完全一致。差异不是时间戳或随机打包造成的。
- 另建不含依赖、本机配置、音频和 `output/` 目录的公开候选副本，从 `npm ci` 重新执行构建、原有测试和公开分发检查，全部通过；上述五个文件以及三维 bundle、锁文件共七个文件与集成工作区完全一致。
- 仅在导入副本中调整无音乐打包支持和本地部署目标读取；游戏运行源码没有改写。

## 本轮浏览器 smoke

使用真实 Chromium 无头浏览器，软件 WebGL（SwiftShader）。本轮不是物理 GPU 性能认证，也没有重新打完完整战役。

- Classic：`/classic.html` 加载，207 年开局、7 个战略节点可见，实际点击「沙盘规则」打开说明；无 JavaScript fatal error。
- 3D：`/index.html` 加载，版本为 2.1.1，WebGL context 创建成功，ready 状态成立，错误界面隐藏；实际进入「先试一场北伐」，读到 228 年与粮秣 120。
- 对公开 release manifest 的 9 个运行资源逐项请求，全部 HTTP 200，长度及浏览器计算的 SHA-256 均匹配。
- 开启声音后主题曲请求出现预期的 404，界面提示「音乐暂不可用」；实际打开声音设置并试听交战，合成音效 RMS 大于零，无 JavaScript fatal error。
- 控制台有 4 条软件图形驱动性能警告，以及上述主动开启缺失音乐产生的 1 条资源错误；不能将它报告成“零 console error”。核心资源与 WebGL 初始化没有因导入丢失文件。

## Cloudflare 可部署链路

源码及锁文件 → `npm ci` → `npm run build:cloudflare` → `output/cloudflare/site/` → Wrangler / Cloudflare Pages Direct Upload。

此次生成的站点输出含 12 个文件，总计 819,042 bytes，包含双入口、运行资源、`release.json`、`404.html` 和 `_headers`。输出目录通过明确文件清单打包，不递归上传整个工作区。

`CLOUDFLARE_AUTH=EXTERNAL_OAUTH`。实际 Pages 项目名和地址由维护者在本机填写；OAuth 凭据不进入仓库。构建不需要这些凭据，部署需要另行认证及授权。本次没有执行部署或生产验收脚本，没有更改生产环境。

## 未覆盖的风险

- 公开副本故意不含主题曲；开启背景音乐会显示不可用提示。需要音乐时只能在获得相应权利后本地配置，不能直接提交原素材。
- 未做真实硬件 GPU、多设备、全流程回归；历史验收不能替代本轮结果。
- 生产地址与项目配置不公开，后续维护者须自行提供本地部署配置和外部 OAuth。本次仅验证可构建的静态交付物，没有验证一次新的实际发布。
- 原生成 bundle 的着色器字符串包含尾部空格、空格后接 tab；为保留现有构建字节与指纹，本次没有重写这些生成内容。完整 staged diff 的 whitespace check 因此不是 PASS。
