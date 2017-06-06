var webpack = require('webpack');

module.exports = {
    entry:[
            'script-loader!jquery/dist/jquery.min.js',
            'script-loader!foundation-sites/dist/js/foundation.js',
            './app/app.jsx'
           ],
    externals:{
         jquery:'jQuery'
    },
    plugins:[
         new webpack.ProvidePlugin({
             '$' : 'jquery',
             'jQuery' : 'jquery',
             'jquery' : 'jquery'
        })
        
    ],
    output:{
        path:__dirname,
        filename:'./public/bundle.js'
    },
    resolve:{
        modules:[__dirname,'node_modules','./app/components','app/api','app/firebase'],
        alias:{
			app:'app',
            App:'app/styles/app.scss',
            actions:'app/actions/actions.jsx',
            reducers:'app/reducers/reducers.jsx',
            configureStore:'app/store/configureStore.jsx',
        },
        extensions:['.js','.jsx']
    },
    module:{
       loaders:[
             {
              loader:'babel-loader',
              query:{
                  presets: ['react','es2015','stage-0']
              },
              test:/\.jsx?$/,
              exclude:/node_modules/
                 
             } 
       ]
    }
};
