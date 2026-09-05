# v2.1 声音与战役演出

视觉主张：保留青绿微缩山河和金色军令；镜头从城门下的列队出征，跟随骑兵与辎重，切入两军接阵，最后回到战略沙盘。尘土、旗帜和兵器动作传达规模，不采用血腥特写或全屏闪烁。

内容结构：确认军需 → 已保存的战役决策 → 出征／行军／交战／收兵 → 原规则军报。演出不改变胜算，不重新扣粮，不冒充即时可操控战斗；用户可随时跳过。

交互主张：背景音乐与音效分别开关、分别调音量；音乐在交战时适度降低；切到后台暂停声音与演出；尊重减少动态效果。浏览器首次播放必须由用户点击开启，不自动夺取音频。

保留：既有 UI 视觉语言、207 正式与 228 教学的资源隔离、原规则引擎、独立存档、PNG 战报和局域网服务。新增声音面板与短演出，保持军议操作路径。

音乐入口：`public/audio/music/theme.mp3`；配置为 `public/audio/config.json`。用户未提供文件时明确说明，不拿原来的持续正弦音冒充背景音乐。默认音效是本地合成，允许替换为自备实录。

验收要区分：声音节点确实输出、时间推进和音量控制有效，不等于已用物理扬声器试听；自动化测试用的音频夹具不能冒充用户选择的音乐。

实现参考：使用 [AudioContext.resume](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/resume) 在用户点击后恢复音频上下文，通过 [MediaElementAudioSourceNode](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaElementSource) 将真实音乐送入分轨音量控制；角色按身体部件使用 [InstancedMesh](https://threejs.org/docs/pages/InstancedMesh.html) 批量绘制。
