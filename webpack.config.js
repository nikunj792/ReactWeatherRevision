module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
		Main:'app/components/Main.jsx',
		Nav:'app/components/Nav.jsx',
		Form:'app/components/Form.jsx',
		About:'app/components/About.jsx',
		Example:'app/components/Example.jsx',
		Weather:'app/components/Weather.jsx',
		WeatherMessage:'app/components/WeatherMessage.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool:'cheap-module-eval-source-map'
};