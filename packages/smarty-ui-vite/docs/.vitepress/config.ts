import { demoBlockPlugin } from 'vitepress-theme-demoblock'
const sidebar = {
  '/': [
    {
      text: 'Introduction',
      items: [{ text: '什么是Smarty-UI?', link: '/' }]
    },
    {
      text: '通用',
      items: [{ text: 'Button按钮', link: '/components/button/' }]
    },
    { text: '导航', items: [] },
    { text: '反馈', items: [] },
    { text: '数据录入', items: [] },
    { text: '数据展示', items: [] },
    { text: '布局', items: [] }
  ]
}

const config = {
  title: '🔨  Smarty-UI',
  description: 'Just playing around.',
  themeConfig: {
    sidebar
  },
  markdown: {
    config: md => {
      md.use(demoBlockPlugin)
    }
  }
}

export default config
