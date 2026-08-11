# 个人网站

基于 **Astro + Tailwind CSS** 的中文个人博客与作品集，暗色科技风，部署在 **Cloudflare Pages**。

## 技术栈

- [Astro](https://astro.build)（静态站点生成）
- Tailwind CSS v4（CSS-first 主题配置）
- @astrojs/mdx、@astrojs/rss、@astrojs/sitemap
- Giscus 评论（GitHub Discussions）、Cloudflare Web Analytics

## 本地开发

```bash
npm install
npm run dev        # 开发服务器 http://localhost:4321
npm run build      # 构建到 dist/
npm run preview    # 本地预览构建结果
```

## 项目结构

```text
src/
├── components/        # 布局组件：Header、Footer、卡片、Giscus、Analytics
├── content/           # 内容（Markdown）
│   ├── posts/         # 博客文章
│   └── projects/      # 项目
├── layouts/Layout.astro  # 全局布局（SEO meta + 导航 + 页脚）
├── lib/               # 工具函数（日期、阅读时长）
├── pages/             # 页面路由
├── config.ts          # 站点配置（域名、Giscus、Analytics）
├── content.config.ts  # 内容字段 schema 与校验
└── styles/global.css  # 主题变量与全局样式
```

## 如何写文章

在 `src/content/posts/` 新建 `.md` 文件，frontmatter 字段如下：

```yaml
---
title: '文章标题'
description: '摘要，会显示在列表页和 SEO 描述里'
pubDate: 2026-08-11
tags: ['标签1', '标签2']
draft: false   # true 时不发布
---
```

项目页同理，在 `src/content/projects/` 新建 `.md` 文件，字段为
`name`、`description`、`techStack`、`link?`、`featured`、`sortOrder`。

写完后 `git push` 即自动部署上线。

## 上线前需要修改的配置

全部集中在 `src/config.ts`：

| 配置 | 说明 |
| --- | --- |
| `SITE.site` | 部署后的真实域名，例如 `https://xxx.pages.dev`，RSS/Sitemap 依赖它 |
| `SITE.email` / `SITE.github` | 联系方式 |
| `GISCUS` | 评论配置，在 [giscus.app](https://giscus.app) 按仓库生成，留空则隐藏评论 |
| `CLOUDFLARE_ANALYTICS_TOKEN` | 在 Cloudflare 控制台开启 Web Analytics 后填入，留空则不注入脚本 |

## 部署到 Cloudflare Pages

1. 将本项目推送到 GitHub 仓库（Giscus 需要公开仓库并开启 Discussions）。
2. 登录 Cloudflare 控制台 → Workers & Pages → 创建 → **Pages** → 连接到 Git，
   选择 `mxthappy/personalPage` 仓库。
3. 构建设置：框架预设选择 **Astro**，构建命令 `npm run build`，输出目录 `dist`；
   同时在环境变量中添加 `NODE_VERSION=22`（Astro 7 需要 Node.js ≥ 22）。
4. 保存后首次构建自动触发，完成后会得到一个 `xxx.pages.dev` 免费域名。本项目实际
   项目名为 `personalpage-4s6`（域名 `personalpage-4s6.pages.dev`，因为
   `personalpage` 已被占用）；若以后改了项目名，需同步修改 `src/config.ts` 的
   `SITE.site` 并重新推送。

## 日常维护

- 写文章/项目：新建 Markdown 文件 → `git push` → 自动部署
- 评论与统计由 Giscus / Cloudflare 托管，无需维护
- 可选升级：绑定自定义域名、加入全文搜索
