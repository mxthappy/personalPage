---
title: '我的开发环境'
description: '分享我日常使用的开发工具和配置：终端、编辑器、效率工具。'
pubDate: 2026-08-10
tags: ['效率', '工具']
draft: false
---

好的开发环境能显著提升幸福感。这篇文章分享我目前在用的工具组合，以及选择它们的理由。

## 终端

终端是我的主战场，我的配置原则是「快速启动、快捷键优先」：

- **iTerm2 / Terminal**：日常命令行操作
- **zsh + oh-my-zsh**：补全和主题增强
- **tmux**：多会话管理和持久化

```bash
# 日常高频命令
alias g='git'
alias gs='git status'
alias gp='git push'
alias gcm='git commit -m'
```

## 编辑器

编辑器我用的 VS Code，配合以下扩展：

1. Prettier：统一代码格式
2. ESLint：静态检查
3. GitLens：代码历史可视化
4. 主题：深色系，减少眼部疲劳

## 效率工具

- **Raycast / Alfred**：启动器和剪贴板管理
- **Obsidian**：笔记与知识库
- **Homebrew**：包管理

> 工具是手段，不是目的。找到顺手的那套，然后专注做事。

## 下一步

我还在逐步完善这套环境，比如给终端配上更友好的提示符、自动化常见流程。后续有新发现会更新这篇文章。
