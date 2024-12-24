import { defineConfig } from "vitepress";
import { set_sidebar } from "./utils/auto_sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/docs-demo/",
  head: [["link", { rel: "icon", href: "/docs-demo/logo.png" }]],
  title: "朱依静的项目",
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle: " 目录",
    outline: [2, 6],
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "家",
        items: [
          { text: "首页", link: "/" },
          { text: "markdown首页", link: "/markdown-examples" },
        ],
      },
      { text: "示例", link: "/markdown-examples" },
      { text: "自动生成的侧边栏1", link: "/front-end/react/" },
      { text: "自动生成的侧边栏2", link: "/backend/rabbitmq/" },
      { text: "两边栏演示", link: "/两边栏演示" },
    ],

    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown 演示", link: "/markdown-examples" },
    //       { text: "Runtime API 演示", link: "/api-examples" },
    //     ],
    //   },
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown 演示", link: "/markdown-examples" },
    //       { text: "Runtime API 演示", link: "/api-examples" },
    //     ],
    //   },
    // ],

    // sidebar: {
    //   "/front-end/react": set_sidebar("/front-end/react"),
    //   "/backend/rabbitmq": set_sidebar("/backend/rabbitmq"),
    // },
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示

    socialLinks: [
      { icon: "github", link: "https://github.com/julice-233?tab=projects" },
    ],
    footer: {
      copyright: "Copyright @ 2024-present zhuyijing",
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },
  // 设置搜索框的样式
  search: {
    provider: "local",
    options: {
      translations: {
        button: {
          buttonText: "搜索文档",
          buttonAriaLabel: "搜索文档",
        },
        modal: {
          noResultsText: "无法找到相关结果",
          resetButtonTitle: "清除查询条件",
          footer: {
            selectText: "选择",
            navigateText: "切换",
          },
        },
      },
    },
  },
});
