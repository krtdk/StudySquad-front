const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
 transpileDependencies: true,

  //outputDir: "../vue-backboard/src/main/resources/static",

 /* devServer: {
    proxy: {
      '/': {
        target: "http://localhost:8081",
        changeOrigin: true,
      }
    }
  }, */
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
