module.exports = {
    lintOnSave: false, //将eslint检查关闭
    devServer: {
        proxy: {
            '/api': {
                target: "http://127.0.0.1:8080/",
                changeOrigin: true,
                pathRewrite:{'^/api':''} //重写请求路径(必须)
            }
        }
    },
}
