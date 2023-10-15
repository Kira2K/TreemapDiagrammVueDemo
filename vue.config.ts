import { defineConfig } from '@vue/cli-service'
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin'
module.exports = defineConfig({
  transpileDependencies: true,
  parallel: false,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()]
  },
  devServer: {
    proxy: {
      '^/graphql': {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
        secure: false
      },
      '/auth': {
        target: process.env.VUE_APP_AUTH_URL,
        changeOrigin: true
      }
    }
  },

  css: {
    extract: true,
    loaderOptions: {}
  },
  chainWebpack: config => {
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@intlify/vue-i18n-loader')
      .end()
    config.module
      .rule('typescript')
      .test(/\.tsx?$/)
      .exclude.add(/node_modules/)
      .end()
      .use('ts-loader')
      .loader('ts-loader')

    const cssMoludes = ['vue-modules', 'vue', 'normal-modules', 'normal']
    cssMoludes.forEach(rule => {
      config.module
        .rule('scss')
        .oneOf(rule)
        .use('sass-loader')
        .loader('sass-loader')
        .tap(options => ({ ...options, sourceMap: true }))
    })
  }
})
