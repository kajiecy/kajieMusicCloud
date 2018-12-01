module.exports = {
    // 项目部署的基础路径
    // 我们默认假设你的应用将会部署在域名的根部，
    // 比如 https://www.my-app.com/
    // 如果你的应用时部署在一个子路径下，那么你需要在这里
    // 指定子路径。比如，如果你的应用部署在
    // https://www.foobar.com/my-app/
    // 那么将这个值改为 `/my-app/`
    baseUrl: undefined,

    // 将构建好的文件输出到哪里
    outputDir: undefined,

    // 放置静态资源的地方 (js/css/img/font/...)
    // assetsDir: '',

    // 是否在保存的时候使用 `eslint-loader` 进行检查。
    // 有效的值：`ture` | `false` | `"error"`
    // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
    lintOnSave: false,

    // 使用带有浏览器内编译器的完整构建版本
    // 查阅 https://cn.vuejs.org/v2/guide/installation.html#运行时-编译器-vs-只包含运行时
    // compiler: false,

    // babel-loader 默认会跳过 node_modules 依赖。
    // 通过这个选项可以显式转译一个依赖。
    transpileDependencies: [/* string or regex */],

    // 是否为生产环境构建生成 source map？
    productionSourceMap: undefined,

    // 调整内部的 webpack 配置。
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/webpack.md
    chainWebpack: (config) => {

    },

    configureWebpack: {
        // resolve: {
        //     alias: {
        //         'vue$': 'vue/dist/vue.js'
        //     }
        // },
        // optimization: {
        //     minimize: true
        // }
    },

    // CSS 相关选项
    css: undefined,

    // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
    // 在多核机器下会默认开启。
    parallel: undefined,

    // PWA 插件的选项。
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md
    pwa: {},

    // 配置 webpack-dev-server 行为。
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
        proxy:{
            '/scf':{
                // target:'http://192.168.1.132:8500',
                target:'http://192.168.1.135:8500',
                changeOrigin:true,
                pathRewrite:{'^/scf':'/scf'}
            }
        }, // string | Object

        overlay: {
            warnings: false,
            errors: false
        },
        before: app => {}
    },

    // 三方插件的选项
    pluginOptions: {
        // ...

    },

    assetsDir: undefined,
    runtimeCompiler: true
}
