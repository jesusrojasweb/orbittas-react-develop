const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const path = require('path')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports={
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifestPlugin({
      name: 'ORBITTAS - Agencia Digital',
      shortname: 'ORBITTAS',
      description: 'Somos un equipo apasionado por la tecnología e innovación, conformado por profesionales en diversas áreas.',
      background_color: '#fff',
      theme_color: '#007993',
      icons: [
        {
          src: path.resolve('src/assets/favicon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://jesusrojasweb.github.io'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        // {
        //   urlPattern: new RegExp('https://jesusrojasweb.github.io'),
        //   handler: 'NetworkFirst',
        //   options: {
        //     cacheName: 'api'
        //   }
        // }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options:{
            plugins: ['@babel/plugin-syntax-dynamic-import'],
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // {
      //   test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
      //    use:{
      //       loader: 'url-loader',
      //       options: {
      //           limit: 100000
      //       }
      //   }
      // }
    ]
  }
}
