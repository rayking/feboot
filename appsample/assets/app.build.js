
({
    appDir: "../js",
    baseUrl: ".",
    dir: "../js_build",
    //Comment out the optimize line if you want
    //the code minified by UglifyJS.
    optimize: "none",

    paths: {
        "jquery": "require-jquery"
    },

    modules: [
        {
            name: "test",
            exclude: ["jquery"]
        }
    ]
})