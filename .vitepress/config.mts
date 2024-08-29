import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh",
  locales: [
    {
      lang: "zh",
      title: "简体中文"
    }
  ],
  lastUpdated: true,
  title: "SCH的文档",
  description: "SCH的文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '所有项目', items: [
          { text: 'meme梗图', link: '/meme/about', activeMatch: '/meme/.*' }
        ] }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Meme梗图',
        items: [
          { text: '关于项目', link: '/meme/about' },
          { text: '参与贡献', link: '/meme/contribute' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/schlibra' }
    ]
  }
})
