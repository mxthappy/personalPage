---
title: '用 Astro 搭建个人网站'
description: '记录从零到上线用 Astro 建站的完整过程：内容集合、暗色主题、部署到 Cloudflare Pages。'
pubDate: 2026-08-05
tags: ['Astro', '前端', '建站']
draft: false
---

这个网站是用 [Astro](https://astro.build) 搭建的。选择 Astro 的原因很直接：内容型网站的核心是写作，Astro 把 Markdown 内容管理和静态生成做得非常顺手。

## 为什么选 Astro

对比了几个主流方案后，我的结论如下：

| 方案 | 优点 | 缺点 |
| --- | --- | --- |
| Astro | 内容优先、组件化、生态好 | 交互复杂时需引入框架 |
| Hugo | 构建极快、单二进制 | 模板定制灵活度低 |
| Next.js | 全栈能力 | 对内容站来说偏重 |

对于博客 + 作品集这类网站，Astro 的「内容集合」和官方 RSS、Sitemap 支持几乎是开箱即用。

## 内容集合

用 `defineCollection` 配合 `glob` loader 定义内容的字段结构，写文章时就能获得类型提示和校验：

```ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,mdoc}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});
```

然后在页面里通过 `getCollection('posts')` 读取，用 `render()` 渲染正文。

## 暗色主题

采用 Tailwind CSS v4 的 CSS-first 配置，把主题色定义成设计变量：

```css
@theme {
  --color-base: #070b14;
  --color-accent: #22d3ee;
  --color-accent-2: #a78bfa;
}
```

深色背景加上青紫渐变点缀，配合毛玻璃卡片和微光效果，科技感就出来了。

## 部署

推送到 GitHub 仓库后，Cloudflare Pages 会自动构建部署，全程免费。构建命令和输出目录：

```bash
npm run build  # 输出到 dist/
```

> 小提示：先在 Cloudflare 控制台把 `site` 配置改成你的真实域名，RSS 和 Sitemap 的链接才会正确。

## 小结

从初始化到上线，整个过程比预想中顺利。Astro 把内容型网站该做的事都安排好了，剩下的就是把时间花在写作上。
