
// const path = require('path')
// module.exports = {
//   publicPath: process.env.VUE_APP_BASE_URL,
//   devServer: {
//   },
//   lintOnSave: false, // eslint-loader 是否在保存的时候检查
//   productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
//   filenameHashing: true, //文件hash
//   configureWebpack: {
//     resolve: {
//       alias: {
//         '@': path.join(__dirname, 'src')
//       }
//     }
//   },
// }

module.exports = {
  publicPath: process.env.VUE_APP_BASE_URL,
  configureWebpack: {
    devtool: 'source-map',
    output: { filename: '[name].[hash].bundle.js' },
    externals: {
      './cptable': 'var cptable'
    }
  }
}