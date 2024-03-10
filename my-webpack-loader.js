module.exports = function myWebpackLoader(source) {
    return source.replace(/console.log\((.*)\)/g, "alert($1)");
}
