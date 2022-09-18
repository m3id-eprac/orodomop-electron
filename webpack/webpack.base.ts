import { Configuration } from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { distPath, tsConfigPath } from './webpack.path';

const baseConf: Configuration = {
    output: {
        path: distPath,
    },
    stats: 'errors-only',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'swc-loader',
                    options: {
                        jsc: {
                            parser: {
                                syntax: 'typescript',
                            },
                        },
                    },
                },
            },
        ],
    },
    resolve: {
        modules: [
            'node_modules',
            // resolve(__dirname, './src/useless')
        ],
        // extensions: ['.js'],
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: tsConfigPath,
            }),
        ],
    },
};

export default baseConf;
