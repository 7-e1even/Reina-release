# Reina 官网（静态站点）

一个自包含的静态营销站点，零构建步骤、零运行时依赖（纯 HTML / CSS / JS + 本地资源）。

```
website/
├─ index.html      # 页面
├─ styles.css      # 样式（黑白主题 + 日/夜切换）
├─ app.js          # 主题切换 / 滚动揭示 / 按平台识别下载
└─ assets/
   ├─ logo.png      # Reina logo（同时用作 favicon）
   ├─ app-dark.png  # 真实应用界面截图
   └─ hay-wain.jpg  # 背景画：康斯特布尔《干草车》（公有领域）
```

## 本地预览

直接用浏览器打开 `index.html` 即可；或起一个静态服务器：

```bash
npx serve website        # 或 python -m http.server 8080 -d website
```

## 部署到 GitHub Pages

GitHub Pages 在主分支上只支持「仓库根目录」或「/docs」两个来源，因此 `website/`
子目录有两种常见做法：

1. **GitHub Actions（推荐）** — 在 Settings → Pages 把 Source 设为 *GitHub Actions*，
   用一个静态部署 workflow 把 `website/` 作为站点根目录发布。
2. **gh-pages 分支** — 把 `website/` 的内容推到 `gh-pages` 分支根目录，
   Pages Source 选该分支。
3. **独立仓库** — 把 `website/` 作为一个单独的 `*.github.io` 仓库内容。

> 站点是相对路径引用资源（`assets/...`），放在任意子路径下都能正常工作。

## 素材版权

- 背景画《The Hay Wain》(John Constable, 1821) 与备选《Wanderer above the Sea of
  Fog》(Caspar David Friedrich) 均为**公有领域**（作者逝世逾百年），可自由商用。
- `app-dark.png` 为 Reina 应用真实截图。
- logo 来自仓库 `img/logo.square.png`。
