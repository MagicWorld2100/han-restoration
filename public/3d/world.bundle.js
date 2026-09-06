(()=>{var zf=Object.create;var jh=Object.defineProperty;var kf=Object.getOwnPropertyDescriptor;var Vf=Object.getOwnPropertyNames;var Hf=Object.getPrototypeOf,Gf=Object.prototype.hasOwnProperty;var Wf=(i,t)=>()=>{try{return t||i((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var Xf=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Vf(t))!Gf.call(i,s)&&s!==e&&jh(i,s,{get:()=>t[s],enumerable:!(n=kf(t,s))||n.enumerable});return i};var qf=(i,t,e)=>(e=i!=null?zf(Hf(i)):{},Xf(t||!i||!i.__esModule?jh(e,"default",{value:i,enumerable:!0}):e,i));var ff=Wf((df,Dl)=>{(function(i){"use strict";let e={grain:["\u7CAE\u79E3",240],people:["\u6C11\u529B",100],army:["\u519B\u5907",100],trust:["\u6C11\u671B",100],elite:["\u653F\u52A1\u652F\u6301",100],wu:["\u5B59\u5218\u4E92\u4FE1",100],logistics:["\u8FD0\u8F93",100],institution:["\u5236\u5EA6\u4F20\u627F",100],fatigue:["\u5F79\u8D1F",100]},n=[{id:"jing",name:"\u8346\u5DDE\u636E\u70B9",short:"\u8346\u5DDE",x:485,y:305,base:52,cost:35,road:30},{id:"yi",name:"\u76CA\u5DDE",short:"\u76CA\u5DDE",x:235,y:365,base:46,cost:35,road:22},{id:"han",name:"\u6C49\u4E2D",short:"\u6C49\u4E2D",x:290,y:252,base:53,cost:37,road:38},{id:"long",name:"\u9647\u53F3",short:"\u9647\u53F3",x:240,y:143,base:64,cost:44,road:48},{id:"guan",name:"\u5173\u4E2D",short:"\u5173\u4E2D",x:392,y:188,base:77,cost:52,road:58},{id:"north",name:"\u4E2D\u539F\u4E0E\u6CB3\u5317",short:"\u4E2D\u539F",x:572,y:151,base:96,cost:66,road:65},{id:"wu",name:"\u5434\u5730",short:"\u6C5F\u4E1C",x:699,y:339,base:105,cost:85,road:75}],s=b=>JSON.parse(JSON.stringify(b)),r=(b,F,L)=>Math.min(L,Math.max(F,b)),a=b=>Number.isFinite(Number(b))&&Math.abs(Math.floor(Number(b)))%2147483647||207;function o(b=207){return{version:1,seed:a(b),rng:a(b),year:207,turn:0,chapter:0,grain:66,people:56,army:35,trust:59,elite:45,wu:37,logistics:23,institution:15,fatigue:12,wei:100,land:["jing"],stability:{jing:65},successor:!1,settlement:0,consolidated:0,over:null,lastAction:null,history:[],log:[],weather:"\u5E73\u5E74",harvest:1}}function l(b){return b.rng=Math.imul(1664525,b.rng)+1013904223>>>0,b.rng/4294967296}function c(b){for(let[F,[,L]]of Object.entries(e))b[F]=Math.round(r(b[F],0,L));b.wei=r(b.wei,45,140)}function h(b,F){for(let[L,U]of Object.entries(F))b[L]+=U;c(b)}function d(b){return b.land.reduce((F,L)=>F+(b.stability[L]||0),0)/b.land.length}function u(b,F){return Object.keys(e).filter(L=>b[L]!==F[L]).map(L=>({key:L,name:e[L][0],value:b[L]-F[L]}))}function f(b,F,L=32){b.land.includes(F)||b.land.push(F),b.stability[F]=L}let g=[{year:207,label:"\u9686\u4E2D \xB7 \u521D\u89C1",title:`\u4F60\u77E5\u9053\u540E\u6765\u7684\u5386\u53F2\u3002
\u5218\u5907\u51ED\u4EC0\u4E48\u542C\u4F60\u7684\uFF1F`,text:"\u4F60\u4E8C\u5341\u516D\u5C81\uFF0C\u521A\u8D70\u51FA\u8349\u5E90\u3002\u773C\u524D\u7684\u5218\u5907\u5BC4\u5C45\u8346\u5DDE\uFF0C\u94B1\u7CAE\u4E0E\u4EBA\u9A6C\u90FD\u6709\u9650\u3002\u4F60\u8BB0\u5F97\u8D64\u58C1\u3001\u8346\u5DDE\u4E0E\u5937\u9675\uFF0C\u5374\u8FD8\u6CA1\u6709\u628A\u4EFB\u4F55\u8BA1\u5212\u53D8\u6210\u73B0\u5B9E\u7684\u6743\u529B\u3002",quote:"\u201C\u5148\u751F\u4E4B\u8BA1\uFF0C\u5982\u4F55\u843D\u5230\u660E\u5E74\u7684\u7CAE\u518C\u4E0A\uFF1F\u201D",speaker:"\u519B\u8BAE\u4E2D\u7684\u8D28\u7591 \xB7 \u60C5\u5883\u865A\u6784",choices:[["i0a","\u62FF\u51FA\u53EF\u6267\u884C\u7684\u4E09\u5E74\u7B79\u7CAE\u4E0E\u7ED3\u76DF\u65B9\u6848","\u5148\u89E3\u51B3\u773C\u524D\u751F\u8BA1\uFF0C\u7528\u6267\u884C\u6362\u53D6\u6388\u6743\u3002",{institution:12,logistics:8,elite:10,grain:-8},"\u4F60\u4EE5\u7CAE\u518C\u3001\u9A7F\u8DEF\u548C\u4EBA\u9009\u53D6\u5F97\u8BD5\u884C\u673A\u4F1A\u3002\u77E5\u9053\u672A\u6765\u672C\u8EAB\u6CA1\u6709\u4EA7\u751F\u653F\u4EE4\uFF1B\u4E00\u4EFD\u80FD\u6267\u884C\u7684\u65B9\u6848\u4EA7\u751F\u4E86\u3002"],["i0b","\u5148\u52DF\u96C6\u90E8\u66F2\uFF0C\u6253\u4E00\u6B21\u80DC\u4ED7\u7ACB\u5A01","\u519B\u5907\u589E\u957F\uFF0C\u4F46\u65B0\u589E\u519B\u961F\u4E5F\u8981\u5403\u996D\u3002",{army:18,grain:-17,people:-6,fatigue:9},"\u5C06\u9886\u613F\u610F\u542C\u4F60\uFF0C\u4F46\u5730\u65B9\u9996\u5148\u6536\u5230\u7684\u662F\u5F81\u52DF\u540D\u989D\u3002\u519B\u529F\u53EF\u4EE5\u6362\u8BDD\u8BED\u6743\uFF0C\u7EF4\u6301\u519B\u961F\u5219\u662F\u957F\u671F\u652F\u51FA\u3002"],["i0c","\u628A\u672A\u6765\u5927\u4E8B\u5199\u6210\u9884\u8A00\uFF0C\u8981\u6C42\u72EC\u638C\u519B\u653F","\u8C6A\u8D4C\u4E2A\u4EBA\u5A01\u671B\uFF1B\u53CD\u5BF9\u8005\u4E0D\u4F1A\u56E0\u6B64\u6D88\u5931\u3002",{elite:-15,institution:-4,trust:-5,grain:4},"\u5218\u5907\u542C\u4E86\u9884\u8A00\uFF0C\u4ECD\u5C06\u5175\u6743\u5206\u7ED9\u65E7\u90E8\u3002\u4E00\u4E2A\u964C\u751F\u4EBA\u7684\u65AD\u8A00\u4E0D\u8DB3\u4EE5\u6539\u53D8\u5229\u76CA\u4E0E\u4FE1\u4EFB\u7ED3\u6784\u3002"]]},{year:208,label:"\u6C5F\u4E1C \xB7 \u8054\u76DF",title:`\u5B59\u6743\u613F\u610F\u6297\u66F9\u3002
\u4F46\u4E0D\u613F\u610F\u66FF\u4F60\u590D\u5174\u6C49\u5BA4\u3002`,text:"\u5317\u65B9\u5927\u519B\u5357\u4E0B\u3002\u6C5F\u4E1C\u6709\u72EC\u7ACB\u7684\u5C06\u9886\u3001\u7A0E\u6E90\u548C\u5B89\u5168\u8BC9\u6C42\u3002\u5171\u540C\u7684\u654C\u4EBA\u8BA9\u8C08\u5224\u6210\u4E3A\u53EF\u80FD\uFF0C\u5374\u4E0D\u4F1A\u8BA9\u76DF\u53CB\u653E\u5F03\u6218\u540E\u7684\u5730\u76D8\u3002",quote:"\u4F60\u80FD\u627F\u8BFA\u4EC0\u4E48\uFF0C\u8BA9\u5408\u4F5C\u6BD4\u5404\u81EA\u9003\u751F\u66F4\u5212\u7B97\uFF1F",speaker:"\u672C\u56DE\u5408\u7684\u653F\u6CBB\u7EA6\u675F",choices:[["i1a","\u7EA6\u5B9A\u5171\u540C\u9632\u7EBF\u4E0E\u6218\u540E\u4E89\u8BAE\u7684\u534F\u5546\u529E\u6CD5","\u62FF\u51FA\u4FDD\u969C\u4E0E\u519B\u9700\uFF0C\u4FDD\u7559\u53CC\u65B9\u51B3\u7B56\u6743\u3002",{wu:28,grain:-12,elite:7,army:5},"\u53CC\u65B9\u83B7\u5F97\u53EF\u5151\u73B0\u7684\u5171\u540C\u5229\u76CA\uFF0C\u8054\u5408\u9632\u7EBF\u6210\u7ACB\u3002\u672C\u5C40\u628A\u8D64\u58C1\u76F8\u5173\u7684\u590D\u6742\u6218\u4E89\u7B80\u5316\u4E3A\u8054\u76DF\u4E0E\u751F\u5B58\u8282\u70B9\uFF0C\u4E0D\u628A\u4E00\u628A\u706B\u5F53\u4F5C\u5FC5\u80DC\u6309\u94AE\u3002"],["i1b","\u53EA\u5F3A\u8C03\u6C49\u5BA4\u5927\u4E49\uFF0C\u4E0D\u8C08\u6218\u540E\u5B89\u6392","\u8282\u7701\u773C\u524D\u8BA9\u6B65\uFF0C\u79EF\u7D2F\u65E5\u540E\u7684\u8FB9\u754C\u4E89\u7AEF\u3002",{wu:8,army:-6,grain:-9,trust:3},"\u6C5F\u4E1C\u56E0\u773C\u524D\u5A01\u80C1\u9009\u62E9\u6709\u9650\u5408\u4F5C\uFF0C\u4F46\u6CA1\u6709\u7B54\u5E94\u957F\u671F\u4E3A\u4F60\u4F5C\u6218\u3002\u5171\u540C\u53E3\u53F7\u6CA1\u6709\u66FF\u4EE3\u5229\u76CA\u5B89\u6392\u3002"],["i1c","\u7ED5\u8FC7\u6C5F\u4E1C\uFF0C\u72EC\u7ACB\u8FCE\u51FB\u5317\u65B9\u4E3B\u529B","\u4E89\u53D6\u81EA\u4E3B\uFF0C\u627F\u53D7\u5175\u529B\u4E0E\u8865\u7ED9\u5DEE\u8DDD\u3002",{army:-20,grain:-23,people:-8,fatigue:15,wu:-5},"\u90E8\u961F\u5728\u6D88\u8017\u540E\u64A4\u56DE\u636E\u70B9\u3002\u4F60\u638C\u63E1\u4E86\u654C\u519B\u7684\u5386\u53F2\u884C\u7A0B\uFF0C\u5374\u6CA1\u6709\u56E0\u6B64\u83B7\u5F97\u8DB3\u4EE5\u6297\u8861\u7684\u8FD0\u529B\u4E0E\u5175\u5458\u3002"]]},{year:211,label:"\u8346\u5DDE \xB7 \u751F\u8BA1",title:`\u591A\u5F81\u4E00\u5343\u4EBA\uFF0C
\u8C01\u6765\u79CD\u4ED6\u4EEC\u7684\u7530\uFF1F`,text:"\u8425\u4F0D\u8981\u6C42\u6269\u519B\uFF0C\u5730\u65B9\u8981\u6C42\u51CF\u5F79\u3002\u58EB\u65CF\u638C\u63E1\u4E61\u91CC\u7F51\u7EDC\uFF0C\u6D41\u6C11\u9700\u8981\u571F\u5730\u4E0E\u53E3\u7CAE\u3002\u4F60\u6BCF\u591A\u52A8\u5458\u4E00\u5206\u5175\u529B\uFF0C\u540E\u65B9\u5C31\u5C11\u4E00\u5206\u751F\u4EA7\u4F59\u5730\u3002",quote:"\u6218\u62A5\u4E0A\u662F\u4E00\u4E2A\u6570\u5B57\uFF0C\u6751\u91CC\u5374\u662F\u4E00\u5B63\u519C\u65F6\u3002",speaker:"\u672C\u56DE\u5408\u7684\u751F\u4EA7\u7EA6\u675F",choices:[["i2a","\u5B89\u7F6E\u6D41\u6C11\uFF0C\u8BD5\u884C\u8F6E\u5F79\u4E0E\u6C34\u5229\u4FEE\u590D","\u5148\u652F\u51FA\u7CAE\u79E3\uFF0C\u8BA9\u751F\u4EA7\u9010\u6B65\u6062\u590D\u3002",{people:13,trust:10,logistics:7,grain:-15,fatigue:-9},"\u65B0\u589E\u6C11\u529B\u4EE3\u8868\u5B89\u7F6E\u4E0E\u751F\u4EA7\u6062\u590D\uFF0C\u5E76\u4E0D\u662F\u4EBA\u53E3\u51ED\u7A7A\u589E\u957F\u3002\u8F6E\u5F79\u51CF\u5C11\u8BEF\u519C\uFF0C\u540E\u7EED\u56DE\u5408\u624D\u80FD\u56DE\u6536\u6295\u5165\u3002"],["i2b","\u6E05\u67E5\u8C6A\u5F3A\u9690\u6237\uFF0C\u96C6\u4E2D\u6269\u5145\u8D22\u653F","\u6269\u5927\u5B9E\u9645\u7A0E\u57FA\uFF0C\u4E5F\u635F\u5BB3\u5730\u65B9\u65E2\u5F97\u5229\u76CA\u3002",{grain:23,people:5,institution:8,elite:-21,trust:5},"\u5B98\u5E9C\u638C\u63E1\u66F4\u591A\u6237\u7C4D\u4E0E\u6536\u5165\uFF1B\u90E8\u5206\u5730\u65B9\u534F\u4F5C\u8F6C\u4E3A\u6D88\u6781\u3002\u6539\u9769\u7684\u6536\u76CA\u4E0E\u963B\u529B\u540C\u65F6\u5230\u6765\u3002"],["i2c","\u63D0\u9AD8\u5F81\u53D1\uFF0C\u5C3D\u5FEB\u7F16\u6210\u65B0\u519B","\u773C\u524D\u66F4\u80FD\u6253\uFF0C\u519C\u65F6\u4E0E\u670D\u5F79\u8D1F\u62C5\u6076\u5316\u3002",{army:21,grain:13,people:-16,trust:-13,fatigue:22},"\u519B\u8425\u58EE\u5927\u4E86\uFF0C\u7A0E\u6E90\u5374\u5728\u6536\u7F29\u3002\u65B0\u589E\u519B\u5907\u8FD8\u4F1A\u6301\u7EED\u6D88\u8017\u7CAE\u79E3\uFF0C\u4E0D\u80FD\u9760\u4E00\u6B21\u5F81\u53D1\u6C38\u4E45\u7EF4\u6301\u3002"]]},{year:214,label:"\u5165\u8700 \xB7 \u6CBB\u7406",title:`\u6210\u90FD\u53EF\u4EE5\u6253\u4E0B\u6765\u3002
\u76CA\u5DDE\u672A\u5FC5\u80FD\u63A5\u8FC7\u6765\u3002`,text:"\u5218\u5907\u96C6\u56E2\u5DF2\u5728\u5165\u8700\u6218\u4E89\u4E2D\u53D6\u5F97\u4F18\u52BF\u3002\u4F60\u8D1F\u8D23\u63D0\u51FA\u63A5\u7BA1\u65B9\u6848\uFF1A\u5916\u6765\u7684\u519B\u529F\u96C6\u56E2\u3001\u539F\u6709\u5B98\u540F\u548C\u672C\u5730\u4E61\u91CC\uFF0C\u90FD\u5728\u7B49\u5F85\u65B0\u653F\u6743\u5982\u4F55\u5206\u914D\u6743\u5229\u4E0E\u8D1F\u62C5\u3002",quote:"\u5360\u9886\u4E00\u5EA7\u57CE\uFF0C\u4E0E\u8BA9\u4E00\u4E2A\u5730\u65B9\u7167\u5E38\u751F\u6D3B\uFF0C\u662F\u4E24\u4EF6\u4E8B\u3002",speaker:"\u672C\u56DE\u5408\u7684\u7EDF\u6CBB\u7EA6\u675F",choices:[["i3a","\u7559\u4EFB\u53EF\u7528\u5B98\u540F\uFF0C\u7EA6\u675F\u519B\u961F\uFF0C\u5206\u671F\u6838\u7530","\u8BA9\u5730\u65B9\u8FD0\u8F6C\uFF0C\u518D\u9010\u6B65\u5EFA\u7ACB\u7EDF\u4E00\u89C4\u5219\u3002",{institution:11,elite:13,trust:8,grain:-14},"\u76CA\u5DDE\u7EB3\u5165\u63A7\u5236\uFF0C\u65E7\u6709\u884C\u653F\u7F51\u7EDC\u5F97\u4EE5\u5EF6\u7EED\u3002\u63A5\u7BA1\u4ECD\u6709\u6210\u672C\uFF0C\u4F46\u4F60\u4E3A\u540E\u7EED\u6CBB\u7406\u4E89\u53D6\u4E86\u5408\u4F5C\u3002"],["i3b","\u5956\u8D4F\u90E8\u66F2\uFF0C\u4F18\u5148\u5151\u73B0\u519B\u529F\u627F\u8BFA","\u51DD\u805A\u519B\u961F\uFF0C\u4F46\u4E61\u91CC\u627F\u62C5\u5F81\u7528\u3002",{army:13,grain:14,elite:-13,trust:-16,fatigue:10},"\u5C06\u58EB\u83B7\u5F97\u56DE\u62A5\uFF0C\u5730\u65B9\u5219\u5F00\u59CB\u9690\u533F\u8D44\u6E90\u3002\u5730\u76D8\u53D8\u5927\uFF0C\u4E0D\u7B49\u4E8E\u53EF\u7528\u7A0E\u6E90\u540C\u6B65\u53D8\u5927\u3002"],["i3c","\u5168\u9762\u66F4\u6362\u65E7\u540F\uFF0C\u6240\u6709\u51B3\u7B56\u96C6\u4E2D\u5230\u4F60","\u77ED\u671F\u7EDF\u4E00\u6307\u6325\uFF0C\u589E\u52A0\u884C\u653F\u4E0E\u63A5\u73ED\u98CE\u9669\u3002",{elite:-23,institution:-7,logistics:9,grain:-5},"\u65E7\u7F51\u7EDC\u88AB\u6253\u65AD\uFF0C\u4E8B\u60C5\u7EB7\u7EB7\u7B49\u4F60\u88C1\u51B3\u3002\u4E2A\u4EBA\u8D8A\u4E0D\u53EF\u66FF\u4EE3\uFF0C\u79BB\u5F00\u4F60\u4E4B\u540E\u7684\u653F\u52A1\u8D8A\u8106\u5F31\u3002"]]}];function M(b){let F=.55+d(b)/220,L=b.elite<25?.7:1;return Math.round((b.people*.22+b.land.length*7+b.logistics*.06)*F*L*b.harvest)}function p(b){return Math.round(b.army*.25+b.land.length*3+b.fatigue*.11)}function m(b){return b.land.includes("yi")?b.land.includes("han")?b.land.includes("long")?b.land.includes("guan")?b.land.includes("north")?[...b.land.includes("jing")?[]:["jing"],...b.land.includes("wu")?[]:["wu"]]:["north",...b.land.includes("jing")?[]:["jing"]]:["guan",...b.land.includes("jing")?[]:["jing"]]:["long",...b.land.includes("jing")?[]:["jing"]]:["han",...b.land.includes("jing")?[]:["jing"]]:["yi"]}function T(b,F){let L=n.find(nt=>nt.id===F);if(!L)return null;let U=b.wu>=65&&b.land.includes("jing")&&F!=="wu"&&F!=="jing"?8:0,G=b.army*.82+b.logistics*.29+b.institution*.18-b.fatigue*.22+U,X=L.base*(F==="wu"||F==="jing"?1:b.wei/100),Q=Math.round(r(50+(G-X)*1.5,8,88)),st=[];return m(b).includes(F)||st.push("\u6CA1\u6709\u53EF\u7528\u7684\u76F8\u90BB\u8FDB\u519B\u8DEF\u7EBF"),b.grain<L.cost&&st.push("\u7CAE\u79E3\u81F3\u5C11 "+L.cost),b.logistics<L.road&&st.push("\u8FD0\u8F93\u81F3\u5C11 "+L.road),b.army<42&&st.push("\u519B\u5907\u81F3\u5C11 42"),b.trust<30&&st.push("\u6C11\u671B\u81F3\u5C11 30"),b.elite<20&&st.push("\u653F\u52A1\u652F\u6301\u81F3\u5C11 20"),b.fatigue>75&&st.push("\u5F79\u8D1F\u987B\u964D\u81F3 75 \u4EE5\u4E0B"),{region:L,power:Math.round(G),defense:Math.round(X),chance:Q,ally:U,reasons:st}}let v=[{id:"rest",name:"\u4F11\u517B\u751F\u606F",kind:"\u5185\u653F",desc:"\u51CF\u8F7B\u5FAD\u5F79\uFF0C\u4FEE\u590D\u751F\u4EA7\uFF0C\u8BA9\u8D1F\u62C5\u8FC7\u91CD\u7684\u4E61\u91CC\u6062\u590D\u3002",cost:7,delta:{people:10,trust:7,fatigue:-18,army:-3},report:"\u4F60\u51CF\u514D\u8F6E\u5F79\u3001\u5B89\u6392\u58EB\u5352\u5F52\u519C\u3002\u519B\u5907\u7565\u51CF\uFF0C\u751F\u4EA7\u4E0E\u6C11\u671B\u6062\u590D\uFF1B\u51CF\u5F79\u7684\u6536\u76CA\u6765\u81EA\u540E\u7EED\u6536\u6210\u3002"},{id:"roads",name:"\u6574\u4FEE\u8F6C\u8FD0",kind:"\u540E\u52E4",desc:"\u4FEE\u8DEF\u3001\u758F\u6D5A\u4E0E\u8BBE\u7F6E\u7CAE\u7AD9\u3002\u8FD0\u8F93\u80FD\u529B\u65E0\u6CD5\u7528\u9884\u8A00\u4EE3\u66FF\u3002",cost:19,delta:{logistics:16,people:-2,fatigue:7,institution:2},report:"\u5DE5\u5F79\u4FEE\u590D\u8F6C\u8FD0\u8282\u70B9\u3002\u8FD0\u529B\u4E0A\u5347\uFF0C\u4F46\u7CAE\u98DF\u3001\u5DE5\u671F\u4E0E\u519C\u65F6\u90FD\u662F\u771F\u5B9E\u6210\u672C\u3002"},{id:"reform",name:"\u6838\u7530\u6574\u7A0E",kind:"\u8D22\u653F",desc:"\u6269\u5927\u5B9E\u9645\u7A0E\u57FA\uFF0C\u9650\u5236\u9690\u533F\u3002\u5730\u65B9\u5408\u4F5C\u53EF\u80FD\u56E0\u6B64\u4E0B\u964D\u3002",cost:0,delta:{grain:30,people:4,institution:6,elite:-17,trust:4,fatigue:3},report:"\u9690\u533F\u7A0E\u6E90\u8FDB\u5165\u516C\u8D26\uFF0C\u7CAE\u79E3\u589E\u52A0\u3002\u5730\u65B9\u65E2\u5F97\u5229\u76CA\u53D7\u635F\uFF1B\u653F\u52A1\u652F\u6301\u4F4E\u4E8E 25 \u4F1A\u4F7F\u7CAE\u7A0E\u5F81\u6536\u6253\u6298\u3002"},{id:"train",name:"\u8F6E\u8BAD\u6574\u519B",kind:"\u519B\u5907",desc:"\u8BAD\u7EC3\u4E0E\u8865\u5145\u5175\u5458\u3002\u65B0\u589E\u519B\u5907\u4E5F\u63D0\u9AD8\u957F\u671F\u519B\u7CAE\u5F00\u652F\u3002",cost:16,delta:{army:17,people:-5,fatigue:9},report:"\u90E8\u961F\u8F6E\u8BAD\u5B8C\u6210\u3002\u519B\u5907\u63D0\u9AD8\uFF0C\u6C11\u529B\u6295\u5165\u4E0E\u5E38\u5907\u519B\u5F00\u652F\u540C\u65F6\u589E\u52A0\u3002"},{id:"diplomacy",name:"\u7EED\u8BA2\u5434\u76DF",kind:"\u5916\u4EA4",desc:"\u7528\u8FB9\u754C\u4FDD\u969C\u3001\u4E92\u5E02\u548C\u519B\u9700\u6295\u5165\u7EF4\u6301\u5408\u4F5C\u3002",cost:15,delta:{wu:18,elite:4},report:"\u4F7F\u8005\u62FF\u51FA\u53EF\u5151\u73B0\u7684\u4E92\u5E02\u4E0E\u8FB9\u754C\u4FDD\u969C\u3002\u4E92\u4FE1\u56DE\u5347\uFF0C\u4F46\u5B83\u4ECD\u4F1A\u53D7\u53CC\u65B9\u5B9E\u529B\u53D8\u5316\u5F71\u54CD\u3002"},{id:"institution",name:"\u5206\u6743\u80B2\u624D",kind:"\u4F20\u627F",desc:"\u57F9\u517B\u5C5E\u540F\u3001\u5EFA\u7ACB\u590D\u6838\u4E0E\u4EA4\u63A5\uFF0C\u8BA9\u653F\u4EE4\u4E0D\u5FC5\u4EF6\u4EF6\u7B49\u4F60\u3002",cost:16,delta:{institution:17,elite:10,logistics:3},report:"\u5C5E\u540F\u5F00\u59CB\u72EC\u7ACB\u6838\u8D26\u4E0E\u8C03\u5EA6\u3002\u57F9\u517B\u4EBA\u624D\u4F1A\u82B1\u94B1\u3001\u653E\u6743\uFF0C\u5374\u8BA9\u56FD\u5BB6\u66F4\u80FD\u627F\u53D7\u4E2A\u4EBA\u79BB\u573A\u3002"},{id:"govern",name:"\u5B89\u629A\u4E0E\u6574\u5408",kind:"\u6CBB\u7406",desc:"\u6574\u987F\u9A7B\u519B\uFF0C\u5151\u73B0\u5730\u65B9\u627F\u8BFA\uFF0C\u4FEE\u590D\u65B0\u5360\u5730\u533A\u79E9\u5E8F\u3002",cost:15,delta:{trust:7,elite:10,fatigue:-6},report:"\u5404\u5730\u5F00\u59CB\u6309\u5171\u540C\u89C4\u5219\u6838\u7A0E\u3001\u7EA6\u675F\u9A7B\u519B\u5E76\u53D7\u7406\u7533\u8BC9\u3002\u884C\u653F\u6574\u5408\u63A8\u8FDB\uFF0C\u4E0D\u80FD\u628A\u9A7B\u519B\u65D7\u5E1C\u5F53\u4F5C\u957F\u6CBB\u4E45\u5B89\u3002"},{id:"levy",name:"\u7D27\u6025\u5F81\u53D1",kind:"\u52A8\u5458",desc:"\u7528\u751F\u4EA7\u4E0E\u6C11\u671B\u6362\u53D6\u773C\u524D\u7684\u94B1\u7CAE\u3001\u5175\u5458\u3002",cost:0,delta:{grain:40,army:11,people:-16,trust:-17,fatigue:22},report:"\u7CAE\u79E3\u4E0E\u5175\u5458\u8FC5\u901F\u96C6\u7ED3\u3002\u4F60\u628A\u672A\u6765\u7684\u6536\u6210\u3001\u767E\u59D3\u7684\u627F\u53D7\u529B\u6362\u6210\u4E86\u773C\u524D\u7684\u529B\u91CF\u3002"}];function x(b){if(b.over)return[];if(b.chapter<4)return g[b.chapter].choices.map(L=>({id:L[0],name:L[1],desc:L[2],delta:L[3],kind:"\u519B\u8BAE",cost:0,reasons:[]}));let F=v.map(L=>({...L,reasons:b.grain<L.cost?["\u7CAE\u79E3\u81F3\u5C11 "+L.cost]:[]}));for(let L of m(b)){let U=T(b,L);F.push({id:"campaign:"+L,name:"\u8FDB\u53D6"+U.region.short,kind:"\u6218\u5F79",desc:"\u80DC\u7B97 "+U.chance+"% \xB7 \u5360\u9886\u540E\u4ECD\u9700\u9A7B\u519B\u4E0E\u6CBB\u7406\u3002",cost:U.region.cost,delta:{},reasons:U.reasons,campaign:U})}if(b.land.includes("north")&&!b.land.includes("wu")){let L=[];b.wu<70&&L.push("\u5B59\u5218\u4E92\u4FE1\u81F3\u5C11 70"),b.institution<65&&L.push("\u5236\u5EA6\u4F20\u627F\u81F3\u5C11 65"),b.trust<60&&L.push("\u6C11\u671B\u81F3\u5C11 60"),b.elite<45&&L.push("\u653F\u52A1\u652F\u6301\u81F3\u5C11 45"),b.grain<20&&L.push("\u7CAE\u79E3\u81F3\u5C11 20"),d(b)<65&&L.push("\u5404\u5730\u5E73\u5747\u7A33\u5B9A\u81F3\u5C11 65"),F.push({id:"settle",name:b.settlement?"\u63A8\u8FDB\u5171\u540C\u653F\u5236":"\u4E0E\u5434\u8BAE\u5B9A\u5171\u540C\u653F\u5236",kind:"\u5916\u4EA4",cost:20,delta:{},reasons:L,desc:"\u5171\u9700\u4E24\u6B21\u519B\u8BAE\uFF1A\u5148\u4FDD\u969C\u5730\u65B9\u6743\u76CA\uFF0C\u518D\u4EA4\u5272\u519B\u653F\u4E0E\u7A0E\u6743\u3002"})}return F}function A(b,F){let L=l(b);b.weather=L<.16?"\u6B49\u6536":L>.86?"\u4E30\u5E74":"\u5E73\u5E74",b.harvest=b.weather==="\u6B49\u6536"?.72:b.weather==="\u4E30\u5E74"?1.16:1;let U=M(b),G=p(b);b.grain+=U-G,F.push("\u4E24\u5E74\u7ED3\u7B97\uFF1A"+b.weather+"\uFF0C\u7CAE\u7A0E +"+U+"\uFF0C\u519B\u653F\u6D88\u8017 \u2212"+G+"\u3002"),b.grain<0&&(b.grain=0,h(b,{people:-10,army:-9,trust:-12,fatigue:8}),F.push("\u5B58\u7CAE\u8017\u5C3D\u3002\u65AD\u4F9B\u9020\u6210\u9003\u4EA1\u3001\u51CF\u4EA7\u4E0E\u519B\u5FC3\u52A8\u6447\u3002")),b.wu-=b.land.includes("north")?5:b.land.includes("guan")?4:2,b.wei+=b.land.includes("north")?-5:1.2,b.fatigue=Math.max(0,b.fatigue-2),b.fatigue>65&&(b.people-=5,b.trust-=4,F.push("\u8FDE\u7EED\u670D\u5F79\u6324\u5360\u519C\u65F6\uFF0C\u6C11\u529B\u4E0E\u6C11\u671B\u7EE7\u7EED\u4E0B\u964D\u3002")),b.elite<25&&F.push("\u5730\u65B9\u534F\u4F5C\u4E0D\u8DB3\uFF1A\u672C\u671F\u7CAE\u7A0E\u6309\u4E03\u6210\u5F81\u6536\u3002");for(let X of b.land){let Q=(b.institution>=55?5:2)+(b.trust>=60?3:0)-(b.trust<30?9:0)-(b.elite<20?6:0);b.stability[X]=r((b.stability[X]||30)+Q,0,100)}b.wu<23&&b.land.includes("jing")&&!b.land.includes("wu")&&(b.land=b.land.filter(X=>X!=="jing"),delete b.stability.jing,h(b,{army:-12,grain:-16,trust:-5,fatigue:9}),F.push("\u8FB9\u754C\u627F\u8BFA\u4E0E\u4E92\u4FE1\u7834\u88C2\uFF0C\u5434\u519B\u593A\u53D6\u8346\u5DDE\u636E\u70B9\u3002\u5317\u65B9\u6218\u7EBF\u5DF2\u4E0D\u80FD\u5047\u8BBE\u4E1C\u9762\u6C38\u8FDC\u5B89\u5168\u3002")),b.year>=234&&!b.successor&&(b.institution<55?b.over={type:"succession",title:"\u4EBA\u53BB\uFF0C\u653F\u4EA6\u606F",text:"234 \u5E74\u7684\u4EA4\u63A5\u8003\u9A8C\u5230\u6765\u3002\u5236\u5EA6\u4F20\u627F\u4E0D\u8DB3 55\uFF0C\u8D26\u76EE\u3001\u51B3\u7B56\u4E0E\u519B\u653F\u534F\u8C03\u4ECD\u4F9D\u9644\u4F60\u4E00\u4EBA\uFF1B\u7EDF\u4E00\u4E8B\u4E1A\u6CA1\u6709\u5F62\u6210\u53EF\u6301\u7EED\u7684\u7EE7\u4EFB\u673A\u5236\u3002"}:(b.successor=!0,h(b,{elite:-4,army:-3}),F.push("234 \u5E74\u4EA4\u63A5\u8003\u9A8C\u901A\u8FC7\u3002\u4F60\u7684\u7EE7\u4EFB\u56E2\u961F\u63A5\u624B\u8D26\u76EE\u3001\u519B\u653F\u4E0E\u6388\u6743\uFF0C\u6545\u4E8B\u4ECE\u4E2A\u4EBA\u624D\u667A\u8F6C\u5165\u5236\u5EA6\u5EF6\u7EED\u3002"))),c(b)}function w(b){return[{name:"\u63A7\u5236\u5168\u90E8\u4E03\u4E2A\u6218\u7565\u533A\u57DF",ok:n.every(F=>b.land.includes(F.id))},{name:"\u5404\u5730\u7A33\u5B9A \u2265 60\uFF0C\u5E73\u5747 \u2265 75",ok:d(b)>=75&&b.land.every(F=>b.stability[F]>=60)},{name:"\u6C11\u529B \u2265 45\uFF0C\u6C11\u671B \u2265 60",ok:b.people>=45&&b.trust>=60},{name:"\u5236\u5EA6\u4F20\u627F \u2265 65\uFF0C\u653F\u52A1\u652F\u6301 \u2265 45",ok:b.institution>=65&&b.elite>=45},{name:"\u5B58\u7CAE \u2265 25\uFF0C\u5F79\u8D1F \u2264 60",ok:b.grain>=25&&b.fatigue<=60}]}function R(b,F){if(!b.over){if(b.people<15||b.trust<10||b.army<5){b.over={type:"collapse",title:"\u5929\u4E0B\u672A\u5B9A\uFF0C\u6839\u57FA\u5DF2\u7A7A",text:b.people<15?"\u751F\u4EA7\u4E0E\u52A8\u5458\u80FD\u529B\u8DCC\u7834\u5E95\u7EBF\uFF0C\u4E61\u91CC\u518D\u4E5F\u627F\u62C5\u4E0D\u8D77\u653F\u6743\u7684\u5F81\u53D1\u3002":b.trust<10?"\u6C11\u671B\u8017\u5C3D\uFF0C\u5F81\u7A0E\u3001\u5F81\u5175\u4E0E\u884C\u653F\u5931\u53BB\u57FA\u672C\u914D\u5408\u3002":"\u53EF\u7528\u519B\u5907\u8017\u5C3D\uFF0C\u653F\u6743\u65E0\u529B\u5B88\u4F4F\u636E\u70B9\u3002"};return}w(b).every(L=>L.ok)?b.consolidated++:b.consolidated=0,b.consolidated>=2?b.over={type:"win",title:"\u5929\u4E0B\u5F52\u4E00\uFF0C\u653F\u4EE4\u5F97\u884C",text:"\u4E03\u4E2A\u6218\u7565\u533A\u57DF\u63A5\u53D7\u5171\u540C\u519B\u653F\u4E0E\u7A0E\u5236\uFF0C\u7ECF\u8FC7\u8FDE\u7EED\u4E24\u8F6E\u7A33\u5B9A\u68C0\u9A8C\u3002\u8FD9\u4E2A\u6C99\u76D8\u91CC\uFF0C\u4F60\u5B8C\u6210\u4E86\u7EDF\u4E00\uFF1B\u73B0\u5B9E\u5386\u53F2\u662F\u5426\u80FD\u8D70\u5230\u8FD9\u91CC\uFF0C\u4E0D\u80FD\u7531\u6E38\u620F\u6570\u503C\u8BC1\u660E\u3002"}:b.year>=268?b.over={type:"timeout",title:b.land.includes("north")?"\u534A\u5377\u5C71\u6CB3\uFF0C\u4ECD\u5F85\u540E\u4EBA":"\u5B88\u4F4F\u4E00\u65B9\uFF0C\u672A\u7ADF\u5168\u529F",text:"268 \u5E74\uFF0C\u6C99\u76D8\u65F6\u95F4\u7528\u5C3D\u3002"+(b.land.length===7?"\u7586\u57DF\u5DF2\u8FDE\u6210\u4E00\u4F53\uFF0C\u4F46\u7A33\u5B9A\u6CBB\u7406\u7684\u7EDF\u4E00\u6761\u4EF6\u4ECD\u672A\u5168\u90E8\u6EE1\u8DB3\u3002":"\u4F60\u63A7\u5236\u4E86 "+b.land.length+" \u4E2A\u6218\u7565\u533A\u57DF\uFF0C\u7EDF\u4E00\u76EE\u6807\u5C1A\u672A\u5B9E\u73B0\u3002")}:b.consolidated===1&&F.push("\u7EDF\u4E00\u6761\u4EF6\u9996\u6B21\u9F50\u5907\uFF1B\u8FD8\u9700\u518D\u7EF4\u6301\u4E00\u8F6E\uFF0C\u624D\u80FD\u786E\u8BA4\u5171\u540C\u79E9\u5E8F\u7AD9\u5F97\u4F4F\u3002")}}function _(b,F){if(!b||b.over)return{ok:!1,error:"\u672C\u5C40\u5DF2\u7ECF\u7ED3\u675F\u3002"};let L=x(b).find(nt=>nt.id===F);if(!L)return{ok:!1,error:"\u5F53\u524D\u6CA1\u6709\u8FD9\u9879\u8BAE\u6848\u3002"};if(L.reasons.length)return{ok:!1,error:L.reasons.join("\uFF1B")};let U=s(b),G=s(b),X=[],Q=U.year;if(U.chapter<4){let nt=g[U.chapter].choices.find(_t=>_t[0]===F);h(U,nt[3]),X.push(nt[4]),U.chapter===3&&f(U,"yi",F==="i3a"?67:F==="i3b"?35:30),U.chapter++,U.year=U.chapter<4?g[U.chapter].year:216,U.chapter===4&&A(U,X)}else{if(U.grain-=L.cost,F.startsWith("campaign:")){let nt=F.split(":")[1],_t=T(G,nt),Gt=l(U)*100<_t.chance;h(U,{army:Gt?-9:-17,people:Gt?-4:-7,fatigue:Gt?12:20,trust:Gt?2:-6}),(nt==="wu"||nt==="jing")&&(U.wu=0,U.settlement=0),Gt?(f(U,nt,nt==="wu"?23:36),nt!=="wu"&&nt!=="jing"&&(U.wei-=nt==="north"?26:7),U.wu-=nt==="north"?10:4,X.push("\u8FDB\u53D6"+_t.region.short+"\u6210\u529F\uFF08\u672C\u5C40\u89C4\u5219\u80DC\u7B97 "+_t.chance+"%\uFF09\u3002\u652F\u4ED8\u7CAE\u79E3 "+_t.region.cost+"\uFF0C\u519B\u5907\u53D7\u635F\uFF0C\u65B0\u5730\u7A33\u5B9A\u8F83\u4F4E\uFF1B\u6CA1\u6709\u7ACB\u5373\u83B7\u5F97\u6EE1\u989D\u7A0E\u6E90\u3002")):X.push("\u8FDB\u53D6"+_t.region.short+"\u5931\u5229\uFF08\u672C\u5C40\u89C4\u5219\u80DC\u7B97 "+_t.chance+"%\uFF09\u3002\u5373\u4F7F\u51C6\u5907\u8F83\u5145\u5206\uFF0C\u654C\u519B\u62B5\u6297\u4E0E\u6218\u573A\u53D8\u5316\u4ECD\u53EF\u4F7F\u8BA1\u5212\u843D\u7A7A\u3002\u7CAE\u79E3\u5DF2\u6D88\u8017\uFF0C\u90E8\u961F\u9000\u56DE\u539F\u9632\u7EBF\u3002")}else if(F==="settle")U.settlement++,h(U,{elite:-5,institution:3,wu:-3}),U.settlement>=2?(f(U,"wu",65),X.push("\u4E24\u8F6E\u8C08\u5224\u540E\uFF0C\u5434\u65B9\u63A5\u53D7\u5730\u65B9\u4EFB\u7528\u4E0E\u8D22\u4EA7\u4FDD\u969C\uFF0C\u4EA4\u5272\u5BF9\u5916\u519B\u4E8B\u4E0E\u4E3B\u8981\u7A0E\u6743\u3002\u5171\u540C\u653F\u5236\u6210\u7ACB\uFF1B\u5B83\u6709\u771F\u5B9E\u8BA9\u6B65\u4E0E\u6574\u5408\u6210\u672C\uFF0C\u5E76\u975E\u5B59\u6743\u88AB\u4E00\u53E5\u5927\u4E49\u8BF4\u670D\u3002")):X.push("\u7B2C\u4E00\u8F6E\u8BAE\u5B9A\u5730\u65B9\u6743\u76CA\u4FDD\u969C\u4E0E\u5171\u540C\u7A0E\u5236\u8349\u6848\u3002\u5434\u65B9\u5C1A\u672A\u4EA4\u5272\u6743\u529B\uFF1B\u4E0B\u4E00\u8F6E\u4ECD\u987B\u7EF4\u6301\u4E92\u4FE1\u548C\u56FD\u5185\u7A33\u5B9A\u3002");else{if(h(U,L.delta),X.push(L.report),F==="govern")for(let nt of U.land)U.stability[nt]=Math.min(100,U.stability[nt]+18);F==="diplomacy"&&!U.land.includes("jing")&&U.wu>=70&&(f(U,"jing",50),U.wu-=15,U.grain=Math.max(0,U.grain-10),X.push("\u4E92\u4FE1\u6062\u590D\u540E\uFF0C\u4EE5\u989D\u5916\u519B\u9700\u548C\u8FB9\u754C\u8BA9\u6B65\u8BAE\u56DE\u8346\u5DDE\u636E\u70B9\uFF08\u518D\u4ED8\u7CAE\u79E3\u6700\u591A 10\uFF0C\u4E92\u4FE1 \u221215\uFF09\u3002"))}U.year+=2,A(U,X)}U.turn++,U.lastAction=F,U.history.push(F),R(U,X),c(U);let st={year:Q,toYear:U.year,name:L.name,report:X,delta:u(U,G)};return U.log.push(st),{ok:!0,state:U,entry:st}}function S(b,F){if(!Array.isArray(F)||F.length>80)return null;let L=o(b);for(let U of F){if(typeof U!="string")return null;let G=_(L,U);if(!G.ok)return null;L=G.state}return L}function P(b){if(b.chapter<4)return g[b.chapter];if(b.over)return{label:"\u7EC8\u5C40 \xB7 \u6218\u62A5",title:b.over.title,text:b.over.text};let F=`\u5929\u4E0B\u672A\u5B9A\u3002
\u4F60\u628A\u4E24\u5E74\u7528\u5728\u54EA\u91CC\uFF1F`,L="\u4F60\u53EF\u4EE5\u63A8\u8FDB\u4E00\u9879\u4E3B\u8981\u56FD\u7B56\u3002\u4E24\u5E74\u4E4B\u540E\uFF0C\u7CAE\u7A0E\u3001\u519B\u653F\u5F00\u652F\u3001\u5730\u65B9\u7A33\u5B9A\u4E0E\u5404\u65B9\u5173\u7CFB\u4F1A\u4E00\u5E76\u7ED3\u7B97\u3002";return b.year>=230&&!b.successor&&b.institution<55?(F=`\u4F60\u53EF\u4EE5\u4E8B\u5FC5\u8EAC\u4EB2\u3002
\u4F46\u8FD8\u80FD\u4EB2\u529B\u4EB2\u4E3A\u591A\u4E45\uFF1F`,L="234 \u5E74\u5C06\u8FDB\u884C\u4EA4\u63A5\u8003\u9A8C\u3002\u5236\u5EA6\u4F20\u627F\u4E0D\u8DB3 55\uFF0C\u653F\u52A1\u5C06\u65E0\u6CD5\u987A\u5229\u4EA4\u7ED9\u7EE7\u4EFB\u8005\u3002\u653E\u6743\u4E0E\u80B2\u624D\u4E5F\u8981\u5360\u7528\u4F60\u7684\u65F6\u95F4\u548C\u7CAE\u79E3\u3002"):b.grain<30?(F=`\u7CAE\u518C\u4E0A\u7684\u4F59\u6570\uFF0C
\u6BD4\u654C\u4EBA\u7684\u6A84\u6587\u66F4\u7D27\u8FEB\u3002`,L="\u7CAE\u79E3\u5DF2\u7ECF\u504F\u4F4E\u3002\u5148\u770B\u4E24\u5E74\u6536\u5165\u4E0E\u5F00\u652F\uFF1B\u6269\u519B\u4F1A\u589E\u52A0\u6301\u7EED\u6D88\u8017\uFF0C\u5F81\u53D1\u5219\u900F\u652F\u4E61\u91CC\u3002"):b.wu<35&&!b.land.includes("wu")?(F=`\u4F60\u76EF\u7740\u5317\u65B9\u3002
\u6C5F\u4E1C\u76EF\u7740\u4F60\u7684\u540E\u80CC\u3002`,L="\u5B59\u5218\u4E92\u4FE1\u504F\u4F4E\u3002\u4F4E\u4E8E 23\uFF0C\u4E14\u5434\u5730\u5C1A\u672A\u7EB3\u5165\u63A7\u5236\u65F6\uFF0C\u8346\u5DDE\u636E\u70B9\u53EF\u80FD\u56E0\u51B2\u7A81\u5931\u5B88\u3002\u76DF\u53CB\u4E0D\u4F1A\u81EA\u52A8\u914D\u5408\u4F60\u7684\u957F\u671F\u76EE\u6807\u3002"):b.land.includes("north")&&!b.land.includes("wu")?(F=`\u4E2D\u539F\u5DF2\u5B9A\u3002
\u6C5F\u4E1C\u4E3A\u4EC0\u4E48\u8981\u4EA4\u51FA\u6743\u529B\uFF1F`,L="\u5171\u540C\u654C\u4EBA\u5F31\u5316\uFF0C\u4F60\u7684\u58EE\u5927\u53CD\u800C\u4F7F\u5434\u65B9\u4E0D\u5B89\u3002\u53EF\u4EE5\u7EE7\u7EED\u6218\u4E89\uFF0C\u4E5F\u53EF\u4EE5\u7528\u6743\u76CA\u4FDD\u969C\u6362\u53D6\u5171\u540C\u519B\u653F\u4E0E\u7A0E\u5236\uFF1B\u4E24\u6761\u8DEF\u90FD\u8981\u4ED8\u4EE3\u4EF7\u3002"):b.land.length===7&&(F=`\u5730\u56FE\u5DF2\u7ECF\u540C\u8272\u3002
\u767E\u59D3\u7684\u65E5\u5B50\u5462\uFF1F`,L="\u7EDF\u4E00\u8FD8\u8981\u6EE1\u8DB3\u7CAE\u79E3\u3001\u6C11\u529B\u3001\u6C11\u671B\u3001\u5236\u5EA6\u4E0E\u5730\u65B9\u7A33\u5B9A\u6761\u4EF6\uFF0C\u5E76\u8FDE\u7EED\u7EF4\u6301\u4E24\u8F6E\u3002\u5360\u9886\u4E4B\u540E\uFF0C\u6CBB\u7406\u624D\u521A\u521A\u5F00\u59CB\u3002"),{label:b.successor?"\u7EE7\u5FD7 \xB7 \u81EA\u7531\u519B\u8BAE":"\u7ECF\u7565 \xB7 \u81EA\u7531\u519B\u8BAE",title:F,text:L}}function D(b){return"\u300A\u518D\u51FA\u9686\u4E2D\u300B\xB7 \u5C40\u53F7 "+b.seed+`
`+b.year+" \u5E74\uFF0C"+(b.over?b.over.title:"\u6211\u7684\u7EDF\u4E00\u8FDB\u5EA6")+`
\u63A7\u5236 `+b.land.length+"/7 \u5730\uFF0C\u6C11\u671B "+b.trust+"\uFF0C\u5F79\u8D1F "+b.fatigue+"\uFF0C\u5236\u5EA6\u4F20\u627F "+b.institution+`\u3002
`+(b.successor?"\u4E8B\u4E1A\u5DF2\u8DE8\u8FC7\u4E2A\u4EBA\u4EA4\u63A5\u3002":"\u4ECD\u7531\u8BF8\u845B\u4EAE\u4EB2\u81EA\u7ECF\u7565\u3002")+`
\u540C\u4E00\u4E2A\u5F00\u5C40\uFF0C\u4F60\u4F1A\u628A\u5929\u4E0B\u5E26\u5230\u54EA\u91CC\uFF1F`}let N={VERSION:1,STATS:e,REGIONS:n,INTRO:g,ACTIONS:v,create:o,step:_,replay:S,options:x,campaign:T,situation:P,production:M,upkeep:p,stability:d,victoryConditions:w,reportText:D};typeof Dl<"u"&&Dl.exports&&(Dl.exports=N),i.HanEngine=N})(typeof globalThis<"u"?globalThis:df)});var gn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Rn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uu=0,Cc=1,Fu=2;var qi=1,Ou=2,Fs=3,ii=0,He=1,Ne=2,Hn=0,zi=1,Pc=2,Ic=3,Lc=4,Bu=5;var yi=100,zu=101,ku=102,Vu=103,Hu=104,Gu=200,Wu=201,Xu=202,qu=203,za=204,ka=205,Yu=206,Zu=207,Ju=208,Ku=209,ju=210,$u=211,Qu=212,td=213,ed=214,Va=0,Ha=1,Ga=2,ki=3,Wa=4,Xa=5,qa=6,Ya=7,Io=0,nd=1,id=2,Cn=0,Dc=1,Nc=2,Uc=3,Vr=4,Fc=5,Oc=6,Bc=7;var zc=300,Si=301,Yi=302,Lo=303,Do=304,Hr=306,Za=1e3,Fn=1001,Ja=1002,De=1003,sd=1004;var Gr=1005;var ke=1006,No=1007;var Ei=1008;var Qe=1009,kc=1010,Vc=1011,Os=1012,Uo=1013,Pn=1014,_n=1015,Gn=1016,Fo=1017,Oo=1018,Bs=1020,Hc=35902,Gc=35899,Wc=1021,Xc=1022,xn=1023,On=1026,wi=1027,Bo=1028,zo=1029,Ti=1030,ko=1031;var Vo=1033,Wr=33776,Xr=33777,qr=33778,Yr=33779,Ho=35840,Go=35841,Wo=35842,Xo=35843,qo=36196,Yo=37492,Zo=37496,Jo=37488,Ko=37489,Zr=37490,jo=37491,$o=37808,Qo=37809,tl=37810,el=37811,nl=37812,il=37813,sl=37814,rl=37815,al=37816,ol=37817,ll=37818,cl=37819,hl=37820,ul=37821,dl=36492,fl=36494,pl=36495,ml=36283,gl=36284,Jr=36285,_l=36286;var cr=2300,Ka=2301,Ba=2302,xc=2303,yc=2400,vc=2401,Mc=2402;var rd=3200;var Kr=0,ad=1,ai="",Be="srgb",hr="srgb-linear",ur="linear",te="srgb";var Oi=7680;var bc=519,od=512,ld=513,cd=514,xl=515,hd=516,ud=517,yl=518,dd=519,ja=35044,qc=35048;var Yc="300 es",En=2e3,Ms=2001;function Yf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fd(){let i=dr("canvas");return i.style.display="block",i}var $h={},bs=null;function fr(...i){let t="THREE."+i.shift();bs?bs("log",t,...i):console.log(t,...i)}function pd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Rt(...i){i=pd(i);let t="THREE."+i.shift();if(bs)bs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function It(...i){i=pd(i);let t="THREE."+i.shift();if(bs)bs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Bi(...i){let t=i.join(" ");t in $h||($h[t]=!0,Rt(...i))}function md(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var gd={[Va]:Ha,[Ga]:qa,[Wa]:Ya,[ki]:Xa,[Ha]:Va,[qa]:Ga,[Ya]:Wa,[Xa]:ki},wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qh=1234567,rr=Math.PI/180,Ss=180/Math.PI;function ei(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function kt(i,t,e){return Math.max(t,Math.min(e,i))}function Zc(i,t){return(i%t+t)%t}function Jf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Kf(i,t,e){return i!==t?(e-i)/(t-i):0}function ar(i,t,e){return(1-e)*i+e*t}function jf(i,t,e,n){return ar(i,t,1-Math.exp(-e*n))}function $f(i,t=1){return t-Math.abs(Zc(i,t*2)-t)}function Qf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function tp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ep(i,t){return i+Math.floor(Math.random()*(t-i+1))}function np(i,t){return i+Math.random()*(t-i)}function ip(i){return i*(.5-Math.random())}function sp(i){i!==void 0&&(Qh=i);let t=Qh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rp(i){return i*rr}function ap(i){return i*Ss}function op(i){return(i&i-1)===0&&i!==0}function lp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hp(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:Rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var oi={DEG2RAD:rr,RAD2DEG:Ss,generateUUID:ei,clamp:kt,euclideanModulo:Zc,mapLinear:Jf,inverseLerp:Kf,lerp:ar,damp:jf,pingpong:$f,smoothstep:Qf,smootherstep:tp,randInt:ep,randFloat:np,randFloatSpread:ip,seededRandom:sp,degToRad:rp,radToDeg:ap,isPowerOfTwo:op,ceilPowerOfTwo:lp,floorPowerOfTwo:cp,setQuaternionFromProperEuler:hp,normalize:ne,denormalize:Sn},th=class th{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};th.prototype.isVector2=!0;var at=th,Je=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],M=r[a+3];if(d!==M||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*M;p<0&&(u=-u,f=-f,g=-g,M=-M,p=-p);let m=1-o;if(p<.9995){let T=Math.acos(p),v=Math.sin(T);m=Math.sin(m*T)/v,o=Math.sin(o*T)/v,l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+M*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+M*o;let T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},eh=class eh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xl.copy(this).projectOnVector(t),this.sub(Xl)}reflect(t){return this.sub(Xl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};eh.prototype.isVector3=!0;var I=eh,Xl=new I,tu=new Je,nh=class nh{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],M=s[0],p=s[3],m=s[6],T=s[1],v=s[4],x=s[7],A=s[2],w=s[5],R=s[8];return r[0]=a*M+o*T+l*A,r[3]=a*p+o*v+l*w,r[6]=a*m+o*x+l*R,r[1]=c*M+h*T+d*A,r[4]=c*p+h*v+d*w,r[7]=c*m+h*x+d*R,r[2]=u*M+f*T+g*A,r[5]=u*p+f*v+g*w,r[8]=u*m+f*x+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=d*M,t[1]=(s*c-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=u*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=f*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Bi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ql.makeScale(t,e)),this}rotate(t){return Bi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ql.makeRotation(-t)),this}translate(t,e){return Bi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ql.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};nh.prototype.isMatrix3=!0;var Ut=nh,ql=new Ut,eu=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nu=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function up(){let i={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===te&&(s.r=ni(s.r),s.g=ni(s.g),s.b=ni(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(s.r=vs(s.r),s.g=vs(s.g),s.b=vs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Bi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Bi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[hr]:{primaries:t,whitePoint:n,transfer:ur,toXYZ:eu,fromXYZ:nu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:n,transfer:te,toXYZ:eu,fromXYZ:nu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),i}var Xt=up();function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var is,$a=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{is===void 0&&(is=dr("canvas")),is.width=t.width,is.height=t.height;let s=is.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=is}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=dr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ni(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},dp=0,Es=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=ei(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Yl(s[a].image)):r.push(Yl(s[a]))}else r=Yl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Yl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$a.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}var fp=0,Zl=new I,Ke=class i extends wn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Fn,s=Fn,r=ke,a=Ei,o=xn,l=Qe,c=i.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=ei(),this.name="",this.source=new Es(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zl).x}get height(){return this.source.getSize(Zl).y}get depth(){return this.source.getSize(Zl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Rt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Rt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Za:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case Ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Za:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case Ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=zc;Ke.DEFAULT_ANISOTROPY=1;var ih=class ih{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],M=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,x=(f+1)/2,A=(m+1)/2,w=(h+u)/4,R=(d+M)/4,_=(g+p)/4;return v>x&&v>A?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=w/n,r=R/n):x>A?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=_/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=_/r),this.set(n,s,r,e),this}let T=Math.sqrt((p-g)*(p-g)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(d-M)/T,this.z=(u-h)/T,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ih.prototype.isVector4=!0;var fe=ih,Qa=class extends wn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ke(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Es(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends Qa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},pr=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var to=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Po=class Po{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,g,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,M,p)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,M,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=M,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Po().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ss.setFromMatrixColumn(t,0).length(),r=1/ss.setFromMatrixColumn(t,1).length(),a=1/ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,M=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-M*c,e[9]=-o*l,e[2]=M-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,M=c*d;e[0]=u+M*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=M+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,M=c*d;e[0]=u-M*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=M-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,M=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+M,e[1]=l*d,e[5]=M*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=M-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-M*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+M,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pp,t,mp)}lookAt(t,e,n){let s=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),fi.crossVectors(n,sn),fi.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),fi.crossVectors(n,sn)),fi.normalize(),ca.crossVectors(sn,fi),s[0]=fi.x,s[4]=ca.x,s[8]=sn.x,s[1]=fi.y,s[5]=ca.y,s[9]=sn.y,s[2]=fi.z,s[6]=ca.z,s[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],M=n[6],p=n[10],m=n[14],T=n[3],v=n[7],x=n[11],A=n[15],w=s[0],R=s[4],_=s[8],S=s[12],P=s[1],D=s[5],N=s[9],b=s[13],F=s[2],L=s[6],U=s[10],G=s[14],X=s[3],Q=s[7],st=s[11],nt=s[15];return r[0]=a*w+o*P+l*F+c*X,r[4]=a*R+o*D+l*L+c*Q,r[8]=a*_+o*N+l*U+c*st,r[12]=a*S+o*b+l*G+c*nt,r[1]=h*w+d*P+u*F+f*X,r[5]=h*R+d*D+u*L+f*Q,r[9]=h*_+d*N+u*U+f*st,r[13]=h*S+d*b+u*G+f*nt,r[2]=g*w+M*P+p*F+m*X,r[6]=g*R+M*D+p*L+m*Q,r[10]=g*_+M*N+p*U+m*st,r[14]=g*S+M*b+p*G+m*nt,r[3]=T*w+v*P+x*F+A*X,r[7]=T*R+v*D+x*L+A*Q,r[11]=T*_+v*N+x*U+A*st,r[15]=T*S+v*b+x*G+A*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],M=t[7],p=t[11],m=t[15],T=l*f-c*u,v=o*f-c*d,x=o*u-l*d,A=a*f-c*h,w=a*u-l*h,R=a*d-o*h;return e*(M*T-p*v+m*x)-n*(g*T-p*A+m*w)+s*(g*v-M*A+m*R)-r*(g*x-M*w+p*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],M=t[13],p=t[14],m=t[15],T=e*o-n*a,v=e*l-s*a,x=e*c-r*a,A=n*l-s*o,w=n*c-r*o,R=s*c-r*l,_=h*M-d*g,S=h*p-u*g,P=h*m-f*g,D=d*p-u*M,N=d*m-f*M,b=u*m-f*p,F=T*b-v*N+x*D+A*P-w*S+R*_;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/F;return t[0]=(o*b-l*N+c*D)*L,t[1]=(s*N-n*b-r*D)*L,t[2]=(M*R-p*w+m*A)*L,t[3]=(u*w-d*R-f*A)*L,t[4]=(l*P-a*b-c*S)*L,t[5]=(e*b-s*P+r*S)*L,t[6]=(p*x-g*R-m*v)*L,t[7]=(h*R-u*x+f*v)*L,t[8]=(a*N-o*P+c*_)*L,t[9]=(n*P-e*N-r*_)*L,t[10]=(g*w-M*x+m*T)*L,t[11]=(d*x-h*w-f*T)*L,t[12]=(o*S-a*D-l*_)*L,t[13]=(e*D-n*S+s*_)*L,t[14]=(M*v-g*A-p*T)*L,t[15]=(h*A-d*v+u*T)*L,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,M=a*h,p=a*d,m=o*d,T=l*c,v=l*h,x=l*d,A=n.x,w=n.y,R=n.z;return s[0]=(1-(M+m))*A,s[1]=(f+x)*A,s[2]=(g-v)*A,s[3]=0,s[4]=(f-x)*w,s[5]=(1-(u+m))*w,s[6]=(p+T)*w,s[7]=0,s[8]=(g+v)*R,s[9]=(p-T)*R,s[10]=(1-(u+M))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ss.set(s[0],s[1],s[2]).length(),o=ss.set(s[4],s[5],s[6]).length(),l=ss.set(s[8],s[9],s[10]).length();r<0&&(a=-a),vn.copy(this);let c=1/a,h=1/o,d=1/l;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=d,vn.elements[9]*=d,vn.elements[10]*=d,e.setFromRotationMatrix(vn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=En,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===En)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ms)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=En,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===En)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ms)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Po.prototype.isMatrix4=!0;var Jt=Po,ss=new I,vn=new Jt,pp=new I(0,0,0),mp=new I(1,1,1),fi=new I,ca=new I,sn=new I,iu=new Jt,su=new Je,un=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return iu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(iu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return su.setFromEuler(this),this.setFromQuaternion(su,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";var ws=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gp=0,ru=new I,rs=new Je,Jn=new Jt,ha=new I,Js=new I,_p=new I,xp=new Je,au=new I(1,0,0),ou=new I(0,1,0),lu=new I(0,0,1),cu={type:"added"},yp={type:"removed"},as={type:"childadded",child:null},Jl={type:"childremoved",child:null},he=class i extends wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new un,n=new Je,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Ut}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(au,t)}rotateY(t){return this.rotateOnAxis(ou,t)}rotateZ(t){return this.rotateOnAxis(lu,t)}translateOnAxis(t,e){return ru.copy(t).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(au,t)}translateY(t){return this.translateOnAxis(ou,t)}translateZ(t){return this.translateOnAxis(lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ha.copy(t):ha.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Js,ha,this.up):Jn.lookAt(ha,Js,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(Jn),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(It("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cu),as.child=t,this.dispatchEvent(as),as.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yp),Jl.child=t,this.dispatchEvent(Jl),Jl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cu),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,_p),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,xp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};he.DEFAULT_UP=new I(0,1,0);he.DEFAULT_MATRIX_AUTO_UPDATE=!0;he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Le=class extends he{constructor(){super(),this.isGroup=!0,this.type="Group"}},vp={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let p=e.getJointPose(M,n),m=this._getHandJoint(c,M);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},ua={h:0,s:0,l:0};function Kl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Tt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Xt.workingColorSpace){if(t=Zc(t,1),e=kt(e,0,1),n=kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Kl(a,r,t+1/3),this.g=Kl(a,r,t),this.b=Kl(a,r,t-1/3)}return Xt.colorSpaceToWorking(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Rt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){let n=_d[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return Xt.workingToColorSpace(qe.copy(this),t),Math.round(kt(qe.r*255,0,255))*65536+Math.round(kt(qe.g*255,0,255))*256+Math.round(kt(qe.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.workingToColorSpace(qe.copy(this),e);let n=qe.r,s=qe.g,r=qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Be){Xt.workingToColorSpace(qe.copy(this),t);let e=qe.r,n=qe.g,s=qe.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(ua);let n=ar(pi.h,ua.h,e),s=ar(pi.s,ua.s,e),r=ar(pi.l,ua.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new Tt;Tt.NAMES=_d;var mr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Tt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Vi=class extends he{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Mn=new I,Kn=new I,jl=new I,jn=new I,os=new I,ls=new I,hu=new I,$l=new I,Ql=new I,tc=new I,ec=new fe,nc=new fe,ic=new fe,ti=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Mn.subVectors(t,e),s.cross(Mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Mn.subVectors(s,e),Kn.subVectors(n,e),jl.subVectors(t,e);let a=Mn.dot(Mn),o=Mn.dot(Kn),l=Mn.dot(jl),c=Kn.dot(Kn),h=Kn.dot(jl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(o,jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ec.setScalar(0),nc.setScalar(0),ic.setScalar(0),ec.fromBufferAttribute(t,e),nc.fromBufferAttribute(t,n),ic.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ec,r.x),a.addScaledVector(nc,r.y),a.addScaledVector(ic,r.z),a}static isFrontFacing(t,e,n,s){return Mn.subVectors(n,e),Kn.subVectors(t,e),Mn.cross(Kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Mn.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;os.subVectors(s,n),ls.subVectors(r,n),$l.subVectors(t,n);let l=os.dot($l),c=ls.dot($l);if(l<=0&&c<=0)return e.copy(n);Ql.subVectors(t,s);let h=os.dot(Ql),d=ls.dot(Ql);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(os,a);tc.subVectors(t,r);let f=os.dot(tc),g=ls.dot(tc);if(g>=0&&f<=g)return e.copy(r);let M=f*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ls,o);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return hu.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(hu,o);let m=1/(p+M+u);return a=M*m,o=u*m,e.copy(n).addScaledVector(os,a).addScaledVector(ls,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Bn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,bn):bn.fromBufferAttribute(r,a),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),da.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),da.copy(n.boundingBox)),da.applyMatrix4(t.matrixWorld),this.union(da)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ks),fa.subVectors(this.max,Ks),cs.subVectors(t.a,Ks),hs.subVectors(t.b,Ks),us.subVectors(t.c,Ks),mi.subVectors(hs,cs),gi.subVectors(us,hs),Di.subVectors(cs,us);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Di.z,Di.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Di.z,0,-Di.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Di.y,Di.x,0];return!sc(e,cs,hs,us,fa)||(e=[1,0,0,0,1,0,0,0,1],!sc(e,cs,hs,us,fa))?!1:(pa.crossVectors(mi,gi),e=[pa.x,pa.y,pa.z],sc(e,cs,hs,us,fa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},$n=[new I,new I,new I,new I,new I,new I,new I,new I],bn=new I,da=new Bn,cs=new I,hs=new I,us=new I,mi=new I,gi=new I,Di=new I,Ks=new I,fa=new I,pa=new I,Ni=new I;function sc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ni.fromArray(i,r);let o=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=t.dot(Ni),c=e.dot(Ni),h=n.dot(Ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ee=new I,ma=new at,Mp=0,de=class extends wn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ja,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ma.fromBufferAttribute(this,e),ma.applyMatrix3(t),this.setXY(e,ma.x,ma.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ja&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var gr=class extends de{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var _r=class extends de{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var zt=class extends de{constructor(t,e,n){super(new Float32Array(t),e,n)}},bp=new Bn,js=new I,rc=new I,zn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):bp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);let e=js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(rc)),this.expandByPoint(js.copy(t.center).sub(rc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Sp=0,cn=new Jt,ac=new he,ds=new I,rn=new Bn,$s=new Bn,Ie=new I,Qt=class i extends wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yf(t)?_r:gr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return ac.lookAt(t),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];$s.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(rn.min,$s.min),rn.expandByPoint(Ie),Ie.addVectors(rn.max,$s.max),rn.expandByPoint(Ie)):(rn.expandByPoint($s.min),rn.expandByPoint($s.max))}rn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ie.fromBufferAttribute(o,c),l&&(ds.fromBufferAttribute(t,c),Ie.add(ds)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new de(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new I,l[_]=new I;let c=new I,h=new I,d=new I,u=new at,f=new at,g=new at,M=new I,p=new I;function m(_,S,P){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,P),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,P),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[_].add(M),o[S].add(M),o[P].add(M),l[_].add(p),l[S].add(p),l[P].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let _=0,S=T.length;_<S;++_){let P=T[_],D=P.start,N=P.count;for(let b=D,F=D+N;b<F;b+=3)m(t.getX(b+0),t.getX(b+1),t.getX(b+2))}let v=new I,x=new I,A=new I,w=new I;function R(_){A.fromBufferAttribute(s,_),w.copy(A);let S=o[_];v.copy(S),v.sub(A.multiplyScalar(A.dot(S))).normalize(),x.crossVectors(w,S);let D=x.dot(l[_])<0?-1:1;a.setXYZW(_,v.x,v.y,v.z,D)}for(let _=0,S=T.length;_<S;++_){let P=T[_],D=P.start,N=P.count;for(let b=D,F=D+N;b<F;b+=3)R(t.getX(b+0)),R(t.getX(b+1)),R(t.getX(b+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new de(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),M=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new de(u,h,d)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},xr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ja,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ze=new I,As=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Sn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){fr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new de(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){fr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ep=0,dn=class extends wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=zi,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=ka,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Rt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Rt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==za&&(n.blendSrc=this.blendSrc),this.blendDst!==ka&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Tt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new at().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Rs=class extends dn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},fs,Qs=new I,ps=new I,ms=new I,gs=new at,tr=new at,xd=new Jt,ga=new I,er=new I,_a=new I,uu=new at,oc=new at,du=new at,yr=class extends he{constructor(t=new Rs){if(super(),this.isSprite=!0,this.type="Sprite",fs===void 0){fs=new Qt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xr(e,5);fs.setIndex([0,1,2,0,2,3]),fs.setAttribute("position",new As(n,3,0,!1)),fs.setAttribute("uv",new As(n,2,3,!1))}this.geometry=fs,this.material=t,this.center=new at(.5,.5),this.count=1}raycast(t,e){t.camera===null&&It('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ps.setFromMatrixScale(this.matrixWorld),xd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ps.multiplyScalar(-ms.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;xa(ga.set(-.5,-.5,0),ms,a,ps,s,r),xa(er.set(.5,-.5,0),ms,a,ps,s,r),xa(_a.set(.5,.5,0),ms,a,ps,s,r),uu.set(0,0),oc.set(1,0),du.set(1,1);let o=t.ray.intersectTriangle(ga,er,_a,!1,Qs);if(o===null&&(xa(er.set(-.5,.5,0),ms,a,ps,s,r),oc.set(0,1),o=t.ray.intersectTriangle(ga,_a,er,!1,Qs),o===null))return;let l=t.ray.origin.distanceTo(Qs);l<t.near||l>t.far||e.push({distance:l,point:Qs.clone(),uv:ti.getInterpolation(Qs,ga,er,_a,uu,oc,du,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function xa(i,t,e,n,s,r){gs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(tr.x=r*gs.x-s*gs.y,tr.y=s*gs.x+r*gs.y):tr.copy(gs),i.copy(t),i.x+=tr.x,i.y+=tr.y,i.applyMatrix4(xd)}var ya=new I,fu=new I,vr=class extends he{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);let e=t.levels;for(let n=0,s=e.length;n<s;n++){let r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);let s=this.levels,r;for(r=0;r<s.length&&!(e<s[r].distance);r++);return s.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){let e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){let s=e.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){let e=this.levels;if(e.length>0){let n,s;for(n=1,s=e.length;n<s;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){ya.setFromMatrixPosition(this.matrixWorld);let s=t.ray.origin.distanceTo(ya);this.getObjectForDistance(s).raycast(t,e)}}update(t){let e=this.levels;if(e.length>1){ya.setFromMatrixPosition(t.matrixWorld),fu.setFromMatrixPosition(this.matrixWorld);let n=ya.distanceTo(fu)/t.zoom;e[0].object.visible=!0;let s,r;for(s=1,r=e.length;s<r;s++){let a=e[s].distance;if(e[s].object.visible&&(a-=a*e[s].hysteresis),n>=a)e[s-1].object.visible=!1,e[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)e[s].object.visible=!1}}toJSON(t){let e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];let n=this.levels;for(let s=0,r=n.length;s<r;s++){let a=n[s];e.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return e}},Qn=new I,lc=new I,va=new I,_i=new I,cc=new I,Ma=new I,hc=new I,si=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){lc.copy(t).add(e).multiplyScalar(.5),va.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(lc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(va),o=_i.dot(this.direction),l=-_i.dot(va),c=_i.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let M=1/h;d*=M,u*=M,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(lc).addScaledVector(va,u),f}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);let n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,s,r){cc.subVectors(e,t),Ma.subVectors(n,t),hc.crossVectors(cc,Ma);let a=this.direction.dot(hc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,t);let l=o*this.direction.dot(Ma.crossVectors(_i,Ma));if(l<0)return null;let c=o*this.direction.dot(cc.cross(_i));if(c<0||l+c>a)return null;let h=-o*_i.dot(hc);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fn=class extends dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},pu=new Jt,Ui=new si,ba=new zn,mu=new I,Sa=new I,Ea=new I,wa=new I,uc=new I,Ta=new I,gu=new I,Aa=new I,qt=class extends he{constructor(t=new Qt,e=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(uc.fromBufferAttribute(d,t),a?Ta.addScaledVector(uc,h):Ta.addScaledVector(uc.sub(e),h))}e.add(Ta)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(r),Ui.copy(t.ray).recast(t.near),!(ba.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(ba,mu)===null||Ui.origin.distanceToSquared(mu)>(t.far-t.near)**2))&&(pu.copy(r).invert(),Ui.copy(t.ray).applyMatrix4(pu),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let p=u[g],m=a[p.materialIndex],T=Math.max(p.start,f.start),v=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let x=T,A=v;x<A;x+=3){let w=o.getX(x),R=o.getX(x+1),_=o.getX(x+2);s=Ra(this,m,t,n,c,h,d,w,R,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let p=g,m=M;p<m;p+=3){let T=o.getX(p),v=o.getX(p+1),x=o.getX(p+2);s=Ra(this,a,t,n,c,h,d,T,v,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let p=u[g],m=a[p.materialIndex],T=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=T,A=v;x<A;x+=3){let w=x,R=x+1,_=x+2;s=Ra(this,m,t,n,c,h,d,w,R,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let p=g,m=M;p<m;p+=3){let T=p,v=p+1,x=p+2;s=Ra(this,a,t,n,c,h,d,T,v,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function wp(i,t,e,n,s,r,a,o){let l;if(t.side===He?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ii,o),l===null)return null;Aa.copy(o),Aa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Aa);return c<e.near||c>e.far?null:{distance:c,point:Aa.clone(),object:i}}function Ra(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Sa),i.getVertexPosition(l,Ea),i.getVertexPosition(c,wa);let h=wp(i,t,e,n,Sa,Ea,wa,gu);if(h){let d=new I;ti.getBarycoord(gu,Sa,Ea,wa,d),s&&(h.uv=ti.getInterpolatedAttribute(s,o,l,c,d,new at)),r&&(h.uv1=ti.getInterpolatedAttribute(r,o,l,c,d,new at)),a&&(h.normal=ti.getInterpolatedAttribute(a,o,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};ti.getNormal(Sa,Ea,wa,u.normal),h.face=u,h.barycoord=d}return h}var Mr=class extends Ke{constructor(t=null,e=1,n=1,s,r,a,o,l,c=De,h=De,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cs=class extends de{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},_s=new Jt,_u=new Jt,Ca=[],xu=new Bn,Tp=new Jt,nr=new qt,ir=new zn,Tn=class extends qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Cs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Tp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),xu.copy(t.boundingBox).applyMatrix4(_s),this.boundingBox.union(xu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),ir.copy(t.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),t.ray.intersectsSphere(ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_s),_u.multiplyMatrices(n,_s),nr.matrixWorld=_u,nr.raycast(t,Ca);for(let a=0,o=Ca.length;a<o;a++){let l=Ca[a];l.instanceId=r,l.object=this,e.push(l)}Ca.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Cs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mr(new Float32Array(s*this.count),s,this.count,Bo,_n));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},dc=new I,Ap=new I,Rp=new Ut,hn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=dc.subVectors(n,e).cross(Ap.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(dc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Rp.getNormalMatrix(t),s=this.coplanarPoint(dc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fi=new zn,Cp=new at(.5,.5),Pa=new I,Ps=class{constructor(t=new hn,e=new hn,n=new hn,s=new hn,r=new hn,a=new hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],M=r[9],p=r[10],m=r[11],T=r[12],v=r[13],x=r[14],A=r[15];if(s[0].setComponents(c-a,f-h,m-g,A-T).normalize(),s[1].setComponents(c+a,f+h,m+g,A+T).normalize(),s[2].setComponents(c+o,f+d,m+M,A+v).normalize(),s[3].setComponents(c-o,f-d,m-M,A-v).normalize(),n)s[4].setComponents(l,u,p,x).normalize(),s[5].setComponents(c-l,f-u,m-p,A-x).normalize();else if(s[4].setComponents(c-l,f-u,m-p,A-x).normalize(),e===En)s[5].setComponents(c+l,f+u,m+p,A+x).normalize();else if(e===Ms)s[5].setComponents(l,u,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){Fi.center.set(0,0,0);let e=Cp.distanceTo(t.center);return Fi.radius=.7071067811865476+e,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Pa.x=s.normal.x>0?t.max.x:t.min.x,Pa.y=s.normal.y>0?t.max.y:t.min.y,Pa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Hi=class extends dn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},eo=new I,no=new I,yu=new Jt,sr=new si,Ia=new zn,fc=new I,vu=new I,Gi=class extends he{constructor(t=new Qt,e=new Hi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)eo.fromBufferAttribute(e,s-1),no.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=eo.distanceTo(no);t.setAttribute("lineDistance",new zt(n,1))}else Rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(s),Ia.radius+=r,t.ray.intersectsSphere(Ia)===!1)return;yu.copy(s).invert(),sr.copy(t.ray).applyMatrix4(yu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let M=f,p=g-1;M<p;M+=c){let m=h.getX(M),T=h.getX(M+1),v=La(this,t,sr,l,m,T,M);v&&e.push(v)}if(this.isLineLoop){let M=h.getX(g-1),p=h.getX(f),m=La(this,t,sr,l,M,p,g-1);m&&e.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let M=f,p=g-1;M<p;M+=c){let m=La(this,t,sr,l,M,M+1,M);m&&e.push(m)}if(this.isLineLoop){let M=La(this,t,sr,l,g-1,f,g-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function La(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(eo.fromBufferAttribute(o,s),no.fromBufferAttribute(o,r),e.distanceSqToSegment(eo,no,fc,vu)>n)return;fc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(fc);if(!(c<t.near||c>t.far))return{distance:c,point:vu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Mu=new I,bu=new I,br=class extends Gi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Mu.fromBufferAttribute(e,s),bu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Mu.distanceTo(bu);t.setAttribute("lineDistance",new zt(n,1))}else Rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var io=class extends dn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Su=new Jt,Sc=new si,Da=new zn,Na=new I,Sr=class extends he{constructor(t=new Qt,e=new io){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(s),Da.radius+=r,t.ray.intersectsSphere(Da)===!1)return;Su.copy(s).invert(),Sc.copy(t.ray).applyMatrix4(Su);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,M=f;g<M;g++){let p=c.getX(g);Na.fromBufferAttribute(d,p),Eu(Na,p,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,M=f;g<M;g++)Na.fromBufferAttribute(d,g),Eu(Na,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Eu(i,t,e,n,s,r,a){let o=Sc.distanceSqToPoint(i);if(o<e){let l=new I;Sc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Er=class extends Ke{constructor(t=[],e=Si,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wi=class extends Ke{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ri=class extends Ke{constructor(t,e,n=Pn,s,r,a,o=De,l=De,c,h=On,d=1){if(h!==On&&h!==wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Es(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},so=class extends ri{constructor(t,e=Pn,n=Si,s,r,a=De,o=De,l,c=On){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},wr=class extends Ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},$e=class i extends Qt{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(d,2));function g(M,p,m,T,v,x,A,w,R,_,S){let P=x/R,D=A/_,N=x/2,b=A/2,F=w/2,L=R+1,U=_+1,G=0,X=0,Q=new I;for(let st=0;st<U;st++){let nt=st*D-b;for(let _t=0;_t<L;_t++){let Gt=_t*P-N;Q[M]=Gt*T,Q[p]=nt*v,Q[m]=F,c.push(Q.x,Q.y,Q.z),Q[M]=0,Q[p]=0,Q[m]=w>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(_t/R),d.push(1-st/_),G+=1}}for(let st=0;st<_;st++)for(let nt=0;nt<R;nt++){let _t=u+nt+L*st,Gt=u+nt+L*(st+1),pe=u+(nt+1)+L*(st+1),jt=u+(nt+1)+L*st;l.push(_t,Gt,jt),l.push(Gt,pe,jt),X+=6}o.addGroup(f,X,S),f+=X,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Tr=class i extends Qt{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new I,h=new at;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new zt(a,3)),this.setAttribute("normal",new zt(o,3)),this.setAttribute("uv",new zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},pn=class i extends Qt{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,M=[],p=n/2,m=0;T(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new zt(d,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(f,2));function T(){let x=new I,A=new I,w=0,R=(e-t)/n;for(let _=0;_<=r;_++){let S=[],P=_/r,D=P*(e-t)+t;for(let N=0;N<=s;N++){let b=N/s,F=b*l+o,L=Math.sin(F),U=Math.cos(F);A.x=D*L,A.y=-P*n+p,A.z=D*U,d.push(A.x,A.y,A.z),x.set(L,R,U).normalize(),u.push(x.x,x.y,x.z),f.push(b,1-P),S.push(g++)}M.push(S)}for(let _=0;_<s;_++)for(let S=0;S<r;S++){let P=M[S][_],D=M[S+1][_],N=M[S+1][_+1],b=M[S][_+1];(t>0||S!==0)&&(h.push(P,D,b),w+=3),(e>0||S!==r-1)&&(h.push(D,N,b),w+=3)}c.addGroup(m,w,0),m+=w}function v(x){let A=g,w=new at,R=new I,_=0,S=x===!0?t:e,P=x===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,p*P,0),u.push(0,P,0),f.push(.5,.5),g++;let D=g;for(let N=0;N<=s;N++){let F=N/s*l+o,L=Math.cos(F),U=Math.sin(F);R.x=S*U,R.y=p*P,R.z=S*L,d.push(R.x,R.y,R.z),u.push(0,P,0),w.x=L*.5+.5,w.y=U*.5*P+.5,f.push(w.x,w.y),g++}for(let N=0;N<s;N++){let b=A+N,F=D+N;x===!0?h.push(F,F+1,b):h.push(F+1,F,b),_+=3}c.addGroup(m,_,x===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ar=class i extends pn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ro=class i extends Qt{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new zt(r,3)),this.setAttribute("normal",new zt(r.slice(),3)),this.setAttribute("uv",new zt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(T){let v=new I,x=new I,A=new I;for(let w=0;w<e.length;w+=3)f(e[w+0],v),f(e[w+1],x),f(e[w+2],A),l(v,x,A,T)}function l(T,v,x,A){let w=A+1,R=[];for(let _=0;_<=w;_++){R[_]=[];let S=T.clone().lerp(x,_/w),P=v.clone().lerp(x,_/w),D=w-_;for(let N=0;N<=D;N++)N===0&&_===w?R[_][N]=S:R[_][N]=S.clone().lerp(P,N/D)}for(let _=0;_<w;_++)for(let S=0;S<2*(w-_)-1;S++){let P=Math.floor(S/2);S%2===0?(u(R[_][P+1]),u(R[_+1][P]),u(R[_][P])):(u(R[_][P+1]),u(R[_+1][P+1]),u(R[_+1][P]))}}function c(T){let v=new I;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(T),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){let T=new I;for(let v=0;v<r.length;v+=3){T.x=r[v+0],T.y=r[v+1],T.z=r[v+2];let x=p(T)/2/Math.PI+.5,A=m(T)/Math.PI+.5;a.push(x,1-A)}g(),d()}function d(){for(let T=0;T<a.length;T+=6){let v=a[T+0],x=a[T+2],A=a[T+4],w=Math.max(v,x,A),R=Math.min(v,x,A);w>.9&&R<.1&&(v<.2&&(a[T+0]+=1),x<.2&&(a[T+2]+=1),A<.2&&(a[T+4]+=1))}}function u(T){r.push(T.x,T.y,T.z)}function f(T,v){let x=T*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function g(){let T=new I,v=new I,x=new I,A=new I,w=new at,R=new at,_=new at;for(let S=0,P=0;S<r.length;S+=9,P+=6){T.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),w.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),_.set(a[P+4],a[P+5]),A.copy(T).add(v).add(x).divideScalar(3);let D=p(A);M(w,P+0,T,D),M(R,P+2,v,D),M(_,P+4,x,D)}}function M(T,v,x,A){A<0&&T.x===1&&(a[v]=T.x-1),x.x===0&&x.z===0&&(a[v]=A/2/Math.PI+.5)}function p(T){return Math.atan2(T.z,-T.x)}function m(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Rt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new at:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new Jt;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(kt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(kt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Rr=class extends mn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new at){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ao=class extends Rr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Jc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var wu=new I,Tu=new I,pc=new Jc,mc=new Jc,gc=new Jc,kn=class extends mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Tu.subVectors(s[0],s[1]).add(s[0]),c=Tu);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(wu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=wu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);M<1e-4&&(M=1),g<1e-4&&(g=M),p<1e-4&&(p=M),pc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,M,p),mc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,M,p),gc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,M,p)}else this.curveType==="catmullrom"&&(pc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),mc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),gc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(pc.calc(l),mc.calc(l),gc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Au(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Pp(i,t){let e=1-i;return e*e*t}function Ip(i,t){return 2*(1-i)*i*t}function Lp(i,t){return i*i*t}function or(i,t,e,n){return Pp(i,t)+Ip(i,e)+Lp(i,n)}function Dp(i,t){let e=1-i;return e*e*e*t}function Np(i,t){let e=1-i;return 3*e*e*i*t}function Up(i,t){return 3*(1-i)*i*i*t}function Fp(i,t){return i*i*i*t}function lr(i,t,e,n,s){return Dp(i,t)+Np(i,e)+Up(i,n)+Fp(i,s)}var oo=class extends mn{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(lr(t,s.x,r.x,a.x,o.x),lr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},lo=class extends mn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(lr(t,s.x,r.x,a.x,o.x),lr(t,s.y,r.y,a.y,o.y),lr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},co=class extends mn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ho=class extends mn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uo=class extends mn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(or(t,s.x,r.x,a.x),or(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cr=class extends mn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(or(t,s.x,r.x,a.x),or(t,s.y,r.y,a.y),or(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fo=class extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Au(o,l.x,c.x,h.x,d.x),Au(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new at().fromArray(s))}return this}},Op=Object.freeze({__proto__:null,ArcCurve:ao,CatmullRomCurve3:kn,CubicBezierCurve:oo,CubicBezierCurve3:lo,EllipseCurve:Rr,LineCurve:co,LineCurve3:ho,QuadraticBezierCurve:uo,QuadraticBezierCurve3:Cr,SplineCurve:fo});var Pr=class i extends ro{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var An=class i extends Qt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],M=[],p=[];for(let m=0;m<h;m++){let T=m*u-a;for(let v=0;v<c;v++){let x=v*d-r;g.push(x,-T,0),M.push(0,0,1),p.push(v/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<o;T++){let v=T+c*m,x=T+c*(m+1),A=T+1+c*(m+1),w=T+1+c*m;f.push(v,x,w),f.push(x,A,w)}this.setIndex(f),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(M,3)),this.setAttribute("uv",new zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ir=class i extends Qt{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new I,g=new at;for(let M=0;M<=s;M++){for(let p=0;p<=n;p++){let m=r+p/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let M=0;M<s;M++){let p=M*(n+1);for(let m=0;m<n;m++){let T=m+p,v=T,x=T+n+1,A=T+n+2,w=T+1;o.push(v,x,w),o.push(x,A,w)}}this.setIndex(o),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(c,3)),this.setAttribute("uv",new zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Vn=class i extends Qt{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new I,u=new I,f=[],g=[],M=[],p=[];for(let m=0;m<=n;m++){let T=[],v=m/n,x=a+v*o,A=t*Math.cos(x),w=Math.sqrt(t*t-A*A),R=0;m===0&&a===0?R=.5/e:m===n&&l===Math.PI&&(R=-.5/e);for(let _=0;_<=e;_++){let S=_/e,P=s+S*r;d.x=-w*Math.cos(P),d.y=A,d.z=w*Math.sin(P),g.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),p.push(S+R,1-v),T.push(c++)}h.push(T)}for(let m=0;m<n;m++)for(let T=0;T<e;T++){let v=h[m][T+1],x=h[m][T],A=h[m+1][T],w=h[m+1][T+1];(m!==0||a>0)&&f.push(v,x,w),(m!==n-1||l<Math.PI)&&f.push(x,A,w)}this.setIndex(f),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(M,3)),this.setAttribute("uv",new zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Xi=class i extends Qt{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new I,f=new I,g=new I;for(let M=0;M<=n;M++){let p=a+M/n*o;for(let m=0;m<=s;m++){let T=m/s*r;f.x=(t+e*Math.cos(p))*Math.cos(T),f.y=(t+e*Math.cos(p))*Math.sin(T),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),u.x=t*Math.cos(T),u.y=t*Math.sin(T),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(m/s),d.push(M/n)}}for(let M=1;M<=n;M++)for(let p=1;p<=s;p++){let m=(s+1)*M+p-1,T=(s+1)*(M-1)+p-1,v=(s+1)*(M-1)+p,x=(s+1)*M+p;l.push(m,T,x),l.push(T,v,x)}this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Lr=class i extends Qt{constructor(t=new Cr(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new at,h=new I,d=[],u=[],f=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new zt(d,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(f,2));function M(){for(let v=0;v<e;v++)p(v);p(r===!1?e:0),T(),m()}function p(v){h=t.getPointAt(v/e,h);let x=a.normals[v],A=a.binormals[v];for(let w=0;w<=s;w++){let R=w/s*Math.PI*2,_=Math.sin(R),S=-Math.cos(R);l.x=S*x.x+_*A.x,l.y=S*x.y+_*A.y,l.z=S*x.z+_*A.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let v=1;v<=e;v++)for(let x=1;x<=s;x++){let A=(s+1)*(v-1)+(x-1),w=(s+1)*v+(x-1),R=(s+1)*v+x,_=(s+1)*(v-1)+x;g.push(A,w,_),g.push(w,R,_)}}function T(){for(let v=0;v<=e;v++)for(let x=0;x<=s;x++)c.x=v/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Op[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Zi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Ru(s))s.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ru(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ye(i){let t={};for(let e=0;e<i.length;e++){let n=Zi(i[e]);for(let s in n)t[s]=n[s]}return t}function Ru(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Bp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}var yd={clone:Zi,merge:Ye},zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ve=class extends dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zp,this.fragmentShader=kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=Bp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Tt().setHex(s.value);break;case"v2":this.uniforms[n].value=new at().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new fe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Jt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},po=class extends Ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Kt=class extends dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kr,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Dr=class extends dn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kr,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Io,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},mo=class extends dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},go=class extends dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var Is=class extends Hi{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Ua(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}var vi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_o=class extends vi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yc,endingEnd:yc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case vc:r=t,o=2*e-n;break;case Mc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vc:a=t,l=2*n-e;break;case Mc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),M=g*g,p=M*g,m=-u*p+2*u*M-u*g,T=(1+u)*p+(-1.5-2*u)*M+(-.5+u)*g+1,v=(-1-f)*p+(1.5+f)*M+.5*g,x=f*p-f*M;for(let A=0;A!==o;++A)r[A]=m*a[h+A]+T*a[c+A]+v*a[l+A]+x*a[d+A];return r}},xo=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},yo=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},vo=class extends vi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),M=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*M+a[l+p]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let M=a[c+g],p=a[l+g],m=f*u+g*2,T=d[m],v=d[m+1],x=t*u+g*2,A=h[x],w=h[x+1],R=(n-e)/(s-e),_,S,P,D,N;for(let b=0;b<8;b++){_=R*R,S=_*R,P=1-R,D=P*P,N=D*P;let L=N*e+3*D*R*T+3*P*_*A+S*s-n;if(Math.abs(L)<1e-10)break;let U=3*D*(T-e)+6*P*R*(A-T)+3*_*(s-A);if(Math.abs(U)<1e-10)break;R=R-L/U,R=Math.max(0,Math.min(1,R))}r[g]=N*M+3*D*R*v+3*P*_*w+S*p}return r}},on=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ua(e,this.TimeBufferType),this.values=Ua(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ua(t.times,Array),values:Ua(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new vo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case cr:e=this.InterpolantFactoryMethodDiscrete;break;case Ka:e=this.InterpolantFactoryMethodLinear;break;case Ba:e=this.InterpolantFactoryMethodSmooth;break;case xc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Rt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cr;case this.InterpolantFactoryMethodLinear:return Ka;case this.InterpolantFactoryMethodSmooth:return Ba;case this.InterpolantFactoryMethodBezier:return xc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(It("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(It("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){It("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){It("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Zf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){It("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ba,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let M=e[d+g];if(M!==e[u+g]||M!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};on.prototype.ValueTypeName="";on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=Ka;var Mi=class extends on{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="bool";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=cr;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Mo=class extends on{constructor(t,e,n,s){super(t,e,n,s)}};Mo.prototype.ValueTypeName="color";var bo=class extends on{constructor(t,e,n,s){super(t,e,n,s)}};bo.prototype.ValueTypeName="number";var So=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Je.slerpFlat(r,0,a,c-o,a,c,l);return r}},Nr=class extends on{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new So(this.times,this.values,this.getValueSize(),t)}};Nr.prototype.ValueTypeName="quaternion";Nr.prototype.InterpolantFactoryMethodSmooth=void 0;var bi=class extends on{constructor(t,e,n){super(t,e,n)}};bi.prototype.ValueTypeName="string";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=cr;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends on{constructor(t,e,n,s){super(t,e,n,s)}};Eo.prototype.ValueTypeName="vector";var wo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vd=new wo,To=class{constructor(t){this.manager=t!==void 0?t:vd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};To.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ls=class extends he{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ur=class extends Ls{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},_c=new Jt,Cu=new I,Pu=new I,Ao=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ps,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Cu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cu),Pu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pu),e.updateMatrixWorld(),_c.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_c,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Ms||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_c)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Fa=new I,Oa=new Je,Un=new I,Fr=class extends he{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fa,Oa,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Oa,Un.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Fa,Oa,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Oa,Un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xi=new I,Iu=new at,Lu=new at,ze=class extends Fr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,Iu,Lu),e.subVectors(Lu,Iu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(rr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ec=class extends Ao{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0}},Or=class extends Ls{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ec}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ds=class extends Fr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},wc=class extends Ao{constructor(){super(new Ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ns=class extends Ls{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.shadow=new wc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var xs=-90,ys=1,Ro=class extends he{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ze(xs,ys,t,e);s.layers=this.layers,this.add(s);let r=new ze(xs,ys,t,e);r.layers=this.layers,this.add(r);let a=new ze(xs,ys,t,e);a.layers=this.layers,this.add(a);let o=new ze(xs,ys,t,e);o.layers=this.layers,this.add(o);let l=new ze(xs,ys,t,e);l.layers=this.layers,this.add(l);let c=new ze(xs,ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Co=class extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Br=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Vp.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Vp(){this._document.hidden===!1&&this.reset()}var jc="\\[\\]\\.:\\/",Hp=new RegExp("["+jc+"]","g"),$c="[^"+jc+"]",Gp="[^"+jc.replace("\\.","")+"]",Wp=/((?:WC+[\/:])*)/.source.replace("WC",$c),Xp=/(WCOD+)?/.source.replace("WCOD",Gp),qp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$c),Yp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$c),Zp=new RegExp("^"+Wp+Xp+qp+Yp+"$"),Jp=["material","materials","bones","map"],Tc=class{constructor(t,e,n){let s=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Hp,"")}static parseTrackName(t){let e=Zp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Jp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){It("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){It("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){It("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){It("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){It("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;It("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=Tc;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vy=new Float32Array(1);var Du=new Jt,zr=class{constructor(t,e,n=0,s=1/0){this.ray=new si(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ws,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):It("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Du.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Du),this}intersectObject(t,e=!0,n=[]){return Ac(t,this,n,e),n.sort(Nu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ac(t[s],this,n,e);return n.sort(Nu),n}};function Nu(i,t){return i.distance-t.distance}function Ac(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ac(r[a],t,e,!0)}}var Us=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var sh=class sh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};sh.prototype.isMatrix2=!0;var Rc=sh;var kr=class extends wn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Rt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Qc(i,t,e,n){let s=Kp(n);switch(e){case Wc:return i*t;case Bo:return i*t/s.components*s.byteLength;case zo:return i*t/s.components*s.byteLength;case Ti:return i*t*2/s.components*s.byteLength;case ko:return i*t*2/s.components*s.byteLength;case Xc:return i*t*3/s.components*s.byteLength;case xn:return i*t*4/s.components*s.byteLength;case Vo:return i*t*4/s.components*s.byteLength;case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qr:case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Go:case Xo:return Math.max(i,16)*Math.max(t,8)/4;case Ho:case Wo:return Math.max(i,8)*Math.max(t,8)/2;case qo:case Yo:case Jo:case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zo:case Zr:case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case nl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case il:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case al:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case dl:case fl:case pl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ml:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Jr:case _l:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kp(i){switch(i){case Qe:case kc:return{byteLength:1,components:1};case Os:case Vc:case Gn:return{byteLength:2,components:1};case Fo:case Oo:return{byteLength:2,components:4};case Pn:case Uo:case _n:return{byteLength:4,components:1};case Hc:case Gc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Gd(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function em(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],M=d[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,d[u]=M)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let M=d[f];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,im=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,wm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Am=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ym=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Zm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Km=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ng=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ig=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,e0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,n0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,c0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,h0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,u0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,M0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,S0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,E0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,A0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,I0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:nm,alphahash_pars_fragment:im,alphamap_fragment:sm,alphamap_pars_fragment:rm,alphatest_fragment:am,alphatest_pars_fragment:om,aomap_fragment:lm,aomap_pars_fragment:cm,batching_pars_vertex:hm,batching_vertex:um,begin_vertex:dm,beginnormal_vertex:fm,bsdfs:pm,iridescence_fragment:mm,bumpmap_pars_fragment:gm,clipping_planes_fragment:_m,clipping_planes_pars_fragment:xm,clipping_planes_pars_vertex:ym,clipping_planes_vertex:vm,color_fragment:Mm,color_pars_fragment:bm,color_pars_vertex:Sm,color_vertex:Em,common:wm,cube_uv_reflection_fragment:Tm,defaultnormal_vertex:Am,displacementmap_pars_vertex:Rm,displacementmap_vertex:Cm,emissivemap_fragment:Pm,emissivemap_pars_fragment:Im,colorspace_fragment:Lm,colorspace_pars_fragment:Dm,envmap_fragment:Nm,envmap_common_pars_fragment:Um,envmap_pars_fragment:Fm,envmap_pars_vertex:Om,envmap_physical_pars_fragment:Zm,envmap_vertex:Bm,fog_vertex:zm,fog_pars_vertex:km,fog_fragment:Vm,fog_pars_fragment:Hm,gradientmap_pars_fragment:Gm,lightmap_pars_fragment:Wm,lights_lambert_fragment:Xm,lights_lambert_pars_fragment:qm,lights_pars_begin:Ym,lights_toon_fragment:Jm,lights_toon_pars_fragment:Km,lights_phong_fragment:jm,lights_phong_pars_fragment:$m,lights_physical_fragment:Qm,lights_physical_pars_fragment:tg,lights_fragment_begin:eg,lights_fragment_maps:ng,lights_fragment_end:ig,lightprobes_pars_fragment:sg,logdepthbuf_fragment:rg,logdepthbuf_pars_fragment:ag,logdepthbuf_pars_vertex:og,logdepthbuf_vertex:lg,map_fragment:cg,map_pars_fragment:hg,map_particle_fragment:ug,map_particle_pars_fragment:dg,metalnessmap_fragment:fg,metalnessmap_pars_fragment:pg,morphinstance_vertex:mg,morphcolor_vertex:gg,morphnormal_vertex:_g,morphtarget_pars_vertex:xg,morphtarget_vertex:yg,normal_fragment_begin:vg,normal_fragment_maps:Mg,normal_pars_fragment:bg,normal_pars_vertex:Sg,normal_vertex:Eg,normalmap_pars_fragment:wg,clearcoat_normal_fragment_begin:Tg,clearcoat_normal_fragment_maps:Ag,clearcoat_pars_fragment:Rg,iridescence_pars_fragment:Cg,opaque_fragment:Pg,packing:Ig,premultiplied_alpha_fragment:Lg,project_vertex:Dg,dithering_fragment:Ng,dithering_pars_fragment:Ug,roughnessmap_fragment:Fg,roughnessmap_pars_fragment:Og,shadowmap_pars_fragment:Bg,shadowmap_pars_vertex:zg,shadowmap_vertex:kg,shadowmask_pars_fragment:Vg,skinbase_vertex:Hg,skinning_pars_vertex:Gg,skinning_vertex:Wg,skinnormal_vertex:Xg,specularmap_fragment:qg,specularmap_pars_fragment:Yg,tonemapping_fragment:Zg,tonemapping_pars_fragment:Jg,transmission_fragment:Kg,transmission_pars_fragment:jg,uv_pars_fragment:$g,uv_pars_vertex:Qg,uv_vertex:t0,worldpos_vertex:e0,background_vert:n0,background_frag:i0,backgroundCube_vert:s0,backgroundCube_frag:r0,cube_vert:a0,cube_frag:o0,depth_vert:l0,depth_frag:c0,distance_vert:h0,distance_frag:u0,equirect_vert:d0,equirect_frag:f0,linedashed_vert:p0,linedashed_frag:m0,meshbasic_vert:g0,meshbasic_frag:_0,meshlambert_vert:x0,meshlambert_frag:y0,meshmatcap_vert:v0,meshmatcap_frag:M0,meshnormal_vert:b0,meshnormal_frag:S0,meshphong_vert:E0,meshphong_frag:w0,meshphysical_vert:T0,meshphysical_frag:A0,meshtoon_vert:R0,meshtoon_frag:C0,points_vert:P0,points_frag:I0,shadow_vert:L0,shadow_frag:D0,sprite_vert:N0,sprite_frag:U0},pt={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Xn={basic:{uniforms:Ye([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ye([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Tt(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ye([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ye([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ye([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ye([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ye([pt.points,pt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ye([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ye([pt.common,pt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ye([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ye([pt.sprite,pt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:Ye([pt.common,pt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:Ye([pt.lights,pt.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Xn.physical={uniforms:Ye([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var vl={r:0,b:0,g:0},F0=new Jt,Wd=new Ut;Wd.set(-1,0,0,0,1,0,0,0,1);function O0(i,t,e,n,s,r){let a=new Tt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(T){let v=T.isScene===!0?T.background:null;if(v&&v.isTexture){let x=T.backgroundBlurriness>0;v=t.get(v,x)}return v}function g(T){let v=!1,x=f(T);x===null?p(a,o):x&&x.isColor&&(p(x,1),v=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(T,v){let x=f(v);x&&(x.isCubeTexture||x.mapping===Hr)?(c===void 0&&(c=new qt(new $e(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:Zi(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(F0.makeRotationFromEuler(v.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Wd),c.material.toneMapped=Xt.getTransfer(x.colorSpace)!==te,(h!==x||d!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new qt(new An(2,2),new Ve({name:"BackgroundMaterial",uniforms:Zi(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Xt.getTransfer(x.colorSpace)!==te,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,v){T.getRGB(vl,Kc(i)),e.buffers.color.setClear(vl.r,vl.g,vl.b,v,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,v=1){a.set(T),o=v,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,p(a,o)},render:g,addToRenderList:M,dispose:m}}function B0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(D,N,b,F,L){let U=!1,G=d(D,F,b,N);r!==G&&(r=G,c(r.object)),U=f(D,F,b,L),U&&g(D,F,b,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,x(D,N,b,F),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function d(D,N,b,F){let L=F.wireframe===!0,U=n[N.id];U===void 0&&(U={},n[N.id]=U);let G=D.isInstancedMesh===!0?D.id:0,X=U[G];X===void 0&&(X={},U[G]=X);let Q=X[b.id];Q===void 0&&(Q={},X[b.id]=Q);let st=Q[L];return st===void 0&&(st=u(l()),Q[L]=st),st}function u(D){let N=[],b=[],F=[];for(let L=0;L<e;L++)N[L]=0,b[L]=0,F[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:b,attributeDivisors:F,object:D,attributes:{},index:null}}function f(D,N,b,F){let L=r.attributes,U=N.attributes,G=0,X=b.getAttributes();for(let Q in X)if(X[Q].location>=0){let nt=L[Q],_t=U[Q];if(_t===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(_t=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(_t=D.instanceColor)),nt===void 0||nt.attribute!==_t||_t&&nt.data!==_t.data)return!0;G++}return r.attributesNum!==G||r.index!==F}function g(D,N,b,F){let L={},U=N.attributes,G=0,X=b.getAttributes();for(let Q in X)if(X[Q].location>=0){let nt=U[Q];nt===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(nt=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(nt=D.instanceColor));let _t={};_t.attribute=nt,nt&&nt.data&&(_t.data=nt.data),L[Q]=_t,G++}r.attributes=L,r.attributesNum=G,r.index=F}function M(){let D=r.newAttributes;for(let N=0,b=D.length;N<b;N++)D[N]=0}function p(D){m(D,0)}function m(D,N){let b=r.newAttributes,F=r.enabledAttributes,L=r.attributeDivisors;b[D]=1,F[D]===0&&(i.enableVertexAttribArray(D),F[D]=1),L[D]!==N&&(i.vertexAttribDivisor(D,N),L[D]=N)}function T(){let D=r.newAttributes,N=r.enabledAttributes;for(let b=0,F=N.length;b<F;b++)N[b]!==D[b]&&(i.disableVertexAttribArray(b),N[b]=0)}function v(D,N,b,F,L,U,G){G===!0?i.vertexAttribIPointer(D,N,b,L,U):i.vertexAttribPointer(D,N,b,F,L,U)}function x(D,N,b,F){M();let L=F.attributes,U=b.getAttributes(),G=N.defaultAttributeValues;for(let X in U){let Q=U[X];if(Q.location>=0){let st=L[X];if(st===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(st=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(st=D.instanceColor)),st!==void 0){let nt=st.normalized,_t=st.itemSize,Gt=t.get(st);if(Gt===void 0)continue;let pe=Gt.buffer,jt=Gt.type,$=Gt.bytesPerElement,lt=jt===i.INT||jt===i.UNSIGNED_INT||st.gpuType===Uo;if(st.isInterleavedBufferAttribute){let it=st.data,Nt=it.stride,Ft=st.offset;if(it.isInstancedInterleavedBuffer){for(let Lt=0;Lt<Q.locationSize;Lt++)m(Q.location+Lt,it.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Lt=0;Lt<Q.locationSize;Lt++)p(Q.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let Lt=0;Lt<Q.locationSize;Lt++)v(Q.location+Lt,_t/Q.locationSize,jt,nt,Nt*$,(Ft+_t/Q.locationSize*Lt)*$,lt)}else{if(st.isInstancedBufferAttribute){for(let it=0;it<Q.locationSize;it++)m(Q.location+it,st.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let it=0;it<Q.locationSize;it++)p(Q.location+it);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let it=0;it<Q.locationSize;it++)v(Q.location+it,_t/Q.locationSize,jt,nt,_t*$,_t/Q.locationSize*it*$,lt)}}else if(G!==void 0){let nt=G[X];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(Q.location,nt);break;case 3:i.vertexAttrib3fv(Q.location,nt);break;case 4:i.vertexAttrib4fv(Q.location,nt);break;default:i.vertexAttrib1fv(Q.location,nt)}}}}T()}function A(){S();for(let D in n){let N=n[D];for(let b in N){let F=N[b];for(let L in F){let U=F[L];for(let G in U)h(U[G].object),delete U[G];delete F[L]}}delete n[D]}}function w(D){if(n[D.id]===void 0)return;let N=n[D.id];for(let b in N){let F=N[b];for(let L in F){let U=F[L];for(let G in U)h(U[G].object),delete U[G];delete F[L]}}delete n[D.id]}function R(D){for(let N in n){let b=n[N];for(let F in b){let L=b[F];if(L[D.id]===void 0)continue;let U=L[D.id];for(let G in U)h(U[G].object),delete U[G];delete L[D.id]}}}function _(D){for(let N in n){let b=n[N],F=D.isInstancedMesh===!0?D.id:0,L=b[F];if(L!==void 0){for(let U in L){let G=L[U];for(let X in G)h(G[X].object),delete G[X];delete L[U]}delete b[F],Object.keys(b).length===0&&delete n[N]}}}function S(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:p,disableUnusedAttributes:T}}function z0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function k0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==xn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let _=R===Gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Qe&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==_n&&!_)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Rt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:T,maxVaryings:v,maxFragmentUniforms:x,maxSamples:A,samples:w}}function V0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new hn,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,M=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let T=r?0:n,v=T*4,x=m.clippingState||null;l.value=x,x=h(g,u,v,f);for(let A=0;A!==v;++A)x[A]=e[A];m.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let M=d!==null?d.length:0,p=null;if(M!==0){if(p=l.value,g!==!0||p===null){let m=f+M*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,x=f;v!==M;++v,x+=4)a.copy(d[v]).applyMatrix4(T,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}var Ai=4,Md=[.125,.215,.35,.446,.526,.582],Ji=20,H0=256,jr=new Ds,bd=new Tt,rh=null,ah=0,oh=0,lh=!1,G0=new I,Vs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=G0}=r;rh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(rh,ah,oh),this._renderer.xr.enabled=lh,t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Si||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:Gn,format:xn,colorSpace:hr,depthBuffer:!1},s=Sd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=W0(r)),this._blurMaterial=q0(r,t,e),this._ggxMaterial=X0(r,t,e)}return s}_compileMaterial(t){let e=new qt(new Qt,t);this._renderer.compile(e,jr)}_sceneToCubeUV(t,e,n,s,r){let l=new ze(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(bd),d.toneMapping=Cn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qt(new $e,new fn({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,p=M.material,m=!1,T=t.background;T?T.isColor&&(p.color.copy(T),t.background=null,m=!0):(p.color.copy(bd),m=!0);for(let v=0;v<6;v++){let x=v%3;x===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[v],r.y,r.z)):x===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[v]));let A=this._cubeSize;zs(s,x*A,v>2?A:0,A,A),d.setRenderTarget(s),m&&d.render(M,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Si||t.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ed());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;zs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,jr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:g}=this,M=this._sizeLods[n],p=3*M*(n>g-Ai?n-g+Ai:0),m=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,zs(r,p,m,3*M,2*M),s.setRenderTarget(r),s.render(o,jr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,zs(t,p,m,3*M,2*M),s.setRenderTarget(t),s.render(o,jr)}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&It("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[s];d.material=c;let u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ji-1),M=r/g,p=isFinite(r)?1+Math.floor(h*M):Ji;p>Ji&&Rt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ji}`);let m=[],T=0;for(let R=0;R<Ji;++R){let _=R/M,S=Math.exp(-_*_/2);m.push(S),R===0?T+=S:R<p&&(T+=2*S)}for(let R=0;R<m.length;R++)m[R]=m[R]/T;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;let x=this._sizeLods[s],A=3*x*(s>v-Ai?s-v+Ai:0),w=4*(this._cubeSize-x);zs(e,A,w,3*x,2*x),l.setRenderTarget(e),l.render(d,jr)}};function W0(i){let t=[],e=[],n=[],s=i,r=i-Ai+1+Md.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Ai?l=Md[a-i+Ai-1]:a===0&&(l=0),e.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,M=3,p=2,m=1,T=new Float32Array(M*g*f),v=new Float32Array(p*g*f),x=new Float32Array(m*g*f);for(let w=0;w<f;w++){let R=w%3*2/3-1,_=w>2?0:-1,S=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];T.set(S,M*g*w),v.set(u,p*g*w);let P=[w,w,w,w,w,w];x.set(P,m*g*w)}let A=new Qt;A.setAttribute("position",new de(T,M)),A.setAttribute("uv",new de(v,p)),A.setAttribute("faceIndex",new de(x,m)),n.push(new qt(A,null)),s>Ai&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Sd(i,t,e){let n=new an(i,t,e);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function X0(i,t,e){return new Ve({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:H0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:El(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function q0(i,t,e){let n=new Float32Array(Ji),s=new I(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Ed(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function wd(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function El(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var bl=class extends an{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Er(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $e(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:Hn});r.uniforms.tEquirect.value=e;let a=new qt(s,r),o=e.minFilter;return e.minFilter===Ei&&(e.minFilter=ke),new Ro(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Y0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Lo||f===Do)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let M=new bl(g.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Lo||f===Do,M=f===Si||f===Yi;if(g||M){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Vs(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let T=u.image;return g&&T&&T.height>0||M&&T&&l(T)?(n===null&&(n=new Vs(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===Lo?u.mapping=Si:f===Do&&(u.mapping=Yi),u}function l(u){let f=0,g=6;for(let M=0;M<g;M++)u[M]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Z0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Bi("WebGLRenderer: "+n+" extension not supported."),s}}}function J0(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,M=0;if(g===void 0)return;if(f!==null){let T=f.array;M=f.version;for(let v=0,x=T.length;v<x;v+=3){let A=T[v+0],w=T[v+1],R=T[v+2];u.push(A,w,w,R,R,A)}}else{let T=g.array;M=g.version;for(let v=0,x=T.length/3-1;v<x;v+=3){let A=v+0,w=v+1,R=v+2;u.push(A,w,w,R,R,A)}}let p=new(g.count>=65535?_r:gr)(u,1);p.version=M;let m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function K0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let M=0;for(let p=0;p<f;p++)M+=u[p];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function j0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:It("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $0(i,t,e){let n=new WeakMap,s=new fe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let S=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),M===!0&&(v=3);let x=o.attributes.position.count*v,A=1;x>t.maxTextureSize&&(A=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let w=new Float32Array(x*A*4*d),R=new pr(w,x,A,d);R.type=_n,R.needsUpdate=!0;let _=v*4;for(let P=0;P<d;P++){let D=p[P],N=m[P],b=T[P],F=x*A*4*P;for(let L=0;L<D.count;L++){let U=L*_;f===!0&&(s.fromBufferAttribute(D,L),w[F+U+0]=s.x,w[F+U+1]=s.y,w[F+U+2]=s.z,w[F+U+3]=0),g===!0&&(s.fromBufferAttribute(N,L),w[F+U+4]=s.x,w[F+U+5]=s.y,w[F+U+6]=s.z,w[F+U+7]=0),M===!0&&(s.fromBufferAttribute(b,L),w[F+U+8]=s.x,w[F+U+9]=s.y,w[F+U+10]=s.z,w[F+U+11]=b.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new at(x,A)},n.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Q0(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var t_={[Dc]:"LINEAR_TONE_MAPPING",[Nc]:"REINHARD_TONE_MAPPING",[Uc]:"CINEON_TONE_MAPPING",[Vr]:"ACES_FILMIC_TONE_MAPPING",[Oc]:"AGX_TONE_MAPPING",[Bc]:"NEUTRAL_TONE_MAPPING",[Fc]:"CUSTOM_TONE_MAPPING"};function e_(i,t,e,n,s,r){let a=new an(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new ri(t,e):void 0}),o=new an(t,e,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),l=new Qt;l.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new zt([0,2,0,0,2,0],2));let c=new po({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new qt(l,c),d=new Ds(-1,1,1,-1,0,1),u=null,f=null,g=!1,M,p=null,m=[],T=!1;this.setSize=function(v,x){a.setSize(v,x),o.setSize(v,x);for(let A=0;A<m.length;A++){let w=m[A];w.setSize&&w.setSize(v,x)}},this.setEffects=function(v){m=v,T=m.length>0&&m[0].isRenderPass===!0;let x=a.width,A=a.height;for(let w=0;w<m.length;w++){let R=m[w];R.setSize&&R.setSize(x,A)}},this.begin=function(v,x){if(g||v.toneMapping===Cn&&m.length===0)return!1;if(p=x,x!==null){let A=x.width,w=x.height;(a.width!==A||a.height!==w)&&this.setSize(A,w)}return T===!1&&v.setRenderTarget(a),M=v.toneMapping,v.toneMapping=Cn,!0},this.hasRenderPass=function(){return T},this.end=function(v,x){v.toneMapping=M,g=!0;let A=a,w=o;for(let R=0;R<m.length;R++){let _=m[R];if(_.enabled!==!1&&(_.render(v,w,A,x),_.needsSwap!==!1)){let S=A;A=w,w=S}}if(u!==v.outputColorSpace||f!==v.toneMapping){u=v.outputColorSpace,f=v.toneMapping,c.defines={},Xt.getTransfer(u)===te&&(c.defines.SRGB_TRANSFER="");let R=t_[f];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,v.setRenderTarget(p),v.render(h,d),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var Xd=new Ke,uh=new ri(1,1),qd=new pr,Yd=new to,Zd=new Er,Td=[],Ad=[],Rd=new Float32Array(16),Cd=new Float32Array(9),Pd=new Float32Array(4);function Hs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Td[s];if(r===void 0&&(r=new Float32Array(s),Td[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wl(i,t){let e=Ad[t];e===void 0&&(e=new Int32Array(t),Ad[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function n_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function i_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function s_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function r_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function a_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Pd.set(n),i.uniformMatrix2fv(this.addr,!1,Pd),Re(e,n)}}function o_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Cd.set(n),i.uniformMatrix3fv(this.addr,!1,Cd),Re(e,n)}}function l_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Rd.set(n),i.uniformMatrix4fv(this.addr,!1,Rd),Re(e,n)}}function c_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function h_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function u_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function d_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function f_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function p_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function m_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function g_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function __(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(uh.compareFunction=e.isReversedDepthBuffer()?yl:xl,r=uh):r=Xd,e.setTexture2D(t||r,s)}function x_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Yd,s)}function y_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Zd,s)}function v_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||qd,s)}function M_(i){switch(i){case 5126:return n_;case 35664:return i_;case 35665:return s_;case 35666:return r_;case 35674:return a_;case 35675:return o_;case 35676:return l_;case 5124:case 35670:return c_;case 35667:case 35671:return h_;case 35668:case 35672:return u_;case 35669:case 35673:return d_;case 5125:return f_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return x_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return v_}}function b_(i,t){i.uniform1fv(this.addr,t)}function S_(i,t){let e=Hs(t,this.size,2);i.uniform2fv(this.addr,e)}function E_(i,t){let e=Hs(t,this.size,3);i.uniform3fv(this.addr,e)}function w_(i,t){let e=Hs(t,this.size,4);i.uniform4fv(this.addr,e)}function T_(i,t){let e=Hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function A_(i,t){let e=Hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function R_(i,t){let e=Hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function C_(i,t){i.uniform1iv(this.addr,t)}function P_(i,t){i.uniform2iv(this.addr,t)}function I_(i,t){i.uniform3iv(this.addr,t)}function L_(i,t){i.uniform4iv(this.addr,t)}function D_(i,t){i.uniform1uiv(this.addr,t)}function N_(i,t){i.uniform2uiv(this.addr,t)}function U_(i,t){i.uniform3uiv(this.addr,t)}function F_(i,t){i.uniform4uiv(this.addr,t)}function O_(i,t,e){let n=this.cache,s=t.length,r=wl(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=uh:a=Xd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function B_(i,t,e){let n=this.cache,s=t.length,r=wl(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Yd,r[a])}function z_(i,t,e){let n=this.cache,s=t.length,r=wl(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Zd,r[a])}function k_(i,t,e){let n=this.cache,s=t.length,r=wl(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||qd,r[a])}function V_(i){switch(i){case 5126:return b_;case 35664:return S_;case 35665:return E_;case 35666:return w_;case 35674:return T_;case 35675:return A_;case 35676:return R_;case 5124:case 35670:return C_;case 35667:case 35671:return P_;case 35668:case 35672:return I_;case 35669:case 35673:return L_;case 5125:return D_;case 36294:return N_;case 36295:return U_;case 36296:return F_;case 35678:case 36198:case 36298:case 36306:case 35682:return O_;case 35679:case 36299:case 36307:return B_;case 35680:case 36300:case 36308:case 36293:return z_;case 36289:case 36303:case 36311:case 36292:return k_}}var dh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=M_(e.type)}},fh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=V_(e.type)}},ph=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ch=/(\w+)(\])?(\[|\.)?/g;function Id(i,t){i.seq.push(t),i.map[t.id]=t}function H_(i,t,e){let n=i.name,s=n.length;for(ch.lastIndex=0;;){let r=ch.exec(n),a=ch.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Id(e,c===void 0?new dh(o,i,t):new fh(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new ph(o),Id(e,d)),e=d}}}var ks=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);H_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Ld(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var G_=37297,W_=0;function X_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Dd=new Ut;function q_(i){Xt._getMatrix(Dd,Xt.workingColorSpace,i);let t=`mat3( ${Dd.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(i)){case ur:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+X_(i.getShaderSource(t),o)}else return r}function Y_(i,t){let e=q_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Z_={[Dc]:"Linear",[Nc]:"Reinhard",[Uc]:"Cineon",[Vr]:"ACESFilmic",[Oc]:"AgX",[Bc]:"Neutral",[Fc]:"Custom"};function J_(i,t){let e=Z_[t];return e===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ml=new I;function K_(){Xt.getLuminanceCoefficients(Ml);let i=Ml.x.toFixed(4),t=Ml.y.toFixed(4),e=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function $_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Q_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Qr(i){return i!==""}function Ud(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var tx=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(i){return i.replace(tx,nx)}var ex=new Map;function nx(i,t){let e=Vt[t];if(e===void 0){let n=ex.get(t);if(n!==void 0)e=Vt[n],Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return mh(e)}var ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Od(i){return i.replace(ix,sx)}function sx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var rx={[qi]:"SHADOWMAP_TYPE_PCF",[Fs]:"SHADOWMAP_TYPE_VSM"};function ax(i){return rx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ox={[Si]:"ENVMAP_TYPE_CUBE",[Yi]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE_UV"};function lx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ox[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var cx={[Yi]:"ENVMAP_MODE_REFRACTION"};function hx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":cx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ux={[Io]:"ENVMAP_BLENDING_MULTIPLY",[nd]:"ENVMAP_BLENDING_MIX",[id]:"ENVMAP_BLENDING_ADD"};function dx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ux[i.combine]||"ENVMAP_BLENDING_NONE"}function fx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function px(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ax(e),c=lx(e),h=hx(e),d=dx(e),u=fx(e),f=j_(e),g=$_(r),M=s.createProgram(),p,m,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qr).join(`
`),m.length>0&&(m+=`
`)):(p=[Bd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),m=[Bd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Cn?J_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Y_("linearToOutputTexel",e.outputColorSpace),K_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qr).join(`
`)),a=mh(a),a=Ud(a,e),a=Fd(a,e),o=mh(o),o=Ud(o,e),o=Fd(o,e),a=Od(a),o=Od(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=T+p+a,x=T+m+o,A=Ld(s,s.VERTEX_SHADER,v),w=Ld(s,s.FRAGMENT_SHADER,x);s.attachShader(M,A),s.attachShader(M,w),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(D){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(M)||"",b=s.getShaderInfoLog(A)||"",F=s.getShaderInfoLog(w)||"",L=N.trim(),U=b.trim(),G=F.trim(),X=!0,Q=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,A,w);else{let st=Nd(s,A,"vertex"),nt=Nd(s,w,"fragment");It("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+L+`
`+st+`
`+nt)}else L!==""?Rt("WebGLProgram: Program Info Log:",L):(U===""||G==="")&&(Q=!1);Q&&(D.diagnostics={runnable:X,programLog:L,vertexShader:{log:U,prefix:p},fragmentShader:{log:G,prefix:m}})}s.deleteShader(A),s.deleteShader(w),_=new ks(s,M),S=Q_(s,M)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(M,G_)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=W_++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=w,this}var mx=0,gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new _h(t),e.set(t,n)),n}},_h=class{constructor(t){this.id=mx++,this.code=t,this.usedTimes=0}};function gx(i){return i===Ti||i===Zr||i===Jr}function _x(i,t,e,n,s,r){let a=new ws,o=new gh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function M(_,S,P,D,N,b){let F=D.fog,L=N.geometry,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,X=t.get(_.envMap||U,G),Q=X&&X.mapping===Hr?X.image.height:null,st=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Rt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let nt=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,_t=nt!==void 0?nt.length:0,Gt=0;L.morphAttributes.position!==void 0&&(Gt=1),L.morphAttributes.normal!==void 0&&(Gt=2),L.morphAttributes.color!==void 0&&(Gt=3);let pe,jt,$,lt;if(st){let Mt=Xn[st];pe=Mt.vertexShader,jt=Mt.fragmentShader}else{pe=_.vertexShader,jt=_.fragmentShader;let Mt=o.getVertexShaderStage(_),ge=o.getFragmentShaderStage(_);o.update(_,Mt,ge),$=Mt.id,lt=ge.id}let it=i.getRenderTarget(),Nt=i.state.buffers.depth.getReversed(),Ft=N.isInstancedMesh===!0,Lt=N.isBatchedMesh===!0,ye=!!_.map,Wt=!!_.matcap,re=!!X,$t=!!_.aoMap,Yt=!!_.lightMap,be=!!_.bumpMap&&_.wireframe===!1,Te=!!_.normalMap,Pe=!!_.displacementMap,Oe=!!_.emissiveMap,me=!!_.metalnessMap,Se=!!_.roughnessMap,B=_.anisotropy>0,je=_.clearcoat>0,ee=_.dispersion>0,C=_.iridescence>0,y=_.sheen>0,k=_.transmission>0,q=B&&!!_.anisotropyMap,Z=je&&!!_.clearcoatMap,rt=je&&!!_.clearcoatNormalMap,ct=je&&!!_.clearcoatRoughnessMap,J=C&&!!_.iridescenceMap,j=C&&!!_.iridescenceThicknessMap,ht=y&&!!_.sheenColorMap,Et=y&&!!_.sheenRoughnessMap,ft=!!_.specularMap,ut=!!_.specularColorMap,Ct=!!_.specularIntensityMap,Dt=k&&!!_.transmissionMap,Ot=k&&!!_.thicknessMap,O=!!_.gradientMap,ot=!!_.alphaMap,K=_.alphaTest>0,dt=!!_.alphaHash,xt=!!_.extensions,tt=Cn;_.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(tt=i.toneMapping);let St={shaderID:st,shaderType:_.type,shaderName:_.name,vertexShader:pe,fragmentShader:jt,defines:_.defines,customVertexShaderID:$,customFragmentShaderID:lt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Lt,batchingColor:Lt&&N._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&N.instanceColor!==null,instancingMorph:Ft&&N.morphTexture!==null,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Xt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ye,matcap:Wt,envMap:re,envMapMode:re&&X.mapping,envMapCubeUVHeight:Q,aoMap:$t,lightMap:Yt,bumpMap:be,normalMap:Te,displacementMap:Pe,emissiveMap:Oe,normalMapObjectSpace:Te&&_.normalMapType===ad,normalMapTangentSpace:Te&&_.normalMapType===Kr,packedNormalMap:Te&&_.normalMapType===Kr&&gx(_.normalMap.format),metalnessMap:me,roughnessMap:Se,anisotropy:B,anisotropyMap:q,clearcoat:je,clearcoatMap:Z,clearcoatNormalMap:rt,clearcoatRoughnessMap:ct,dispersion:ee,iridescence:C,iridescenceMap:J,iridescenceThicknessMap:j,sheen:y,sheenColorMap:ht,sheenRoughnessMap:Et,specularMap:ft,specularColorMap:ut,specularIntensityMap:Ct,transmission:k,transmissionMap:Dt,thicknessMap:Ot,gradientMap:O,opaque:_.transparent===!1&&_.blending===zi&&_.alphaToCoverage===!1,alphaMap:ot,alphaTest:K,alphaHash:dt,combine:_.combine,mapUv:ye&&g(_.map.channel),aoMapUv:$t&&g(_.aoMap.channel),lightMapUv:Yt&&g(_.lightMap.channel),bumpMapUv:be&&g(_.bumpMap.channel),normalMapUv:Te&&g(_.normalMap.channel),displacementMapUv:Pe&&g(_.displacementMap.channel),emissiveMapUv:Oe&&g(_.emissiveMap.channel),metalnessMapUv:me&&g(_.metalnessMap.channel),roughnessMapUv:Se&&g(_.roughnessMap.channel),anisotropyMapUv:q&&g(_.anisotropyMap.channel),clearcoatMapUv:Z&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:rt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:j&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Et&&g(_.sheenRoughnessMap.channel),specularMapUv:ft&&g(_.specularMap.channel),specularColorMapUv:ut&&g(_.specularColorMap.channel),specularIntensityMapUv:Ct&&g(_.specularIntensityMap.channel),transmissionMapUv:Dt&&g(_.transmissionMap.channel),thicknessMapUv:Ot&&g(_.thicknessMap.channel),alphaMapUv:ot&&g(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Te||B),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(ye||ot),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&Te===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Nt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Gt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:b.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,decodeVideoTexture:ye&&_.map.isVideoTexture===!0&&Xt.getTransfer(_.map.colorSpace)===te,decodeVideoTextureEmissive:Oe&&_.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(_.emissiveMap.colorSpace)===te,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ne,flipSided:_.side===He,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:xt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&_.extensions.multiDraw===!0||Lt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function p(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)S.push(P),S.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(m(S,_),T(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function T(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){let S=f[_.type],P;if(S){let D=Xn[S];P=yd.clone(D.uniforms)}else P=_.uniforms;return P}function x(_,S){let P=h.get(S);return P!==void 0?++P.usedTimes:(P=new px(i,S,_,s),c.push(P),h.set(S,P)),P}function A(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:p,getUniforms:v,acquireProgram:x,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:R}}function xx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function yx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function zd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function kd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,M,p,m){let T=i[t];return T===void 0?(T={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:p,group:m},i[t]=T):(T.id=u.id,T.object=u,T.geometry=f,T.material=g,T.materialVariant=a(u),T.groupOrder=M,T.renderOrder=u.renderOrder,T.z=p,T.group=m),t++,T}function l(u,f,g,M,p,m){let T=o(u,f,g,M,p,m);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):e.push(T)}function c(u,f,g,M,p,m){let T=o(u,f,g,M,p,m);g.transmission>0?n.unshift(T):g.transparent===!0?s.unshift(T):e.unshift(T)}function h(u,f,g){e.length>1&&e.sort(u||yx),n.length>1&&n.sort(f||zd),s.length>1&&s.sort(f||zd),g&&(e.reverse(),n.reverse(),s.reverse())}function d(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function vx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new kd,i.set(n,[a])):s>=r.length?(a=new kd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Mx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Tt};break;case"SpotLight":e={position:new I,direction:new I,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function bx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Sx=0;function Ex(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function wx(i){let t=new Mx,e=bx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Jt,a=new Jt;function o(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,M=0,p=0,m=0,T=0,v=0,x=0,A=0,w=0,R=0;c.sort(Ex);for(let S=0,P=c.length;S<P;S++){let D=c[S],N=D.color,b=D.intensity,F=D.distance,L=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ti?L=D.shadow.map.texture:L=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=N.r*b,d+=N.g*b,u+=N.b*b;else if(D.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(D.sh.coefficients[U],b);R++}else if(D.isDirectionalLight){let U=t.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let G=D.shadow,X=e.get(D);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=L,n.directionalShadowMatrix[f]=D.shadow.matrix,T++}n.directional[f]=U,f++}else if(D.isSpotLight){let U=t.get(D);U.position.setFromMatrixPosition(D.matrixWorld),U.color.copy(N).multiplyScalar(b),U.distance=F,U.coneCos=Math.cos(D.angle),U.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),U.decay=D.decay,n.spot[M]=U;let G=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,G.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[M]=G.matrix,D.castShadow){let X=e.get(D);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,n.spotShadow[M]=X,n.spotShadowMap[M]=L,x++}M++}else if(D.isRectAreaLight){let U=t.get(D);U.color.copy(N).multiplyScalar(b),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=U,p++}else if(D.isPointLight){let U=t.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),U.distance=D.distance,U.decay=D.decay,D.castShadow){let G=D.shadow,X=e.get(D);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,X.shadowCameraNear=G.camera.near,X.shadowCameraFar=G.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=L,n.pointShadowMatrix[g]=D.shadow.matrix,v++}n.point[g]=U,g++}else if(D.isHemisphereLight){let U=t.get(D);U.skyColor.copy(D.color).multiplyScalar(b),U.groundColor.copy(D.groundColor).multiplyScalar(b),n.hemi[m]=U,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let _=n.hash;(_.directionalLength!==f||_.pointLength!==g||_.spotLength!==M||_.rectAreaLength!==p||_.hemiLength!==m||_.numDirectionalShadows!==T||_.numPointShadows!==v||_.numSpotShadows!==x||_.numSpotMaps!==A||_.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=M,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,_.directionalLength=f,_.pointLength=g,_.spotLength=M,_.rectAreaLength=p,_.hemiLength=m,_.numDirectionalShadows=T,_.numPointShadows=v,_.numSpotShadows=x,_.numSpotMaps=A,_.numLightProbes=R,n.version=Sx++)}function l(c,h){let d=0,u=0,f=0,g=0,M=0,p=h.matrixWorldInverse;for(let m=0,T=c.length;m<T;m++){let v=c[m];if(v.isDirectionalLight){let x=n.directional[d];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),d++}else if(v.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),f++}else if(v.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let x=n.point[u];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),u++}else if(v.isHemisphereLight){let x=n.hemi[M];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(p),M++}}}return{setup:o,setupView:l,state:n}}function Vd(i){let t=new wx(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Tx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Vd(i),t.set(s,[o])):r>=a.length?(o=new Vd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Cx=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Px=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Hd=new Jt,$r=new I,hh=new I;function Ix(i,t,e){let n=new Ps,s=new at,r=new at,a=new fe,o=new mo,l=new go,c={},h=e.maxTextureSize,d={[ii]:He,[He]:ii,[Ne]:Ne},u=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Ax,fragmentShader:Rx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Qt;g.setAttribute("position",new de(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new qt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qi;let m=this.type;this.render=function(w,R,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Ou&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=qi);let S=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Hn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let b=m!==this.type;b&&R.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(L=>L.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,L=w.length;F<L;F++){let U=w[F],G=U.shadow;if(G===void 0){Rt("WebGLShadowMap:",U,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let X=G.getFrameExtents();s.multiply(X),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,G.mapSize.y=r.y));let Q=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Q,G.map===null||b===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Fs){if(U.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new an(s.x,s.y,{format:Ti,type:Gn,minFilter:ke,magFilter:ke,generateMipmaps:!1}),G.map.texture.name=U.name+".shadowMap",G.map.depthTexture=new ri(s.x,s.y,_n),G.map.depthTexture.name=U.name+".shadowMapDepth",G.map.depthTexture.format=On,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=De,G.map.depthTexture.magFilter=De}else U.isPointLight?(G.map=new bl(s.x),G.map.depthTexture=new so(s.x,Pn)):(G.map=new an(s.x,s.y),G.map.depthTexture=new ri(s.x,s.y,Pn)),G.map.depthTexture.name=U.name+".shadowMap",G.map.depthTexture.format=On,this.type===qi?(G.map.depthTexture.compareFunction=Q?yl:xl,G.map.depthTexture.minFilter=ke,G.map.depthTexture.magFilter=ke):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=De,G.map.depthTexture.magFilter=De);G.camera.updateProjectionMatrix()}let st=G.map.isWebGLCubeRenderTarget?6:1;for(let nt=0;nt<st;nt++){if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,nt),i.clear();else{nt===0&&(i.setRenderTarget(G.map),i.clear());let _t=G.getViewport(nt);a.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),N.viewport(a)}if(U.isPointLight){let _t=G.camera,Gt=G.matrix,pe=U.distance||_t.far;pe!==_t.far&&(_t.far=pe,_t.updateProjectionMatrix()),$r.setFromMatrixPosition(U.matrixWorld),_t.position.copy($r),hh.copy(_t.position),hh.add(Cx[nt]),_t.up.copy(Px[nt]),_t.lookAt(hh),_t.updateMatrixWorld(),Gt.makeTranslation(-$r.x,-$r.y,-$r.z),Hd.multiplyMatrices(_t.projectionMatrix,_t.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Hd,_t.coordinateSystem,_t.reversedDepth)}else G.updateMatrices(U);n=G.getFrustum(),x(R,_,G.camera,U,this.type)}G.isPointLightShadow!==!0&&this.type===Fs&&T(G,_),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(S,P,D)};function T(w,R){let _=t.update(M);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new an(s.x,s.y,{format:Ti,type:Gn})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,_,u,M,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,_,f,M,null)}function v(w,R,_,S){let P=null,D=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)P=D;else if(P=_.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let N=P.uuid,b=R.uuid,F=c[N];F===void 0&&(F={},c[N]=F);let L=F[b];L===void 0&&(L=P.clone(),F[b]=L,R.addEventListener("dispose",A)),P=L}if(P.visible=R.visible,P.wireframe=R.wireframe,S===Fs?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:d[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let N=i.properties.get(P);N.light=_}return P}function x(w,R,_,S,P){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Fs)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let b=t.update(w),F=w.material;if(Array.isArray(F)){let L=b.groups;for(let U=0,G=L.length;U<G;U++){let X=L[U],Q=F[X.materialIndex];if(Q&&Q.visible){let st=v(w,Q,S,P);w.onBeforeShadow(i,w,R,_,b,st,X),i.renderBufferDirect(_,null,b,st,w,X),w.onAfterShadow(i,w,R,_,b,st,X)}}}else if(F.visible){let L=v(w,F,S,P);w.onBeforeShadow(i,w,R,_,b,L,null),i.renderBufferDirect(_,null,b,L,w,null),w.onAfterShadow(i,w,R,_,b,L,null)}}let N=w.children;for(let b=0,F=N.length;b<F;b++)x(N[b],R,_,S,P)}function A(w){w.target.removeEventListener("dispose",A);for(let _ in c){let S=c[_],P=w.target.uuid;P in S&&(S[P].dispose(),delete S[P])}}}function Lx(i,t){function e(){let O=!1,ot=new fe,K=null,dt=new fe(0,0,0,0);return{setMask:function(xt){K!==xt&&!O&&(i.colorMask(xt,xt,xt,xt),K=xt)},setLocked:function(xt){O=xt},setClear:function(xt,tt,St,Mt,ge){ge===!0&&(xt*=Mt,tt*=Mt,St*=Mt),ot.set(xt,tt,St,Mt),dt.equals(ot)===!1&&(i.clearColor(xt,tt,St,Mt),dt.copy(ot))},reset:function(){O=!1,K=null,dt.set(-1,0,0,0)}}}function n(){let O=!1,ot=!1,K=null,dt=null,xt=null;return{setReversed:function(tt){if(ot!==tt){let St=t.get("EXT_clip_control");tt?St.clipControlEXT(St.LOWER_LEFT_EXT,St.ZERO_TO_ONE_EXT):St.clipControlEXT(St.LOWER_LEFT_EXT,St.NEGATIVE_ONE_TO_ONE_EXT),ot=tt;let Mt=xt;xt=null,this.setClear(Mt)}},getReversed:function(){return ot},setTest:function(tt){tt?it(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(tt){K!==tt&&!O&&(i.depthMask(tt),K=tt)},setFunc:function(tt){if(ot&&(tt=gd[tt]),dt!==tt){switch(tt){case Va:i.depthFunc(i.NEVER);break;case Ha:i.depthFunc(i.ALWAYS);break;case Ga:i.depthFunc(i.LESS);break;case ki:i.depthFunc(i.LEQUAL);break;case Wa:i.depthFunc(i.EQUAL);break;case Xa:i.depthFunc(i.GEQUAL);break;case qa:i.depthFunc(i.GREATER);break;case Ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=tt}},setLocked:function(tt){O=tt},setClear:function(tt){xt!==tt&&(xt=tt,ot&&(tt=1-tt),i.clearDepth(tt))},reset:function(){O=!1,K=null,dt=null,xt=null,ot=!1}}}function s(){let O=!1,ot=null,K=null,dt=null,xt=null,tt=null,St=null,Mt=null,ge=null;return{setTest:function(le){O||(le?it(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(le){ot!==le&&!O&&(i.stencilMask(le),ot=le)},setFunc:function(le,Ln,Dn){(K!==le||dt!==Ln||xt!==Dn)&&(i.stencilFunc(le,Ln,Dn),K=le,dt=Ln,xt=Dn)},setOp:function(le,Ln,Dn){(tt!==le||St!==Ln||Mt!==Dn)&&(i.stencilOp(le,Ln,Dn),tt=le,St=Ln,Mt=Dn)},setLocked:function(le){O=le},setClear:function(le){ge!==le&&(i.clearStencil(le),ge=le)},reset:function(){O=!1,ot=null,K=null,dt=null,xt=null,tt=null,St=null,Mt=null,ge=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],M=null,p=!1,m=null,T=null,v=null,x=null,A=null,w=null,R=null,_=new Tt(0,0,0),S=0,P=!1,D=null,N=null,b=null,F=null,L=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,X=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Q)[1]),G=X>=1):Q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),G=X>=2);let st=null,nt={},_t=i.getParameter(i.SCISSOR_BOX),Gt=i.getParameter(i.VIEWPORT),pe=new fe().fromArray(_t),jt=new fe().fromArray(Gt);function $(O,ot,K,dt){let xt=new Uint8Array(4),tt=i.createTexture();i.bindTexture(O,tt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let St=0;St<K;St++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(ot+St,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return tt}let lt={};lt[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(i.DEPTH_TEST),a.setFunc(ki),be(!1),Te(Cc),it(i.CULL_FACE),$t(Hn);function it(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Nt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Ft(O,ot){return u[O]!==ot?(i.bindFramebuffer(O,ot),u[O]=ot,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ot),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function Lt(O,ot){let K=g,dt=!1;if(O){K=f.get(ot),K===void 0&&(K=[],f.set(ot,K));let xt=O.textures;if(K.length!==xt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,St=xt.length;tt<St;tt++)K[tt]=i.COLOR_ATTACHMENT0+tt;K.length=xt.length,dt=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,dt=!0);dt&&i.drawBuffers(K)}function ye(O){return M!==O?(i.useProgram(O),M=O,!0):!1}let Wt={[yi]:i.FUNC_ADD,[zu]:i.FUNC_SUBTRACT,[ku]:i.FUNC_REVERSE_SUBTRACT};Wt[Vu]=i.MIN,Wt[Hu]=i.MAX;let re={[Gu]:i.ZERO,[Wu]:i.ONE,[Xu]:i.SRC_COLOR,[za]:i.SRC_ALPHA,[ju]:i.SRC_ALPHA_SATURATE,[Ju]:i.DST_COLOR,[Yu]:i.DST_ALPHA,[qu]:i.ONE_MINUS_SRC_COLOR,[ka]:i.ONE_MINUS_SRC_ALPHA,[Ku]:i.ONE_MINUS_DST_COLOR,[Zu]:i.ONE_MINUS_DST_ALPHA,[$u]:i.CONSTANT_COLOR,[Qu]:i.ONE_MINUS_CONSTANT_COLOR,[td]:i.CONSTANT_ALPHA,[ed]:i.ONE_MINUS_CONSTANT_ALPHA};function $t(O,ot,K,dt,xt,tt,St,Mt,ge,le){if(O===Hn){p===!0&&(Nt(i.BLEND),p=!1);return}if(p===!1&&(it(i.BLEND),p=!0),O!==Bu){if(O!==m||le!==P){if((T!==yi||A!==yi)&&(i.blendEquation(i.FUNC_ADD),T=yi,A=yi),le)switch(O){case zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pc:i.blendFunc(i.ONE,i.ONE);break;case Ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:It("WebGLState: Invalid blending: ",O);break}else switch(O){case zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ic:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lc:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",O);break}v=null,x=null,w=null,R=null,_.set(0,0,0),S=0,m=O,P=le}return}xt=xt||ot,tt=tt||K,St=St||dt,(ot!==T||xt!==A)&&(i.blendEquationSeparate(Wt[ot],Wt[xt]),T=ot,A=xt),(K!==v||dt!==x||tt!==w||St!==R)&&(i.blendFuncSeparate(re[K],re[dt],re[tt],re[St]),v=K,x=dt,w=tt,R=St),(Mt.equals(_)===!1||ge!==S)&&(i.blendColor(Mt.r,Mt.g,Mt.b,ge),_.copy(Mt),S=ge),m=O,P=!1}function Yt(O,ot){O.side===Ne?Nt(i.CULL_FACE):it(i.CULL_FACE);let K=O.side===He;ot&&(K=!K),be(K),O.blending===zi&&O.transparent===!1?$t(Hn):$t(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let dt=O.stencilWrite;o.setTest(dt),dt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Oe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function be(O){D!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),D=O)}function Te(O){O!==Uu?(it(i.CULL_FACE),O!==N&&(O===Cc?i.cullFace(i.BACK):O===Fu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),N=O}function Pe(O){O!==b&&(G&&i.lineWidth(O),b=O)}function Oe(O,ot,K){O?(it(i.POLYGON_OFFSET_FILL),(F!==ot||L!==K)&&(F=ot,L=K,a.getReversed()&&(ot=-ot),i.polygonOffset(ot,K))):Nt(i.POLYGON_OFFSET_FILL)}function me(O){O?it(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function Se(O){O===void 0&&(O=i.TEXTURE0+U-1),st!==O&&(i.activeTexture(O),st=O)}function B(O,ot,K){K===void 0&&(st===null?K=i.TEXTURE0+U-1:K=st);let dt=nt[K];dt===void 0&&(dt={type:void 0,texture:void 0},nt[K]=dt),(dt.type!==O||dt.texture!==ot)&&(st!==K&&(i.activeTexture(K),st=K),i.bindTexture(O,ot||lt[O]),dt.type=O,dt.texture=ot)}function je(){let O=nt[st];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ee(){try{i.compressedTexImage2D(...arguments)}catch(O){It("WebGLState:",O)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(O){It("WebGLState:",O)}}function y(){try{i.texSubImage2D(...arguments)}catch(O){It("WebGLState:",O)}}function k(){try{i.texSubImage3D(...arguments)}catch(O){It("WebGLState:",O)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(O){It("WebGLState:",O)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(O){It("WebGLState:",O)}}function rt(){try{i.texStorage2D(...arguments)}catch(O){It("WebGLState:",O)}}function ct(){try{i.texStorage3D(...arguments)}catch(O){It("WebGLState:",O)}}function J(){try{i.texImage2D(...arguments)}catch(O){It("WebGLState:",O)}}function j(){try{i.texImage3D(...arguments)}catch(O){It("WebGLState:",O)}}function ht(O){return d[O]!==void 0?d[O]:i.getParameter(O)}function Et(O,ot){d[O]!==ot&&(i.pixelStorei(O,ot),d[O]=ot)}function ft(O){pe.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),pe.copy(O))}function ut(O){jt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),jt.copy(O))}function Ct(O,ot){let K=c.get(ot);K===void 0&&(K=new WeakMap,c.set(ot,K));let dt=K.get(O);dt===void 0&&(dt=i.getUniformBlockIndex(ot,O.name),K.set(O,dt))}function Dt(O,ot){let dt=c.get(ot).get(O);l.get(ot)!==dt&&(i.uniformBlockBinding(ot,dt,O.__bindingPointIndex),l.set(ot,dt))}function Ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},st=null,nt={},u={},f=new WeakMap,g=[],M=null,p=!1,m=null,T=null,v=null,x=null,A=null,w=null,R=null,_=new Tt(0,0,0),S=0,P=!1,D=null,N=null,b=null,F=null,L=null,pe.set(0,0,i.canvas.width,i.canvas.height),jt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:Nt,bindFramebuffer:Ft,drawBuffers:Lt,useProgram:ye,setBlending:$t,setMaterial:Yt,setFlipSided:be,setCullFace:Te,setLineWidth:Pe,setPolygonOffset:Oe,setScissorTest:me,activeTexture:Se,bindTexture:B,unbindTexture:je,compressedTexImage2D:ee,compressedTexImage3D:C,texImage2D:J,texImage3D:j,pixelStorei:Et,getParameter:ht,updateUBOMapping:Ct,uniformBlockBinding:Dt,texStorage2D:rt,texStorage3D:ct,texSubImage2D:y,texSubImage3D:k,compressedTexSubImage2D:q,compressedTexSubImage3D:Z,scissor:ft,viewport:ut,reset:Ot}}function Dx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,y){return g?new OffscreenCanvas(C,y):dr("canvas")}function p(C,y,k){let q=1,Z=ee(C);if((Z.width>k||Z.height>k)&&(q=k/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let rt=Math.floor(q*Z.width),ct=Math.floor(q*Z.height);u===void 0&&(u=M(rt,ct));let J=y?M(rt,ct):u;return J.width=rt,J.height=ct,J.getContext("2d").drawImage(C,0,0,rt,ct),Rt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+rt+"x"+ct+")."),J}else return"data"in C&&Rt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function m(C){return C.generateMipmaps}function T(C){i.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(C,y,k,q,Z,rt=!1){if(C!==null){if(i[C]!==void 0)return i[C];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ct;q&&(ct=t.get("EXT_texture_norm16"),ct||Rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=y;if(y===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8),k===i.UNSIGNED_SHORT&&ct&&(J=ct.R16_EXT),k===i.SHORT&&ct&&(J=ct.R16_SNORM_EXT)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),y===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8),k===i.UNSIGNED_SHORT&&ct&&(J=ct.RG16_EXT),k===i.SHORT&&ct&&(J=ct.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),y===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGB8UI),k===i.UNSIGNED_SHORT&&(J=i.RGB16UI),k===i.UNSIGNED_INT&&(J=i.RGB32UI),k===i.BYTE&&(J=i.RGB8I),k===i.SHORT&&(J=i.RGB16I),k===i.INT&&(J=i.RGB32I)),y===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),k===i.UNSIGNED_INT&&(J=i.RGBA32UI),k===i.BYTE&&(J=i.RGBA8I),k===i.SHORT&&(J=i.RGBA16I),k===i.INT&&(J=i.RGBA32I)),y===i.RGB&&(k===i.UNSIGNED_SHORT&&ct&&(J=ct.RGB16_EXT),k===i.SHORT&&ct&&(J=ct.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),y===i.RGBA){let j=rt?ur:Xt.getTransfer(Z);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=j===te?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&ct&&(J=ct.RGBA16_EXT),k===i.SHORT&&ct&&(J=ct.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function A(C,y){let k;return C?y===null||y===Pn||y===Bs?k=i.DEPTH24_STENCIL8:y===_n?k=i.DEPTH32F_STENCIL8:y===Os&&(k=i.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Pn||y===Bs?k=i.DEPTH_COMPONENT24:y===_n?k=i.DEPTH_COMPONENT32F:y===Os&&(k=i.DEPTH_COMPONENT16),k}function w(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==De&&C.minFilter!==ke?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function R(C){let y=C.target;y.removeEventListener("dispose",R),S(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function _(C){let y=C.target;y.removeEventListener("dispose",_),D(y)}function S(C){let y=n.get(C);if(y.__webglInit===void 0)return;let k=C.source,q=f.get(k);if(q){let Z=q[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(C),Object.keys(q).length===0&&f.delete(k)}n.remove(C)}function P(C){let y=n.get(C);i.deleteTexture(y.__webglTexture);let k=C.source,q=f.get(k);delete q[y.__cacheKey],a.memory.textures--}function D(C){let y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let Z=0;Z<y.__webglFramebuffer[q].length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[q][Z]);else i.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)i.deleteFramebuffer(y.__webglFramebuffer[q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let k=C.textures;for(let q=0,Z=k.length;q<Z;q++){let rt=n.get(k[q]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(k[q])}n.remove(C)}let N=0;function b(){N=0}function F(){return N}function L(C){N=C}function U(){let C=N;return C>=s.maxTextures&&Rt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function G(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function X(C,y){let k=n.get(C);if(C.isVideoTexture&&B(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){let q=C.image;if(q===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Nt(k,C,y);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function Q(C,y){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Nt(k,C,y);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function st(C,y){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Nt(k,C,y);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function nt(C,y){let k=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){Ft(k,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}let _t={[Za]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[Ja]:i.MIRRORED_REPEAT},Gt={[De]:i.NEAREST,[sd]:i.NEAREST_MIPMAP_NEAREST,[Gr]:i.NEAREST_MIPMAP_LINEAR,[ke]:i.LINEAR,[No]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},pe={[od]:i.NEVER,[dd]:i.ALWAYS,[ld]:i.LESS,[xl]:i.LEQUAL,[cd]:i.EQUAL,[yl]:i.GEQUAL,[hd]:i.GREATER,[ud]:i.NOTEQUAL};function jt(C,y){if(y.type===_n&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===ke||y.magFilter===No||y.magFilter===Gr||y.magFilter===Ei||y.minFilter===ke||y.minFilter===No||y.minFilter===Gr||y.minFilter===Ei)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,_t[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,_t[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,_t[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Gt[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Gt[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,pe[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===De||y.minFilter!==Gr&&y.minFilter!==Ei||y.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function $(C,y){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",R));let q=y.source,Z=f.get(q);Z===void 0&&(Z={},f.set(q,Z));let rt=G(y);if(rt!==C.__cacheKey){Z[rt]===void 0&&(Z[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Z[rt].usedTimes++;let ct=Z[C.__cacheKey];ct!==void 0&&(Z[C.__cacheKey].usedTimes--,ct.usedTimes===0&&P(y)),C.__cacheKey=rt,C.__webglTexture=Z[rt].texture}return k}function lt(C,y,k){return Math.floor(Math.floor(C/k)/y)}function it(C,y,k,q){let rt=C.updateRanges;if(rt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,k,q,y.data);else{rt.sort((Et,ft)=>Et.start-ft.start);let ct=0;for(let Et=1;Et<rt.length;Et++){let ft=rt[ct],ut=rt[Et],Ct=ft.start+ft.count,Dt=lt(ut.start,y.width,4),Ot=lt(ft.start,y.width,4);ut.start<=Ct+1&&Dt===Ot&&lt(ut.start+ut.count-1,y.width,4)===Dt?ft.count=Math.max(ft.count,ut.start+ut.count-ft.start):(++ct,rt[ct]=ut)}rt.length=ct+1;let J=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),ht=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Et=0,ft=rt.length;Et<ft;Et++){let ut=rt[Et],Ct=Math.floor(ut.start/4),Dt=Math.ceil(ut.count/4),Ot=Ct%y.width,O=Math.floor(Ct/y.width),ot=Dt,K=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,Ot,O,ot,K,k,q,y.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,ht)}}function Nt(C,y,k){let q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=i.TEXTURE_3D);let Z=$(C,y),rt=y.source;e.bindTexture(q,C.__webglTexture,i.TEXTURE0+k);let ct=n.get(rt);if(rt.version!==ct.__version||Z===!0){if(e.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let K=Xt.getPrimaries(Xt.workingColorSpace),dt=y.colorSpace===ai?null:Xt.getPrimaries(y.colorSpace),xt=y.colorSpace===ai||K===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let j=p(y.image,!1,s.maxTextureSize);j=je(y,j);let ht=r.convert(y.format,y.colorSpace),Et=r.convert(y.type),ft=x(y.internalFormat,ht,Et,y.normalized,y.colorSpace,y.isVideoTexture);jt(q,y);let ut,Ct=y.mipmaps,Dt=y.isVideoTexture!==!0,Ot=ct.__version===void 0||Z===!0,O=rt.dataReady,ot=w(y,j);if(y.isDepthTexture)ft=A(y.format===wi,y.type),Ot&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,ft,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,ft,j.width,j.height,0,ht,Et,null));else if(y.isDataTexture)if(Ct.length>0){Dt&&Ot&&e.texStorage2D(i.TEXTURE_2D,ot,ft,Ct[0].width,Ct[0].height);for(let K=0,dt=Ct.length;K<dt;K++)ut=Ct[K],Dt?O&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ut.width,ut.height,ht,Et,ut.data):e.texImage2D(i.TEXTURE_2D,K,ft,ut.width,ut.height,0,ht,Et,ut.data);y.generateMipmaps=!1}else Dt?(Ot&&e.texStorage2D(i.TEXTURE_2D,ot,ft,j.width,j.height),O&&it(y,j,ht,Et)):e.texImage2D(i.TEXTURE_2D,0,ft,j.width,j.height,0,ht,Et,j.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Dt&&Ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ft,Ct[0].width,Ct[0].height,j.depth);for(let K=0,dt=Ct.length;K<dt;K++)if(ut=Ct[K],y.format!==xn)if(ht!==null)if(Dt){if(O)if(y.layerUpdates.size>0){let xt=Qc(ut.width,ut.height,y.format,y.type);for(let tt of y.layerUpdates){let St=ut.data.subarray(tt*xt/ut.data.BYTES_PER_ELEMENT,(tt+1)*xt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,tt,ut.width,ut.height,1,ht,St)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ut.width,ut.height,j.depth,ht,ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,ft,ut.width,ut.height,j.depth,0,ut.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ut.width,ut.height,j.depth,ht,Et,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,ft,ut.width,ut.height,j.depth,0,ht,Et,ut.data)}else{Dt&&Ot&&e.texStorage2D(i.TEXTURE_2D,ot,ft,Ct[0].width,Ct[0].height);for(let K=0,dt=Ct.length;K<dt;K++)ut=Ct[K],y.format!==xn?ht!==null?Dt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,ut.width,ut.height,ht,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,K,ft,ut.width,ut.height,0,ut.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?O&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ut.width,ut.height,ht,Et,ut.data):e.texImage2D(i.TEXTURE_2D,K,ft,ut.width,ut.height,0,ht,Et,ut.data)}else if(y.isDataArrayTexture)if(Dt){if(Ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ft,j.width,j.height,j.depth),O)if(y.layerUpdates.size>0){let K=Qc(j.width,j.height,y.format,y.type);for(let dt of y.layerUpdates){let xt=j.data.subarray(dt*K/j.data.BYTES_PER_ELEMENT,(dt+1)*K/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,dt,j.width,j.height,1,ht,Et,xt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ht,Et,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ft,j.width,j.height,j.depth,0,ht,Et,j.data);else if(y.isData3DTexture)Dt?(Ot&&e.texStorage3D(i.TEXTURE_3D,ot,ft,j.width,j.height,j.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ht,Et,j.data)):e.texImage3D(i.TEXTURE_3D,0,ft,j.width,j.height,j.depth,0,ht,Et,j.data);else if(y.isFramebufferTexture){if(Ot)if(Dt)e.texStorage2D(i.TEXTURE_2D,ot,ft,j.width,j.height);else{let K=j.width,dt=j.height;for(let xt=0;xt<ot;xt++)e.texImage2D(i.TEXTURE_2D,xt,ft,K,dt,0,ht,Et,null),K>>=1,dt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),j.parentNode!==K){K.appendChild(j),d.add(y),K.onpaint=dt=>{let xt=dt.changedElements;for(let tt of d)xt.includes(tt.image)&&(tt.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let xt=i.RGBA,tt=i.RGBA,St=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xt,tt,St,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ct.length>0){if(Dt&&Ot){let K=ee(Ct[0]);e.texStorage2D(i.TEXTURE_2D,ot,ft,K.width,K.height)}for(let K=0,dt=Ct.length;K<dt;K++)ut=Ct[K],Dt?O&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ht,Et,ut):e.texImage2D(i.TEXTURE_2D,K,ft,ht,Et,ut);y.generateMipmaps=!1}else if(Dt){if(Ot){let K=ee(j);e.texStorage2D(i.TEXTURE_2D,ot,ft,K.width,K.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,Et,j)}else e.texImage2D(i.TEXTURE_2D,0,ft,ht,Et,j);m(y)&&T(q),ct.__version=rt.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Ft(C,y,k){if(y.image.length!==6)return;let q=$(C,y),Z=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+k);let rt=n.get(Z);if(Z.version!==rt.__version||q===!0){e.activeTexture(i.TEXTURE0+k);let ct=Xt.getPrimaries(Xt.workingColorSpace),J=y.colorSpace===ai?null:Xt.getPrimaries(y.colorSpace),j=y.colorSpace===ai||ct===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ht=y.isCompressedTexture||y.image[0].isCompressedTexture,Et=y.image[0]&&y.image[0].isDataTexture,ft=[];for(let tt=0;tt<6;tt++)!ht&&!Et?ft[tt]=p(y.image[tt],!0,s.maxCubemapSize):ft[tt]=Et?y.image[tt].image:y.image[tt],ft[tt]=je(y,ft[tt]);let ut=ft[0],Ct=r.convert(y.format,y.colorSpace),Dt=r.convert(y.type),Ot=x(y.internalFormat,Ct,Dt,y.normalized,y.colorSpace),O=y.isVideoTexture!==!0,ot=rt.__version===void 0||q===!0,K=Z.dataReady,dt=w(y,ut);jt(i.TEXTURE_CUBE_MAP,y);let xt;if(ht){O&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Ot,ut.width,ut.height);for(let tt=0;tt<6;tt++){xt=ft[tt].mipmaps;for(let St=0;St<xt.length;St++){let Mt=xt[St];y.format!==xn?Ct!==null?O?K&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,0,0,Mt.width,Mt.height,Ct,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,Ot,Mt.width,Mt.height,0,Mt.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,0,0,Mt.width,Mt.height,Ct,Dt,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,Ot,Mt.width,Mt.height,0,Ct,Dt,Mt.data)}}}else{if(xt=y.mipmaps,O&&ot){xt.length>0&&dt++;let tt=ee(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Ot,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(Et){O?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ft[tt].width,ft[tt].height,Ct,Dt,ft[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ot,ft[tt].width,ft[tt].height,0,Ct,Dt,ft[tt].data);for(let St=0;St<xt.length;St++){let ge=xt[St].image[tt].image;O?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,0,0,ge.width,ge.height,Ct,Dt,ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,Ot,ge.width,ge.height,0,Ct,Dt,ge.data)}}else{O?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ct,Dt,ft[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ot,Ct,Dt,ft[tt]);for(let St=0;St<xt.length;St++){let Mt=xt[St];O?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,0,0,Ct,Dt,Mt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,Ot,Ct,Dt,Mt.image[tt])}}}m(y)&&T(i.TEXTURE_CUBE_MAP),rt.__version=Z.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Lt(C,y,k,q,Z,rt){let ct=r.convert(k.format,k.colorSpace),J=r.convert(k.type),j=x(k.internalFormat,ct,J,k.normalized,k.colorSpace),ht=n.get(y),Et=n.get(k);if(Et.__renderTarget=y,!ht.__hasExternalTextures){let ft=Math.max(1,y.width>>rt),ut=Math.max(1,y.height>>rt);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,rt,j,ft,ut,y.depth,0,ct,J,null):e.texImage2D(Z,rt,j,ft,ut,0,ct,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Se(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Z,Et.__webglTexture,0,me(y)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Z,Et.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(C,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){let q=y.depthTexture,Z=q&&q.isDepthTexture?q.type:null,rt=A(y.stencilBuffer,Z),ct=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Se(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(y),rt,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(y),rt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,rt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,C)}else{let q=y.textures;for(let Z=0;Z<q.length;Z++){let rt=q[Z],ct=r.convert(rt.format,rt.colorSpace),J=r.convert(rt.type),j=x(rt.internalFormat,ct,J,rt.normalized,rt.colorSpace);Se(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(y),j,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(y),j,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,j,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Wt(C,y,k){let q=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(y.depthTexture);if(Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),jt(i.TEXTURE_CUBE_MAP,y.depthTexture);let ht=r.convert(y.depthTexture.format),Et=r.convert(y.depthTexture.type),ft;y.depthTexture.format===On?ft=i.DEPTH_COMPONENT24:y.depthTexture.format===wi&&(ft=i.DEPTH24_STENCIL8);for(let ut=0;ut<6;ut++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ft,y.width,y.height,0,ht,Et,null)}}else X(y.depthTexture,0);let rt=Z.__webglTexture,ct=me(y),J=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,j=y.depthTexture.format===wi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===On)Se(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,rt,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,j,J,rt,0);else if(y.depthTexture.format===wi)Se(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,rt,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,j,J,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(C){let y=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let q=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){let Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=q}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let q=0;q<6;q++)Wt(y.__webglFramebuffer[q],C,q);else{let q=C.texture.mipmaps;q&&q.length>0?Wt(y.__webglFramebuffer[0],C,0):Wt(y.__webglFramebuffer,C,0)}else if(k){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=i.createRenderbuffer(),ye(y.__webglDepthbuffer[q],C,!1);else{let Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=y.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,rt)}}else{let q=C.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ye(y.__webglDepthbuffer,C,!1);else{let Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,rt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(C,y,k){let q=n.get(C);y!==void 0&&Lt(q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&re(C)}function Yt(C){let y=C.texture,k=n.get(C),q=n.get(y);C.addEventListener("dispose",_);let Z=C.textures,rt=C.isWebGLCubeRenderTarget===!0,ct=Z.length>1;if(ct||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=y.version,a.memory.textures++),rt){k.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[J]=[];for(let j=0;j<y.mipmaps.length;j++)k.__webglFramebuffer[J][j]=i.createFramebuffer()}else k.__webglFramebuffer[J]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)k.__webglFramebuffer[J]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ct)for(let J=0,j=Z.length;J<j;J++){let ht=n.get(Z[J]);ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Se(C)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let j=Z[J];k.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[J]);let ht=r.convert(j.format,j.colorSpace),Et=r.convert(j.type),ft=x(j.internalFormat,ht,Et,j.normalized,j.colorSpace,C.isXRRenderTarget===!0),ut=me(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,ft,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,k.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),jt(i.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)Lt(k.__webglFramebuffer[J][j],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,j);else Lt(k.__webglFramebuffer[J],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(y)&&T(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let J=0,j=Z.length;J<j;J++){let ht=Z[J],Et=n.get(ht),ft=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ft=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,Et.__webglTexture),jt(ft,ht),Lt(k.__webglFramebuffer,C,ht,i.COLOR_ATTACHMENT0+J,ft,0),m(ht)&&T(ft)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,q.__webglTexture),jt(J,y),y.mipmaps&&y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)Lt(k.__webglFramebuffer[j],C,y,i.COLOR_ATTACHMENT0,J,j);else Lt(k.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,J,0);m(y)&&T(J),e.unbindTexture()}C.depthBuffer&&re(C)}function be(C){let y=C.textures;for(let k=0,q=y.length;k<q;k++){let Z=y[k];if(m(Z)){let rt=v(C),ct=n.get(Z).__webglTexture;e.bindTexture(rt,ct),T(rt),e.unbindTexture()}}}let Te=[],Pe=[];function Oe(C){if(C.samples>0){if(Se(C)===!1){let y=C.textures,k=C.width,q=C.height,Z=i.COLOR_BUFFER_BIT,rt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(C),J=y.length>1;if(J)for(let ht=0;ht<y.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);let j=C.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ht=0;ht<y.length;ht++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[ht]);let Et=n.get(y[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Et,0)}i.blitFramebuffer(0,0,k,q,0,0,k,q,Z,i.NEAREST),l===!0&&(Te.length=0,Pe.length=0,Te.push(i.COLOR_ATTACHMENT0+ht),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Te.push(rt),Pe.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Pe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let ht=0;ht<y.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,ct.__webglColorRenderbuffer[ht]);let Et=n.get(y[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,Et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function me(C){return Math.min(s.maxSamples,C.samples)}function Se(C){let y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function B(C){let y=a.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function je(C,y){let k=C.colorSpace,q=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==hr&&k!==ai&&(Xt.getTransfer(k)===te?(q!==xn||Z!==Qe)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",k)),y}function ee(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=b,this.getTextureUnits=F,this.setTextureUnits=L,this.setTexture2D=X,this.setTexture2DArray=Q,this.setTexture3D=st,this.setTextureCube=nt,this.rebindTextures=$t,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Se,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Nx(i,t){function e(n,s=ai){let r,a=Xt.getTransfer(s);if(n===Qe)return i.UNSIGNED_BYTE;if(n===Fo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===kc)return i.BYTE;if(n===Vc)return i.SHORT;if(n===Os)return i.UNSIGNED_SHORT;if(n===Uo)return i.INT;if(n===Pn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===Gn)return i.HALF_FLOAT;if(n===Wc)return i.ALPHA;if(n===Xc)return i.RGB;if(n===xn)return i.RGBA;if(n===On)return i.DEPTH_COMPONENT;if(n===wi)return i.DEPTH_STENCIL;if(n===Bo)return i.RED;if(n===zo)return i.RED_INTEGER;if(n===Ti)return i.RG;if(n===ko)return i.RG_INTEGER;if(n===Vo)return i.RGBA_INTEGER;if(n===Wr||n===Xr||n===qr||n===Yr)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ho||n===Go||n===Wo||n===Xo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ho)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qo||n===Yo||n===Zo||n===Jo||n===Ko||n===Zr||n===jo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qo||n===Yo)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Jo)return r.COMPRESSED_R11_EAC;if(n===Ko)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Zr)return r.COMPRESSED_RG11_EAC;if(n===jo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$o||n===Qo||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$o)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===el)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===il)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===al)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ol)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ll)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ul)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dl||n===fl||n===pl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===dl)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ml||n===gl||n===Jr||n===_l)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ml)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ux=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,xh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new wr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ve({vertexShader:Ux,fragmentShader:Fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new An(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yh=class extends wn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,M=typeof XRWebGLBinding<"u",p=new xh,m={},T=e.getContextAttributes(),v=null,x=null,A=[],w=[],R=new at,_=null,S=new ze;S.viewport=new fe;let P=new ze;P.viewport=new fe;let D=[S,P],N=new Co,b=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let lt=A[$];return lt===void 0&&(lt=new Ts,A[$]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function($){let lt=A[$];return lt===void 0&&(lt=new Ts,A[$]=lt),lt.getGripSpace()},this.getHand=function($){let lt=A[$];return lt===void 0&&(lt=new Ts,A[$]=lt),lt.getHandSpace()};function L($){let lt=w.indexOf($.inputSource);if(lt===-1)return;let it=A[lt];it!==void 0&&(it.update($.inputSource,$.frame,c||a),it.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",G);for(let $=0;$<A.length;$++){let lt=w[$];lt!==null&&(w[$]=null,A[$].disconnect(lt))}b=null,F=null,p.reset();for(let $ in m)delete m[$];t.setRenderTarget(v),f=null,u=null,d=null,s=null,x=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",U),s.addEventListener("inputsourceschange",G),T.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,Nt=null,Ft=null;T.depth&&(Ft=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=T.stencil?wi:On,Nt=T.stencil?Bs:Pn);let Lt={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Lt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new an(u.textureWidth,u.textureHeight,{format:xn,type:Qe,depthTexture:new ri(u.textureWidth,u.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let it={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new an(f.framebufferWidth,f.framebufferHeight,{format:xn,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function G($){for(let lt=0;lt<$.removed.length;lt++){let it=$.removed[lt],Nt=w.indexOf(it);Nt>=0&&(w[Nt]=null,A[Nt].disconnect(it))}for(let lt=0;lt<$.added.length;lt++){let it=$.added[lt],Nt=w.indexOf(it);if(Nt===-1){for(let Lt=0;Lt<A.length;Lt++)if(Lt>=w.length){w.push(it),Nt=Lt;break}else if(w[Lt]===null){w[Lt]=it,Nt=Lt;break}if(Nt===-1)break}let Ft=A[Nt];Ft&&Ft.connect(it)}}let X=new I,Q=new I;function st($,lt,it){X.setFromMatrixPosition(lt.matrixWorld),Q.setFromMatrixPosition(it.matrixWorld);let Nt=X.distanceTo(Q),Ft=lt.projectionMatrix.elements,Lt=it.projectionMatrix.elements,ye=Ft[14]/(Ft[10]-1),Wt=Ft[14]/(Ft[10]+1),re=(Ft[9]+1)/Ft[5],$t=(Ft[9]-1)/Ft[5],Yt=(Ft[8]-1)/Ft[0],be=(Lt[8]+1)/Lt[0],Te=ye*Yt,Pe=ye*be,Oe=Nt/(-Yt+be),me=Oe*-Yt;if(lt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(me),$.translateZ(Oe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ft[10]===-1)$.projectionMatrix.copy(lt.projectionMatrix),$.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{let Se=ye+Oe,B=Wt+Oe,je=Te-me,ee=Pe+(Nt-me),C=re*Wt/B*Se,y=$t*Wt/B*Se;$.projectionMatrix.makePerspective(je,ee,C,y,Se,B),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function nt($,lt){lt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(lt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let lt=$.near,it=$.far;p.texture!==null&&(p.depthNear>0&&(lt=p.depthNear),p.depthFar>0&&(it=p.depthFar)),N.near=P.near=S.near=lt,N.far=P.far=S.far=it,(b!==N.near||F!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),b=N.near,F=N.far),N.layers.mask=$.layers.mask|6,S.layers.mask=N.layers.mask&-5,P.layers.mask=N.layers.mask&-3;let Nt=$.parent,Ft=N.cameras;nt(N,Nt);for(let Lt=0;Lt<Ft.length;Lt++)nt(Ft[Lt],Nt);Ft.length===2?st(N,S,P):N.projectionMatrix.copy(S.projectionMatrix),_t($,N,Nt)};function _t($,lt,it){it===null?$.matrix.copy(lt.matrixWorld):($.matrix.copy(it.matrixWorld),$.matrix.invert(),$.matrix.multiply(lt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(lt.projectionMatrix),$.projectionMatrixInverse.copy(lt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ss*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function($){return m[$]};let Gt=null;function pe($,lt){if(h=lt.getViewerPose(c||a),g=lt,h!==null){let it=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Nt=!1;it.length!==N.cameras.length&&(N.cameras.length=0,Nt=!0);for(let Wt=0;Wt<it.length;Wt++){let re=it[Wt],$t=null;if(f!==null)$t=f.getViewport(re);else{let be=d.getViewSubImage(u,re);$t=be.viewport,Wt===0&&(t.setRenderTargetTextures(x,be.colorTexture,be.depthStencilTexture),t.setRenderTarget(x))}let Yt=D[Wt];Yt===void 0&&(Yt=new ze,Yt.layers.enable(Wt),Yt.viewport=new fe,D[Wt]=Yt),Yt.matrix.fromArray(re.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(re.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set($t.x,$t.y,$t.width,$t.height),Wt===0&&(N.matrix.copy(Yt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Nt===!0&&N.cameras.push(Yt)}let Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let Wt=d.getDepthInformation(it[0]);Wt&&Wt.isValid&&Wt.texture&&p.init(Wt,s.renderState)}if(Ft&&Ft.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let Wt=0;Wt<it.length;Wt++){let re=it[Wt].camera;if(re){let $t=m[re];$t||($t=new wr,m[re]=$t);let Yt=d.getCameraImage(re);$t.sourceTexture=Yt}}}}for(let it=0;it<A.length;it++){let Nt=w[it],Ft=A[it];Nt!==null&&Ft!==void 0&&Ft.update(Nt,lt,c||a)}Gt&&Gt($,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),g=null}let jt=new Gd;jt.setAnimationLoop(pe),this.setAnimationLoop=function($){Gt=$},this.dispose=function(){}}},Ox=new Jt,Jd=new Ut;Jd.set(-1,0,0,0,1,0,0,0,1);function Bx(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Kc(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,T,v,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),M(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,T,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===He&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===He&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let T=t.get(m),v=T.envMap,x=T.envMapRotation;v&&(p.envMap.value=v,p.envMapRotation.value.setFromMatrix4(Ox.makeRotationFromEuler(x)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Jd),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,T,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,T){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===He&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function M(p,m){let T=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,A){let w=A.program;n.uniformBlockBinding(x,w)}function c(x,A){let w=s[x.id];w===void 0&&(p(x),w=h(x),s[x.id]=w,x.addEventListener("dispose",T));let R=A.program;n.updateUBOMapping(x,R);let _=t.render.frame;r[x.id]!==_&&(u(x),r[x.id]=_)}function h(x){let A=d();x.__bindingPointIndex=A;let w=i.createBuffer(),R=x.__size,_=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,w),w}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let A=s[x.id],w=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let _=0,S=w.length;_<S;_++){let P=w[_];if(Array.isArray(P))for(let D=0,N=P.length;D<N;D++)f(P[D],_,D,R);else f(P,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,A,w,R){if(M(x,A,w,R)===!0){let _=x.__offset,S=x.value;if(Array.isArray(S)){let P=0;for(let D=0;D<S.length;D++){let N=S[D],b=m(N);g(N,x.__data,P),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(P+=b.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(S,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,x.__data)}}function g(x,A,w){typeof x=="number"||typeof x=="boolean"?A[0]=x:x.isMatrix3?(A[0]=x.elements[0],A[1]=x.elements[1],A[2]=x.elements[2],A[3]=0,A[4]=x.elements[3],A[5]=x.elements[4],A[6]=x.elements[5],A[7]=0,A[8]=x.elements[6],A[9]=x.elements[7],A[10]=x.elements[8],A[11]=0):ArrayBuffer.isView(x)?A.set(new x.constructor(x.buffer,x.byteOffset,A.length)):x.toArray(A,w)}function M(x,A,w,R){let _=x.value,S=A+"_"+w;if(R[S]===void 0)return typeof _=="number"||typeof _=="boolean"?R[S]=_:ArrayBuffer.isView(_)?R[S]=_.slice():R[S]=_.clone(),!0;{let P=R[S];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return R[S]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function p(x){let A=x.uniforms,w=0,R=16;for(let S=0,P=A.length;S<P;S++){let D=Array.isArray(A[S])?A[S]:[A[S]];for(let N=0,b=D.length;N<b;N++){let F=D[N],L=Array.isArray(F.value)?F.value:[F.value];for(let U=0,G=L.length;U<G;U++){let X=L[U],Q=m(X),st=w%R,nt=st%Q.boundary,_t=st+nt;w+=nt,_t!==0&&R-_t<Q.storage&&(w+=R-_t),F.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=w,w+=Q.storage}}}let _=w%R;return _>0&&(w+=R-_),x.__size=w,x.__cache={},this}function m(x){let A={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(A.boundary=4,A.storage=4):x.isVector2?(A.boundary=8,A.storage=8):x.isVector3||x.isColor?(A.boundary=16,A.storage=12):x.isVector4?(A.boundary=16,A.storage=16):x.isMatrix3?(A.boundary=48,A.storage=48):x.isMatrix4?(A.boundary=64,A.storage=64):x.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(A.boundary=16,A.storage=x.byteLength):Rt("WebGLRenderer: Unsupported uniform value type.",x),A}function T(x){let A=x.target;A.removeEventListener("dispose",T);let w=a.indexOf(A.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function v(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:v}}var kx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wn=null;function Vx(){return Wn===null&&(Wn=new Mr(kx,16,16,Ti,Gn),Wn.name="DFG_LUT",Wn.minFilter=ke,Wn.magFilter=ke,Wn.wrapS=Fn,Wn.wrapT=Fn,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}var Sl=class{constructor(t={}){let{canvas:e=fd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Qe}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=f,p=new Set([Vo,ko,zo]),m=new Set([Qe,Pn,Os,Bs,Fo,Oo]),T=new Uint32Array(4),v=new Int32Array(4),x=new I,A=null,w=null,R=[],_=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,N=null,b=null,F=null,L=null;this._outputColorSpace=Be;let U=0,G=0,X=null,Q=-1,st=null,nt=new fe,_t=new fe,Gt=null,pe=new Tt(0),jt=0,$=e.width,lt=e.height,it=1,Nt=null,Ft=null,Lt=new fe(0,0,$,lt),ye=new fe(0,0,$,lt),Wt=!1,re=new Ps,$t=!1,Yt=!1,be=new Jt,Te=new I,Pe=new fe,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},me=!1;function Se(){return X===null?it:1}let B=n;function je(E,z){return e.getContext(E,z)}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",Ln,!1),B===null){let z="webgl2";if(B=je(z,E),B===null)throw je(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw It("WebGLRenderer: "+E.message),E}let ee,C,y,k,q,Z,rt,ct,J,j,ht,Et,ft,ut,Ct,Dt,Ot,O,ot,K,dt,xt,tt;function St(){ee=new Z0(B),ee.init(),dt=new Nx(B,ee),C=new k0(B,ee,t,dt),y=new Lx(B,ee),C.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),b=B.createFramebuffer(),F=B.createFramebuffer(),L=B.createFramebuffer(),k=new j0(B),q=new xx,Z=new Dx(B,ee,y,q,C,dt,k),rt=new Y0(P),ct=new em(B),xt=new B0(B,ct),J=new J0(B,ct,k,xt),j=new Q0(B,J,ct,xt,k),O=new $0(B,C,Z),Ct=new V0(q),ht=new _x(P,rt,ee,C,xt,Ct),Et=new Bx(P,q),ft=new vx,ut=new Tx(ee),Ot=new O0(P,rt,y,j,g,l),Dt=new Ix(P,j,C),tt=new zx(B,k,C,y),ot=new z0(B,ee,k),K=new K0(B,ee,k),k.programs=ht.programs,P.capabilities=C,P.extensions=ee,P.properties=q,P.renderLists=ft,P.shadowMap=Dt,P.state=y,P.info=k}St(),M!==Qe&&(S=new e_(M,e.width,e.height,o,s,r));let Mt=new yh(P,B);this.xr=Mt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let E=ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(E){E!==void 0&&(it=E,this.setSize($,lt,!1))},this.getSize=function(E){return E.set($,lt)},this.setSize=function(E,z,Y=!0){if(Mt.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,lt=z,e.width=Math.floor(E*it),e.height=Math.floor(z*it),Y===!0&&(e.style.width=E+"px",e.style.height=z+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set($*it,lt*it).floor()},this.setDrawingBufferSize=function(E,z,Y){$=E,lt=z,it=Y,e.width=Math.floor(E*Y),e.height=Math.floor(z*Y),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(M===Qe){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){Rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(nt)},this.getViewport=function(E){return E.copy(Lt)},this.setViewport=function(E,z,Y,H){E.isVector4?Lt.set(E.x,E.y,E.z,E.w):Lt.set(E,z,Y,H),y.viewport(nt.copy(Lt).multiplyScalar(it).round())},this.getScissor=function(E){return E.copy(ye)},this.setScissor=function(E,z,Y,H){E.isVector4?ye.set(E.x,E.y,E.z,E.w):ye.set(E,z,Y,H),y.scissor(_t.copy(ye).multiplyScalar(it).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(E){y.setScissorTest(Wt=E)},this.setOpaqueSort=function(E){Nt=E},this.setTransparentSort=function(E){Ft=E},this.getClearColor=function(E){return E.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,Y=!0){let H=0;if(E){let W=!1;if(X!==null){let gt=X.texture.format;W=p.has(gt)}if(W){let gt=X.texture.type,vt=m.has(gt),mt=Ot.getClearColor(),bt=Ot.getClearAlpha(),wt=mt.r,Bt=mt.g,Ht=mt.b;vt?(T[0]=wt,T[1]=Bt,T[2]=Ht,T[3]=bt,B.clearBufferuiv(B.COLOR,0,T)):(v[0]=wt,v[1]=Bt,v[2]=Ht,v[3]=bt,B.clearBufferiv(B.COLOR,0,v))}else H|=B.COLOR_BUFFER_BIT}z&&(H|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&B.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),N=E},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",Ln,!1),Ot.dispose(),ft.dispose(),ut.dispose(),q.dispose(),rt.dispose(),j.dispose(),xt.dispose(),tt.dispose(),ht.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",Gh),Mt.removeEventListener("sessionend",Wh),Li.stop()};function ge(E){E.preventDefault(),fr("WebGLRenderer: Context Lost."),D=!0}function le(){fr("WebGLRenderer: Context Restored."),D=!1;let E=k.autoReset,z=Dt.enabled,Y=Dt.autoUpdate,H=Dt.needsUpdate,W=Dt.type;St(),k.autoReset=E,Dt.enabled=z,Dt.autoUpdate=Y,Dt.needsUpdate=H,Dt.type=W}function Ln(E){It("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Dn(E){let z=E.target;z.removeEventListener("dispose",Dn),Lf(z)}function Lf(E){Df(E),q.remove(E)}function Df(E){let z=q.get(E).programs;z!==void 0&&(z.forEach(function(Y){ht.releaseProgram(Y)}),E.isShaderMaterial&&ht.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,Y,H,W,gt){z===null&&(z=Oe);let vt=W.isMesh&&W.matrixWorld.determinantAffine()<0,mt=Ff(E,z,Y,H,W);y.setMaterial(H,vt);let bt=Y.index,wt=1;if(H.wireframe===!0){if(bt=J.getWireframeAttribute(Y),bt===void 0)return;wt=2}let Bt=Y.drawRange,Ht=Y.attributes.position,At=Bt.start*wt,ie=(Bt.start+Bt.count)*wt;gt!==null&&(At=Math.max(At,gt.start*wt),ie=Math.min(ie,(gt.start+gt.count)*wt)),bt!==null?(At=Math.max(At,0),ie=Math.min(ie,bt.count)):Ht!=null&&(At=Math.max(At,0),ie=Math.min(ie,Ht.count));let ve=ie-At;if(ve<0||ve===1/0)return;xt.setup(W,H,mt,Y,bt);let _e,ae=ot;if(bt!==null&&(_e=ct.get(bt),ae=K,ae.setIndex(_e)),W.isMesh)H.wireframe===!0?(y.setLineWidth(H.wireframeLinewidth*Se()),ae.setMode(B.LINES)):ae.setMode(B.TRIANGLES);else if(W.isLine){let We=H.linewidth;We===void 0&&(We=1),y.setLineWidth(We*Se()),W.isLineSegments?ae.setMode(B.LINES):W.isLineLoop?ae.setMode(B.LINE_LOOP):ae.setMode(B.LINE_STRIP)}else W.isPoints?ae.setMode(B.POINTS):W.isSprite&&ae.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))ae.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let We=W._multiDrawStarts,yt=W._multiDrawCounts,nn=W._multiDrawCount,Zt=bt?ct.get(bt).bytesPerElement:1,ln=q.get(H).currentProgram.getUniforms();for(let Nn=0;Nn<nn;Nn++)ln.setValue(B,"_gl_DrawID",Nn),ae.render(We[Nn]/Zt,yt[Nn])}else if(W.isInstancedMesh)ae.renderInstances(At,ve,W.count);else if(Y.isInstancedBufferGeometry){let We=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,yt=Math.min(Y.instanceCount,We);ae.renderInstances(At,ve,yt)}else ae.render(At,ve)};function Hh(E,z,Y){E.transparent===!0&&E.side===Ne&&E.forceSinglePass===!1?(E.side=He,E.needsUpdate=!0,la(E,z,Y),E.side=ii,E.needsUpdate=!0,la(E,z,Y),E.side=Ne):la(E,z,Y)}this.compile=function(E,z,Y=null){Y===null&&(Y=E),w=ut.get(Y),w.init(z),_.push(w),Y.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),E!==Y&&E.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights();let H=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let gt=W.material;if(gt)if(Array.isArray(gt))for(let vt=0;vt<gt.length;vt++){let mt=gt[vt];Hh(mt,Y,W),H.add(mt)}else Hh(gt,Y,W),H.add(gt)}),w=_.pop(),H},this.compileAsync=function(E,z,Y=null){let H=this.compile(E,z,Y);return new Promise(W=>{function gt(){if(H.forEach(function(vt){q.get(vt).currentProgram.isReady()&&H.delete(vt)}),H.size===0){W(E);return}setTimeout(gt,10)}ee.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Gl=null;function Nf(E){Gl&&Gl(E)}function Gh(){Li.stop()}function Wh(){Li.start()}let Li=new Gd;Li.setAnimationLoop(Nf),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(E){Gl=E,Mt.setAnimationLoop(E),E===null?Li.stop():Li.start()},Mt.addEventListener("sessionstart",Gh),Mt.addEventListener("sessionend",Wh),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(E,z);let Y=Mt.enabled===!0&&Mt.isPresenting===!0,H=S!==null&&(X===null||Y)&&S.begin(P,X);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(z),z=Mt.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,z,X),w=ut.get(E,_.length),w.init(z),w.state.textureUnits=Z.getTextureUnits(),_.push(w),be.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),re.setFromProjectionMatrix(be,En,z.reversedDepth),Yt=this.localClippingEnabled,$t=Ct.init(this.clippingPlanes,Yt),A=ft.get(E,R.length),A.init(),R.push(A),Mt.enabled===!0&&Mt.isPresenting===!0){let vt=P.xr.getDepthSensingMesh();vt!==null&&Wl(vt,z,-1/0,P.sortObjects)}Wl(E,z,0,P.sortObjects),A.finish(),P.sortObjects===!0&&A.sort(Nt,Ft,z.reversedDepth),me=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,me&&Ot.addToRenderList(A,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$t===!0&&Ct.beginShadows();let W=w.state.shadowsArray;if(Dt.render(W,E,z),$t===!0&&Ct.endShadows(),(H&&S.hasRenderPass())===!1){let vt=A.opaque,mt=A.transmissive;if(w.setupLights(),z.isArrayCamera){let bt=z.cameras;if(mt.length>0)for(let wt=0,Bt=bt.length;wt<Bt;wt++){let Ht=bt[wt];qh(vt,mt,E,Ht)}me&&Ot.render(E);for(let wt=0,Bt=bt.length;wt<Bt;wt++){let Ht=bt[wt];Xh(A,E,Ht,Ht.viewport)}}else mt.length>0&&qh(vt,mt,E,z),me&&Ot.render(E),Xh(A,E,z)}X!==null&&G===0&&(Z.updateMultisampleRenderTarget(X),Z.updateRenderTargetMipmap(X)),H&&S.end(P),E.isScene===!0&&E.onAfterRender(P,E,z),xt.resetDefaultState(),Q=-1,st=null,_.pop(),_.length>0?(w=_[_.length-1],Z.setTextureUnits(w.state.textureUnits),$t===!0&&Ct.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?A=R[R.length-1]:A=null,N!==null&&N.renderEnd()};function Wl(E,z,Y,H){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||re.intersectsSprite(E)){H&&Pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(be);let vt=j.update(E),mt=E.material;mt.visible&&A.push(E,vt,mt,Y,Pe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||re.intersectsObject(E))){let vt=j.update(E),mt=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pe.copy(E.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Pe.copy(vt.boundingSphere.center)),Pe.applyMatrix4(E.matrixWorld).applyMatrix4(be)),Array.isArray(mt)){let bt=vt.groups;for(let wt=0,Bt=bt.length;wt<Bt;wt++){let Ht=bt[wt],At=mt[Ht.materialIndex];At&&At.visible&&A.push(E,vt,At,Y,Pe.z,Ht)}}else mt.visible&&A.push(E,vt,mt,Y,Pe.z,null)}}let gt=E.children;for(let vt=0,mt=gt.length;vt<mt;vt++)Wl(gt[vt],z,Y,H)}function Xh(E,z,Y,H){let{opaque:W,transmissive:gt,transparent:vt}=E;w.setupLightsView(Y),$t===!0&&Ct.setGlobalState(P.clippingPlanes,Y),H&&y.viewport(nt.copy(H)),W.length>0&&oa(W,z,Y),gt.length>0&&oa(gt,z,Y),vt.length>0&&oa(vt,z,Y),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function qh(E,z,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let At=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new an(1,1,{generateMipmaps:!0,type:At?Gn:Qe,minFilter:Ei,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace})}let gt=w.state.transmissionRenderTarget[H.id],vt=H.viewport||nt;gt.setSize(vt.z*P.transmissionResolutionScale,vt.w*P.transmissionResolutionScale);let mt=P.getRenderTarget(),bt=P.getActiveCubeFace(),wt=P.getActiveMipmapLevel();P.setRenderTarget(gt),P.getClearColor(pe),jt=P.getClearAlpha(),jt<1&&P.setClearColor(16777215,.5),P.clear(),me&&Ot.render(Y);let Bt=P.toneMapping;P.toneMapping=Cn;let Ht=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),$t===!0&&Ct.setGlobalState(P.clippingPlanes,H),oa(E,Y,H),Z.updateMultisampleRenderTarget(gt),Z.updateRenderTargetMipmap(gt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let ie=0,ve=z.length;ie<ve;ie++){let _e=z[ie],{object:ae,geometry:We,material:yt,group:nn}=_e;if(yt.side===Ne&&ae.layers.test(H.layers)){let Zt=yt.side;yt.side=He,yt.needsUpdate=!0,Yh(ae,Y,H,We,yt,nn),yt.side=Zt,yt.needsUpdate=!0,At=!0}}At===!0&&(Z.updateMultisampleRenderTarget(gt),Z.updateRenderTargetMipmap(gt))}P.setRenderTarget(mt,bt,wt),P.setClearColor(pe,jt),Ht!==void 0&&(H.viewport=Ht),P.toneMapping=Bt}function oa(E,z,Y){let H=z.isScene===!0?z.overrideMaterial:null;for(let W=0,gt=E.length;W<gt;W++){let vt=E[W],{object:mt,geometry:bt,group:wt}=vt,Bt=vt.material;Bt.allowOverride===!0&&H!==null&&(Bt=H),mt.layers.test(Y.layers)&&Yh(mt,z,Y,bt,Bt,wt)}}function Yh(E,z,Y,H,W,gt){E.onBeforeRender(P,z,Y,H,W,gt),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(P,z,Y,H,E,gt),W.transparent===!0&&W.side===Ne&&W.forceSinglePass===!1?(W.side=He,W.needsUpdate=!0,P.renderBufferDirect(Y,z,H,W,E,gt),W.side=ii,W.needsUpdate=!0,P.renderBufferDirect(Y,z,H,W,E,gt),W.side=Ne):P.renderBufferDirect(Y,z,H,W,E,gt),E.onAfterRender(P,z,Y,H,W,gt)}function la(E,z,Y){z.isScene!==!0&&(z=Oe);let H=q.get(E),W=w.state.lights,gt=w.state.shadowsArray,vt=W.state.version,mt=ht.getParameters(E,W.state,gt,z,Y,w.state.lightProbeGridArray),bt=ht.getProgramCacheKey(mt),wt=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,H.fog=z.fog;let Bt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=rt.get(E.envMap||H.environment,Bt),H.envMapRotation=H.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,wt===void 0&&(E.addEventListener("dispose",Dn),wt=new Map,H.programs=wt);let Ht=wt.get(bt);if(Ht!==void 0){if(H.currentProgram===Ht&&H.lightsStateVersion===vt)return Jh(E,mt),Ht}else mt.uniforms=ht.getUniforms(E),N!==null&&E.isNodeMaterial&&N.build(E,Y,mt),E.onBeforeCompile(mt,P),Ht=ht.acquireProgram(mt,bt),wt.set(bt,Ht),H.uniforms=mt.uniforms;let At=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(At.clippingPlanes=Ct.uniform),Jh(E,mt),H.needsLights=Bf(E),H.lightsStateVersion=vt,H.needsLights&&(At.ambientLightColor.value=W.state.ambient,At.lightProbe.value=W.state.probe,At.directionalLights.value=W.state.directional,At.directionalLightShadows.value=W.state.directionalShadow,At.spotLights.value=W.state.spot,At.spotLightShadows.value=W.state.spotShadow,At.rectAreaLights.value=W.state.rectArea,At.ltc_1.value=W.state.rectAreaLTC1,At.ltc_2.value=W.state.rectAreaLTC2,At.pointLights.value=W.state.point,At.pointLightShadows.value=W.state.pointShadow,At.hemisphereLights.value=W.state.hemi,At.directionalShadowMatrix.value=W.state.directionalShadowMatrix,At.spotLightMatrix.value=W.state.spotLightMatrix,At.spotLightMap.value=W.state.spotLightMap,At.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=w.state.lightProbeGridArray.length>0,H.currentProgram=Ht,H.uniformsList=null,Ht}function Zh(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=ks.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Jh(E,z){let Y=q.get(E);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function Uf(E,z){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;x.setFromMatrixPosition(z.matrixWorld);for(let Y=0,H=E.length;Y<H;Y++){let W=E[Y];if(W.texture!==null&&W.boundingBox.containsPoint(x))return W}return null}function Ff(E,z,Y,H,W){z.isScene!==!0&&(z=Oe),Z.resetTextureUnits();let gt=z.fog,vt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?z.environment:null,mt=X===null?P.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Xt.workingColorSpace,bt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,wt=rt.get(H.envMap||vt,bt),Bt=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ht=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),At=!!Y.morphAttributes.position,ie=!!Y.morphAttributes.normal,ve=!!Y.morphAttributes.color,_e=Cn;H.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(_e=P.toneMapping);let ae=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,We=ae!==void 0?ae.length:0,yt=q.get(H),nn=w.state.lights;if($t===!0&&(Yt===!0||E!==st)){let ce=E===st&&H.id===Q;Ct.setState(H,E,ce)}let Zt=!1;H.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==nn.state.version||yt.outputColorSpace!==mt||W.isBatchedMesh&&yt.batching===!1||!W.isBatchedMesh&&yt.batching===!0||W.isBatchedMesh&&yt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&yt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&yt.instancing===!1||!W.isInstancedMesh&&yt.instancing===!0||W.isSkinnedMesh&&yt.skinning===!1||!W.isSkinnedMesh&&yt.skinning===!0||W.isInstancedMesh&&yt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&yt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&yt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&yt.instancingMorph===!1&&W.morphTexture!==null||yt.envMap!==wt||H.fog===!0&&yt.fog!==gt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Ct.numPlanes||yt.numIntersection!==Ct.numIntersection)||yt.vertexAlphas!==Bt||yt.vertexTangents!==Ht||yt.morphTargets!==At||yt.morphNormals!==ie||yt.morphColors!==ve||yt.toneMapping!==_e||yt.morphTargetsCount!==We||!!yt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Zt=!0):(Zt=!0,yt.__version=H.version);let ln=yt.currentProgram;Zt===!0&&(ln=la(H,z,W),N&&H.isNodeMaterial&&N.onUpdateProgram(H,ln,yt));let Nn=!1,hi=!1,es=!1,oe=ln.getUniforms(),Me=yt.uniforms;if(y.useProgram(ln.program)&&(Nn=!0,hi=!0,es=!0),H.id!==Q&&(Q=H.id,hi=!0),yt.needsLights){let ce=Uf(w.state.lightProbeGridArray,W);yt.lightProbeGrid!==ce&&(yt.lightProbeGrid=ce,hi=!0)}if(Nn||st!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),oe.setValue(B,"projectionMatrix",E.projectionMatrix),oe.setValue(B,"viewMatrix",E.matrixWorldInverse);let di=oe.map.cameraPosition;di!==void 0&&di.setValue(B,Te.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&oe.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&oe.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),st!==E&&(st=E,hi=!0,es=!0)}if(yt.needsLights&&(nn.state.directionalShadowMap.length>0&&oe.setValue(B,"directionalShadowMap",nn.state.directionalShadowMap,Z),nn.state.spotShadowMap.length>0&&oe.setValue(B,"spotShadowMap",nn.state.spotShadowMap,Z),nn.state.pointShadowMap.length>0&&oe.setValue(B,"pointShadowMap",nn.state.pointShadowMap,Z)),W.isSkinnedMesh){oe.setOptional(B,W,"bindMatrix"),oe.setOptional(B,W,"bindMatrixInverse");let ce=W.skeleton;ce&&(ce.boneTexture===null&&ce.computeBoneTexture(),oe.setValue(B,"boneTexture",ce.boneTexture,Z))}W.isBatchedMesh&&(oe.setOptional(B,W,"batchingTexture"),oe.setValue(B,"batchingTexture",W._matricesTexture,Z),oe.setOptional(B,W,"batchingIdTexture"),oe.setValue(B,"batchingIdTexture",W._indirectTexture,Z),oe.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&oe.setValue(B,"batchingColorTexture",W._colorsTexture,Z));let ui=Y.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&O.update(W,Y,ln),(hi||yt.receiveShadow!==W.receiveShadow)&&(yt.receiveShadow=W.receiveShadow,oe.setValue(B,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&z.environment!==null&&(Me.envMapIntensity.value=z.environmentIntensity),Me.dfgLUT!==void 0&&(Me.dfgLUT.value=Vx()),hi){if(oe.setValue(B,"toneMappingExposure",P.toneMappingExposure),yt.needsLights&&Of(Me,es),gt&&H.fog===!0&&Et.refreshFogUniforms(Me,gt),Et.refreshMaterialUniforms(Me,H,it,lt,w.state.transmissionRenderTarget[E.id]),yt.needsLights&&yt.lightProbeGrid){let ce=yt.lightProbeGrid;Me.probesSH.value=ce.texture,Me.probesMin.value.copy(ce.boundingBox.min),Me.probesMax.value.copy(ce.boundingBox.max),Me.probesResolution.value.copy(ce.resolution)}ks.upload(B,Zh(yt),Me,Z)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ks.upload(B,Zh(yt),Me,Z),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&oe.setValue(B,"center",W.center),oe.setValue(B,"modelViewMatrix",W.modelViewMatrix),oe.setValue(B,"normalMatrix",W.normalMatrix),oe.setValue(B,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){let ce=H.uniformsGroups;for(let di=0,ns=ce.length;di<ns;di++){let Kh=ce[di];tt.update(Kh,ln),tt.bind(Kh,ln)}}return ln}function Of(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Bf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(E,z,Y){let H=q.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),q.get(E.texture).__webglTexture=z,q.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){let Y=q.get(E);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,Y=0){X=E,U=z,G=Y;let H=null,W=!1,gt=!1;if(E){let mt=q.get(E);if(mt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(B.FRAMEBUFFER,mt.__webglFramebuffer),nt.copy(E.viewport),_t.copy(E.scissor),Gt=E.scissorTest,y.viewport(nt),y.scissor(_t),y.setScissorTest(Gt),Q=-1;return}else if(mt.__webglFramebuffer===void 0)Z.setupRenderTarget(E);else if(mt.__hasExternalTextures)Z.rebindTextures(E,q.get(E.texture).__webglTexture,q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Bt=E.depthTexture;if(mt.__boundDepthTexture!==Bt){if(Bt!==null&&q.has(Bt)&&(E.width!==Bt.image.width||E.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(E)}}let bt=E.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(gt=!0);let wt=q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(wt[z])?H=wt[z][Y]:H=wt[z],W=!0):E.samples>0&&Z.useMultisampledRTT(E)===!1?H=q.get(E).__webglMultisampledFramebuffer:Array.isArray(wt)?H=wt[Y]:H=wt,nt.copy(E.viewport),_t.copy(E.scissor),Gt=E.scissorTest}else nt.copy(Lt).multiplyScalar(it).floor(),_t.copy(ye).multiplyScalar(it).floor(),Gt=Wt;if(Y!==0&&(H=b),y.bindFramebuffer(B.FRAMEBUFFER,H)&&y.drawBuffers(E,H),y.viewport(nt),y.scissor(_t),y.setScissorTest(Gt),W){let mt=q.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,mt.__webglTexture,Y)}else if(gt){let mt=z;for(let bt=0;bt<E.textures.length;bt++){let wt=q.get(E.textures[bt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+bt,wt.__webglTexture,Y,mt)}}else if(E!==null&&Y!==0){let mt=q.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,mt.__webglTexture,Y)}Q=-1},this.readRenderTargetPixels=function(E,z,Y,H,W,gt,vt,mt=0){if(!(E&&E.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&vt!==void 0&&(bt=bt[vt]),bt){y.bindFramebuffer(B.FRAMEBUFFER,bt);try{let wt=E.textures[mt],Bt=wt.format,Ht=wt.type;if(E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+mt),!C.textureFormatReadable(Bt)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(Ht)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-H&&Y>=0&&Y<=E.height-W&&B.readPixels(z,Y,H,W,dt.convert(Bt),dt.convert(Ht),gt)}finally{let wt=X!==null?q.get(X).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(E,z,Y,H,W,gt,vt,mt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&vt!==void 0&&(bt=bt[vt]),bt)if(z>=0&&z<=E.width-H&&Y>=0&&Y<=E.height-W){y.bindFramebuffer(B.FRAMEBUFFER,bt);let wt=E.textures[mt],Bt=wt.format,Ht=wt.type;if(E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+mt),!C.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let At=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,At),B.bufferData(B.PIXEL_PACK_BUFFER,gt.byteLength,B.STREAM_READ),B.readPixels(z,Y,H,W,dt.convert(Bt),dt.convert(Ht),0);let ie=X!==null?q.get(X).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,ie);let ve=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await md(B,ve,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,At),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,gt),B.deleteBuffer(At),B.deleteSync(ve),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,Y=0){let H=Math.pow(2,-Y),W=Math.floor(E.image.width*H),gt=Math.floor(E.image.height*H),vt=z!==null?z.x:0,mt=z!==null?z.y:0;Z.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,vt,mt,W,gt),y.unbindTexture()},this.copyTextureToTexture=function(E,z,Y=null,H=null,W=0,gt=0){let vt,mt,bt,wt,Bt,Ht,At,ie,ve,_e=E.isCompressedTexture?E.mipmaps[gt]:E.image;if(Y!==null)vt=Y.max.x-Y.min.x,mt=Y.max.y-Y.min.y,bt=Y.isBox3?Y.max.z-Y.min.z:1,wt=Y.min.x,Bt=Y.min.y,Ht=Y.isBox3?Y.min.z:0;else{let Me=Math.pow(2,-W);vt=Math.floor(_e.width*Me),mt=Math.floor(_e.height*Me),E.isDataArrayTexture?bt=_e.depth:E.isData3DTexture?bt=Math.floor(_e.depth*Me):bt=1,wt=0,Bt=0,Ht=0}H!==null?(At=H.x,ie=H.y,ve=H.z):(At=0,ie=0,ve=0);let ae=dt.convert(z.format),We=dt.convert(z.type),yt;z.isData3DTexture?(Z.setTexture3D(z,0),yt=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Z.setTexture2DArray(z,0),yt=B.TEXTURE_2D_ARRAY):(Z.setTexture2D(z,0),yt=B.TEXTURE_2D),y.activeTexture(B.TEXTURE0),y.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);let nn=y.getParameter(B.UNPACK_ROW_LENGTH),Zt=y.getParameter(B.UNPACK_IMAGE_HEIGHT),ln=y.getParameter(B.UNPACK_SKIP_PIXELS),Nn=y.getParameter(B.UNPACK_SKIP_ROWS),hi=y.getParameter(B.UNPACK_SKIP_IMAGES);y.pixelStorei(B.UNPACK_ROW_LENGTH,_e.width),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_e.height),y.pixelStorei(B.UNPACK_SKIP_PIXELS,wt),y.pixelStorei(B.UNPACK_SKIP_ROWS,Bt),y.pixelStorei(B.UNPACK_SKIP_IMAGES,Ht);let es=E.isDataArrayTexture||E.isData3DTexture,oe=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){let Me=q.get(E),ui=q.get(z),ce=q.get(Me.__renderTarget),di=q.get(ui.__renderTarget);y.bindFramebuffer(B.READ_FRAMEBUFFER,ce.__webglFramebuffer),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let ns=0;ns<bt;ns++)es&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(E).__webglTexture,W,Ht+ns),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(z).__webglTexture,gt,ve+ns)),B.blitFramebuffer(wt,Bt,vt,mt,At,ie,vt,mt,B.DEPTH_BUFFER_BIT,B.NEAREST);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||q.has(E)){let Me=q.get(E),ui=q.get(z);y.bindFramebuffer(B.READ_FRAMEBUFFER,F),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,L);for(let ce=0;ce<bt;ce++)es?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Me.__webglTexture,W,Ht+ce):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Me.__webglTexture,W),oe?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ui.__webglTexture,gt,ve+ce):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ui.__webglTexture,gt),W!==0?B.blitFramebuffer(wt,Bt,vt,mt,At,ie,vt,mt,B.COLOR_BUFFER_BIT,B.NEAREST):oe?B.copyTexSubImage3D(yt,gt,At,ie,ve+ce,wt,Bt,vt,mt):B.copyTexSubImage2D(yt,gt,At,ie,wt,Bt,vt,mt);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else oe?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(yt,gt,At,ie,ve,vt,mt,bt,ae,We,_e.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(yt,gt,At,ie,ve,vt,mt,bt,ae,_e.data):B.texSubImage3D(yt,gt,At,ie,ve,vt,mt,bt,ae,We,_e):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,gt,At,ie,vt,mt,ae,We,_e.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,gt,At,ie,_e.width,_e.height,ae,_e.data):B.texSubImage2D(B.TEXTURE_2D,gt,At,ie,vt,mt,ae,We,_e);y.pixelStorei(B.UNPACK_ROW_LENGTH,nn),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Zt),y.pixelStorei(B.UNPACK_SKIP_PIXELS,ln),y.pixelStorei(B.UNPACK_SKIP_ROWS,Nn),y.pixelStorei(B.UNPACK_SKIP_IMAGES,hi),gt===0&&z.generateMipmaps&&B.generateMipmap(yt),y.unbindTexture()},this.initRenderTarget=function(E){q.get(E).__webglFramebuffer===void 0&&Z.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Z.setTextureCube(E,0):E.isData3DTexture?Z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Z.setTexture2DArray(E,0):Z.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){U=0,G=0,X=null,y.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}};var Kd={type:"change"},Mh={type:"start"},$d={type:"end"},Tl=new si,jd=new hn,Hx=Math.cos(70*oi.DEG2RAD),Ce=new I,tn=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vh=1e-6,Al=class extends kr{constructor(t,e=null){super(t,e),this.state=se.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gn.ROTATE,MIDDLE:gn.DOLLY,RIGHT:gn.PAN},this.touches={ONE:Rn.ROTATE,TWO:Rn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Je,this._lastTargetPosition=new I,this._quat=new Je().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Us,this._sphericalDelta=new Us,this._scale=1,this._panOffset=new I,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new I,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Wx.bind(this),this._onPointerDown=Gx.bind(this),this._onPointerUp=Xx.bind(this),this._onContextMenu=$x.bind(this),this._onMouseWheel=Zx.bind(this),this._onKeyDown=Jx.bind(this),this._onTouchStart=Kx.bind(this),this._onTouchMove=jx.bind(this),this._onMouseDown=qx.bind(this),this._onMouseMove=Yx.bind(this),this._interceptControlDown=Qx.bind(this),this._interceptControlUp=ty.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Kd),this.update(),this.state=se.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ce.copy(e).sub(this.target),Ce.applyQuaternion(this._quat),this._spherical.setFromVector3(Ce),this.autoRotate&&this.state===se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=tn:n>Math.PI&&(n-=tn),s<-Math.PI?s+=tn:s>Math.PI&&(s-=tn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ce.setFromSpherical(this._spherical),Ce.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ce),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ce.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ce.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Tl.origin.copy(this.object.position),Tl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Tl.direction))<Hx?this.object.lookAt(this.target):(jd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Tl.intersectPlane(jd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>vh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vh||this._lastTargetPosition.distanceToSquared(this.target)>vh?(this.dispatchEvent(Kd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?tn/60*this.autoRotateSpeed*t:tn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ce.setFromMatrixColumn(e,0),Ce.multiplyScalar(-t),this._panOffset.add(Ce)}_panUp(t,e){this.screenSpacePanning===!0?Ce.setFromMatrixColumn(e,1):(Ce.setFromMatrixColumn(e,0),Ce.crossVectors(this.object.up,Ce)),Ce.multiplyScalar(t),this._panOffset.add(Ce)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ce.copy(s).sub(this.target);let r=Ce.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new at,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Gx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Wx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Xx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($d),this.state=se.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function qx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case gn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=se.DOLLY;break;case gn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}break;case gn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Mh)}function Yx(i){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Zx(i){this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE||(i.preventDefault(),this.dispatchEvent(Mh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent($d))}function Jx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Kx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Rn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=se.TOUCH_ROTATE;break;case Rn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case Rn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=se.TOUCH_DOLLY_PAN;break;case Rn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Mh)}function jx(i){switch(this._trackPointer(i),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=se.NONE}}function $x(i){this.enabled!==!1&&i.preventDefault()}function Qx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ty(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Rl=class extends Vi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new $e;t.deleteAttribute("uv");let e=new Kt({side:He}),n=new Kt,s=new Or(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new qt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Tn(t,n,6),o=new he;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new qt(t,Gs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new qt(t,Gs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new qt(t,Gs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new qt(t,Gs(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new qt(t,Gs(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new qt(t,Gs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Gs(i){return new Dr({color:0,emissive:16777215,emissiveIntensity:i})}var ji=310,$i=220,Ri=(i,t,e)=>i+(t-i)*e,Xs=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),qn=(i,t,e)=>{let n=Xs((e-i)/(t-i));return n*n*(3-2*n)};function Cl(i,t){let e=Math.sin(i*127.1+t*311.7)*43758.5453123;return e-Math.floor(e)}function Pl(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,a=s*s*(3-2*s),o=r*r*(3-2*r);return Ri(Ri(Cl(e,n),Cl(e+1,n),a),Ri(Cl(e,n+1),Cl(e+1,n+1),a),o)}function ea(i,t){let e=0,n=.55;for(let s=0;s<5;s++)e+=Pl(i,t)*n,i=i*2.08+31.6,t=t*2.08-16.2,n*=.49;return e}var li={jing:{x:14,z:26},yi:{x:-65,z:51},han:{x:-48,z:3},long:{x:-68,z:-52},guan:{x:-16,z:-27},north:{x:55,z:-51},wu:{x:104,z:42}},ey=[{name:"\u957F\u6C5F",width:2.5,points:[[-160,71],[-137,55],[-117,60],[-100,69],[-82,59],[-64,41],[-44,48],[-22,35],[0,39],[27,41],[52,40],[75,51],[104,59],[136,45],[165,49]]},{name:"\u9EC4\u6CB3",width:1.6,points:[[-120,-70],[-107,-87],[-84,-92],[-57,-82],[-51,-63],[-33,-50],[-19,-61],[2,-76],[24,-69],[38,-48],[65,-33],[90,-26],[121,-25],[165,-41]]}],Qd=ey.map(i=>({...i,curve:new kn(i.points.map(([t,e])=>new I(t,0,e)),!1,"catmullrom",.45)})),ny=Qd.map(i=>({width:i.width,points:i.curve.getPoints(180)}));function iy(i,t){let e=1/0,n=2.5;for(let s of ny)for(let r=0;r<s.points.length-1;r++){let a=s.points[r],o=s.points[r+1],l=o.x-a.x,c=o.z-a.z,h=Xs(((i-a.x)*l+(t-a.z)*c)/(l*l+c*c)),d=Math.hypot(i-a.x-l*h,t-a.z-c*h);d<e&&(e=d,n=s.width)}return{distance:e,width:n}}function tf(i,t){let e=ea(i*.022,t*.022)*12,n=ea(i*.035,t*.035),s=1-Math.abs(2*ea(i*.033+9,t*.033)-1),r=Math.exp(-Math.pow((t-(-12+Math.sin(i*.035)*5))/(7.5+e*.3),2))*qn(48,5,i)*qn(-146,-100,i),a=Math.exp(-Math.pow((i+129+Math.sin(t*.05)*9)/17,2)),o=Math.exp(-Math.pow((t+91+Math.sin(i*.04)*11)/20,2))*.85,l=Math.exp(-((i+99)**2/1100+(t-83)**2/470)),c=Math.exp(-((i-75)**2/1900+(t-5)**2/400))*.42,h=(r*25+a*31+o*31+l*22+c*18)*(Math.pow(s,2.2)*.8+.3)*(n*.75+.6),d=Math.abs(Pl(i*.16+e,t*.16)-.5)*1.4;return 3.5+n*5.5+h-d*Math.min(1,h/10)}var sy=Object.fromEntries(Object.entries(li).map(([i,t])=>[i,Math.min(8,tf(t.x,t.z))]));function ef(i,t){let e=tf(i,t),n=iy(i,t);e=Ri(1.05,e,qn(n.width*.72,n.width+4.5,n.distance));for(let[r,a]of Object.entries(li)){let o=Math.hypot(i-a.x,t-a.z);o<11&&(e=Ri(sy[r],e,qn(7,11,o)))}let s=Math.min(ji/2-Math.abs(i),$i/2-Math.abs(t));return e*=qn(0,9,s),e}var Ki,Ws=320,na=226;function Ue(i,t){if(!Ki)return ef(i,t);let e=Xs((i/ji+.5)*Ws,0,Ws-.001),n=Xs((t/$i+.5)*na,0,na-.001),s=Math.floor(e),r=Math.floor(n),a=e-s,o=n-r,l=Ws+1;return Ri(Ri(Ki[r*l+s],Ki[r*l+s+1],a),Ri(Ki[(r+1)*l+s],Ki[(r+1)*l+s+1],a),o)}function nf(i,t=!1){Ws=t?260:360,na=t?184:255,Ki=new Float32Array((Ws+1)*(na+1));let e=new An(ji,$i,Ws,na);e.rotateX(-Math.PI/2);let n=e.attributes.position,s=new Float32Array(n.count*3),r=new Tt;for(let p=0;p<n.count;p++){let m=n.getX(p),T=n.getZ(p),v=ef(m,T);n.setY(p,v),Ki[p]=v}e.computeVertexNormals();let a=e.attributes.normal,o=new Tt("#799565"),l=new Tt("#a1a778"),c=new Tt("#526d50"),h=new Tt("#8e9585"),d=new Tt("#dae0ce"),u=new Tt("#b6b192");for(let p=0;p<n.count;p++){let m=n.getX(p),T=n.getZ(p),v=n.getY(p),x=1-a.getY(p),A=ea(m*.19,T*.19);r.copy(o).lerp(l,qn(.35,.7,A)*.7).lerp(c,qn(.4,.7,ea(m*.08+6,T*.08))*.45),r.lerp(h,qn(.12,.55,x)*.94),r.lerp(d,qn(27,38,v)*.78),v<2.8&&r.lerp(u,(1-qn(1,2.8,v))*.9),r.multiplyScalar(.86+A*.28),s.set([r.r,r.g,r.b],p*3)}e.setAttribute("color",new de(s,3));let f=new Kt({vertexColors:!0,roughness:.96,metalness:0});f.onBeforeCompile=p=>{p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTerrainWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTerrainWorld=position;`),p.fragmentShader=p.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vTerrainWorld;
      float terrainHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
      float terrainNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(terrainHash(i),terrainHash(i+vec3(1,0,0)),f.x),mix(terrainHash(i+vec3(0,1,0)),terrainHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(terrainHash(i+vec3(0,0,1)),terrainHash(i+vec3(1,0,1)),f.x),mix(terrainHash(i+vec3(0,1,1)),terrainHash(i+vec3(1,1,1)),f.x),f.y),f.z);}
    `).replace("#include <color_fragment>",f.userData.simple?`#include <color_fragment>
      diffuseColor.rgb*=.95+terrainHash(floor(vTerrainWorld*18.))*.06;
    `:`#include <color_fragment>
      float detail=terrainNoise(vTerrainWorld*2.8)*.12+terrainHash(floor(vTerrainWorld*24.))*.035;
      diffuseColor.rgb*=.91+detail;
    `)},f.customProgramCacheKey=()=>f.userData.simple?"terrain-simple":"terrain-detailed";let g=new qt(e,f);g.receiveShadow=!0,g.castShadow=!0,g.name="mountain-terrain",i.add(g);let M=new qt(new $e(ji,3.2,$i),new Kt({color:"#636e60",roughness:1}));return M.position.y=-1.9,M.receiveShadow=!0,i.add(M),g}function sf(i){let t={uTime:{value:0},uColor:{value:new Tt("#428a8d")},uSun:{value:new I(-.6,.75,.45)}},e=new Ve({uniforms:t,transparent:!1,side:Ne,vertexShader:"varying vec3 vWorld;varying vec2 vUv;void main(){vUv=uv;vec4 w=modelMatrix*vec4(position,1.);vWorld=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`uniform float uTime;uniform vec3 uColor;uniform vec3 uSun;varying vec3 vWorld;varying vec2 vUv;
      void main(){float a=sin(vWorld.x*1.7+vWorld.z*.8-uTime*1.2),b=sin(vWorld.z*2.5-vWorld.x*.6+uTime*.85);
      vec3 n=normalize(vec3(a*.10,1.,b*.10)),v=normalize(cameraPosition-vWorld);float fres=pow(1.-max(dot(n,v),0.),3.);
      float sparkle=pow(max(dot(reflect(-normalize(uSun),n),v),0.),95.);float edge=smoothstep(0.,.14,vUv.x)*smoothstep(0.,.14,1.-vUv.x);
      vec3 col=mix(vec3(.34,.52,.48),uColor,edge);col=mix(col,vec3(.64,.75,.71),fres*.6);col+=vec3(.92,.80,.55)*sparkle*.7;
      col+=(a+b)*.012;gl_FragColor=vec4(col,1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`});for(let n of Qd){let s=n.curve.getPoints(350),r=[],a=[],o=[];s.forEach((h,d)=>{let u=n.curve.getTangent(d/(s.length-1)),f=new I(-u.z,0,u.x),g=n.width*(.85+Pl(d*.08,3)*.3);for(let M of[-1,1])r.push(Xs(h.x+f.x*g*M,-ji/2+.05,ji/2-.05),1.22,Xs(h.z+f.z*g*M,-$i/2+.05,$i/2-.05)),a.push((M+1)/2,d/20);if(d<s.length-1){let M=d*2;o.push(M,M+2,M+1,M+1,M+2,M+3)}});let l=new Qt;l.setAttribute("position",new zt(r,3)),l.setAttribute("uv",new zt(a,2)),l.setIndex(o),l.computeVertexNormals();let c=new qt(l,e);c.name=n.name,i.add(c)}return{update:n=>{t.uTime.value=n}}}function ia(i){let t=i;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function rf(i,t=!1){let e=ia(3287),n=t?1600:2600,s=new Map,r=0,a=0;for(;r<n&&a<n*10;){a++;let v=(e()-.5)*(ji-22),x=(e()-.5)*($i-18),A=Ue(v,x);if(A<3||A>26||Object.values(li).some(S=>Math.hypot(v-S.x,x-S.z)<9)||Pl(v*.09,x*.09)<.31)continue;let w=Math.floor(v/36)*36+18,R=Math.floor(x/36)*36+18,_=w+":"+R;s.has(_)||s.set(_,{x:w,z:R,trees:[]}),s.get(_).trees.push({x:v,z:x,h:A,size:.6+e()*1.12,angle:e()*Math.PI*2,color:new Tt().setHSL(.235+e()*.065,.2+e()*.16,.24+e()*.14)}),r++}let o=new Kt({color:"#719565",roughness:.98}),l=new Kt({color:"#665b43",roughness:1}),c=new Vn(1,22,16),h=new Vn(1,8,6),d=new pn(.1,.16,1,6),u=new he,f=[];for(let v of s.values()){let x=new vr;x.position.set(v.x,0,v.z);for(let[A,w]of[c,h].entries()){let R=new Le,_=new Tn(w,o,v.trees.length*2),S=new Tn(d,l,v.trees.length);v.trees.forEach((P,D)=>{let{x:N,z:b,h:F,size:L,angle:U,color:G}=P;u.position.set(N-v.x,F+L*.75,b-v.z),u.scale.set(L,L*1.5,L),u.rotation.set(0,U,0),u.updateMatrix(),S.setMatrixAt(D,u.matrix);for(let X=0;X<2;X++)u.position.set(N-v.x+(X?.28:0)*L,F+L*(1.5+X*.58),b-v.z),u.scale.set(L*(X?.72:1),L*(X?.94:1.18),L*(X?.74:1)),u.updateMatrix(),_.setMatrixAt(D*2+X,u.matrix),_.setColorAt(D*2+X,G)}),_.castShadow=!0,_.receiveShadow=!0,_.computeBoundingSphere(),S.computeBoundingSphere(),R.add(_,S),x.addLevel(R,A?105:0,.12),f.push({crowns:_,trunks:S,count:v.trees.length,trees:v.trees,hidden:new Uint8Array(v.trees.length),originalCrowns:Float32Array.from(_.instanceMatrix.array),originalTrunks:Float32Array.from(S.instanceMatrix.array)})}i.add(x)}let g=new Tn(new Pr(1,1),new Kt({color:"#898d7b",roughness:1}),220);for(let v=0;v<220;v++){let x=(e()-.5)*280,A=(e()-.5)*192,w=Ue(x,A);u.position.set(x,w,A),u.scale.set(.4+e(),.3+e()*1.1,.4+e()),u.rotation.set(e(),e()*6,e()),u.updateMatrix(),g.setMatrixAt(v,u.matrix)}g.castShadow=!0,i.add(g);let M=Float32Array.from(g.instanceMatrix.array),p=new Uint8Array(220),m=null,T=(v,x,A,w)=>{let R=A*16;if(v.instanceMatrix.array.set(x.subarray(R,R+16),R),w)for(let _ of[0,1,2,4,5,6,8,9,10])v.instanceMatrix.array[R+_]=0};return{trees:r,setClearing(v,x=0){let A=v?.x||0,w=v?.z||0;if(m&&m.radius===x&&Math.hypot(A-m.x,w-m.z)<.3)return!1;m={x:A,z:w,radius:x};for(let _ of f){let S=!1;_.trees.forEach((P,D)=>{let N=x>0&&Math.hypot(P.x-A,P.z-w)<x?1:0;N!==_.hidden[D]&&(_.hidden[D]=N,T(_.trunks,_.originalTrunks,D,N),T(_.crowns,_.originalCrowns,D*2,N),T(_.crowns,_.originalCrowns,D*2+1,N),S=!0)}),S&&(_.crowns.instanceMatrix.needsUpdate=!0,_.trunks.instanceMatrix.needsUpdate=!0)}let R=!1;for(let _=0;_<220;_++){let S=x>0&&Math.hypot(M[_*16+12]-A,M[_*16+14]-w)<x?1:0;S!==p[_]&&(p[_]=S,T(g,M,_,S),R=!0)}return R&&(g.instanceMatrix.needsUpdate=!0),!0},setQuality(v){for(let x of f){let A=v==="smooth"?Math.max(1,Math.ceil(x.count*.55)):x.count;x.crowns.count=A*2,x.trunks.count=A}}}}function bh(i){let e=new kn(i.map(([n,s])=>new I(n,0,s)),!1,"catmullrom",.3).getPoints(150).map(n=>new I(n.x,Ue(n.x,n.z)+.22,n.z));return new kn(e)}var af={"yi-han":[[-65,51],[-72,38],[-62,29],[-60,18],[-48,3]],"han-long":[[-48,3],[-64,-5],[-80,-16],[-77,-31],[-68,-52]],"long-guan":[[-68,-52],[-57,-44],[-44,-36],[-30,-40],[-16,-27]],"guan-north":[[-16,-27],[4,-33],[23,-30],[39,-42],[55,-51]],"jing-yi":[[14,26],[-8,24],[-28,30],[-44,34],[-65,51]],"jing-north":[[14,26],[22,6],[33,-10],[45,-28],[55,-51]],"jing-wu":[[14,26],[39,30],[62,26],[84,35],[104,42]],"north-wu":[[55,-51],[74,-30],[80,-4],[92,21],[104,42]]};function Sh(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Qt,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=of(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let M=0;M<a[h].length;++M)f.push(a[h][M][u]);let g=of(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function of(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new de(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){let M=h.getComponent(u,g);o.setComponent(u+d,g,M)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var wh={stone:new Kt({color:"#acaa8b",roughness:.95}),pale:new Kt({color:"#d4cbb0",roughness:.95}),dark:new Kt({color:"#3d4c46",roughness:.84}),wood:new Kt({color:"#815841",roughness:.86}),roof:new Kt({color:"#425c59",roughness:.67,metalness:.12,side:Ne}),tiles:new Kt({color:"#627674",roughness:.8}),road:new Kt({color:"#b4ab89",roughness:1})};wh.roof.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vRoofUV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRoofUV=uv;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vRoofUV;`).replace("#include <color_fragment>",`#include <color_fragment>
    float groove=smoothstep(.03,.16,abs(fract(vRoofUV.x*28.)-.5));
    float course=smoothstep(.015,.08,fract(vRoofUV.y*12.));
    float fade=1.-smoothstep(.35,.7,max(fwidth(vRoofUV.x)*28.,fwidth(vRoofUV.y)*12.));
    diffuseColor.rgb*=mix(1.,mix(.78,1.08,groove)*mix(.88,1.,course),fade);
  `)};function sa(i,t,e){let n=new An(i,t,20,14);n.rotateX(-Math.PI/2);let s=n.attributes.position;for(let r=0;r<s.count;r++){let a=s.getX(r),o=s.getZ(r),l=Math.abs(o)/(t*.5),c=Math.abs(a)/(i*.5),h=e*(1-Math.pow(l,.74))+.19*Math.pow(l,7)+.18*Math.pow(c,8)*Math.pow(l,4);s.setY(r,h)}return n.computeVertexNormals(),n}var Eh={};function lf(i){if(Eh[i])return Eh[i];let t=document.createElement("canvas");t.width=256,t.height=320;let e=t.getContext("2d");e.fillStyle=i==="han"?"#577d68":i==="wu"?"#a77e5e":"#65717d",e.fillRect(0,0,256,320),e.strokeStyle="#ddc28d",e.lineWidth=7,e.strokeRect(15,15,226,290),e.font="bold 140px serif",e.fillStyle="#f1e8cf",e.textAlign="center",e.textBaseline="middle",e.fillText({han:"\u6C49",wu:"\u5434",wei:"\u9B4F",cao:"\u66F9",liu:"\u5218",zhang:"\u5F20"}[i]||"\u9B4F",128,155);let n=new Wi(t);return n.colorSpace=Be,n.anisotropy=4,Eh[i]=n,n}function Th(i="han",t=1){let e=new Le,n=new qt(new pn(.04,.05,4,8),wh.wood);n.position.y=2,e.add(n);let s=new qt(new An(1.2,1.5,10,10),new Kt({map:lf(i),side:Ne,roughness:.92}));s.position.set(.65,3,0),e.add(s);let r=s.geometry.attributes.position,a=Float32Array.from(r.array);return e.scale.setScalar(t),e.userData.update=o=>{for(let l=0;l<r.count;l++){let c=a[l*3],h=a[l*3+1];r.setZ(l,Math.sin(c*3.4-h*1.6+o*2.3)*(c+.6)*.14)}r.needsUpdate=!0},e.userData.setFaction=o=>{s.material.map=lf(o),s.material.needsUpdate=!0},e}function cf(i,t){let e=new Le,n={},s=ia(i.split("").reduce((v,x)=>v+x.charCodeAt(0),0)),r=i==="north"?1.27:i==="yi"?1.12:1;function a(v,x,A,w,R,_=0){let S=new Jt().compose(new I(A,w,R),new Je().setFromEuler(new un(0,_,0)),new I(1,1,1));v.applyMatrix4(S),(n[x]??(n[x]=[])).push(v)}let o=(v,x,A,w,R,_,S,P=0)=>a(new $e(v,x,A),w,R,_,S,P);function l(v,x,A=1.6,w=1.2,R=1,_=0){o(A,R,w,"pale",v,R/2+.12,x,_),o(A+.12,.12,w+.14,"wood",v,R+.12,x,_),a(sa(A+.55,w+.55,.72),"roof",v,R+.18,x,_);let S=Math.sin(_)*(w*.5+.012),P=Math.cos(_)*(w*.5+.012);o(.33,.65,.03,"dark",v+S,.5,x+P,_);for(let D of[-1,1])o(.08,R+.1,.08,"wood",v+Math.cos(_)*A*.36*D,R/2,x-Math.sin(_)*A*.36*D,_)}function c(v,x){o(1.55,2.1,1.55,"stone",v,1.05,x),o(1.75,.2,1.75,"pale",v,2.15,x),o(1.3,.85,1.3,"wood",v,2.65,x);for(let A of[-.38,.38])o(.28,.4,.025,"dark",v+A,2.7,x+.66);a(sa(2.2,2.2,.95),"roof",v,3.07,x),o(.11,.14,1.9,"tiles",v,4.04,x,Math.PI/2)}let h=6.2;o(12.8,.28,12.8,"stone",0,0,0),o(.8,1.45,12.1,"stone",-h,.78,0),o(.8,1.45,12.1,"stone",h,.78,0),o(12.1,1.45,.8,"stone",0,.78,-h),o(4.85,1.45,.8,"stone",-3.55,.78,h),o(4.85,1.45,.8,"stone",3.55,.78,h);for(let v=-5;v<=5;v++)for(let x of[-1,1])o(.45,.38,.78,"stone",v,1.67,x*h),o(.78,.38,.45,"stone",x*h,1.67,v);for(let v of[-h,h])for(let x of[-h,h])c(v,x);o(2.7,.7,1.6,"wood",0,2.02,h),a(sa(3.25,2.25,1.02),"roof",0,2.37,h),o(.54,1.6,1.3,"stone",-1.1,.8,h),o(.54,1.6,1.3,"stone",1.1,.8,h);let d=new Xi(.88,.21,8,24,Math.PI);a(d,"stone",0,1,h+.42),o(1.15,.045,11.5,"road",0,.17,0),o(11.5,.045,.8,"road",0,.17,1.1);for(let v=0;v<3;v++)for(let x of[-1,1])for(let A=0;A<2;A++){let w=x*(2+A*2.3),R=2.5-v*2.4;l(w,R,1.5+s()*.35,1.05+s()*.25,.72+s()*.42,x<0?Math.PI/2:-Math.PI/2)}o(4.5,.42,2.7,"stone",0,.35,-3.75),o(3.7,1.45,2.15,"pale",0,1.27,-3.75);for(let v=-2;v<=2;v++)o(.13,1.7,.13,"wood",v*.72,1.35,-2.57);a(sa(4.9,3.3,1.1),"roof",0,2.04,-3.75),o(2.4,.65,1.2,"wood",0,2.95,-3.75),a(sa(3,2.15,.95),"roof",0,3.28,-3.75);for(let v=0;v<4;v++)o(2.1,.09,1.1-v*.2,"pale",0,.18+v*.08,-1.9-v*.1);for(let[v,x]of Object.entries(n)){let A=new qt(Sh(x,!1),wh[v]);A.castShadow=!0,A.receiveShadow=!0,e.add(A),x.forEach(w=>w.dispose())}e.scale.setScalar(r);let u=li[i];e.position.set(u.x,Ue(u.x,u.z)+.16,u.z),t.add(e);let f=Th(i==="wu"?"wu":"wei",1);f.position.set(-1,3.4,2.2),e.add(f);let g=new qt(new Ir(8.1*r,8.22*r,96),new fn({color:"#d9bd7f",transparent:!0,opacity:0,side:Ne,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.position.copy(e.position),g.position.y+=.22,t.add(g);let M=new qt(new pn(9*r,9*r,7,16),new fn({visible:!1}));M.position.copy(e.position),M.position.y+=3,M.userData.city=i,t.add(M);let p=[];for(let v=0;v<14;v++){let x=s()*Math.PI*2,A=10.5+s()*4.5,w=u.x+Math.cos(x)*A,R=u.z+Math.sin(x)*A;if(Ue(w,R)<3)continue;let S=new An(2.4,1.4,5,3);S.rotateX(-Math.PI/2);let P=S.attributes.position,D=new Float32Array(P.count*3),N=new Tt(["#888b4f","#738357","#9e975f","#59704b"][Math.floor(s()*4)]);for(let b=0;b<P.count;b++){let F=w+P.getX(b),L=R+P.getZ(b);P.setXYZ(b,F,Ue(F,L)+.08,L),D.set([N.r,N.g,N.b],b*3)}S.setAttribute("color",new de(D,3)),S.computeVertexNormals(),p.push(S)}let m=new Kt({vertexColors:!0,roughness:1});if(m.onBeforeCompile=v=>{v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vFieldUV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFieldUV=uv;`),v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFieldUV;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.78+.22*smoothstep(.12,.32,fract(vFieldUV.x*14.));`)},p.length){let v=new qt(Sh(p),m);v.receiveShadow=!0,t.add(v),p.forEach(x=>x.dispose())}let T=null;return{id:i,group:e,flag:f,halo:g,hit:M,position:e.position.clone(),setFaction(v){T!==v&&(f.userData.setFaction(v),T=v)},select(v){g.material.opacity=v?.72:0},update(v){f.userData.update(v)}}}function Ah({faction:i="han",columns:t=6,rows:e=4,cavalry:n=4,supplies:s=!0}={}){let r=new Le,a=t*e+n,o={},l={},c=new he,h={armor:new Kt({color:i==="han"?"#5b665f":"#575e67",roughness:.64,metalness:.3}),cloth:new Kt({color:i==="han"?"#3d715c":"#835749",roughness:.95}),skin:new Kt({color:"#c7aa81",roughness:1}),wood:new Kt({color:"#68472f",roughness:.9}),iron:new Kt({color:"#a6b1af",roughness:.34,metalness:.65}),horse:new Kt({color:i==="han"?"#795640":"#626059",roughness:.9}),dark:new Kt({color:"#302e29",roughness:.92}),sacks:new Kt({color:"#b8a16d",roughness:1}),shadow:new fn({color:"#223126",transparent:!0,opacity:.18,depthWrite:!1})},d=new Vn(1,14,10),u=new $e(1,1,1),f=new pn(1,1,1,8);function g(m,T,v){let x=new Tn(T,h[v],a*4+24);x.instanceMatrix.setUsage(qc),x.frustumCulled=!1,x.castShadow=!1,x.receiveShadow=!1,o[m]=x,r.add(x)}g("torso",f,"armor"),g("face",d,"skin"),g("helmet",new Vn(1,12,8,0,Math.PI*2,0,Math.PI/2),"armor"),g("cloth",u,"cloth"),g("limbs",f,"cloth"),g("spear",f,"wood"),g("point",new Ar(1,1,6),"iron"),g("shield",new pn(1,1,1,12),"wood"),g("horse",d,"horse"),g("horseLeg",f,"horse"),g("dark",u,"dark"),g("wood",u,"wood"),g("wheel",new Xi(.4,.065,8,18),"wood"),g("sack",d,"sacks"),g("shadow",new Tr(1,18),"shadow");let M=Th(i,.9);r.add(M);function p(m,T,v,x,A,w,R,_=0,S=0,P=0){c.position.set(T,v,x),c.rotation.set(_,S,P),c.scale.set(A,w,R),c.updateMatrix(),o[m].setMatrixAt(l[m]++,c.matrix)}return r.userData.unitCount=a,r.userData.cavalry=n,r.userData.update=(m,{stride:T=1,combat:v=0,retreat:x=0}={})=>{for(let S of Object.keys(o))l[S]=0;let A=Math.cos(r.rotation.y),w=Math.sin(r.rotation.y),R=(S,P)=>Ue(r.position.x+A*S+w*P,r.position.z-w*S+A*P)+.09-r.position.y,_=(S,P,D,N,b=!1)=>{let F=m*(b?10:7.2)+N*.79,L=Math.sin(F)*T,U=Math.max(0,Math.sin(m*5.8+N*1.3))*v,G=Math.abs(L)*(b?.07:.035),X=D+G;p("torso",S,X+.84,P,.23,.56,.18,U*.16),p("cloth",S,X+.54,P,.42,.21,.31),p("face",S,X+1.25,P,.135,.16,.13),p("helmet",S,X+1.28,P-.015,.164,.18,.17);for(let Q of[-1,1])p("limbs",S+Q*(b?.24:.115),X+.28,P,.075,.48,.07,b?-.35:L*Q*.58),p("dark",S+Q*(b?.25:.115),X+.045,P+.035+(b?.1:L*Q*.13),.15,.12,.25),p("limbs",S+Q*.29,X+.85,P+(Q===1?U*.23:0),.065,.42,.07,Q===1?-U*1.25:-L*.3);p("spear",S+.35,X+1.1,P+.12+U*.58,.025,2.05,.025,.13+U*1.1),p("point",S+.35,X+1.1+Math.cos(.13+U*1.1)*1.15,P+.12+U*.58+Math.sin(.13+U*1.1)*1.15,.075,.28,.055,.13+U*1.1),b||p("shield",S-.32,X+.83,P+.16,.3,.08,.4,Math.PI/2)};for(let S=0;S<e;S++)for(let P=0;P<t;P++){let D=S*t+P,N=(P-(t-1)/2)*.91,b=-S*.97+Math.sin(m*4.6+D)*v*.12-x*(D%3)*.18,F=R(N,b);p("shadow",N,F+.013,b,.33,.4,1,-Math.PI/2),_(N,b,F,D)}for(let S=0;S<n;S++){let P=S%2?1:-1,D=P*(t*.47+1.15),N=.2-Math.floor(S/2)*2.3+Math.sin(m*2.2+S)*v*.45,b=R(D,N),F=m*10+S*1.7,L=Math.abs(Math.sin(F))*.055*T;p("shadow",D,b+.015,N,.52,1.12,1,-Math.PI/2),p("horse",D,b+.94+L,N,.34,.44,.83),p("horse",D,b+1.36+L,N+.55,.21,.47,.26,.4),p("horse",D,b+1.66+L,N+.92,.2,.21,.41,.18);for(let U of[-1,1]){p("horse",D+U*.11,b+1.95+L,N+.72,.06,.17,.09);for(let G of[-1,1]){let X=Math.sin(F+(G===U?0:Math.PI))*.56*T;p("horseLeg",D+U*.23,b+.46,N+G*.53,.068,.76,.066,X),p("dark",D+U*.23,b+.09+Math.max(0,Math.sin(F+G))*.1*T,N+G*.53-Math.sin(X)*.3,.14,.14,.23)}}p("dark",D,b+1.04,N-.89,.085,.54,.1,-.45+Math.sin(m*5+S)*.15),p("cloth",D,b+1.21+L,N-.09,.69,.12,.64),_(D,N-.08,b+1.06+L,40+S,!0)}if(s){let S=-e*.97-1.7,P=R(0,S);p("wood",0,P+.64,S,1.18,.28,1.55),p("wood",0,P+.74,S-.68,1.18,.48,.1);for(let D of[-1,1])p("wheel",D*.68,P+.42,S,1,1,1,0,Math.PI/2,m*T*3),p("wood",D*.47,P+.63,S+1.2,.06,.08,1.5);for(let D of[-1,1])p("sack",D*.25,P+.94,S,.32,.31,.6)}M.position.set(-.3,R(-.3,-1.6)+.25,-1.6),M.userData.update(m);for(let[S,P]of Object.entries(o))P.count=l[S],P.instanceMatrix.needsUpdate=!0},r.userData.dispose=()=>{let m=new Set;r.traverse(T=>{T.geometry&&m.add(T.geometry)}),m.forEach(T=>T.dispose()),Object.values(h).forEach(T=>T.dispose()),M.children[1].material.dispose(),Object.values(o).forEach(T=>T.dispose())},r}function hf(){let t=new Float32Array(330),e=new Float32Array(110),n=new Qt;n.setAttribute("position",new de(t,3)),n.setAttribute("aSize",new de(e,1));let s=new Ve({transparent:!0,depthWrite:!1,uniforms:{uStrength:{value:0}},vertexShader:"attribute float aSize; varying float vAlpha; void main(){vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=min(72.,aSize*230./max(1.,-p.z));vAlpha=aSize*.22;}",fragmentShader:"uniform float uStrength; varying float vAlpha; void main(){float d=length(gl_PointCoord-.5)*2.;float a=pow(max(0.,1.-d),2.)*vAlpha*uStrength;gl_FragColor=vec4(.73,.66,.49,a);}"}),r=new Sr(n,s);return r.frustumCulled=!1,r.userData.update=(a,o,l)=>{s.uniforms.uStrength.value=l;for(let c=0;c<110;c++){let h=(a*.22+c*.618)%1,d=c*2.399,u=o.x+Math.sin(d)*(1+h*8),f=o.z+Math.cos(d)*(1+h*4);t[c*3]=u,t[c*3+1]=Ue(u,f)+.2+h*2.6,t[c*3+2]=f,e[c]=Math.sin(h*Math.PI)*(1.5+c%4*.6)}n.attributes.position.needsUpdate=!0,n.attributes.aSize.needsUpdate=!0},r.userData.dispose=()=>{n.dispose(),s.dispose()},r}var Il=Object.freeze([{id:"departure",seconds:3,title:"\u65CC\u65D7\u51FA\u5173",detail:"\u9A91\u961F\u5148\u884C\uFF0C\u6B65\u5352\u4E0E\u8F8E\u91CD\u968F\u540E"},{id:"march",seconds:5,title:"\u5175\u884C\u5C71\u6CB3",detail:"\u6CBF\u7CAE\u9053\u63A8\u8FDB\uFF0C\u4FDD\u6301\u961F\u5217\u4E0E\u8865\u7ED9"},{id:"battle",seconds:6,title:"\u4E24\u519B\u63A5\u9635",detail:"\u524D\u9635\u4EA4\u950B\uFF0C\u9A91\u961F\u63A9\u62A4\u4E24\u7FFC"},{id:"aftermath",seconds:2.4,title:"\u6218\u7EBF\u6E10\u5B9A",detail:"\u6536\u62E2\u961F\u4F0D\uFF0C\u7B49\u5F85\u524D\u7EBF\u519B\u62A5"}]),uf=Il.reduce((i,t)=>i+t.seconds,0);function Rh(i,t=!1){let e=t?1.6:uf,n=Math.min(1,Math.max(0,Number.isFinite(i)?i/e:0)),s=n*uf,r=0;for(let a=0;a<Il.length;a++){let o=Il[a];if(s<r+o.seconds||a===Il.length-1)return{...o,index:a,progress:n,local:Math.min(1,(s-r)/o.seconds),done:n===1};r+=o.seconds}}var ry=oi.lerp,Ch=i=>i*i*(3-2*i),Ll=class{constructor(t,e,n,{won:s,defender:r,reduced:a,onFrame:o,onPhase:l,resolve:c}){Object.assign(this,{world:t,source:e,target:n,won:s,reduced:a,onFrame:o,onPhase:l,resolve:c}),this.start=t.elapsed,this.curve=t.routeBetween(e,n),this.length=this.curve.getLength(),this.departureAt=Math.min(.28,16/this.length),this.battleAt=Math.max(.52,Math.min(.83,1-24/this.length)),this.center=this.curve.getPointAt(this.battleAt),this.direction=this.curve.getTangentAt(this.battleAt).setY(0).normalize(),this.side=new I(this.direction.z,0,-this.direction.x),this.yaw=Math.atan2(this.direction.x,this.direction.z),this.army=Ah({faction:"han",columns:t.mobile?5:6}),this.enemy=Ah({faction:r,columns:t.mobile?5:6,supplies:!1}),this.dust=hf(),this.enemy.visible=!1,t.scene.add(this.army,this.enemy,this.dust),this.look=new I,this.eye=new I,this.previousPhase=null,this.frame=Rh(0,a)}place(t,e,n){t.position.set(e.x,Ue(e.x,e.z)+.12,e.z),t.rotation.y=n}update(t){let e=Rh(t-this.start,this.reduced);this.frame=e,e.id!==this.previousPhase&&(this.previousPhase=e.id,this.onPhase?.(e.id==="aftermath"?this.won?"victory":"retreat":e.id));let n=e.local,s=this.world,r=this.direction.clone(),a=this.side.clone(),o=0,l=1,c;if(e.id==="departure"||e.id==="march"){let u=this.departureAt+(e.id==="march"?3/this.length:0),f=e.id==="departure"?this.departureAt+3/this.length:Math.max(u+.02,this.battleAt-8/this.length),g=Math.min(.8,ry(u,f,n)),M=this.curve.getPointAt(g),p=this.curve.getTangentAt(g).setY(0).normalize();this.place(this.army,M,Math.atan2(p.x,p.z)),r.copy(p),a.set(p.z,0,-p.x),c=M.clone().addScaledVector(p,-1.7),l=e.id==="departure"?.65:1,this.dust.userData.update(t,M.clone().addScaledVector(p,-4),.55)}else{this.enemy.visible=!0,c=this.center.clone();let u=8-Ch(Math.min(1,n/.35))*6.65,f=u;e.id==="battle"?(o=Ch(Math.min(1,Math.max(0,(n-.2)/.2))),u+=Math.sin(t*3.2)*.09*o,f+=Math.sin(t*3.6)*.09*o):(u=this.won?1.35-n*4:1.35+n*11,f=this.won?1.35+n*11:1.35-n*4);let g=e.id==="aftermath"?Ch(Math.min(1,n*2.5))*Math.PI:0;this.place(this.army,this.center.clone().addScaledVector(r,-u),this.yaw+(this.won?0:g)),this.place(this.enemy,this.center.clone().addScaledVector(r,f),this.yaw+Math.PI+(this.won?g:0)),l=e.id==="battle"?Math.max(.18,1-o*.8):.9,this.enemy.userData.update(t,{stride:l,combat:o,retreat:this.won&&e.id==="aftermath"?n:0}),this.dust.userData.update(t,this.center,e.id==="battle"?.55+.5*o:.75*(1-n))}this.army.userData.update(t,{stride:l,combat:o,retreat:!this.won&&e.id==="aftermath"?n:0}),s.vegetation.setClearing(c,e.id==="battle"||e.id==="aftermath"?15:11)&&(s.renderer.shadowMap.needsUpdate=!0);let h=s.mobile?1.48:1;this.reduced&&(c=this.center.clone(),r.copy(this.direction),a.copy(this.side),this.dust.visible=!1),this.look.copy(c),this.look.y=Ue(c.x,c.z)+1.1;let d=this.reduced?0:e.id==="battle"?Math.sin(n*Math.PI)*2.5:0;this.eye.copy(this.look).addScaledVector(a,(22+d)*h).addScaledVector(r,(!this.reduced&&e.id==="departure"?14:10)*h),this.eye.y+=(this.reduced?28:17)*h,this.eye.y=Math.max(this.eye.y,Ue(this.eye.x,this.eye.z)+5),s.camera.position.copy(this.eye),s.controls.target.copy(this.look),s.camera.lookAt(this.look),this.onFrame?.(e),e.done&&s.finishCampaign(!1)}dispose(){this.world.vegetation.setClearing(null,0),this.world.renderer.shadowMap.needsUpdate=!0,this.world.scene.remove(this.army,this.enemy,this.dust),this.army.userData.dispose(),this.enemy.userData.dispose(),this.dust.userData.dispose()}};var Rb=qf(ff(),1),Ge=globalThis.HanEngine;function Nl(i="campaign",t=207){let e=Ge.create(t);return i==="tutorial"&&Object.assign(e,{year:228,chapter:4,land:["jing","yi","han"],stability:{jing:82,yi:86,han:80},grain:120,people:75,army:78,trust:78,elite:70,wu:74,logistics:72,institution:64,fatigue:12}),e}function Ph(i,t,e){if(!["campaign","tutorial"].includes(i)||!Array.isArray(e)||e.length>80)return null;let n=Nl(i,t);for(let s of e){if(typeof s!="string")return null;let r=Ge.step(n,s);if(!r.ok)return null;n=r.state}return n}function Ih(i,t){let n={yi:"jing",han:"yi",long:"han",guan:"long",north:"guan",wu:"north",jing:"yi"}[t];return i.land.includes(n)?n:null}function Ul(i,t){return i.land.includes(t)?"han":t==="wu"||t==="jing"?"wu":t==="yi"&&i.year<214?"liu":t==="han"&&i.year<215?"zhang":i.year<220?"cao":"wei"}function Lh(i,t){return JSON.stringify({schema:2,mode:i,seed:t.seed,history:t.history})}function Dh(i){try{let t=JSON.parse(i);if(!t||t.schema!==2)return null;let e=Ph(t.mode,t.seed,t.history);return e?{mode:t.mode,state:e}:null}catch{return null}}var pf=i=>1-Math.pow(1-i,3),mf={jing:"\u8346\u5DDE",yi:"\u6210\u90FD",han:"\u6C49\u4E2D",long:"\u9647\u53F3",guan:"\u957F\u5B89",north:"\u4E2D\u539F",wu:"\u5EFA\u4E1A"},Fl=class{constructor(t,e,n,s={}){this.canvas=t,this.labelsRoot=e,this.onSelect=n,this.mobile=innerWidth<760,this.frame=0,this.elapsed=0,this.quality="fine",this.running=!0,this.mapMode="terrain",this.cities={},this.labels={},this.routeCurves={},this.motion=null,this.cameraTween=null,this.pendingResize=!0,this.homeTarget=new I(-5,3,-3),this.scene=new Vi,this.scene.background=new Tt("#9faf9c"),this.scene.fog=new mr("#aabbab",300,650),this.renderer=new Sl({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0});let r=this.renderer.getContext(),a=r.getExtension("WEBGL_debug_renderer_info");this.software=a?/swiftshader|llvmpipe|software rasterizer/i.test(r.getParameter(a.UNMASKED_RENDERER_WEBGL)):!1,this.quality=["fine","smooth"].includes(s.quality)?s.quality:this.software?"smooth":"fine",this.renderer.setPixelRatio(this.quality==="smooth"?1:Math.min(devicePixelRatio||1,this.mobile?1.6:1.75)),this.renderer.outputColorSpace=Be,this.renderer.toneMapping=Vr,this.renderer.toneMappingExposure=.96,this.renderer.shadowMap.enabled=this.quality==="fine",this.renderer.shadowMap.type=qi,this.camera=new ze(this.mobile?52:38,innerWidth/innerHeight,.5,1600),this.camera.position.set(157,162,214),this.controls=new Al(this.camera,t),this.controls.target.copy(this.homeTarget),this.controls.enableDamping=!0,this.controls.dampingFactor=.065,this.controls.minDistance=28,this.controls.maxDistance=395,this.controls.maxPolarAngle=Math.PI*.445,this.controls.minPolarAngle=Math.PI*.08,this.controls.rotateSpeed=.45,this.controls.zoomSpeed=.85,this.controls.panSpeed=.6,this.controls.enablePan=!0,this.controls.screenSpacePanning=!1,this.controls.mouseButtons={LEFT:gn.ROTATE,MIDDLE:gn.DOLLY,RIGHT:gn.PAN},this.controls.touches={ONE:Rn.ROTATE,TWO:Rn.DOLLY_PAN},this.controls.addEventListener("start",()=>{this.cameraTween=null,this.pausedScene=!1,this.lastInput=performance.now()}),this.controls.maxDistance=this.mobile?850:450;let o=new Ur("#dbe9e2","#677a4c",1.4);this.scene.add(o);let l=new Ns("#fff1cf",2.8);l.position.set(-95,160,65),l.castShadow=!0,l.shadow.mapSize.set(this.mobile?2048:3072,this.mobile?2048:3072),l.shadow.camera.left=-195,l.shadow.camera.right=195,l.shadow.camera.top=160,l.shadow.camera.bottom=-160,l.shadow.camera.near=1,l.shadow.camera.far=410,l.shadow.bias=-15e-5,l.shadow.normalBias=.25,this.scene.add(l),this.sun=l;let c=new Ns("#afd5da",.65);c.position.set(80,50,-110),this.scene.add(c),this.scene.environmentIntensity=.18,this.quality==="fine"&&(this.ensureEnvironment(),this.scene.environment=this.environment.texture),this.terrain=nf(this.scene,this.mobile),this.water=sf(this.scene),this.vegetation=rf(this.scene,this.mobile),this.vegetation.setQuality(this.quality),this.terrain.material.userData.simple=this.quality==="smooth",this.buildRoads();for(let d of Object.keys(li))this.cities[d]=cf(d,this.scene),this.createLabel(d);this.buildAtmosphere(),this.buildPoliticalBorders(),this.raycaster=new zr,this.pointer=new at;let h=null;t.addEventListener("pointerdown",d=>{h={x:d.clientX,y:d.clientY}}),t.addEventListener("pointerup",d=>{if(!h||Math.hypot(d.clientX-h.x,d.clientY-h.y)>8)return;let u=t.getBoundingClientRect();this.pointer.set((d.clientX-u.left)/u.width*2-1,-(d.clientY-u.top)/u.height*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);let f=this.raycaster.intersectObjects(Object.values(this.cities).map(g=>g.hit),!1);f[0]&&this.onSelect(f[0].object.userData.city),h=null}),t.addEventListener("webglcontextlost",d=>{d.preventDefault(),this.running=!1,this.finishCampaign(!0),window.dispatchEvent(new CustomEvent("world-context-lost"))}),this.resizeObserver=new ResizeObserver(()=>{this.pendingResize=!0}),this.resizeObserver.observe(t.parentElement),this.clock=new Br,this.clock.connect(document),this.resize(),this.controls.update(),this.renderer.render(this.scene,this.camera),this.renderer.shadowMap.autoUpdate=!1,this.animate=this.animate.bind(this),this.animation=requestAnimationFrame(this.animate)}ensureEnvironment(){if(this.environment)return;let t=new Vs(this.renderer),e=new Rl;this.environment=t.fromScene(e,.03),e.dispose(),t.dispose()}createLabel(t){let e=document.createElement("button");e.className="city-label",e.dataset.city=t,e.innerHTML='<span class="city-emblem">'+(t==="wu"?"\u5434":t==="jing"?"\u6C49":"\u9B4F")+'</span><span class="city-name">'+mf[t]+'</span><span class="city-caption"></span>',e.setAttribute("aria-label","\u9009\u62E9"+mf[t]),e.addEventListener("click",()=>this.onSelect(t)),this.labelsRoot.appendChild(e),this.labels[t]=e}buildRoads(){this.roadGroup=new Le,this.scene.add(this.roadGroup);for(let[t,e]of Object.entries(af)){let n=bh(e);this.routeCurves[t]=n;let s=n.getPoints(180),r=[],a=[];s.forEach((c,h)=>{let d=n.getTangent(h/(s.length-1)),u=-d.z,f=d.x;for(let g of[-1,1]){let M=c.x+u*.32*g,p=c.z+f*.32*g;r.push(M,Ue(M,p)+.1,p)}if(h<s.length-1){let g=h*2;a.push(g,g+1,g+2,g+1,g+3,g+2)}});let o=new Qt;o.setAttribute("position",new zt(r,3)),o.setIndex(a),o.computeVertexNormals();let l=new qt(o,new Kt({color:"#b1a383",roughness:1,transparent:!0,opacity:.62,side:Ne}));l.receiveShadow=!0,this.roadGroup.add(l)}}buildAtmosphere(){let t=document.createElement("canvas");t.width=128,t.height=128;let e=t.getContext("2d"),n=e.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,"rgba(234,242,224,0.40)"),n.addColorStop(.42,"rgba(234,242,224,0.18)"),n.addColorStop(1,"rgba(234,242,224,0)"),e.fillStyle=n,e.fillRect(0,0,128,128);let s=new Wi(t),r=ia(328);this.mists=[];for(let o=0;o<24;o++){let l=new Rs({map:s,transparent:!0,opacity:.19,depthWrite:!1}),c=new yr(l),h=(r()-.5)*285,d=(r()-.5)*170;c.position.set(h,Ue(h,d)+10+r()*8,d),c.scale.set(23+r()*20,10+r()*10,1),c.userData={origin:h,offset:r()*10},this.scene.add(c),this.mists.push(c)}this.birds=new Le;let a=new Qt;a.setAttribute("position",new zt([-.5,.1,0,0,0,0,0,0,0,.5,.1,0],3));for(let o=0;o<9;o++){let l=new br(a,new Hi({color:"#414f46",transparent:!0,opacity:.6}));l.userData.phase=r()*6.28,l.userData.radius=16+r()*9,this.birds.add(l)}this.scene.add(this.birds)}buildPoliticalBorders(){let t={long:[[-137,-100],[-86,-103],[-34,-78],[-43,-44],[-90,-25],[-139,-43]],han:[[-95,-17],[-41,-17],[-18,7],[-34,27],[-83,26],[-109,10]],yi:[[-126,28],[-83,26],[-34,27],[-20,70],[-70,99],[-141,77]],guan:[[-34,-78],[12,-81],[34,-45],[20,-10],[-18,7],[-41,-17],[-43,-44]],north:[[12,-81],[51,-105],[135,-92],[141,-40],[92,-5],[20,-10],[34,-45]],jing:[[-18,7],[20,-10],[59,9],[56,46],[27,81],[-20,70],[-34,27]],wu:[[59,9],[92,-5],[141,-40],[148,71],[90,98],[27,81],[56,46]]};this.borders={};for(let[e,n]of Object.entries(t)){let s=[];n.forEach((a,o)=>{let l=n[(o+1)%n.length];for(let c=0;c<14;c++){let h=c/14,d=a[0]+(l[0]-a[0])*h,u=a[1]+(l[1]-a[1])*h;s.push(new I(d,Ue(d,u)+.35,u))}}),s.push(s[0]);let r=new Gi(new Qt().setFromPoints(s),new Is({color:"#e6c689",transparent:!0,opacity:.65,dashSize:.7,gapSize:.45,depthWrite:!1}));r.computeLineDistances(),r.visible=!1,this.scene.add(r),this.borders[e]=r}}updateState(t){this.state=t;for(let[e,n]of Object.entries(this.cities)){let s=t.land.includes(e),r=Ul(t,e);n.setFaction(r);let a=this.labels[e];a.classList.toggle("owned",s),a.querySelector(".city-emblem").textContent={han:"\u6C49",wu:"\u5434",wei:"\u9B4F",cao:"\u66F9",liu:"\u5218",zhang:"\u5F20"}[r],a.querySelector(".city-caption").textContent=s?"\u7A33\u5B9A "+Math.round(t.stability[e]):r==="wu"?"\u5434\u5883":"\u672A\u63A7\u5236",this.borders[e].material.color.set(s?"#e1c282":r==="wu"?"#b4846e":"#b9c9c5")}}select(t,e=!1){for(let[n,s]of Object.entries(this.cities))s.select(n===t),this.labels[n].classList.toggle("selected",n===t);e&&this.focus(t)}focus(t,e=!1){let n=this.cities[t];if(!n)return;let s=n.position.clone().add(new I(0,1,0)),r=this.camera.position.clone().sub(this.controls.target).normalize(),a=e?37:this.mobile?99:84;this.mobile&&!e&&s.addScaledVector(new I(0,1,0).applyQuaternion(this.camera.quaternion),-a*.13);let o=s.clone().addScaledVector(r,a);o.y=Math.max(o.y,s.y+35),this.tweenCamera(o,s,1.25)}home(){this.tweenCamera(new I(this.mobile?210:157,this.mobile?580:162,this.mobile?470:214),this.homeTarget,1.3)}showcase(){this.mobile?this.tweenCamera(new I(40,145,166),new I(-48,8,5),1.3):this.home()}tweenCamera(t,e,n){this.pausedScene=!1,this.cameraTween={from:this.camera.position.clone(),fromTarget:this.controls.target.clone(),to:t,target:e,duration:matchMedia("(prefers-reduced-motion: reduce)").matches?.05:n,start:this.elapsed}}routeBetween(t,e){let n=t+"-"+e,s=e+"-"+t;if(this.routeCurves[n])return this.routeCurves[n];if(this.routeCurves[s])return new kn(this.routeCurves[s].getPoints(150).reverse());let r=li[t],a=li[e];return bh([[r.x,r.z],[(r.x+a.x)/2-7,(r.z+a.z)/2],[a.x,a.z]])}previewRoute(t,e){this.clearRoute();let n=this.routeBetween(t,e);this.route=new Le,this.scene.add(this.route);let s=new qt(new Lr(n,180,.12,5,!1),new fn({color:"#f2d391",transparent:!0,opacity:.88,depthWrite:!1}));this.route.add(s);let r=new Gi(new Qt().setFromPoints(n.getPoints(160)),new Is({color:"#fff7d9",dashSize:1.1,gapSize:1.2,transparent:!0,opacity:.95}));r.computeLineDistances(),this.route.add(r),this.route.userData.curve=n;let a=n.getPoint(.5),o=this.camera.position.clone().sub(this.controls.target).normalize(),l=this.mobile?185:115;this.mobile&&a.addScaledVector(new I(0,1,0).applyQuaternion(this.camera.quaternion),-l*.11);let c=a.clone().addScaledVector(o,l);c.y=Math.max(c.y,a.y+65),this.tweenCamera(c,a,1.1)}clearRoute(){this.route&&(this.scene.remove(this.route),this.route.traverse(t=>{t.geometry?.dispose(),t.material&&t.material.dispose()}),this.route=null)}async march(t,e,n,s=!1,r={}){return this.finishCampaign(!0),this.clearRoute(),this.cameraTween=null,this.pausedScene=!1,this.controls.enabled=!1,new Promise((a,o)=>{try{this.motion=new Ll(this,t,e,{...r,reduced:s,onFrame:n,resolve:a}),this.motion.update(this.elapsed)}catch(l){this.controls.enabled=!0,o(l)}})}finishCampaign(t=!0){let e=this.motion;if(!e)return;this.motion=null,e.dispose(),this.controls.enabled=!0;let n=this.cities[e.target].position;this.controls.target.copy(n),this.camera.position.copy(n).add(new I(38,this.mobile?70:48,this.mobile?78:57)),this.controls.update(),e.resolve({skipped:t})}setMode(t){this.mapMode=t;for(let e of Object.values(this.borders))e.visible=t==="politics";this.roadGroup.visible=t!=="clean",this.labelsRoot.classList.toggle("quiet",t==="clean"),this.renderer.render(this.scene,this.camera)}setQuality(t){this.quality=t,t==="fine"&&this.ensureEnvironment(),this.renderer.setPixelRatio(t==="smooth"?1:Math.min(devicePixelRatio||1,this.mobile?1.6:1.75)),this.renderer.shadowMap.enabled=t!=="smooth",this.scene.environment=t==="smooth"?null:this.environment.texture,this.vegetation.setQuality(t),this.terrain.material.userData.simple=t==="smooth",this.terrain.material.needsUpdate=!0,this.renderer.shadowMap.needsUpdate=!0,this.pendingResize=!0}zoom(t){let e=this.camera.position.clone().sub(this.controls.target),n=oi.clamp(e.length()*t,28,this.controls.maxDistance);this.tweenCamera(this.controls.target.clone().add(e.normalize().multiplyScalar(n)),this.controls.target.clone(),.45)}resize(){let t=this.canvas.parentElement.getBoundingClientRect();this.width=t.width,this.height=t.height,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height,!1),this.pendingResize=!1}updateLabels(){let t=new I,e=this.camera.position.distanceTo(this.controls.target);for(let[n,s]of Object.entries(this.cities)){t.copy(s.position).add(new I(0,6,0)).project(this.camera);let r=this.labels[n],a=t.z<1&&t.z>0&&Math.abs(t.x)<1.1&&Math.abs(t.y)<1.1;if(r.hidden=!a,a){let o=Math.round((t.x*.5+.5)*this.width*10)/10,l=Math.round((-t.y*.5+.5)*this.height*10)/10;r.style.transform="translate("+o+"px,"+l+"px) translate(-50%,-100%)",r.classList.toggle("near",e<100)}}}animate(){if(this.animation=requestAnimationFrame(this.animate),this.clock.update(),!this.running||document.hidden||this.pausedScene&&!this.pendingResize)return;let t=this.clock.getDelta();if(this.elapsed+=t,this.frame++,this.pendingResize&&this.resize(),this.cameraTween){let n=this.cameraTween,s=Math.min(1,(this.elapsed-n.start)/n.duration);this.camera.position.lerpVectors(n.from,n.to,pf(s)),this.controls.target.lerpVectors(n.fromTarget,n.target,pf(s)),s===1&&(this.cameraTween=null)}this.controls.target.x=oi.clamp(this.controls.target.x,-145,145),this.controls.target.z=oi.clamp(this.controls.target.z,-100,100),this.controls.update();let e=this.camera.position.distanceTo(this.controls.target);this.scene.fog.near=Math.max(300,e*.92),this.scene.fog.far=Math.max(650,e*1.8),this.water.update(this.elapsed);for(let n of Object.values(this.cities))n.update(this.elapsed);if(this.mists.forEach(n=>{n.position.x=n.userData.origin+Math.sin(this.elapsed*.024+n.userData.offset)*7}),this.birds.children.forEach((n,s)=>{let r=this.elapsed*.12+n.userData.phase;n.position.set(-40+Math.cos(r)*n.userData.radius,29+s*.5,10+Math.sin(r)*n.userData.radius*.6),n.rotation.y=-r,n.rotation.z=Math.sin(this.elapsed*2+s)*.07}),this.motion)try{this.motion.update(this.elapsed)}catch(n){console.error(n),this.finishCampaign(!0),window.dispatchEvent(new CustomEvent("world-cinematic-error"))}this.updateLabels(),this.renderer.render(this.scene,this.camera),this.frame%60===0&&(this.metrics={frames:this.frame,drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,pixelRatio:this.renderer.getPixelRatio(),trees:this.vegetation.trees})}screenshot(){return this.renderer.render(this.scene,this.camera),this.canvas.toDataURL("image/png")}};var gf={music:{src:"audio/music/theme.mp3",title:"\u5C71\u6CB3\u4E3B\u9898\u66F2",volume:.35},effects:{march:"",battle:"",departure:"",victory:"",retreat:""}};var _f="han-restoration-audio-v1",Ol=(i,t)=>typeof i=="number"&&Number.isFinite(i)?Math.min(1,Math.max(0,i)):t;function xf(i){return typeof i=="string"&&/^audio\/(?:[\w\-\u3400-\u9fff ]+\/)*[\w\-\u3400-\u9fff .]+\.(?:mp3|m4a|ogg|wav|aac|flac)$/i.test(i)&&!i.includes("..")?i:""}function yf(i={}){return(!i||typeof i!="object")&&(i={}),{music:i.music!==!1,effects:i.effects!==!1,musicVolume:Ol(i.musicVolume,.35),effectsVolume:Ol(i.effectsVolume,.58)}}function vf(i={}){let t={};for(let e of["march","battle","departure","victory","retreat"])t[e]=xf(i?.effects?.[e]);return{music:{src:xf(i?.music?.src)||"audio/music/theme.mp3",title:String(i?.music?.title||"\u80CC\u666F\u97F3\u4E50").slice(0,80),volume:Ol(i?.music?.volume,.35)},effects:t}}function oy(i,t=44100){let n={hoof:.22,metal:1.05,drum:.85,horn:1.7,victory:1.65,retreat:1.6,rumble:3}[i]||.22,s=new Float32Array(Math.ceil(n*t)),r=1771,a=0;for(let o=0;o<s.length;o++){let l=o/t;r=Math.imul(r,1664525)+1013904223>>>0;let c=r/2147483648-1;a+=.09*(c-a);let h=0;if(i==="hoof"&&(h=.58*Math.sin(2*Math.PI*(108*l-32*l*l))*Math.exp(-l*30)+a*1.5*Math.exp(-l*36)+(c-a)*.28*Math.exp(-l*110)),i==="metal"){for(let[u,f,g]of[[677,.27,5],[1093,.21,6],[1879,.14,8],[2939,.09,10]])h+=f*Math.sin(2*Math.PI*u*l)*Math.exp(-l*g);h+=(c-a)*.2*Math.exp(-l*85)}if(i==="drum"&&(h=.64*Math.sin(2*Math.PI*(62*l+4*(1-Math.exp(-l*22))))*Math.exp(-l*5.5)+a*.6*Math.exp(-l*21)),i==="rumble"&&(h=[.08,.035,.025,.018].reduce((u,f,g)=>u+f*Math.sin(2*Math.PI*[41,67,101,139][g]*l),0)*(.7+.3*Math.sin(2*Math.PI*l*4))),["horn","victory","retreat"].includes(i)){let u=i==="horn"?146.83:i==="retreat"?130.81:l<.72?261.63:392,f=Math.min(1,l/.14)*Math.min(1,(n-l)/.4);h=(Math.sin(2*Math.PI*u*l)*.3+Math.sin(2*Math.PI*u*2*l)*.08+Math.sin(2*Math.PI*u*3*l)*.04)*f}let d=i==="rumble"?1:Math.min(1,l/.0015,(n-l)/.008);s[o]=Math.max(-.95,Math.min(.95,h*d))}return s}var Bl=class{constructor(t=()=>{},e=()=>{}){this.notify=t,this.changed=e,this.enabled=!1,this.context=null,this.pack=globalThis.__HAN_AUDIO__||null,this.config=vf(this.pack?.config||gf),this.preferences=yf({musicVolume:this.config.music.volume});try{let n=localStorage.getItem(_f);n&&(this.preferences=yf(JSON.parse(n)))}catch{}this.phase="idle",this.sources=new Set,this.buffers=new Map,this.custom=new Map,this.events={},this.musicStatus="\u70B9\u51FB\u5F00\u542F\u58F0\u97F3\u540E\u64AD\u653E",this.musicError="",this.musicRequest=0,this.suspendedByPage=!1,this.element=new Audio,this.element.loop=!0,this.element.preload="none",this.element.playsInline=!0,this.element.addEventListener("playing",()=>{this.musicStatus="\u5FAA\u73AF\u64AD\u653E\u4E2D",this.musicError="",this.changed()}),this.element.addEventListener("error",()=>{this.musicStatus="\u97F3\u4E50\u6682\u4E0D\u53EF\u7528",this.musicError="\u8BF7\u68C0\u67E5 public/"+this.config.music.src+"\uFF0C\u6216\u9009\u62E9\u672C\u673A\u97F3\u4E50\u3002",this.changed()}),this.timer=setInterval(()=>this.tick(),80),document.addEventListener("visibilitychange",()=>this.visibility(document.hidden))}async configure(){return this.configured?this.configured:(this.configured=(async()=>{if(!this.pack&&location.protocol!=="file:")try{let t=await fetch("audio/config.json",{cache:"no-cache"});t.ok&&(this.config=vf(await t.json()))}catch{}this.changed()})(),this.configured)}asset(t){return this.pack?this.pack.assets?.[t]||"":t}ensureContext(){if(this.context)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)throw new Error("AudioContext unavailable");this.context=new t;let e=this.context;this.master=e.createGain(),this.master.gain.value=.8;let n=e.createDynamicsCompressor();n.threshold.value=-12,n.ratio.value=5,n.attack.value=.006,n.release.value=.18,this.analyser=e.createAnalyser(),this.analyser.fftSize=256,this.master.connect(n),n.connect(this.analyser),this.analyser.connect(e.destination),this.musicGain=e.createGain(),this.effectsGain=e.createGain(),this.musicAnalyser=e.createAnalyser(),this.effectsAnalyser=e.createAnalyser(),this.musicGain.connect(this.musicAnalyser),this.musicAnalyser.connect(this.master),this.effectsGain.connect(this.effectsAnalyser),this.effectsAnalyser.connect(this.master),this.musicSource=e.createMediaElementSource(this.element),this.musicSource.connect(this.musicGain);for(let s of["hoof","metal","drum","horn","victory","retreat","rumble"]){let r=oy(s,e.sampleRate),a=e.createBuffer(1,r.length,e.sampleRate);a.copyToChannel(r,0),this.buffers.set(s,a)}this.applyMix(!0)}remember(){try{localStorage.setItem(_f,JSON.stringify(this.preferences))}catch{}}async enable(){this.enabled=!0;try{if(this.ensureContext(),await this.context.resume(),!this.enabled||document.hidden||(this.applyMix(),this.nextBeat=this.context.currentTime+.04,await this.configure(),!this.enabled||document.hidden))return;this.loadEffects(),this.playMusic(),this.phase!=="idle"&&this.setPhase(this.phase,!0),this.changed()}catch{this.enabled=!1,this.notify("\u58F0\u97F3\u6682\u4E0D\u53EF\u7528\uFF0C\u6E38\u620F\u4E0D\u53D7\u5F71\u54CD\u3002"),this.changed()}}disable(){this.enabled=!1,this.musicRequest++,this.element.pause(),this.stopEffects(),this.musicStatus="\u58F0\u97F3\u5DF2\u5173\u95ED",this.context&&(this.master.gain.setValueAtTime(0,this.context.currentTime),this.context.suspend().catch(()=>{})),this.changed()}toggle(){return this.enabled?this.disable():this.enable()}async playMusic(){let t=++this.musicRequest;if(!this.enabled||!this.preferences.music||document.hidden){this.element.pause(),this.musicStatus=this.preferences.music?"\u5DF2\u6682\u505C":"\u80CC\u666F\u97F3\u4E50\u5DF2\u5173\u95ED",this.changed();return}let e=this.localMusic||this.asset(this.config.music.src);if(!e){this.musicStatus="\u79BB\u7EBF\u7248\u672A\u5305\u542B\u97F3\u4E50",this.musicError="\u53EF\u9009\u62E9\u672C\u673A\u97F3\u4E50\uFF0C\u6216\u653E\u5165\u4E3B\u9898\u66F2\u540E\u91CD\u65B0\u6784\u5EFA\u3002",this.changed();return}this.loadedMusic!==e&&(this.element.src=e,this.loadedMusic=e),this.musicStatus="\u6B63\u5728\u51C6\u5907\u97F3\u4E50",this.changed();try{if(await this.element.play(),t!==this.musicRequest)return;(!this.enabled||!this.preferences.music||document.hidden)&&this.element.pause()}catch(n){if(t!==this.musicRequest)return;this.musicStatus=n.name==="NotAllowedError"?"\u8BF7\u518D\u6B21\u70B9\u51FB\u5F00\u542F\u97F3\u4E50":"\u97F3\u4E50\u6682\u4E0D\u53EF\u7528",this.musicError="\u68C0\u67E5\u97F3\u4E50\u6587\u4EF6\uFF0C\u6216\u9009\u62E9\u672C\u673A\u97F3\u4E50\uFF1B\u573A\u666F\u97F3\u6548\u4ECD\u53EF\u4F7F\u7528\u3002",this.changed()}}setChannel(t,e){if(this.preferences[t]=!!e,this.remember(),e&&!this.enabled){this.enable();return}t==="music"?this.playMusic():e?this.phase!=="idle"&&this.setPhase(this.phase,!0):this.stopEffects(),this.applyMix(),this.changed()}setVolume(t,e){let n=t==="music"?"musicVolume":"effectsVolume";this.preferences[n]=Ol(Number(e),this.preferences[n]),this.remember(),this.applyMix(),this.changed()}applyMix(t=!1){if(!this.context)return;let e=this.phase==="battle"?.48:["departure","march"].includes(this.phase)?.75:1,n=this.context,s=(r,a)=>{r.cancelScheduledValues(n.currentTime),t?r.setValueAtTime(a,n.currentTime):r.setTargetAtTime(a,n.currentTime,.12)};s(this.master.gain,this.enabled?.8:0),s(this.musicGain.gain,this.preferences.music?this.preferences.musicVolume*e:0),s(this.effectsGain.gain,this.preferences.effects?this.preferences.effectsVolume:0)}async loadEffects(){if(this.effectsLoading)return this.effectsLoading;this.effectsLoading=Promise.all(Object.entries(this.config.effects).map(async([t,e])=>{let n=e&&this.asset(e);if(n)try{let s=await fetch(n);if(!s.ok)return;let r=await s.arrayBuffer();if(r.byteLength>16*1024*1024)return;this.custom.set(t,await this.context.decodeAudioData(r))}catch{}})),await this.effectsLoading,this.changed()}play(t,e=1,n=0,s=1,r=this.context?.currentTime,a=!1,o=""){if(!t||!this.context||!this.enabled||!this.preferences.effects||document.hidden||this.context.state!=="running")return;let l=this.context,c=l.createBufferSource(),h=l.createGain(),d=l.createStereoPanner();return c.buffer=t,c.playbackRate.value=s,c.loop=a,h.gain.setValueAtTime(0,r),h.gain.linearRampToValueAtTime(e,r+.006),d.pan.value=Math.min(1,Math.max(-1,n)),c.connect(h),h.connect(d),d.connect(this.effectsGain),c.onended=()=>{this.sources.delete(c),c.disconnect(),h.disconnect(),d.disconnect()},this.sources.add(c),c.start(r),a||c.stop(r+t.duration/s+.03),this.events[o||"custom"]=(this.events[o||"custom"]||0)+1,c}stopEffects(){for(let t of this.sources)try{t.stop()}catch{}this.sources.clear()}cue(t,e=1,n=0,s=1,r){this.play(this.buffers.get(t),e,n,s,r??this.context?.currentTime,!1,t)}setPhase(t,e=!1){if(t===this.phase&&!e)return;if(e||clearTimeout(this.previewTimer),this.stopEffects(),this.phase=t,this.beat=0,this.nextBeat=(this.context?.currentTime||0)+.04,this.applyMix(),t==="idle"){this.changed();return}let n=this.custom.get(t);n?this.play(n,.75,0,1,this.context?.currentTime,["march","battle"].includes(t),t):t==="departure"?(this.cue("drum",.65),this.cue("horn",.35)):t==="march"||t==="battle"?this.play(this.buffers.get("rumble"),.6,0,1,this.context?.currentTime,!0,"rumble"):(t==="victory"||t==="retreat")&&this.cue(t,.5),this.changed()}tick(){let t=this.context;if(!(!t||t.state!=="running"||!this.enabled||!this.preferences.effects||document.hidden||!["departure","march","battle"].includes(this.phase)||this.custom.has(this.phase)))for(this.nextBeat<t.currentTime&&(this.nextBeat=t.currentTime+.02);this.nextBeat<t.currentTime+.16;){let e=this.beat++,n=this.nextBeat;this.phase==="battle"?(this.cue("metal",.22+e%3*.055,Math.sin(e*2.1)*.6,.8+e%5*.11,n),e%3===0&&this.cue("drum",.25,-.2,1.5,n+.03),this.nextBeat+=.21+e%3*.06):(this.cue("hoof",.33,Math.sin(e*.9)*.6,.84+e%4*.11,n),this.cue("hoof",.18,-Math.sin(e*.9)*.45,1.13,n+.035),e%8===0&&this.cue("drum",.23,0,.92,n),this.nextBeat+=[.095,.16,.1,.19][e%4])}}async preview(t){this.enabled||await this.enable(),clearTimeout(this.previewTimer),this.setPhase(t,!0),this.previewTimer=setTimeout(()=>this.setPhase("idle"),2600)}chooseMusic(t){if(!t||t.size>40*1024*1024||!/\.(mp3|m4a|ogg|wav|aac|flac)$/i.test(t.name)){this.notify("\u8BF7\u9009\u62E9\u4E0D\u8D85\u8FC7 40 MB \u7684\u97F3\u9891\u6587\u4EF6\u3002");return}this.element.pause(),this.localMusic&&URL.revokeObjectURL(this.localMusic),this.localMusic=URL.createObjectURL(t),this.localTitle=t.name,this.musicError="",this.preferences.music=!0,this.remember(),this.enabled?this.playMusic():this.enable(),this.notify("\u5DF2\u9009\u62E9\u672C\u673A\u97F3\u4E50\uFF0C\u4EC5\u672C\u6B21\u9875\u9762\u6709\u6548\uFF0C\u4E0D\u4E0A\u4F20\u6587\u4EF6\u3002"),this.changed()}async visibility(t){this.suspendedByPage=t,this.context&&(t?(this.musicRequest++,this.element.pause(),this.stopEffects(),await this.context.suspend().catch(()=>{})):this.enabled&&(await this.context.resume().catch(()=>{}),this.nextBeat=this.context.currentTime+.04,["march","battle","departure"].includes(this.phase)&&this.setPhase(this.phase,!0),this.playMusic()),this.changed())}snapshot(){let t=e=>{if(!e||this.context.state!=="running")return 0;let n=new Float32Array(e.fftSize);return e.getFloatTimeDomainData(n),Math.sqrt(n.reduce((s,r)=>s+r*r,0)/n.length)};return{enabled:this.enabled,...this.preferences,phase:this.phase,context:this.context?.state||"not-created",musicStatus:this.musicStatus,musicError:this.musicError,musicTime:this.element.currentTime,musicDuration:Number.isFinite(this.element.duration)?this.element.duration:null,musicPaused:this.element.paused,title:this.localTitle||this.config.music.title,musicPath:this.config.music.src,embedded:!!this.pack,activeSources:this.sources.size,rms:t(this.analyser),musicRms:t(this.musicAnalyser),effectsRms:t(this.effectsAnalyser),events:{...this.events}}}};var V=i=>document.getElementById(i),Ii="han-restoration-3d-v2";V("reload-game").addEventListener("click",()=>location.reload());var Ef="2.1.1",Yn=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),In={jing:"\u8346\u5DDE",yi:"\u6210\u90FD",han:"\u6C49\u4E2D",long:"\u9647\u53F3",guan:"\u957F\u5B89",north:"\u4E2D\u539F",wu:"\u5EFA\u4E1A"},ly={jing:"\u5357\u5317\u4E4B\u4EA4\uFF0C\u4E1C\u897F\u4E4B\u67A2\u3002\u5B83\u8FDE\u63A5\u8346\u8944\u4E0E\u5DF4\u8700\uFF0C\u4E5F\u5904\u5728\u5B59\u5218\u4E24\u5BB6\u7684\u5229\u76CA\u4EA4\u754C\u3002",yi:"\u6210\u90FD\u5E73\u539F\u63D0\u4F9B\u7A33\u5B9A\u540E\u65B9\uFF1B\u628A\u6237\u7C4D\u3001\u7530\u571F\u4E0E\u5730\u65B9\u5408\u4F5C\u63A5\u8D77\u6765\uFF0C\u624D\u6709\u6301\u7EED\u5411\u5317\u7684\u529B\u91CF\u3002",han:"\u79E6\u5CAD\u4E0E\u5DF4\u5C71\u4E4B\u95F4\u7684\u95E8\u6237\u3002\u5C71\u8DEF\u5E76\u4E0D\u4F1A\u56E0\u4E3A\u4F60\u77E5\u9053\u5386\u53F2\uFF0C\u5C31\u591A\u8FD0\u4E00\u8F66\u7CAE\u98DF\u3002",long:"\u9647\u53F3\u8FDE\u63A5\u5173\u4E2D\u4E0E\u897F\u5317\u3002\u8DE8\u8D8A\u5C71\u5730\u7684\u8865\u7ED9\uFF0C\u51B3\u5B9A\u4E00\u6B21\u80DC\u4ED7\u80FD\u5426\u53D8\u6210\u957F\u671F\u63A7\u5236\u3002",guan:"\u5173\u4E2D\u76C6\u5730\u662F\u8FDB\u5165\u4E2D\u539F\u7684\u91CD\u8981\u57FA\u5730\u3002\u519B\u961F\u53EF\u4EE5\u8FC7\u5173\uFF0C\u884C\u653F\u4E0E\u7CAE\u7A0E\u4E5F\u9700\u8981\u8DDF\u8FDB\u3002",north:"\u6B64\u533A\u6982\u62EC\u4E2D\u539F\u4E0E\u6CB3\u5317\u7B49\u5317\u65B9\u4E3B\u8981\u5730\u533A\u3002\u593A\u53D6\u653F\u6CBB\u4E0E\u4EBA\u53E3\u4E2D\u5FC3\uFF0C\u4F1A\u6539\u53D8\u5176\u4ED6\u52BF\u529B\u7684\u5224\u65AD\u3002",wu:"\u6B64\u533A\u6982\u62EC\u6C5F\u4E1C\u53CA\u5434\u65B9\u4E3B\u8981\u63A7\u5236\u533A\u3002\u5171\u540C\u654C\u4EBA\u6D88\u5931\u540E\uFF0C\u8054\u76DF\u9700\u8981\u65B0\u7684\u5229\u76CA\u5B89\u6392\u3002"},Pt,et=Nl("tutorial"),xe="tutorial",Qi=!1,qs=!1,aa=null,ts=null,zl=null,yn=null,ra=!0,Mf,Nh=null,Pi=null,kl=null,Ci=!0,we=new Bl(Fe,Vh),wf=matchMedia("(prefers-reduced-motion: reduce)").matches;try{let i=localStorage.getItem(Ii);yn=Dh(i),i&&!yn&&(Pi=i),kl=Pi||localStorage.getItem(Ii+"-recovery"),Nh=localStorage.getItem(Ii+"-quality")}catch{ra=!1}try{Ci=localStorage.getItem(Ii+"-cinematics")!=="off"}catch{}function Fe(i){V("toast").textContent=i,V("toast").classList.add("visible"),clearTimeout(Mf),Mf=setTimeout(()=>V("toast").classList.remove("visible"),3200)}function Tf(){yn={mode:xe,state:et};try{Pi&&(localStorage.setItem(Ii+"-recovery",Pi),kl=Pi,Pi=null),localStorage.setItem(Ii,Lh(xe,et)),ra=!0}catch{ra=!1}Af()}function Af(){V("save-state").textContent=ra?"\u5C40\u53F7 "+et.seed+" \xB7 \u8FDB\u5EA6\u5DF2\u4FDD\u5B58":"\u672C\u5730\u5B58\u6863\u672A\u6210\u529F\uFF0C\u8BF7\u4ECE\u83DC\u5355\u5BFC\u51FA\u8FDB\u5EA6"}function en(i,t,e="\u4E1E\u76F8\u5E9C \xB7 \u519B\u8BAE"){V("dialog-title").textContent=i,V("dialog-kicker").textContent=e,V("dialog-content").innerHTML=t,V("dialog").open||V("dialog").showModal(),Pt&&(Pt.pausedScene=!0)}function Ys(){V("dialog").close(),zl=null,Pt&&(Pt.pausedScene=!V("report-panel").hidden)}function Zn(){return qs?(Fe("\u519B\u961F\u6B63\u5728\u884C\u8FDB\uFF0C\u5F85\u672C\u6B21\u519B\u60C5\u7ED3\u7B97\u540E\u518D\u4E0B\u4EE4\u3002"),!1):!0}function Vl(){return Ge.options(et)}function cy(){V("resource-bar").innerHTML=["grain","army","people","logistics","wu","institution"].map((i,t)=>'<div class="resource-item '+(t===5?"optional ":"")+(i==="grain"&&et[i]<30||i==="people"&&et[i]<30||i==="wu"&&et[i]<30?"warn":"")+'"><span>'+{grain:"\u7CAE\u79E3",army:"\u519B\u5907",people:"\u6C11\u529B",logistics:"\u8FD0\u8F93",wu:"\u5434\u76DF",institution:"\u4F20\u627F"}[i]+'</span><strong data-stat="'+i+'">'+et[i]+'</strong><span class="resource-unit">'+(i==="grain"?"/ 240":"/ 100")+"</span></div>").join("")}function Bh(){cy(),V("game-year").textContent=et.year,V("mode-label").textContent=xe==="tutorial"?"\u5317\u4F10\u6559\u5B66 \xB7 \u9884\u8BBE\u5F00\u5C40":et.successor?"\u6B63\u5F0F\u8FDC\u7565 \xB7 \u7EE7\u4EFB\u56E2\u961F":"\u6B63\u5F0F\u8FDC\u7565 \xB7 \u8BF8\u845B\u4EAE",V("territory-count").textContent=et.land.length+" / 7",V("journal-count").textContent=et.history.length+" \u6B21\u51B3\u7B56",V("weather-label").textContent="\u5929\u5019\uFF1A"+et.weather,Af();let i="\u5C71\u6CB3\u672A\u5B9A",t="\u70B9\u9009\u57CE\u6C60\u67E5\u770B\u519B\u60C5\uFF0C\u6216\u4ECE\u4E0B\u65B9\u519B\u8BAE\u63A8\u8FDB\u56FD\u7B56\u3002";et.chapter<4?(i=["\u521D\u51FA\u9686\u4E2D","\u6C5F\u4E1C\u7ED3\u76DF","\u8346\u5DDE\u751F\u8BA1","\u5165\u8700\u6CBB\u653F"][et.chapter],t="\u4F60\u9700\u8981\u5148\u4E89\u53D6\u6388\u6743\u4E0E\u5408\u4F5C\u3002\u6253\u5F00\u300C\u519B\u8BAE\u300D\uFF0C\u51B3\u5B9A\u8FD9\u4E00\u7A0B\u5982\u4F55\u8D77\u6B65\u3002"):xe==="tutorial"&&et.turn===0?(i="\u5175\u51FA\u6C49\u4E2D",t=aa==="han"?"\u70B9\u51FB\u300C\u9009\u62E9\u9647\u53F3\u4E3A\u76EE\u6807\u300D\uFF0C\u67E5\u770B\u8DEF\u7EBF\u4E0E\u519B\u9700\u3002":"\u5148\u70B9\u9009\u6C49\u4E2D\uFF0C\u518D\u89C4\u5212\u4E00\u6761\u901A\u5F80\u9647\u53F3\u7684\u8FDB\u519B\u8DEF\u7EBF\u3002"):xe==="tutorial"&&et.land.includes("long")&&et.stability.long<60?(i="\u5F97\u5730\u4E4B\u540E",t="\u9647\u53F3\u5C1A\u672A\u7A33\u5B9A\u3002\u8FDB\u5165\u300C\u5185\u6CBB\u300D\uFF0C\u5B89\u629A\u5730\u65B9\uFF0C\u8BA9\u9A7B\u519B\u4E0E\u884C\u653F\u7AD9\u7A33\u811A\u8DDF\u3002"):xe==="tutorial"&&et.land.includes("long")&&et.stability.long>=60?(i="\u4E00\u5F79\u5DF2\u6210\uFF0C\u8FDC\u7565\u65B9\u59CB",t="\u4F60\u5DF2\u5B8C\u6210\u51FA\u5F81\u4E0E\u6CBB\u7406\u6559\u5B66\u3002\u53EF\u4EE5\u7EE7\u7EED\u6B64\u5C40\uFF0C\u6216\u4ECE\u83DC\u5355\u5F00\u542F\u6B63\u5F0F 207 \u5E74\u8FDC\u7565\u3002"):et.land.length===7?(i="\u7586\u57DF\u5DF2\u5408\uFF0C\u653F\u4EE4\u5F85\u884C",t="\u7EF4\u6301\u7CAE\u79E3\u3001\u6C11\u529B\u548C\u5730\u65B9\u7A33\u5B9A\uFF0C\u8FDE\u7EED\u4E24\u8F6E\u8FBE\u5230\u7EDF\u4E00\u6761\u4EF6\u3002"):et.successor&&(i="\u85AA\u706B\u76F8\u627F",t="\u653F\u52A1\u5DF2\u4EA4\u5230\u7EE7\u4EFB\u8005\u624B\u4E2D\u3002\u4F60\u7ECF\u8425\u7684\u5236\u5EA6\uFF0C\u7EE7\u7EED\u51B3\u5B9A\u8FD9\u7247\u5C71\u6CB3\u3002"),et.over&&(i=et.over.title,t=et.over.text),V("chapter-title").textContent=i,V("chapter-goal").textContent=t;let e=[];et.grain<30&&e.push("\u5B58\u7CAE\u504F\u4F4E\uFF0C\u5148\u68C0\u67E5\u519B\u961F\u5F00\u652F"),et.wu<32&&!et.land.includes("wu")&&e.push("\u5434\u76DF\u504F\u5F31\uFF0C\u8346\u5DDE\u9762\u4E34\u98CE\u9669"),et.year>=228&&et.year<234&&et.institution<55&&e.push("234 \u5E74\u4EA4\u63A5\u524D\uFF0C\u4F20\u627F\u987B\u8FBE\u5230 55"),ra||e.unshift("\u65E0\u6CD5\u81EA\u52A8\u5B58\u6863\uFF1A\u8BF7\u4ECE\u83DC\u5355\u5BFC\u51FA\u8FDB\u5EA6\uFF0C\u518D\u5173\u95ED\u9875\u9762"),V("condition-alert").hidden=!e.length,V("condition-alert").textContent=e.join(" \xB7 "),Pt.updateState(et),document.querySelectorAll("[data-command]").forEach(n=>n.disabled=qs||!!et.over)}function ci(i,t=null,e=new URL(location.href).searchParams.get("seed")||207){Zn()&&(xe=i,et=t||Nl(xe,xe==="tutorial"?207:e),Qi=!0,aa=null,ts=null,V("cover").hidden=!0,document.body.classList.remove("is-landing"),V("game-hud").hidden=!1,V("resource-bar").hidden=!1,V("inspector").hidden=!0,V("report-panel").hidden=!0,Ys(),Pt.clearRoute(),Pt.select(null),Pt.home(),Tf(),Bh(),xe==="tutorial"&&et.turn===0?(zh("han",!0),Fe("\u6559\u5B66\uFF1A\u9009\u62E9\u9647\u53F3\u4E3A\u76EE\u6807\uFF0C\u5148\u770B\u884C\u519B\u8BA1\u5212\u3002")):et.chapter<4&&Zs("council"))}function Rf(){Zn()&&(Qi=!1,V("cover").hidden=!1,document.body.classList.add("is-landing"),V("game-hud").hidden=!0,V("resource-bar").hidden=!0,V("inspector").hidden=!0,V("report-panel").hidden=!0,Ys(),Pt.clearRoute(),Pt.showcase(),V("resume-button").hidden=!yn)}function Hl(i){return'<div class="city-stats">'+i.map(([t,e])=>"<div><span>"+t+"</span><strong>"+e+"</strong></div>").join("")+"</div>"}function zh(i,t=!0){if(!Qi||!Zn())return;aa=i,ts=null,Pt.clearRoute(),Pt.select(i,t),V("report-panel").hidden=!0,Pt.pausedScene=!1,V("inspector").hidden=!1,V("inspector-title").textContent=In[i];let e=et.land.includes(i),n=Ge.REGIONS.find(a=>a.id===i),s=Vl().find(a=>a.id==="campaign:"+i);V("inspector-faction").textContent=e?"\u6C49\u5883 \xB7 \u53EF\u7528\u636E\u70B9":i==="wu"?"\u5434\u65B9 \xB7 \u72EC\u7ACB\u5229\u76CA":"\u672A\u63A7\u5236 \xB7 \u6218\u7565\u76EE\u6807",V("inspector-subtitle").textContent=n.name+" \xB7 "+(e?"\u7CAE\u9053\u4E0E\u653F\u52A1\u8282\u70B9":"\u5C1A\u672A\u7EB3\u5165\u5171\u540C\u519B\u653F");let r=Hl(e?[["\u5730\u65B9\u7A33\u5B9A",Math.round(et.stability[i])],["\u53EF\u7528\u519B\u5907",et.army],["\u8FD0\u8F93\u80FD\u529B",et.logistics],["\u6C11\u671B",et.trust]]:[["\u5B88\u5907\u57FA\u6570",n.base],["\u8FD0\u8F93\u8981\u6C42",n.road],["\u519B\u9700\u7CAE\u79E3",n.cost],["\u672C\u5C40\u80DC\u7B97",s?s.campaign.chance+"%":"\u2014"]]);if(r+='<p class="inspector-description">'+ly[i]+"</p>",et.over)r+='<p class="hint-line">\u672C\u5C40\u5DF2\u7ECF\u7ED3\u675F\uFF0C\u53EF\u4ECE\u83DC\u5355\u67E5\u770B\u6218\u62A5\u6216\u5F00\u59CB\u65B0\u8FDC\u7565\u3002</p>';else if(et.chapter<4)r+='<button class="primary" id="city-council">\u5148\u8BAE\u5B9A\u5F53\u524D\u5927\u8BA1 \u2192</button>';else if(e){let a=Vl().filter(o=>o.kind==="\u6218\u5F79"&&Ih(et,o.id.split(":")[1])===i);a.length?r+=a.map(o=>'<button class="primary" data-target="'+o.id.split(":")[1]+'">\u9009\u62E9'+In[o.id.split(":")[1]]+"\u4E3A\u76EE\u6807 <span>\u89C4\u5212\u8DEF\u7EBF \u2192</span></button>").join(""):r+='<button class="primary" id="city-govern">\u5B89\u629A\u4E0E\u6574\u5408 <span>\u67E5\u770B\u56FD\u7B56 \u2192</span></button>',r+='<button class="secondary" id="city-close-view">\u8FD1\u770B\u57CE\u90ED</button>'}else s?(r+='<button class="primary" id="plan-campaign">\u89C4\u5212\u8FDB\u519B <span>\u68C0\u67E5\u7CAE\u9053 \u2192</span></button>',s.reasons.length&&(r+='<p class="hint-line">\u5F53\u524D\u5C1A\u7F3A\uFF1A'+s.reasons.join("\uFF1B")+"</p>")):r+='<p class="hint-line">\u5C1A\u65E0\u53EF\u7528\u8FDB\u519B\u8DEF\u7EBF\u3002\u5148\u7ECF\u8425\u76F8\u90BB\u533A\u57DF\uFF0C\u518D\u63A8\u8FDB\u6218\u7EBF\u3002</p>';V("inspector-body").innerHTML=r,document.querySelectorAll("[data-target]").forEach(a=>a.addEventListener("click",()=>bf(a.dataset.target))),V("plan-campaign")?.addEventListener("click",()=>bf(i)),V("city-close-view")?.addEventListener("click",()=>{Pt.focus(i,!0),innerWidth<700&&(V("inspector").hidden=!0)}),V("city-govern")?.addEventListener("click",()=>Zs("domestic")),V("city-council")?.addEventListener("click",()=>Zs("council")),Bh()}function bf(i){if(!Zn())return;let t=Vl().find(s=>s.id==="campaign:"+i),e=Ih(et,i);if(!t||!e){Fe("\u5F53\u524D\u6CA1\u6709\u53EF\u7528\u7684\u8FDB\u519B\u8DEF\u7EBF\u3002");return}aa=i,ts={target:i,source:e,id:t.id},Pt.select(i),Pt.previewRoute(e,i),V("inspector").hidden=!1,V("inspector-faction").textContent="\u884C\u519B\u7B79\u5212 \xB7 \u5C1A\u672A\u51FA\u5F81",V("inspector-title").textContent="\u8FDB\u53D6"+In[i],V("inspector-subtitle").textContent="\u786E\u8BA4\u540E\u624D\u7ED3\u7B97\u5175\u7CAE\u3002\u672C\u56DE\u5408\u6309\u4E24\u5E74\u6218\u5F79\u4E0E\u7B79\u5907\u671F\u8BA1\u7B97\u3002";let n=t.campaign;V("inspector-body").innerHTML='<div class="route-name">'+In[e]+" \u2192 "+In[i]+"</div>"+Hl([["\u519B\u9700\u7CAE\u79E3","\u2212"+n.region.cost],["\u6A21\u578B\u80DC\u7B97",n.chance+"%"],["\u6211\u65B9\u5F3A\u5EA6",n.power],["\u5BF9\u65B9\u5B88\u5907",n.defense]])+'<p class="forecast">'+(n.ally?"\u5434\u76DF\u5F62\u6210\u4FA7\u7FFC\u7275\u5236\uFF0C\u8FDB\u653B\u5F3A\u5EA6 +8\u3002":"\u8865\u7ED9\u3001\u519B\u5907\u4E0E\u5F79\u8D1F\u5171\u540C\u5F71\u54CD\u6B64\u6218\u3002")+"<br>\u65E0\u8BBA\u80DC\u8D25\u90FD\u6D88\u8017\u7CAE\u79E3\u3002\u6210\u529F\u5360\u9886\u540E\uFF0C\u5730\u65B9\u7A33\u5B9A\u4ECD\u9700\u6062\u590D\u3002</p>"+(n.reasons.length?'<ul class="needs-list">'+n.reasons.map(s=>"<li>"+s+"</li>").join("")+"</ul>":"")+'<button class="primary" id="launch-campaign" '+(n.reasons.length?"disabled":"")+">\u786E\u8BA4\u51FA\u5F81 <span>\u7CAE\u79E3 \u2212"+n.region.cost+' \u2192</span></button><button class="secondary" id="cancel-plan">\u6682\u7F13\u51FA\u5175</button>',V("launch-campaign").addEventListener("click",()=>Pf(t.id,ts)),V("cancel-plan").addEventListener("click",()=>zh(e,!1))}function Cf(i){return'<div class="delta-strip">'+i.delta.map(t=>'<span class="'+(t.value>0&&t.key!=="fatigue"||t.value<0&&t.key==="fatigue"?"positive":"negative")+'">'+t.name+" "+(t.value>0?"+":"\u2212")+Math.abs(t.value)+"</span>").join("")+"</div>"}async function Pf(i,t=null){if(!Zn())return;let e=Ge.step(et,i);if(!e.ok){Fe(e.error);return}let n=et;if(qs=!0,et=e.state,Tf(),Ys(),V("inspector").hidden=!0,V("report-panel").hidden=!0,document.querySelectorAll("[data-command]").forEach(r=>r.disabled=!0),t){let r=et.land.includes(t.target);V("march-label").textContent=In[t.source]+" \u2192 "+In[t.target];let a=document.querySelector('[data-stat="grain"]');if(a&&(a.textContent=Math.max(0,n.grain-Ge.campaign(n,t.target).region.cost)),V("help-button").disabled=!0,V("menu-button").disabled=!0,Ci){V("cinematic").hidden=!1,document.body.classList.add("is-cinematic"),V("cinematic-route").textContent=In[t.source]+" \u2192 "+In[t.target];try{await Pt.march(t.source,t.target,o=>{V("cinematic").dataset.phase=o.id,V("cinematic-title").textContent=o.id==="aftermath"?r?"\u654C\u9635\u6E10\u9000":"\u9E23\u91D1\u6536\u5175":o.title,V("cinematic-description").textContent=o.id==="aftermath"?r?"\u524D\u9635\u63A8\u8FDB\uFF0C\u6536\u62E2\u961F\u4F0D\u4E0E\u8F8E\u91CD":"\u6709\u5E8F\u64A4\u56DE\uFF0C\u4FDD\u5B58\u529B\u91CF\u518D\u8BAE":o.detail,V("cinematic-progress").style.width=o.progress*100+"%",V("cinematic-percent").textContent=Math.round(o.progress*100)+"%"},wf,{won:r,defender:Ul(n,t.target),onPhase:o=>we.setPhase(o)})}catch(o){console.error(o),Fe("\u6218\u5F79\u6F14\u51FA\u6682\u672A\u5B8C\u6210\uFF0C\u5DF2\u4FDD\u7559\u51B3\u7B56\u5E76\u8F6C\u5165\u519B\u62A5\u3002")}finally{Pt.finishCampaign(!0),V("cinematic").hidden=!0,document.body.classList.remove("is-cinematic"),we.setPhase("idle")}}else Pt.clearRoute(),we.cue(r?"victory":"retreat",.4);V("help-button").disabled=!1,V("menu-button").disabled=!1,V("march-hud").hidden=!0,Pt.clearRoute()}let s=xe==="tutorial"&&et.land.includes("long")&&et.stability.long>=60&&(!n.land.includes("long")||n.stability.long<60);qs=!1,ts=null,Bh(),Pt.renderer.render(Pt.scene,Pt.camera),hy(e.entry,t,s)}function hy(i,t,e=!1){Pt.pausedScene=!0,V("report-panel").hidden=!1,V("report-kicker").textContent=et.over?"\u7EC8\u5C40 \xB7 "+(xe==="tutorial"?"\u6559\u5B66\u5C40":"\u6B63\u5F0F\u8FDC\u7565"):t?"\u524D\u7EBF\u519B\u62A5 \xB7 "+et.year+" \u5E74":"\u519B\u8BAE\u56DE\u62A5 \xB7 "+et.year+" \u5E74";let n=t&&et.land.includes(t.target);if(V("report-title").textContent=et.over?et.over.title:t?n?In[t.target]+"\u5DF2\u5165\u7248\u56FE":"\u5E08\u8FD8\uFF0C\u53E6\u56FE\u540E\u4E3E":i.name,V("report-summary").textContent=et.over?et.over.text:t?n?"\u57CE\u95E8\u5DF2\u5F00\u3002\u65B0\u5360\u5730\u533A\u5C1A\u672A\u5B89\u5B9A\uFF0C\u9A7B\u519B\u3001\u7CAE\u7A0E\u4E0E\u5730\u65B9\u627F\u8BFA\u9700\u8981\u4F60\u7EE7\u7EED\u7ECF\u8425\u3002":"\u90E8\u961F\u9000\u56DE\u539F\u9632\u7EBF\uFF0C\u7CAE\u79E3\u4E0E\u519B\u5907\u5DF2\u6709\u635F\u8017\u3002\u6062\u590D\u6C11\u529B\u548C\u519B\u961F\uFF0C\u518D\u8BC4\u4F30\u4E0B\u4E00\u6B21\u51FA\u5F81\u3002":i.report[0],V("report-deltas").innerHTML=Cf(i),V("report-details").innerHTML=i.report.map(s=>"<p>"+Yn(s)+"</p>").join(""),V("report-next").textContent=et.over?"\u67E5\u770B\u7EC8\u5C40\u6218\u62A5 \u2192":xe==="tutorial"&&t&&n?"\u4E0B\u4E00\u6B65\uFF1A\u6CBB\u7406\u65B0\u5730 \u2192":"\u7EE7\u7EED\u7ECF\u7565 \u2192",V("report-next").onclick=()=>{V("report-panel").hidden=!0,Pt.pausedScene=!1,et.over?Oh():xe==="tutorial"&&t&&n?Zs("domestic"):et.chapter<4&&Zs("council")},V("tutorial-share")?.remove(),e){V("report-kicker").textContent="\u6559\u5B66\u5B8C\u6210 \xB7 \u51FA\u5F81\u4E0E\u6CBB\u7406",V("report-title").textContent="\u4E00\u5F79\u5DF2\u6210\uFF0C\u8FDC\u7565\u65B9\u59CB",V("report-summary").textContent="\u4F60\u5DF2\u6253\u901A\u7CAE\u9053\u3001\u53D6\u5F97\u65B0\u5730\uFF0C\u5E76\u628A\u9647\u53F3\u7A33\u5B9A\u63D0\u5347\u5230 "+et.stability.long+"\u3002\u73B0\u5728\u53EF\u4EE5\u4ECE 207 \u5E74\u5F00\u542F\u771F\u6B63\u7684\u8FDC\u7565\uFF0C\u6216\u5206\u4EAB\u8FD9\u4E00\u573A\u6559\u5B66\u6218\u62A5\u3002",V("report-next").textContent="\u5F00\u59CB\u6B63\u5F0F\u8FDC\u7565 \u2192",V("report-next").onclick=()=>{en("\u4ECE 207 \u5E74\uFF0C\u771F\u6B63\u8D77\u6B65",'<p>\u6B63\u5F0F\u5C40\u4E0D\u7EE7\u627F\u6559\u5B66\u7684\u9884\u8BBE\u5175\u7CAE\u3002\u5F00\u59CB\u4F1A\u66FF\u6362\u4E09\u7EF4\u7248\u81EA\u52A8\u5B58\u6863\uFF1B\u82E5\u8981\u4FDD\u7559\u6559\u5B66\u8FDB\u5EA6\uFF0C\u53EF\u5148\u4ECE\u83DC\u5355\u5BFC\u51FA\u3002</p><button class="primary" id="tutorial-to-campaign">\u5F00\u542F\u6B63\u5F0F\u8FDC\u7565 \u2192</button>'),V("tutorial-to-campaign").onclick=()=>ci("campaign")};let s=document.createElement("button");s.id="tutorial-share",s.className="secondary",s.style.cssText="width:100%;margin-top:10px",s.textContent="\u5206\u4EAB\u8FD9\u573A\u5317\u4F10",s.onclick=Oh,V("report-panel").append(s)}}function uy(i){let t={...i.delta};return i.cost&&(t.grain=(t.grain||0)-i.cost),Object.entries(t).filter(([,e])=>e).map(([e,n])=>Ge.STATS[e][0]+" "+(n>0?"+":"\u2212")+Math.abs(n)).join(" \xB7 ")+(i.id==="govern"?" \xB7 \u5404\u5730\u7A33\u5B9A +18":"")}function Zs(i){if(!Zn()||!Qi||et.over)return;let t=et.chapter<4,e=Ge.INTRO[et.chapter],n={council:["institution","rest","roads","diplomacy"],domestic:["govern","rest","reform"],military:["roads","train","levy"],diplomacy:["diplomacy","settle"]},s=Vl().filter(a=>t||n[i].includes(a.id));zl=null;let r=t?e.text:i==="council"?"\u4E00\u9879\u56FD\u7B56\u63A8\u8FDB\u4E24\u5E74\u3002\u5148\u770B\u5373\u65F6\u6295\u5165\uFF0C\u518D\u770B\u5C81\u5165\u3001\u517B\u519B\u4E0E\u5929\u5019\u7684\u56DE\u5408\u7ED3\u7B97\u3002":i==="domestic"?"\u5360\u9886\u53EA\u662F\u5F00\u59CB\u3002\u65B0\u5730\u7684\u884C\u653F\u6574\u5408\u3001\u519C\u65F6\u4E0E\u7A0E\u6E90\uFF0C\u51B3\u5B9A\u4E0B\u4E00\u573A\u4ED7\u6709\u6CA1\u6709\u7CAE\u3002":i==="military"?"\u5175\u529B\u4E0E\u8FD0\u8F93\u5404\u6709\u6210\u672C\u3002\u51FA\u5F81\u8BF7\u5173\u95ED\u519B\u8BAE\uFF0C\u5728\u6C99\u76D8\u4E0A\u70B9\u9009\u57CE\u6C60\u89C4\u5212\u8DEF\u7EBF\u3002":"\u8054\u76DF\u4E0D\u662F\u6C38\u4E45\u7684\u52A0\u6210\u3002\u4E92\u5E02\u3001\u8FB9\u754C\u627F\u8BFA\u4E0E\u53CC\u65B9\u5B9E\u529B\u53D8\u5316\uFF0C\u4F1A\u4E0D\u65AD\u6539\u53D8\u5408\u4F5C\u610F\u613F\u3002";en(t?e.title:{council:"\u6BCF\u4E00\u7B56\uFF0C\u90FD\u6709\u4EE3\u4EF7",domestic:"\u5148\u8BA9\u4E61\u91CC\u6062\u590D",military:"\u5175\u9A6C\u672A\u52A8\uFF0C\u7CAE\u9053\u5148\u884C",diplomacy:"\u4EE5\u5171\u540C\u5229\u76CA\u7ED3\u76DF"}[i],"<p>"+Yn(r)+'</p><ul class="policy-list">'+s.map(a=>'<li class="policy '+(a.reasons.length?"locked":"")+'" data-policy-row="'+a.id+'"><button data-policy="'+a.id+'" aria-pressed="false"><div class="policy-heading"><span>'+Yn(a.name)+"</span><span>"+(!t&&a.cost?"\u7CAE \u2212"+a.cost:"")+'</span></div><p class="policy-desc">'+Yn(a.desc)+'</p><p class="policy-effect">'+Yn(uy(a))+"</p>"+(a.reasons.length?'<p class="needs-list">\u5C1A\u7F3A\uFF1A'+Yn(a.reasons.join("\uFF1B"))+"</p>":"")+"</button></li>").join("")+'</ul><div id="policy-confirm" class="policy-confirm"><p>\u9009\u62E9\u4E00\u9879\u8BAE\u6848\uFF0C\u6838\u5BF9\u540E\u518D\u786E\u8BA4\u3002\u672C\u6B21\u9009\u62E9\u5C1A\u672A\u6D88\u8017\u8D44\u6E90\u3002</p></div>',t?e.label:"\u4E1E\u76F8\u5E9C \xB7 "+et.year+" \u5E74"),document.querySelectorAll("[data-policy]").forEach(a=>a.addEventListener("click",()=>{let o=s.find(c=>c.id===a.dataset.policy);zl=o.id,document.querySelectorAll("[data-policy-row]").forEach(c=>c.classList.toggle("selected",c.dataset.policyRow===zl)),document.querySelectorAll("[data-policy]").forEach(c=>c.setAttribute("aria-pressed",c===a?"true":"false"));let l=Ge.step(et,o.id);V("policy-confirm").innerHTML="<p>"+(l.ok?"\u6267\u884C\u540E\u8FDB\u5165 "+l.state.year+" \u5E74\u3002\u4EE5\u4E0A\u662F\u5373\u65F6\u6295\u5165\uFF1B\u6536\u6210\u3001\u519B\u8D39\u548C\u4E8B\u4EF6\u8FD8\u4F1A\u6539\u53D8\u6700\u7EC8\u6570\u503C\u3002":"\u5F53\u524D\u65E0\u6CD5\u6267\u884C\uFF1A"+Yn(o.reasons.join("\uFF1B")))+'</p><button id="confirm-policy" class="primary" '+(o.reasons.length?"disabled":"")+">\u91C7\u7EB3\u6B64\u8BAE <span>\u786E\u8BA4\u6267\u884C \u2192</span></button>",V("confirm-policy").onclick=()=>Pf(o.id),V("policy-confirm").scrollIntoView({block:"nearest",behavior:wf?"instant":"smooth"})}))}function dy(){en("\u4E0D\u662F\u63D2\u6EE1\u65D7\uFF0C\u5C31\u7B97\u7EDF\u4E00","<p>\u540C\u4E00\u5C40\u53F7\u3001\u540C\u4E00\u5F00\u5C40\u3001\u540C\u4E00\u7EC4\u51B3\u7B56\uFF0C\u7ED3\u679C\u53EF\u590D\u73B0\u3002\u6240\u6709\u4EE5\u4E0B\u6761\u4EF6\u987B\u8FDE\u7EED\u7EF4\u6301\u4E24\u8F6E\uFF1B\u5F53\u524D\u5DF2\u7EF4\u6301 "+et.consolidated+" \u8F6E\u3002</p><ul>"+Ge.victoryConditions(et).map(i=>'<li style="color:'+(i.ok?"#c2d8b2":"#d6dfce")+'">'+(i.ok?"\u2713 ":"\u25CB ")+i.name+"</li>").join("")+"</ul><h3>\u5F53\u4E0B\u7684\u5E95\u76D8</h3>"+Hl([["\u5E73\u5747\u7A33\u5B9A",Math.round(Ge.stability(et))],["\u6C11\u671B",et.trust],["\u653F\u52A1\u652F\u6301",et.elite],["\u5F79\u8D1F",et.fatigue]])+"<p>\u5404\u5730\u7A33\u5B9A\uFF1A"+et.land.map(i=>In[i]+" "+Math.round(et.stability[i])).join(" \xB7 ")+"</p><p>\u5F53\u524D\u5929\u5019\u4E0B\u9884\u8BA1\u4E24\u5E74\u7CAE\u7A0E "+Ge.production(et)+"\u3001\u5E38\u5907\u519B\u5F00\u652F "+Ge.upkeep(et)+"\u3002\u6267\u884C\u56FD\u7B56\u540E\uFF0C\u4EA7\u51FA\u6761\u4EF6\u548C\u5929\u5019\u53EF\u80FD\u6539\u53D8\u3002</p><h3>\u4E2A\u4EBA\u6709\u5C3D\u65F6</h3><p>234 \u5E74\u68C0\u67E5\u5236\u5EA6\u4F20\u627F\uFF1A\u8FBE\u5230 55\uFF0C\u7EE7\u4EFB\u56E2\u961F\u7EE7\u7EED\u7ECF\u8425\uFF1B\u5426\u5219\u4E8B\u4E1A\u4E2D\u65AD\u3002268 \u5E74\u4E3A\u6C99\u76D8\u7EC8\u70B9\u3002</p><p>"+(xe==="tutorial"?"\u5F53\u524D\u662F\u9884\u8BBE\u5175\u7CAE\u7684\u5317\u4F10\u6559\u5B66\uFF0C\u4E0D\u53C2\u4E0E\u6B63\u5F0F\u5F00\u5C40\u6BD4\u8F83\u3002":"\u5F53\u524D\u4E3A\u6B63\u5F0F 207 \u5E74\u8D77\u6B65\uFF1B\u5F00\u5C40\u65F6\u53EA\u6709\u4E00\u4E2A\u8346\u5DDE\u636E\u70B9\uFF0C\u6CA1\u6709\u9884\u8BBE\u5317\u4F10\u5927\u519B\u3002")+"</p>","\u8FDC\u7565\u76EE\u6807 \xB7 "+(xe==="tutorial"?"\u6559\u5B66\u5C40":"\u6B63\u5F0F\u8FDC\u7565"))}function fy(){en("\u5148\u770B\u5C71\u6CB3\uFF0C\u518D\u843D\u4E00\u5B50","<h3>\u4E09\u7EF4\u6C99\u76D8\u600E\u4E48\u64CD\u4F5C</h3><p>\u9F20\u6807\u62D6\u52A8\u65CB\u8F6C\uFF0C\u53F3\u952E\u62D6\u52A8\u5E73\u79FB\uFF0C\u6EDA\u8F6E\u7F29\u653E\u3002\u624B\u673A\u5355\u6307\u8F6C\u52A8\u3001\u53CC\u6307\u7F29\u653E\u4E0E\u5E73\u79FB\u3002\u70B9\u57CE\u540D\u6216\u57CE\u90ED\u5373\u53EF\u67E5\u770B\u519B\u60C5\uFF1B\u5DE6\u4FA7 \u2316 \u56DE\u5230\u5168\u56FE\u3002</p><h3>\u7B2C\u4E00\u573A\u5317\u4F10</h3><p>\u5C01\u9762\u9009\u62E9\u300C\u5148\u8BD5\u4E00\u573A\u5317\u4F10\u300D \u2192 \u70B9\u6C49\u4E2D \u2192 \u9009\u62E9\u9647\u53F3 \u2192 \u67E5\u770B\u5175\u7CAE\u548C\u80DC\u7B97 \u2192 \u786E\u8BA4\u51FA\u5F81\u3002\u4F60\u4F1A\u770B\u5230\u961F\u5217\u4E0E\u8F8E\u91CD\u6CBF\u5C71\u8DEF\u884C\u8FDB\uFF0C\u519B\u62A5\u5230\u8FBE\u540E\u8FDB\u5165\u5185\u6CBB\uFF0C\u5B89\u629A\u65B0\u5360\u5730\u533A\u3002</p><h3>\u771F\u6B63\u5F71\u54CD\u6210\u8D25\u7684\u4E1C\u897F</h3><p>\u7CAE\u98DF\u6765\u81EA\u6C11\u529B\u3001\u5730\u76D8\u3001\u5730\u65B9\u7A33\u5B9A\u548C\u8FD0\u8F93\uFF0C\u5E38\u5907\u519B\u5219\u6301\u7EED\u5403\u7CAE\u3002\u65B0\u5730\u4E0D\u4F1A\u9A6C\u4E0A\u63D0\u4F9B\u6EE1\u989D\u7A0E\u6536\uFF1B\u8FDE\u7EED\u5F81\u53D1\u4F1A\u4F24\u5BB3\u6C11\u529B\u4E0E\u6C11\u671B\u3002\u5434\u76DF\u4F4E\u4E8E 23 \u65F6\uFF0C\u8346\u5DDE\u53EF\u80FD\u5931\u5B88\u3002</p><p>\u6BCF\u9879\u56FD\u7B56\u6216\u6218\u5F79\u6982\u62EC\u4E24\u5E74\u7684\u7B79\u5907\u4E0E\u6267\u884C\u3002\u80DC\u7B97\u6765\u81EA\u516C\u5F00\u6E38\u620F\u516C\u5F0F\uFF0C\u4E0D\u662F\u5386\u53F2\u6982\u7387\uFF1B\u884C\u519B\u662F\u6218\u5F79\u7684\u4E09\u7EF4\u8868\u73B0\uFF0C\u4E0D\u662F\u53EF\u4EE5\u5FAE\u64CD\u6BCF\u4E2A\u58EB\u5175\u7684\u5373\u65F6\u6218\u6597\u3002</p><h3>\u9002\u5408\u600E\u4E48\u548C\u670B\u53CB\u73A9</h3><p>\u5927\u5BB6\u7528\u5C40\u53F7 207 \u5F00\u542F\u6B63\u5F0F\u8FDC\u7565\uFF0C\u6BD4\u7EDF\u4E00\u5E74\u4EFD\uFF0C\u4E5F\u6BD4\u662F\u5426\u5EFA\u7ACB\u4E86\u53EF\u6301\u7EED\u7684\u79E9\u5E8F\u3002\u83DC\u5355\u53EF\u5BFC\u51FA\u5E26\u6559\u5B66\uFF0F\u6B63\u5F0F\u6807\u8BB0\u7684\u6218\u62A5\u4E0E\u5B9E\u666F\u56FE\u7247\u3002</p><details><summary>\u5386\u53F2\u8FB9\u754C\u4E0E\u8BBE\u8BA1\u8BF4\u660E</summary><p>\u8FD9\u662F\u4EE5\u751F\u4EA7\u3001\u8D22\u653F\u3001\u8054\u76DF\u3001\u884C\u653F\u6574\u5408\u548C\u7EE7\u4EFB\u4E3A\u7EA6\u675F\u7684\u53CD\u4E8B\u5B9E\u6E38\u620F\uFF0C\u5E76\u975E\u5386\u53F2\u5FC5\u80DC\u65B9\u6848\u3002\u4E03\u57CE\u4EE3\u8868\u6218\u7565\u533A\u57DF\uFF0C\u5C71\u6CB3\u662F\u793A\u610F\u5730\u5F62\uFF0C\u4E0D\u662F\u5730\u7406\u6D4B\u7ED8\uFF1B\u6218\u5F79\u4E0E\u5E74\u4EFD\u505A\u4E86\u538B\u7F29\u3002</p><p>\u95EE\u9898\u610F\u8BC6\u53C2\u8003\u300A\u4E09\u56FD\u5FD7\xB7\u8BF8\u845B\u4EAE\u4F20\u300B\u7684\u6CBB\u653F\u4E0E\u5317\u4F10\u3001\u300A\u4E09\u56FD\u5FD7\xB7\u5434\u4E3B\u4F20\u300B\u7684\u8054\u76DF\u5229\u76CA\uFF0C\u4EE5\u53CA\u300A\u51FA\u5E08\u8868\u300B\u7684\u7528\u4EBA\u4E0E\u7EE7\u4EFB\u3002\u53F0\u8BCD\u548C\u4E8B\u4EF6\u8868\u8FF0\u4E3A\u521B\u4F5C\uFF0C\u6570\u503C\u4E3A\u6E38\u620F\u8BBE\u8BA1\u3002</p></details>","\u64CD\u4F5C\u624B\u518C \xB7 \u7EA6\u4E00\u5206\u949F\u8BFB\u5B8C")}function py(){en("\u6BCF\u4E00\u7B14\uFF0C\u90FD\u6709\u6765\u5904",et.log.length?et.log.slice().reverse().map(i=>'<article class="journal-entry"><h3>'+i.year+" \u2192 "+i.toYear+" \u5E74 \xB7 "+Yn(i.name)+"</h3>"+i.report.map(t=>"<p>"+Yn(t)+"</p>").join("")+Cf(i)+"</article>").join(""):"<p>\u5C1A\u672A\u4F5C\u51FA\u51B3\u7B56\u3002\u4F60\u7684\u7B2C\u4E00\u9879\u8BAE\u6848\uFF0C\u4F1A\u6210\u4E3A\u8FD9\u91CC\u7684\u7B2C\u4E00\u7B14\u8BB0\u5F55\u3002</p>","\u519B\u8BAE\u7C3F \xB7 "+et.log.length+" \u6B21\u51B3\u7B56")}function Uh(){en("\u7559\u4F4F\u8FD9\u4E00\u5377\u5C71\u6CB3",'<div class="settings-row"><span>\u753B\u9762\u8D28\u91CF'+(Pt.software?"<small> \xB7 \u8F6F\u4EF6\u56FE\u5F62\u6E32\u67D3</small>":"")+'</span><button id="quality-toggle">'+(Pt.quality==="fine"?"\u7CBE\u7EC6 \xB7 \u70B9\u51FB\u5207\u6D41\u7545":"\u6D41\u7545 \xB7 \u70B9\u51FB\u5207\u7CBE\u7EC6")+"</button></div>"+(Pt.software?'<p class="hint-line">\u5F53\u524D\u672A\u4F7F\u7528\u786C\u4EF6\u56FE\u5F62\u52A0\u901F\u3002\u82E5\u8F6C\u52A8\u4ECD\u5361\u987F\uFF0C\u8BF7\u5F00\u542F\u6D4F\u89C8\u5668\u786C\u4EF6\u52A0\u901F\uFF0C\u6216\u4F7F\u7528\u7ECF\u5178\u7248\u3002</p>':"")+'<div class="settings-row"><span>\u97F3\u4E50\u4E0E\u97F3\u6548<small> \xB7 \u72EC\u7ACB\u97F3\u91CF</small></span><button id="menu-audio">\u58F0\u97F3\u8BBE\u7F6E \u2192</button></div><div class="settings-row"><span>\u51FA\u5F81\u4E0E\u4EA4\u6218\u6F14\u51FA</span><button id="cinematics-toggle" aria-pressed="'+Ci+'">'+(Ci?"\u5DF2\u5F00\u542F \xB7 \u70B9\u51FB\u5173\u95ED":"\u5DF2\u5173\u95ED \xB7 \u70B9\u51FB\u5F00\u542F")+'</button></div><div class="settings-row"><span>\u5206\u4EAB\u672C\u5C40\u6218\u62A5</span><button id="menu-share" '+(et.history.length?"":"disabled")+'>\u590D\u5236 / \u4E0B\u8F7D \u2192</button></div><div class="settings-row"><span>\u5E26\u8D70\u6E38\u620F\u8FDB\u5EA6</span><div><button id="export-save" '+(!Qi&&!yn?"disabled":"")+'>\u5BFC\u51FA\u5B58\u6863</button> <button id="import-save">\u5BFC\u5165\u5B58\u6863</button></div></div>'+(kl?'<div class="settings-row"><span>\u4FDD\u7559\u7684\u539F\u59CB\u5B58\u6863</span><button id="export-recovery">\u4E0B\u8F7D\u539F\u59CB\u5907\u4EFD</button></div>':"")+'<div class="settings-row"><span>\u5F00\u59CB\u4E00\u573A\u65B0\u7684\u8FDC\u7565</span><button id="new-campaign">\u91CD\u65B0\u8D77\u6B65 \u2192</button></div><div class="settings-row"><span>\u8FD4\u56DE\u5C01\u9762<small> \xB7 \u4FDD\u7559\u5F53\u524D\u8FDB\u5EA6</small></span><button id="menu-cover">\u5C01\u9762 \u2192</button></div><p style="margin-top:18px;font-size:10px">\u8FDB\u5EA6\u4FDD\u5B58\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u3002\u6362\u8BBE\u5907\u6216\u5730\u5740\u524D\u8BF7\u5BFC\u51FA\u5B58\u6863\uFF1B\u5BFC\u5165\u53EA\u5728\u672C\u673A\u91CD\u653E\u51B3\u7B56\uFF0C\u4E0D\u4E0A\u4F20\u6587\u4EF6\u3002<a href="classic.html">\u8FDB\u5165\u7ECF\u5178\u7248 \u2197</a></p>',"\u5C71\u6CB3\u4E09\u7EF4 \xB7 v"+Ef);let i=V("dialog-content").querySelector("a");i&&location.protocol==="file:"&&(i.href="\u518D\u51FA\u9686\u4E2D.html"),V("quality-toggle").onclick=()=>{Pt.setQuality(Pt.quality==="fine"?"smooth":"fine");try{localStorage.setItem(Ii+"-quality",Pt.quality)}catch{}Uh()},V("menu-audio").onclick=_y,V("cinematics-toggle").onclick=()=>{Ci=!Ci;try{localStorage.setItem(Ii+"-cinematics",Ci?"on":"off")}catch{}Uh()},V("menu-share").onclick=Oh,V("menu-cover").onclick=Rf,V("new-campaign").onclick=()=>{Zn()&&(en("\u4ECE 207 \u5E74\uFF0C\u91CD\u65B0\u5F00\u59CB",'<p>\u8FD9\u4F1A\u66FF\u6362\u4E09\u7EF4\u7248\u7684\u81EA\u52A8\u5B58\u6863\u3002\u7ECF\u5178\u7248\u5B58\u6863\u4E0D\u53D7\u5F71\u54CD\uFF1B\u5982\u9700\u4FDD\u7559\u8FD9\u5C40\uFF0C\u8BF7\u5148\u5BFC\u51FA\u5B58\u6863\u3002</p><label for="new-seed">\u6311\u6218\u5C40\u53F7</label><input id="new-seed" type="number" min="1" max="2147483646" value="207" style="display:block;width:100%;padding:12px;margin:8px 0 20px;background:#10291f;color:#eee8d5;border:1px solid #c9b68260"><button class="primary" id="confirm-new">\u786E\u8BA4\u5F00\u59CB\u65B0\u8FDC\u7565 <span>207 \u5E74 \u2192</span></button>'),V("confirm-new").onclick=()=>{let t=V("new-seed");t.reportValidity()&&ci("campaign",null,t.value||207)})},V("export-save").onclick=()=>{if(Zn()){let t=Qi?{mode:xe,state:et}:yn;Fh(Lh(t.mode,t.state),"\u518D\u51FA\u9686\u4E2D-"+(t.mode==="tutorial"?"\u6559\u5B66":"\u6B63\u5F0F")+"-"+t.state.year+"-\u5B58\u6863.json"),Fe("\u5B58\u6863\u5DF2\u5BFC\u51FA\u3002\u53EF\u5728\u5176\u4ED6\u6D4F\u89C8\u5668\u6216\u79BB\u7EBF\u7248\u4E2D\u5BFC\u5165\u3002")}},V("import-save").onclick=my,V("export-recovery")?.addEventListener("click",()=>Fh(kl,"\u518D\u51FA\u9686\u4E2D-\u539F\u59CB\u5B58\u6863\u5907\u4EFD.json"))}function Fh(i,t){let e=URL.createObjectURL(new Blob([i],{type:"application/json;charset=utf-8"}));kh(e,t),setTimeout(()=>URL.revokeObjectURL(e),3e4)}function my(){if(!Zn())return;let i=document.createElement("input");i.type="file",i.accept=".json,application/json",i.hidden=!0,document.body.append(i),i.addEventListener("cancel",()=>i.remove(),{once:!0}),i.addEventListener("change",async()=>{let t=i.files?.[0];if(i.remove(),!!t){if(t.size>65536){Fe("\u5B58\u6863\u6587\u4EF6\u8FC7\u5927\u3002\u8BF7\u9009\u62E9\u672C\u6E38\u620F\u5BFC\u51FA\u7684 JSON \u5B58\u6863\u3002");return}try{let e=Dh(await t.text());if(!e){Fe("\u65E0\u6CD5\u91CD\u653E\u8FD9\u4EFD\u5B58\u6863\uFF0C\u5F53\u524D\u8FDB\u5EA6\u6CA1\u6709\u6539\u53D8\u3002");return}let n=e.state;en("\u63A5\u7EED\u8FD9\u4E00\u573A\u8FDC\u7565","<p>"+(e.mode==="tutorial"?"\u5317\u4F10\u6559\u5B66 \xB7 \u9884\u8BBE\u5F00\u5C40":"\u6B63\u5F0F\u8FDC\u7565 \xB7 207 \u5E74\u8D77\u6B65")+"<br>\u5C40\u53F7 "+n.seed+" \xB7 "+n.year+" \u5E74 \xB7 "+n.history.length+" \u6B21\u51B3\u7B56 \xB7 \u63A7\u5236 "+n.land.length+'/7 \u5730</p><p>\u786E\u8BA4\u540E\u66FF\u6362\u4E09\u7EF4\u7248\u5F53\u524D\u5B58\u6863\uFF1B\u7ECF\u5178\u7248\u4E0D\u53D8\u3002\u82E5\u8981\u4FDD\u7559\u5F53\u524D\u5C40\uFF0C\u8BF7\u5148\u53D6\u6D88\u5E76\u5BFC\u51FA\u3002</p><button class="primary" id="confirm-save-import">\u786E\u8BA4\u5BFC\u5165\u5E76\u7EE7\u7EED \u2192</button>'),V("confirm-save-import").onclick=()=>{ci(e.mode,n),Fe("\u5B58\u6863\u5DF2\u91CD\u653E\uFF0C\u7EE7\u7EED\u4F60\u7684\u8FDC\u7565\u3002")}}catch{Fe("\u6587\u4EF6\u65E0\u6CD5\u8BFB\u53D6\uFF0C\u5F53\u524D\u8FDB\u5EA6\u6CA1\u6709\u6539\u53D8\u3002")}}},{once:!0}),i.click()}function Sf(){return`\u300A\u518D\u51FA\u9686\u4E2D \xB7 \u5C71\u6CB3\u4E09\u7EF4\u300B
`+(xe==="tutorial"?"\u3010\u5317\u4F10\u6559\u5B66 \xB7 \u9884\u8BBE\u5F00\u5C40\uFF0C\u4E0D\u8BA1\u5165\u6B63\u5F0F\u6311\u6218\u3011":"\u3010\u6B63\u5F0F\u8FDC\u7565 \xB7 207 \u5E74\u8D77\u6B65\u3011")+`
`+Ge.reportText(et)+`
\u519B\u8BAE\u8DEF\u7EBF\uFF1A`+et.history.join(" \u2192 ")}function kh(i,t){let e=document.createElement("a");e.href=i,e.download=t,e.click()}async function gy(){let i=new Image;i.src=Pt.screenshot(),await i.decode();let t=document.createElement("canvas"),e=1440,n=1e3;t.width=e,t.height=n;let s=t.getContext("2d");s.fillStyle="#18382b",s.fillRect(0,0,e,n);let r=Math.min(e/i.width,740/i.height);s.drawImage(i,(e-i.width*r)/2,0,i.width*r,i.height*r);let a=s.createLinearGradient(0,570,0,775);return a.addColorStop(0,"#18382b00"),a.addColorStop(1,"#18382b"),s.fillStyle=a,s.fillRect(0,570,e,210),s.fillStyle="#e3c993",s.font='50px "Noto Serif CJK SC",serif',s.fillText("\u518D\u51FA\u9686\u4E2D \xB7 \u5C71\u6CB3\u4E09\u7EF4",64,805),s.font="23px sans-serif",s.fillStyle="#d2ddc6",s.fillText((xe==="tutorial"?"\u5317\u4F10\u6559\u5B66 \xB7 \u9884\u8BBE\u5F00\u5C40":"\u6B63\u5F0F\u8FDC\u7565 \xB7 207 \u5E74\u8D77\u6B65")+"   /   \u5C40\u53F7 "+et.seed+"   /   \u516C\u5143 "+et.year+" \u5E74",66,856),s.font='29px "Noto Serif CJK SC",serif',s.fillStyle="#eee8d5",s.fillText(et.over?et.over.title:"\u5C71\u6CB3\u672A\u5B9A\uFF0C\u8FDC\u7565\u4ECD\u5728\u7EE7\u7EED",66,910),s.font="20px sans-serif",s.fillStyle="#b4c5ac",s.fillText("\u7586\u57DF "+et.land.length+"/7   \xB7   \u7CAE\u79E3 "+et.grain+"   \xB7   \u6C11\u529B "+et.people+"   \xB7   \u4F20\u627F "+et.institution+"   \xB7   \u5E73\u5747\u7A33\u5B9A "+Math.round(Ge.stability(et)),66,956),t.toDataURL("image/png")}function Oh(){Zn()&&(en("\u628A\u8FD9\u5C40\uFF0C\u4EA4\u7ED9\u670B\u53CB",'<p>\u9080\u8BF7\u670B\u53CB\u4ECE\u76F8\u540C\u5C40\u53F7\u7684\u6B63\u5F0F\u5F00\u5C40\u6311\u6218\u3002\u6218\u62A5\u662F\u672C\u5730\u751F\u6210\u7684\u8BB0\u5F55\uFF1B\u6559\u5B66\u4F1A\u5355\u72EC\u6807\u8BB0\uFF0C\u4E0D\u8BBE\u672A\u7ECF\u9A8C\u8BC1\u7684\u6392\u884C\u699C\u3002</p><textarea class="share-text" id="share-text" aria-label="\u53EF\u590D\u5236\u7684\u6218\u62A5" readonly></textarea><button id="copy-report" class="primary">\u590D\u5236\u6218\u62A5 <span>\u53D1\u5230\u670B\u53CB\u5708 \u2192</span></button><button id="download-report" class="secondary" style="margin-top:12px;width:100%">\u4E0B\u8F7D\u5C71\u6CB3\u6218\u62A5\u56FE\u7247</button><p class="hint-line">\u624B\u673A\u82E5\u672A\u51FA\u73B0\u4E0B\u8F7D\u63D0\u793A\uFF0C\u53EF\u957F\u6309\u751F\u6210\u7684\u56FE\u7247\u4FDD\u5B58\u3002\u5C40\u57DF\u7F51\u5730\u5740\u53EA\u80FD\u7531\u540C\u4E00\u7F51\u7EDC\u5185\u7684\u670B\u53CB\u8BBF\u95EE\u3002</p><div id="share-preview"></div>',"\u672C\u5C40\u5B9E\u5F55 \xB7 "+(xe==="tutorial"?"\u6559\u5B66":"\u6B63\u5F0F")),V("share-text").value=Sf(),V("copy-report").onclick=async()=>{try{await navigator.clipboard.writeText(Sf()),Fe("\u6218\u62A5\u5DF2\u590D\u5236\u3002")}catch{V("share-text").focus(),V("share-text").select(),Fe("\u6218\u62A5\u5DF2\u9009\u4E2D\uFF0C\u8BF7\u957F\u6309\u6216\u6309 Ctrl+C \u590D\u5236\u3002")}},V("download-report").onclick=async()=>{let i=V("download-report");i.disabled=!0;try{let t=await gy();V("share-preview")&&(V("share-preview").innerHTML='<img class="share-image" alt="\u672C\u5C40\u4E09\u7EF4\u5B9E\u666F\u6218\u62A5" src="'+t+'">'),kh(t,"\u518D\u51FA\u9686\u4E2D-"+(xe==="tutorial"?"\u6559\u5B66":"\u6B63\u5F0F")+"-"+et.year+".png"),Fe("\u5B9E\u666F\u6218\u62A5\u5DF2\u751F\u6210\u3002")}catch(t){Fe("\u56FE\u7247\u751F\u6210\u672A\u6210\u529F\uFF0C\u53EF\u4EE5\u76F4\u63A5\u622A\u53D6\u5F53\u524D\u753B\u9762\u3002"),console.error(t)}finally{i.disabled=!1}})}function Vh(){let i=V("audio-button");if(i&&(i.textContent=we.enabled?"\u97F3\u5F00":"\u97F3\u5173",i.setAttribute("aria-label",we.enabled?"\u5173\u95ED\u5168\u90E8\u58F0\u97F3":"\u5F00\u542F\u97F3\u4E50\u4E0E\u97F3\u6548"),i.setAttribute("aria-pressed",String(we.enabled)),i.title=we.enabled?"\u5173\u95ED\u5168\u90E8\u58F0\u97F3":"\u5F00\u542F\u97F3\u4E50\u4E0E\u97F3\u6548"),!V("sound-master"))return;let t=we.snapshot();V("sound-master").textContent=t.enabled?"\u5173\u95ED\u5168\u90E8\u58F0\u97F3":"\u5F00\u542F\u58F0\u97F3",V("sound-master").setAttribute("aria-pressed",String(t.enabled)),V("music-status").textContent=t.title+" \xB7 "+t.musicStatus,V("music-detail").textContent=t.musicError||"\u80CC\u666F\u97F3\u4E50\u5FAA\u73AF\u64AD\u653E\uFF1B\u4EA4\u6218\u65F6\u81EA\u52A8\u964D\u4F4E\u97F3\u91CF\u3002";for(let e of["music","effects"]){let n=V(e+"-enabled");n.textContent=t[e]?"\u5DF2\u5F00\u542F":"\u5DF2\u5173\u95ED",n.setAttribute("aria-pressed",String(t[e])),V(e+"-value").textContent=Math.round(t[e+"Volume"]*100)+"%"}}function _y(){let i=we.preferences;en("\u542C\u89C1\u5C71\u6CB3\u4E0E\u519B\u9635",'<p id="music-status" role="status"></p><p id="music-detail" class="hint-line"></p><button id="sound-master" class="primary sound-master">\u5F00\u542F\u58F0\u97F3</button>'+["music","effects"].map(t=>'<section class="audio-channel"><div class="settings-row"><span>'+(t==="music"?"\u80CC\u666F\u97F3\u4E50":"\u573A\u666F\u97F3\u6548")+'</span><button id="'+t+'-enabled" aria-label="\u5207\u6362'+(t==="music"?"\u80CC\u666F\u97F3\u4E50":"\u573A\u666F\u97F3\u6548")+'"></button></div><label class="audio-volume" for="'+t+'-volume">'+(t==="music"?"\u97F3\u4E50\u97F3\u91CF":"\u97F3\u6548\u97F3\u91CF")+'<output id="'+t+'-value"></output></label><input id="'+t+'-volume" type="range" min="0" max="100" step="1" value="'+Math.round(i[t+"Volume"]*100)+'"></section>').join("")+'<div class="sound-previews"><button id="preview-march">\u8BD5\u542C\u9A6C\u8E44\u4E0E\u6218\u9F13</button><button id="preview-battle">\u8BD5\u542C\u91D1\u94C1\u4EA4\u950B</button></div><p class="hint-line">\u9ED8\u8BA4\u97F3\u6548\u7531\u672C\u673A\u5408\u6210\uFF1B\u53EF\u5728 audio/sfx/ \u653E\u5165\u5B9E\u5F55\u7D20\u6750\u66FF\u6362\u3002\u8BD5\u542C\u7EA6 3 \u79D2\u3002</p><details class="audio-files"><summary>\u97F3\u4E50\u6587\u4EF6\u4E0E\u672C\u673A\u8BD5\u542C</summary><p>\u4E3B\u9898\u66F2\u4F4D\u7F6E\uFF1A<code>public/'+Yn(we.config.music.src)+'</code>\u3002\u66F4\u6362\u540E\u5237\u65B0\u9875\u9762\uFF1B\u79BB\u7EBF\u5355\u6587\u4EF6\u9700\u91CD\u65B0\u6784\u5EFA\u3002</p><label for="music-file">\u9009\u62E9\u672C\u673A\u97F3\u4E50\uFF08\u4EC5\u672C\u6B21\u9875\u9762\uFF0C\u4E0D\u4E0A\u4F20\uFF09</label><input id="music-file" type="file" accept="audio/*,.mp3,.m4a,.ogg,.wav,.aac,.flac"></details><p class="hint-line">\u58F0\u97F3\u987B\u70B9\u51FB\u5F00\u542F\uFF1B\u5207\u5230\u540E\u53F0\u4F1A\u6682\u505C\u3002\u97F3\u91CF\u4E0E\u5206\u8F68\u504F\u597D\u4F1A\u4FDD\u7559\u3002</p>',"\u58F0\u666F \xB7 \u97F3\u4E50\u4E0E\u73B0\u573A"),V("sound-master").onclick=()=>we.toggle();for(let t of["music","effects"])V(t+"-enabled").onclick=()=>we.setChannel(t,!we.preferences[t]),V(t+"-volume").oninput=e=>we.setVolume(t,Number(e.target.value)/100);V("preview-march").onclick=()=>we.preview("march"),V("preview-battle").onclick=()=>we.preview("battle"),V("music-file").onchange=t=>we.chooseMusic(t.target.files?.[0]),Vh(),we.configure()}function If(i){V("loading").hidden=!0,V("error-screen").hidden=!1,V("error-message").textContent=i}function xy(){V("start-campaign").onclick=()=>{yn?(en("\u5F00\u542F\u6B63\u5F0F\u8FDC\u7565",'<p>\u6B63\u5F0F\u5F00\u5C40\u4ECE 207 \u5E74\u3001\u4E00\u4E2A\u8346\u5DDE\u636E\u70B9\u8D77\u6B65\u3002\u5F00\u59CB\u4F1A\u66FF\u6362\u4E09\u7EF4\u7248\u81EA\u52A8\u5B58\u6863\uFF0C\u7ECF\u5178\u7248\u4E0D\u53D7\u5F71\u54CD\u3002</p><button class="primary" id="confirm-start">\u5F00\u59CB\u65B0\u7684\u6B63\u5F0F\u8FDC\u7565 \u2192</button>'),V("confirm-start").onclick=()=>ci("campaign")):ci("campaign")},V("start-tutorial").onclick=()=>{yn?(en("\u5148\u8BD5\u4E00\u573A\u5317\u4F10",'<p>\u6559\u5B66\u4ECE 228 \u5E74\u7684\u9884\u8BBE\u5175\u7CAE\u8D77\u6B65\uFF0C\u4F1A\u66FF\u6362\u4E09\u7EF4\u7248\u81EA\u52A8\u5B58\u6863\uFF0C\u4E0D\u5F71\u54CD\u7ECF\u5178\u7248\u3002\u6559\u5B66\u6210\u7EE9\u4F1A\u5355\u72EC\u6807\u8BB0\u3002</p><button class="primary" id="confirm-start">\u8FDB\u5165\u5317\u4F10\u6559\u5B66 \u2192</button>'),V("confirm-start").onclick=()=>ci("tutorial")):ci("tutorial")},V("resume-button").hidden=!yn,V("resume-button").onclick=()=>{yn&&ci(yn.mode,yn.state)};try{let i=JSON.parse(localStorage.getItem("han-restoration-v1"));if(i?.version===Ge.VERSION){let t=Ph("campaign",i.seed,i.history);t&&(V("import-classic").hidden=!1,V("import-classic").onclick=()=>{en("\u63A5\u7EED\u7ECF\u5178\u7248\u8FDB\u5EA6","<p>\u4ECE "+t.year+" \u5E74\u3001"+t.land.length+' \u4E2A\u6218\u7565\u533A\u7EE7\u7EED\u3002\u539F\u7ECF\u5178\u7248\u5B58\u6863\u4FDD\u7559\uFF1B\u672C\u64CD\u4F5C\u4F1A\u66FF\u6362\u4E09\u7EF4\u7248\u81EA\u52A8\u5B58\u6863\u3002</p><button class="primary" id="confirm-import">\u786E\u8BA4\u63A5\u7EED \u2192</button>'),V("confirm-import").onclick=()=>ci("campaign",t)})}}catch{}V("cover-button").onclick=Rf,V("help-button").onclick=fy,V("menu-button").onclick=Uh,V("audio-button").onclick=()=>we.toggle(),V("dialog-close").onclick=Ys,V("skip-cinematic").onclick=()=>Pt.finishCampaign(!0),Vh(),V("dialog").addEventListener("click",i=>{if(i.target===V("dialog")){let t=V("dialog").getBoundingClientRect();(i.clientX<t.left||i.clientX>t.right||i.clientY<t.top||i.clientY>t.bottom)&&Ys()}}),V("dialog").addEventListener("close",()=>{Pt.pausedScene=V("dialog").open||!V("report-panel").hidden}),V("home-view").onclick=()=>Pt.home(),V("zoom-in").onclick=()=>Pt.zoom(.78),V("zoom-out").onclick=()=>Pt.zoom(1.28),V("map-mode").onclick=()=>{let i=Pt.mapMode!=="politics";Pt.setMode(i?"politics":"terrain"),V("map-mode").setAttribute("aria-pressed",String(i))},V("photo-button").onclick=()=>{kh(Pt.screenshot(),"\u518D\u51FA\u9686\u4E2D-\u5C71\u6CB3\u5B9E\u666F.png"),Fe("\u5DF2\u62CD\u6444\u5F53\u524D\u4E09\u7EF4\u753B\u9762\u3002")},V("close-inspector").onclick=()=>{V("inspector").hidden=!0,Pt.clearRoute(),Pt.select(null),ts=null},V("report-close").onclick=()=>{V("report-panel").hidden=!0,Pt.pausedScene=!1},V("mission-button").onclick=dy,V("journal-button").onclick=py,document.querySelectorAll("[data-command]").forEach(i=>i.onclick=()=>Zs(i.dataset.command)),document.addEventListener("keydown",i=>{if(!(V("dialog").open||i.target.matches("input,textarea"))){if(qs){i.key==="Escape"&&Pt.finishCampaign(!0);return}i.key.toLowerCase()==="r"&&Pt.home(),(i.key==="+"||i.key==="=")&&Pt.zoom(.85),i.key==="-"&&Pt.zoom(1.18),i.key==="Escape"&&(V("inspector").hidden=!0,V("report-panel").hidden=!0,Pt.pausedScene=!1,Pt.clearRoute())}}),window.addEventListener("world-context-lost",()=>If("\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u4E2D\u65AD\u3002\u5DF2\u7ECF\u786E\u8BA4\u7684\u51B3\u7B56\u4FDD\u5B58\u5728\u672C\u673A\uFF0C\u91CD\u65B0\u52A0\u8F7D\u540E\u53EF\u4EE5\u7EE7\u7EED\uFF1B\u4E5F\u53EF\u4EE5\u8FDB\u5165\u7ECF\u5178\u7248\u3002")),window.addEventListener("world-cinematic-error",()=>Fe("\u6218\u5F79\u6F14\u51FA\u5DF2\u4E2D\u6B62\uFF0C\u5DF2\u4FDD\u7559\u51B3\u7B56\u5E76\u8F6C\u5165\u519B\u62A5\u3002"))}setTimeout(()=>{try{Pt=new Fl(V("world-canvas"),V("city-labels"),zh,{quality:Nh}),Pt.updateState(et),Pt.showcase(),xy(),Object.defineProperty(window,"__HAN3D",{value:{buildVersion:Ef,getSnapshot:()=>JSON.parse(JSON.stringify({mode:xe,state:et,started:Qi,busy:qs,selectedCity:aa,planned:ts,cinematicsEnabled:Ci})),getAudioSnapshot:()=>we.snapshot(),world:Pt},writable:!1}),requestAnimationFrame(()=>{V("loading").hidden=!0,document.body.dataset.ready="true",Pi?(en("\u8FD9\u4EFD\u5B58\u6863\u6682\u672A\u8BFB\u56DE",'<p>\u5B58\u6863\u635F\u574F\u6216\u7248\u672C\u4E0D\u517C\u5BB9\uFF0C\u672A\u80FD\u91CD\u653E\u3002\u539F\u59CB\u8BB0\u5F55\u6CA1\u6709\u88AB\u5220\u9664\uFF1B\u53EF\u5148\u4E0B\u8F7D\u5907\u4EFD\uFF0C\u518D\u4ECE\u5C01\u9762\u5F00\u59CB\u65B0\u5C40\u6216\u4ECE\u83DC\u5355\u5BFC\u5165\u53E6\u4E00\u4EFD\u5B58\u6863\u3002</p><button id="backup-invalid" class="primary">\u4E0B\u8F7D\u539F\u59CB\u5B58\u6863\u5907\u4EFD</button><button id="dismiss-invalid" class="secondary" style="margin-top:12px">\u8FD4\u56DE\u5C01\u9762</button>',"\u5B58\u6863\u6062\u590D\u63D0\u793A"),V("backup-invalid").onclick=()=>Fh(Pi,"\u518D\u51FA\u9686\u4E2D-\u539F\u59CB\u5B58\u6863\u5907\u4EFD.json"),V("dismiss-invalid").onclick=Ys):Pt.software&&!Nh&&Fe("\u68C0\u6D4B\u5230\u8F6F\u4EF6\u56FE\u5F62\u6E32\u67D3\uFF0C\u5DF2\u542F\u7528\u6D41\u7545\u6A21\u5F0F\uFF1B\u53EF\u5728\u83DC\u5355\u8C03\u6574\u3002")})}catch(i){console.error(i),If("\u6D4F\u89C8\u5668\u672A\u80FD\u5EFA\u7ACB\u4E09\u7EF4\u753B\u9762\u3002\u8BF7\u4F7F\u7528\u652F\u6301 WebGL 2 \u7684\u73B0\u4EE3\u6D4F\u89C8\u5668\u5E76\u5F00\u542F\u786C\u4EF6\u52A0\u901F\uFF0C\u6216\u5148\u8FDB\u5165\u4FDD\u7559\u7684\u7ECF\u5178\u7248\u3002")}},50);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
