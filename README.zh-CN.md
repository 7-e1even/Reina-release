<div align="center">

<img src="img/logo.png" alt="Reina" width="180" />

# Reina

### 本地优先的桌面 AI 智能体 —— 你的数据永远不离开你的电脑

[English](./README.md) · **中文**

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](./LICENSE)
[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS-lightgrey.svg)](#-下载与运行)
![GitHub release](https://img.shields.io/github/v/release/7-e1even/Reina-release?color=success)
![Downloads](https://img.shields.io/github/downloads/7-e1even/Reina-release/total?color=blue)

[下载](#-下载与运行) · [核心能力](#-核心能力) · [为什么本地](#-为什么选本地)

</div>

---

<div align="center">
  <img src="img/demo.gif" alt="Reina 读取本地项目并回答" width="90%" />
</div>

---

**Reina 是一个运行在你自己电脑上的桌面 AI 智能体。** 它围绕本地工作区持续对话、理解项目、整理信息、推进任务，并在需要时给出清晰的下一步——而你的文件、数据和 API Key 全程留在本机，由你掌控。

和云端 AI 工具不同，Reina 的核心数据流**不出本机**。它适合对**隐私、合规、离线可控**有硬性要求的个人与团队——比如那些"数据不允许上传云端"的场景。

> [!NOTE]
> Reina 自带模型接入层：你在设置里配置自己的模型与 API Key（存在本地 `~/.reina/`），由你决定接哪家。没有产品级 HTTP 服务，没有云端后台。

## ✨ 核心能力

- 🔒 **本地优先，数据不上云** —— 工作区内容不会被上传到第三方服务器，满足"数据不出内网"的硬要求。
- 🔑 **自带模型与密钥** —— API Key 存在 `~/.reina/`，绝不进入界面层，完全由你掌控。
- 🧠 **工作区上下文** —— 围绕本地项目、文件和任务组织持续会话，理解你的整个工作区而不只是单个文件。
- 💬 **持续会话** —— 保留任务全过程，中途暂停后可无缝继续，不必反复补充背景。
- 🖥️ **多窗口桌面体验** —— 聊天 / 工作区 / 设置界面清晰分区，贴着本地工作流，而不是停在一个浏览器标签里。
- 🛡️ **可控与透明** —— 重要操作走权限确认，过程可见、可暂停、可继续；发布版默认隐藏调试入口。

## 🔐 为什么选本地

| | 云端 AI 工具 | **Reina** |
|---|---|---|
| 数据去向 | 上传到厂商服务器 | **留在本机** |
| API Key | 托管在厂商 | **存你自己的 `~/.reina/`** |
| 离线可用 | 否 | **可（取决于你接的模型）** |
| 合规 / 内网 | 受限 | **数据不出内网** |
| 模型选择 | 锁定厂商 | **自由配置** |

如果你或你的团队**不能把数据交给云端**，Reina 就是为这个场景做的。

## 📦 下载与运行

在 [Releases](https://github.com/7-e1even/Reina-release/releases) 下载与你系统匹配的版本：

- **Windows** —— 安装包（NSIS）与便携版。
- **macOS** —— DMG 或 ZIP。

下载后按系统提示安装或解压运行。首次使用：选择一个工作区 → 在设置里填入你的模型与 API Key → 直接输入目标或任务说明。

## 📄 许可证

本项目采用 [AGPL-3.0](./LICENSE)。

如需在闭源 / 商业产品中使用，请联系作者获取商业授权。

---

<div align="center">
<sub>如果 Reina 对你有用，点个 ⭐ Star 支持一下 —— 这是对独立开发者最大的鼓励。</sub>
<br/>
<sub>Copyright © 2026 7-e1even</sub>
</div>
