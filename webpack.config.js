module.exports = {
    mode: "development",
    entry: {
        main: "./src/app.js",
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist"
    }
}
