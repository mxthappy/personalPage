export const SITE = {
  // 站点真实域名（Cloudflare Pages 部署后的地址，若 Pages 项目名不同请同步修改）
  site: 'https://personalpage-4s6.pages.dev',
  title: 'MXT 的个人网站',
  description: '记录技术、分享项目的个人博客与作品集',
  author: 'mxthappy',
  lang: 'zh-CN',
  email: '272590522@qq.com',
  github: 'https://github.com/mxthappy'
} as const;

// Giscus 评论配置（可选）：部署后填写你的 GitHub 仓库信息，留空则不渲染评论。
// 获取方式：https://giscus.app/zh-CN 根据仓库生成
export const GISCUS = {
  repo: '',
  repoId: '',
  category: 'Announcements',
  categoryId: ''
} as const;

// Cloudflare Web Analytics 站点令牌（可选）：在 Cloudflare 控制台开启 Web Analytics 后填入，留空则不注入脚本。
export const CLOUDFLARE_ANALYTICS_TOKEN = '';
