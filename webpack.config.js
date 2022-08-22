const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Your application will begin at the top level index file within the src folder
  entry: './src/index.tsx',
  // The place all of your optimized build assets will be dropped when you run `npm run build`
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // Can actually be used to replace Babel in simple cases if you're using Typescript
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }, {
        // Going to need both of these loaders for just css files, look into sass for a more robust styling option
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    // Since we are using typescript, we should avoid using jsx as typing all react components (tsx) is going to be preferred
    extensions: ['.tsx', '.ts', '.js']
  },
  // This simplifies the use of an html template for your bundle. See https://webpack.js.org/plugins/html-webpack-plugin/
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
