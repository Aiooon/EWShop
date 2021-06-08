// 起别名的时候需要借助 webpack
// 在 vue 配置文件中中引入 webpack
module.exports = {
    configureWebpack: {
        resolve: {  // 设置别名，重启服务后生效
            alias: {
                'assets': '@/assets',
                'components':'@/components',
                'network':'@/network',
                'utils':'@/utils',
                'views':'@/views',
            }
        }
    },
    // 打包的输出路径
    publicPath: './'
}
