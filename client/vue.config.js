const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    proxy: {
      '/blog': {
        target: 'http://192.168.101.83:3000',
				pathRewrite:{'^/blog':''},
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值
      },
    
    }
  
  }, 
})
