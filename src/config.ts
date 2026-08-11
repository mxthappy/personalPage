export const SITE = {
  // 部署到 Cloudflare Pages 后，把这里改成你的真实域名，例如 https://mxt.pages.dev
  site: 'https://your-name.pages.dev',
  title: 'MXT 的个人网站',
  description: '记录技术、分享项目的个人博客与作品集',
  author: 'MXT',
  lang: 'zh-CN',
  email: 'hello@example.com',
  github: 'https://github.com/your-name'
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
