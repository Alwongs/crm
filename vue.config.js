module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/crm/" : "/",
    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "@/assets/styles.scss";'
            }
        }
    }
}