const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ImageminWebpack = require('imagemin-webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/scripts/index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                            ],
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 70000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          automaticNameDelimiter: '~',
          enforceSizeThreshold: 50000,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/templates/index.html'),
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/public/'),
                    to: path.resolve(__dirname, 'dist/'),
                },
            ],
        }),
        new WebpackPwaManifest({
            name: 'Heryapro 1st',
            short_name: 'Heryapro 1st',
            start_url: '/',
            description: 'Heryapro - Pro 1st',
            background_color: '#ffffff',
            theme_color: '#ffffff',
            crossorigin: 'use-credentials',
            icons: [
              {
                src: path.resolve('./src/public/images/favicon/icon.png'),
                sizes: [96, 128, 192, 256, 384, 512],
                destination: path.join('images/icons', 'ios'),
                ios: true,
              },
              {
                src: path.resolve('./src/public/images/favicon/icon.png'),
                sizes: '1024x1024',
                destination: path.join('images/icons', 'maskable'),
                purpose: 'maskable',
              },
            ],
        }),
        new ImageminWebpack({
            include: /\.jpg$/,
            name: '[path][name].[ext]',
            imageminOptions: {
              plugins: [
                [
                  'mozjpeg',
                  {
                    progressive: true,
                    quality: 60,
                  },
                ],
              ],
            },
        }),
        new BundleAnalyzerPlugin(),
    ],
};
