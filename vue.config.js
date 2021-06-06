let vueConfig = {
    lintOnSave: false, //关掉eslint验证
    publicPath: './',  //部署应用包时的基本 URL
    outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'test', //生成构建文件的目录
    css: {
        loaderOptions: {
            sass: {
                //配置全局的scss， 每个人引入的文件必须以;结束
                data: `@import "@/assets/common/common.scss";
                `,
            }
        }
    },
    configureWebpack:{
        plugins:[]
    }
}
module.exports = vueConfig

