var Promise = require('es6-promise').Promise;

module.exports = {
    entry: __dirname + "/src/App.jsx",
    output: {
        path: __dirname + "/public/javascripts",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.css$/, loader: "style!css" 
            },
            
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel'
            }
        ]
    }
};