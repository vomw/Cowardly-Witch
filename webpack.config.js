const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const mode = process.env.MODE

module.exports = {
  mode,
  entry: {
    app: './src/scripts/app.js',
  },
  output: {
    path: `${ __dirname }/public/scripts`,
    filename: 'app.min.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: (mode === 'development')
              }
            },
            'sass-loader'
          ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              fix: false,
              failOnError: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 51200,
              name: '../images/other/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '../stylesheets/style.css' })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: `${ __dirname }/public`,
    port: 3000,
    open: true
  }
}
