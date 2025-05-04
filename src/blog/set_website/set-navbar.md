---
title: Set Navbar
icon: blog
date: 2025-05-04 16:47:02
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

## Set Navbar

```javascript
export default navbar([
  // New topic
  { text: "text", icon: "icon_name", link: "/path" },

  // New group
  {
    text: "name",
    icon: "icon:name",
    prefix: "/path_prefix",
    children: [
      // Add entry
      "/path",

      // Add link
      { text: "test", icon: "icon_name", link: "/path" },

      // Add group in group
      {
        text: "Set Website",
        icon: "",
        children: [
          { text: "", icon: "", link: "#" },
          { text: "", icon: "", link: "#" },
        ]
      }
    ]
  }
]);

```

Find icons on page [https://icon-sets.iconify.design/](https://icon-sets.iconify.design/)