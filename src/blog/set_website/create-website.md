---
title: How to create your own website with Vuepress-theme-hope
icon: blog
date: 2025-05-04 15:56:06
author: qcoding
category:
    - 你的分类1
    - 你的分类2
tag:
    - 你的标签1
    - 你的标签2
isOriginal: true
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
comment: true
lastUpdated: true
editLink: true
backToTop: true
toc: true
---

## How to create your own website with Vuepress-theme-hope

### Create your website

1. Install pnpm with command `npm install -g pnpm`
2. Set up the Starter Template in ConEmu with `pnpm create vuepress-theme-hope my-docs`
3. Launch local server with command `pnpm run docs:dev`

### Config your website

| Function                   | File      | Code                                           |
| -------------------------- | :-------- | ---------------------------------------------- |
| Add background image       | README.md | `bgImage: /assets/images/background.jpg`       |
| Edit icon for the website  | config.ts | `head:[['link', {rel:'icon', href: '/path'}]]` |
| Edit title top left        | config.ts | title: "text"                                  |
| Edit logo top left         | theme.ts  | logo: “/path”                                  |
| Edit Autor                 | theme.ts  | author>name: “name”                            |
| Link Website to github     | theme.ts  | hostname: “your-website.github.io”             |
|                            |           | author>url: “your-website.github.io”           |
| Edit social-media contacts | theme.ts  | blog>medias>”platform”: your connection        |

### Update Website

Command:  `pnpm dlx vp-update`

