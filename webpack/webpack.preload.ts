import { join } from 'node:path';

import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import WebpackBar from 'webpackbar';

import { srcPath, distPath } from './webpack.path';
import baseConf from './webpack.base';

const preload: Configuration = {
    mode: 'production',
    target: 'electron-preload',
    devtool: 'inline-source-map',
    entry: join(srcPath, 'preload.ts'),
    output: {
        path: distPath,
        filename: `preload.js`,
    },
    plugins: [
        new WebpackBar({
            name: 'preload',
        }),
    ],
    node: {
        __dirname: true,
        __filename: true,
    },
};

export default merge(baseConf, preload);
