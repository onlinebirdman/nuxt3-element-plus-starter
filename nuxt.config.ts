// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '.' : '/',
  },
  devServer: {
    port: 3001,
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@element-plus/nuxt',
    'nuxt-lodash',
  ],
  lodash: {
    prefix: '_',
    prefixSkip: [''],
    upperAfterPrefix: false,
    exclude: ['map'],
  },
  devtools: { enabled: true },
  router: {
    options: {
      hashMode: true,
    },
  },
  hooks: {
    'pages:extend': pages => {
      // 遍历pages路由及children子路由
      function walkPages(list, cb) {
        for (const page of list) {
          cb(page);
          if (page.children && page.children.length > 0) {
            walkPages(page.children, cb);
          }
        }
      }
      const reg = /^(\d+\.)(.+)/;
      walkPages(pages, page => {
        const arr = page.path.match(reg)
        if (arr) {
          const order = arr[1];
          page.path = page.path.replace(order, '');
          page.name = page.name.replace(order, '');
        }
      })
    }
  }
})
