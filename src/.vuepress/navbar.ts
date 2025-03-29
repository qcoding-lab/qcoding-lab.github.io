import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "Programming notices",
    icon: "pen-to-square",
    prefix: "/programming_notices/",
    children: [
      {
        text: "Python cours",
        icon: "codicon:python",
        prefix: "python_course/",
        children: [
          { text: "Python Integer", icon: "codicon:python", link: "1" },
          { text: "Python List", icon: "codicon:python", link: "2" },
          { text: "Python Dict", icon: "codicon:python", link: "3" },
        ],
      },
      {
        text: "Javascript",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "Banana 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "Banana 2",
            icon: "pen-to-square",
            link: "2",
          },
        ],
      },
      
    ],

  },
  {
    text: "Others",
    icon: "hugeicons:search-02",
    link: "https://theme-hope.vuejs.press/",
  },

  // {
  //   text: "V2 Docs",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/",
  // },
]);
