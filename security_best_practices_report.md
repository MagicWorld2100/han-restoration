# 再出隆中 · 公网安全审查

> 历史记录的公开脱敏副本：真实部署地址、部署标识和本机路径未纳入仓库；截图、音频、浏览器档案及原始日志只在私有工作区保存。下文记录的是当时的验收，不代表首次 Source Import 的重新测试；当前范围见 [Source Import](docs/source-import.md)。

**修复状态更新（2026-09-05）：用户随后授权实施；SEC-001 / SEC-002 已在 v2.1.1 修复并发布到原正式入口。** 预览拦截测试与正式响应头核验通过，详见 [安全加固交付](docs/security-hardening-verification.md)。下文保留 v2.1.0 的初审事实与风险边界，其中“未修改线上／尚未实施”指初次审查当时，不是当前状态。

审查日期：2026-09-05。对象：`DEPLOYMENT_URL_LOCAL_ONLY` 的三维版、同站经典版及其本地发布代码。版本 `2.1.0`，候选 `465d524d60b66b6f`。

## 初次审查结论（v2.1.0 历史记录）

本轮代码追踪、依赖审计、HTTPS 文件核验和隔离浏览器测试，**未发现可复现的访客输入直接执行脚本、修改线上文件或执行服务器命令的明显高危漏洞**。这不是“绝对安全”证明，也不是完整渗透测试。

确认有两项尚未实施的加固：**缺少 CSP（中风险、纵深防护缺口）**；**缺少防跨站嵌入策略（低风险）**。后者已通过隔离父页面嵌入经典版复现，但父页面仍不能跨源读取游戏文档，不能据此宣称服务器或访客电脑已被控制。

当前是独立 Pages 静态项目，发布目录没有后端程序、Functions、数据库绑定、命令执行接口或服务器文件上传入口。公开网站不是通往原电脑的反向代理。通过站点拿到主机 shell 的常见服务端路径，在本次部署中未出现；但若以后发生 XSS 或发布账户被盗，恶意 JavaScript 仍可能伤害访问者、消耗其浏览器资源或发起网络请求。静态托管不能消除此类风险。

本轮仅审查和本地测试，**未修改游戏源代码、未重新部署、未修改 Cloudflare 或 其他项目 配置**。新增报告与无害测试夹具均不在发布白名单内。

## 中风险

### SEC-001：线上没有 Content Security Policy

- 规则：`JS-CSP-001`、`JS-CSP-002`。
- 位置：[deploy/cloudflare/_headers:1](deploy/cloudflare/_headers#L1)、[src/main.js:18](src/main.js#L18)、[public/index.html:37](public/index.html#L37)。
- 证据：实际首页 HTTPS 响应只有 `nosniff`、Referrer-Policy、Cache-Control 等配置，没有 `Content-Security-Policy` 或 Report-Only 策略；HTML 中也没有 CSP meta。页面存在 `innerHTML=body` 等 HTML 拼接入口，以及错误页按钮的固定 `onclick="location.reload()"`。
- 影响：假如今后把不可信文本接入这些 HTML 入口并漏掉转义，浏览器缺少额外策略来拦截注入脚本或限制连接目的地。**本轮没有发现已能让外部输入到达这些危险入口的攻击链，缺少 CSP 不等于已经存在可利用 XSS。**
- 建议：通过 Pages 响应头增加经过浏览器验证的 CSP；脚本先限定本站，禁止 eval／内联脚本，约束 `base-uri`、`object-src`、网络目的地。将错误页内联 onclick 改为事件监听器；为本机音乐 Blob、生成战报的 data URL 和现有样式单独保留必要权限，不为图省事放开 `script-src 'unsafe-inline'` 或 `unsafe-eval`。
- 缓解与误报边界：保留当前输入规范化与输出转义；CSP 是额外防线，不替代修复实际注入，也不能防止已经控制部署账户的人同时篡改代码与策略。策略用途参考 [MDN CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP)，Pages 的配置方式参考 [官方 Headers 文档](https://developers.cloudflare.com/pages/configuration/headers/)。

## 低风险

### SEC-002：任意外站可以嵌入游戏页面

- 规则：`JS-CSP-001`，点击劫持／界面伪装防护。
- 位置：[deploy/cloudflare/_headers:1](deploy/cloudflare/_headers#L1)。
- 证据：首页响应无 `X-Frame-Options` 和 CSP `frame-ancestors`。在测试浏览器内拦截 `https://han-audit.invalid/`，以纯本地夹具作为父页面，成功嵌入正式站点 `/classic`，实际页面标题及游戏按钮均存在；父页面读取 iframe 文档得到拒绝。没有向该保留域名部署站点，也没有使用第三方真实站点进行攻击。
- 影响：别人可以把游戏放在自己的页面里，配合遮挡或诱导造成品牌混淆、误点击。当前没有付款、账户管理或服务器状态变更，因此未证实高危点击劫持链，更不是代码注入或主机接管。
- 建议：若没有授权嵌入需求，增加 CSP `frame-ancestors 'none'`，并可同时设置 `X-Frame-Options: DENY`。如果将来需要特定平台嵌入，应改成明确白名单。
- 缓解与误报边界：同源隔离仍有效；不要将“允许显示 iframe”误报成“允许父页面执行游戏源中的代码”。该指令必须通过响应头提供，不能依赖 meta，见 [MDN frame-ancestors](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors)。

## 已检查的攻击入口

| 入口 | 代码证据与实测结果 |
| --- | --- |
| URL 的 seed／fragment | [main.js:41](src/main.js#L41)、[engine.js:20](public/engine.js#L20)：种子转有限整数；浏览器以无害 SVG/onload 标记构造 URL，实际进入正式局后 seed 为 207，标记为 0，没有生成注入的 SVG。 |
| JSON 存档导入 | [main.js:143](src/main.js#L143)、[game.mjs:8](src/game.mjs#L8)：读取前限制 64 KiB，只解析 JSON，限定场景和最多 80 个决策，再从初始状态重放。浏览器实际导入恶意历史后拒绝，原正式局不变。 |
| 伪造状态／原型字段 | 浏览器导入含恶意 grain、log、`__proto__`、constructor.prototype 的夹具，确认后仍为规范教学状态：grain 120、history 空、脚本标记 0、未出现原型污染。额外字段没有被赋给游戏状态。 |
| 音频路径与文件名 | [audio.mjs:5](src/audio.mjs#L5)、[audio.mjs:194](src/audio.mjs#L194)、[main.js:172](src/main.js#L172)：路径限定本站 audio 目录和音频后缀；本机文件通过 Blob 播放，名称用 textContent。含 SVG/onload 的真实文件名仅作为文本显示，标记 0，没有 HTML 节点；该步骤网络请求为 0。夹具本身不是有效 MP3，显示“音乐暂不可用”是预期结果，不代表用户主题曲故障。 |
| 经典版恢复与 HTML 输出 | [app.js:7](public/app.js#L7)、[engine.js:215](public/engine.js#L215)：同样重放决策而非导入任意状态；日志、引文使用转义，其他主要拼接值为固定规则文本和规范数值。本轮代码追踪未发现可控 HTML 输入，未声称重跑全部经典版用户流程。 |
| 第三方脚本／任意请求 | 实际发布 HTML 引用本站 bundle，三维资源由本地网格生成；业务代码没有动态加载外站脚本、eval、消息驱动的执行接口或 Service Worker 注册。音频 fetch 的目标经过路径白名单。包中第三方链接注释不是运行时请求。 |
| 文件暴露与篡改 | 当前 12 个静态文件 HTTP 200、长度和 SHA-256 全部匹配发布清单；环境文件、部署配置、源码路径、测试文档等 7 个未发布路径返回 404。常见令牌／私钥特征扫描没有命中；此类扫描不是所有秘密形式的完整证明。 |

本地补充断言：5 种非法决策（含 `constructor`、`__proto__` 等）均拒绝；81 条历史拒绝；外站 URL、javascript 协议、目录穿越、编码穿越和 HTML 音频后缀拒绝。**64 KiB 限制本轮为代码核查，未将未完成的超大文件浏览器用例记为通过。**

`npm audit --json` 在本次审查时返回已知漏洞总数 **0**，未进行依赖升级。它只说明所查询公告库没有报告锁定依赖的已知问题，不排除未知漏洞。

`innerHTML` 的存在本身不直接构成漏洞；此次逐项追踪输入是否来自常量、数值重建或转义后文本，按 [OWASP DOM XSS 指南](https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html) 区分危险入口与已证实攻击链。

## 发布账户与未覆盖范围

应由账户持有人确认 Cloudflare 已开启多因素认证，妥善保护本机登录、恢复码与部署令牌，并按实际能力采用最小权限发布方式。**本轮未核实账户 MFA、成员权限、API Token 策略、登录历史或操作系统完整性，不把它们写成已通过。**

未进行流量压测、攻击第三方、服务器写入探测、浏览器零日研究或 Cloudflare 平台渗透。原局域网服务／操作系统防火墙、真实手机和微信、历史上所有部署均不在本轮完整覆盖范围内。

建议下一步先修 SEC-001／002，在独立预览上验证音乐、导入导出、错误页恢复和图形，再经授权发布。不要因“纯静态”跳过账户保护，也不要把 CSP 当成服务器被盗后的万能保护。

## 可复核证据

- 初审公网文件核验时候选为 `465d524d60b66b6f`；通用 `output/cloudflare/http-verification.json` 随最新验收更新。修复后的预览与正式证据已分别保留，见上方加固交付文档。
- 恶意文件名只显示为文字（私有验收证据，未纳入仓库）。
- 隔离父页面嵌入经典版（私有验收证据，未纳入仓库）。
- 本地夹具及 CLI 快照保存在 `output/playwright/`，不在公网发布目录。

报告遵循安全审查技能的“先复现、按影响分级、未授权不自动修复”要求；浏览器测试通过 Playwright 技能完成。没有更改线上防护状态。
