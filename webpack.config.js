const path = require ('path');
const ES5ToES3 = require ('es5to3-webpack-plugin');
// const Uglify = require ('uglifyjs-webpack-plugin');

module.exports = {
    entry: path.resolve (__dirname, 'src', 'index.js'),
    // entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve (__dirname, 'bin')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve (__dirname, 'src'),
                // include: path.resolve ('src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', {
                                // modules: false,
                                modules: 'commonjs',
                                loose: true,
                                targets: {
                                    browsers: ['IE 8']
                                }
                            }]
                        ],
                        plugins: [
                            'transform-runtime',
                            'transform-es3-property-literals'
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        // new Uglify(),
        new ES5ToES3()
    ]
};
