module.exports = {
    entry: ["@babel/polyfill", "./src/client/index.js"],
    output: {
      path: __dirname,
      filename: "./src/public/bundle.js",
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    devtool: "source-map",
    watchOptions: {
      ignored: /node_modules/,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        }
      ],
    },
  };
  