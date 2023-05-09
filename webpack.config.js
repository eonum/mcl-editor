const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/Monaco/medcodelogic.js'), //additional entries
    output:{
        path: path.resolve(__dirname, 'dist.js'),
        filename: 'bundle.js',
        library: 'Parser',
        libraryTarget: 'umd',
        umdNamedDefine: true, // optional
        globalObject: 'this' // optional
      }
  
}