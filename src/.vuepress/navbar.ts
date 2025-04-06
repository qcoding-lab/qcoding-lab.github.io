import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  { text: "About me", icon: "circle-user", link: "/intro"},

  {
    text: "Programming notices",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "Python cours",
        icon: "codicon:python",
        prefix: "python_course/",
        children: [
          { text: "Python Integer", icon: "codicon:python", link: "#" },
          { text: "Python List", icon: "codicon:python", link: "#" },
          { text: "Python Dict", icon: "codicon:python", link: "#" },
        ],
      },

      {
        text: "Set Website",
        icon: "",
        children: [
          { text: "Launch Website", icon:"icon-park-outline:browser-chrome", link:"#" },
          { text: "Navbar", icon: "icon-park-outline:browser-chrome", link: "#" },

        ]
      }
 
    ],

  },
  {
    text: "Others",
    icon: "icon-park-outline:other",
    prefix: "/posts/",
    children: [
      { text: "Python Dict", icon: "codicon:python", link: "#" },
      { text: "Python Dict", icon: "codicon:python", link: "#" },
      { text: "Python Dict", icon: "codicon:python", link: "#" },
    ]
  },
]);
