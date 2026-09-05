# Cloudflare 公网交付

> 历史记录的公开脱敏副本：真实部署地址、部署标识和本机路径未纳入仓库；截图、音频、浏览器档案及原始日志只在私有工作区保存。下文记录的是当时的验收，不代表首次 Source Import 的重新测试；当前范围见 [Source Import](source-import.md)。

原产品正式版本为 v2.1.1，已补 CSP 与防嵌入保护；实际项目名、地址和部署标识仅保存在本机。新增验收见 [安全加固交付](security-hardening-verification.md)。本次 Source Import 不重新部署，也不分发未获再分发权的音乐。

## 从公开源码构建（当前）

在不含本地音频的 clean checkout 中执行 `npm ci`、`npm run build:cloudflare`、`npm test`、`npm run check:distribution`。产物为 `output/cloudflare/site/`；纯静态，无 Functions、数据库或服务绑定。无音乐副本包含 11 个静态文件和 `_headers`；缺失的可选音频必须同时未被记录在构建 manifest 中才允许跳过，已记录但丢失的资产仍会拒绝打包。

公开 `wrangler.jsonc` 不含生产项目名。将 `wrangler.local.example.jsonc` 复制为被 Git 忽略的 `wrangler.local.jsonc`，由维护者在本机填写项目名；将 `deploy/local.example.json` 复制为被忽略的 `deploy/local.json`，填写自己的 `productionUrl`、`lanHost`、`lanPort`。构建不需要这些私有值。核验脚本的目标可来自本地 JSON、`HAN_PRODUCTION_URL` 或显式参数，没有硬编码生产 URL。

实际发布依赖外部 Cloudflare OAuth 身份和另外的 Human 授权。不要运行部署命令来验证 Source Import；这里只检查构建产物。历史部署凭据、账户 ID、实际域名、历史部署标识、客户端 IP 和本机目录均不提交。

## 首次部署历史（脱敏）

日期：2026-09-05。用户授权将游戏发布到 Cloudflare，并指定 `OTHER_PROJECT_LOCAL_CHECKOUT` 作为部署方法参考。

## 已发布的内容

- 正式入口和独立部署地址：仅在维护者本机保存。
- Pages 项目标识：仅在维护者本机保存；分支 `main`；当时远端回读环境为 `Production`。
- 游戏版本 `2.1.0`，构建候选 `465d524d60b66b6f`；与此前声音／演出验收版相同，没有修改游戏规则或画面逻辑。
- 实际上传 12 个静态文件与一份 `_headers` 配置，合计 3,496,750 字节。包括用户提供的主题曲，原文件未改动。

参考 其他项目 的登录方式、构建身份核对、发布后远端回读，以及“CLI 已输出成功但进程未退出时，不重复发布”的处理经验。其他项目 是 OpenNext 全栈 Worker，本游戏只有浏览器计算和静态资源，因此选择 Pages Direct Upload，不照搬数据库、R2、Hyperdrive、AI、环境密钥或生产流量配置。

未修改 其他项目 目录、线上资源或 DNS。原局域网服务继续保留。没有新增付费套餐、后端、账号系统、遥测脚本或自定义域名。

## 可重复发布

配置：[wrangler.jsonc](../wrangler.jsonc)。官方 Wrangler 固定为 `4.129.0`，使用本机现有 OAuth 登录；没有把登录令牌写入游戏或项目配置。

```bash
cd LOCAL_CHECKOUT
npx wrangler whoami
npm test
npm run build:cloudflare
# 首次创建已完成，不要再次创建项目。
npx wrangler pages deploy output/cloudflare/site --config wrangler.local.jsonc --branch main
npx wrangler pages deployment list --config wrangler.local.jsonc --json
npm run verify:cloudflare
```

之后也可用 `npm run deploy:cloudflare` 组合构建与发布；仍需完成远端回读和浏览器试玩，不能只看上传成功字样。

发布脚本按明确文件清单复制资源，并核对 `release-manifest.json` 的长度与 SHA-256。输出目录为 `output/cloudflare/site/`，不会递归上传整个工作区或整个 `public/`。如其中出现未授权文件或符号链接，构建会拒绝继续，而非自动删除。已纳入 manifest 的音频必须存在且不超过 25 MiB；替换后重新构建。Source Import 的缺音乐兼容处理见上方当前说明。

本机代理环境中，部分 Wrangler 命令完成远端操作后保留本地句柄。本次部署已输出唯一成功地址，90 秒命令边界随后返回 `124`；独立的部署列表与 HTTPS 文件核验确认发布成功。不能把这个退出码当成“没有上传”而盲目重试。先回读该项目的部署列表；如确已完成，只结束自己的残留 CLI 进程，不停止游戏或其他项目。

Pages Direct Upload 不是 Git 自动发布项目。如以后改用 Git 集成，应按官方说明另建对应项目，不假定当前项目已接入 Git。

## HTTP 与文件边界验收

`npm test` 通过，构建与新增脚本语法检查通过。完整可机读证据保存在 HTTP 核验结果（私有验收证据，未纳入仓库），不上传公网。

- 12 个静态资源通过 HTTPS 获取，HTTP 200，长度及 SHA-256 全部匹配冻结的发布清单。
- 首页、三维 bundle、经典版、音频配置和主题曲均包含在上述检查中。
- `.env`、`wrangler.jsonc`、`README.md`、`src/main.js`、验收文档、音频目录说明及缺失音频均返回 404；不把不存在的资源伪装成成功首页。
- `nosniff` 与浏览器重新验证缓存的响应头已生效。
- 主题曲 Range 请求返回 **200 完整文件**，不是 206 分段响应。初轮核验过强地要求 206，因而失败；随后保留此负面结果，把接受条件修正为“206 时逐字节核对指定片段，200 时逐字节核对完整文件”，并明确记录实际传输方式。未宣称分段播放验证通过。完整文件为 2,677,968 字节，适用于当前短循环主题曲；如以后换成长音频，应另测传输与跳转需求。

## 公网浏览器试玩

按 Playwright 技能使用真实 Chromium 访问正式 HTTPS 地址，实际点击开启声音、教学、陇右目标和确认出征，保持真实渲染器工作。测试机使用 SwiftShader，默认流畅画质；不据此承诺物理显卡帧率。

初轮 CLI 的 5 秒点击等待在执行动作时超时，随后读取真实页面确认“声音已开启、教学已开始”，没有盲目再次执行。后续使用 20 秒按钮超时完成流程。页面没有脚本错误，控制台只有 4 条软件渲染警告。

- 真实主题曲时长 109.008958 秒，音乐通道 RMS 非零；从 88.68 秒播放至交战时的 104.25 秒，战役结束时自然回到 4.25 秒，确认实际跨曲尾循环。
- 实际观察交战阶段，音乐与音效通道均有非零信号；全程事件计数包含战鼓、号声、36 次马蹄、8 次金铁和胜利提示。
- 完整演出后显示「陇右已入版图」，230 年、粮 74、历史仅 `campaign:long` 一项；操作锁解除，活动音效源为 0，背景音乐继续。
- 刷新后点击「继续上次远略」，完整游戏状态逐字相同；声音保持默认关闭，没有擅自自动播放。
- 在 390 × 844 视口检查封面，页面宽度和滚动宽度均为 390，无横向溢出。这只是窄屏布局检查，不是真实手机或触屏实机验证。

截图：交战画面（私有验收证据，未纳入仓库）、军报出现时的淡入过渡帧（私有验收证据，未纳入仓库）、窄屏封面（私有验收证据，未纳入仓库）。

## 使用与边界

首次进入仍需点击「音关」，不会擅自自动播放。朋友可通过公网入口访问，不依赖原电脑保持开机。实际中国大陆网络、微信内置浏览器和物理手机的可达性与听感需在相应设备上确认；本次服务器测试不代替它们。

存档按浏览器地址隔离。要接续局域网／离线进度，先在原地址菜单导出 JSON，再到公网版菜单导入；预览部署地址也不是正式地址的同一存档空间。

背景音乐现随游戏在公开网址提供，应确认用户选择的素材允许这一分享范围。线上仅提供公开游戏资源，不托管玩家存档。

## 官方参考

- [Pages Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/)：本地构建上传、生产分支、文件大小限制与 Git 集成边界。
- [Pages Headers](https://developers.cloudflare.com/pages/configuration/headers/)：静态响应头配置。
- [Serving Pages](https://developers.cloudflare.com/pages/configuration/serving-pages/)：静态路由与 404 页面。
