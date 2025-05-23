import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  { text: "About me", icon: "circle-user", link: "/intro"},

  {
    text: "Programming notices",
    icon: "pen-to-square",
    // prefix: "/blog/",
    children: [
      {
        text: "Python cours",
        icon: "codicon:python",
        prefix: "python-notices/",
        children: [
          { text: "Python variables", icon: "codicon:python", link: "variables.md" },
          { text: "Python List", icon: "codicon:python", link: "#" },
          { text: "Python Dict", icon: "codicon:python", link: "#" },
        ],
      },

      {
        text: "Set Website",
        icon: "",
        prefix: "/blog/set_website/",
        children: [
          { text: "Create Website", icon:"icon-park-outline:browser-chrome", link:"create-website.md" },
          { text: "Navbar", icon: "icon-park-outline:browser-chrome", link: "set_navbar.md" },

        ]
      }
 
    ],

  },
  {
    text: "Others",
    icon: "icon-park-outline:other",
    // prefix: "/posts/",
    children: [
      { text: "Set up comment section", icon: "tabler:browser", link: "/blog/set_website/set-up-comment-section.md" },
      { text: "Python Dict", icon: "codicon:python", link: "#" },
      { text: "Python Dict", icon: "codicon:python", link: "#" },
    ]
  },
]);
