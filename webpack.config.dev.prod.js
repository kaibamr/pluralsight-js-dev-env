import path from 'path';
import webpack from 'webpack';

export default {
  debug: true,
  devtool: 'source-map', //troche spowalnia proces produkcyjny, ale w 100% wykorzystuje moc source-maps
                        // dzieki niemu moge widziec oryginalny kod przed transpilowaniem itd.
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'), //jesli wydaje apke to pliki powinny znajdowac sie w folderze dist\ (ditribution)
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    //eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),
    //minify js
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}