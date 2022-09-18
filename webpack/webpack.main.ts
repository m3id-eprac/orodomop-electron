import { join } from 'node:path';

import { Configuration } from 'webpack';
import nodeExternals from 'webpack-node-externals';
import { merge } from 'webpack-merge';
import WebpackBar from 'webpackbar';

import { srcPath, distPath } from './webpack.path';
import baseConf from './webpack.base';

const main: Configuration = {
    mode: 'production',
    target: 'electron-main',
    devtool: 'inline-source-map',
    entry: {
        main: join(srcPath, 'main.ts'),
    },
    output: {
        path: distPath,
        filename: `main.js`,
    },
    plugins: [
        new WebpackBar({
            name: 'main',
            basic: false,
        }),
    ],
    externalsPresets: {
        node: true,
        electronMain: true,
    },
    externals: [
        nodeExternals({
            // allowlist: ['realm']
            // NOTE: realm 번들 에러가 나서 google 하다 copy
            // 왜 되는지 모름
            // allowlist: [/webpack(\/.*)?/, "electron-devtools-installer"],
            // allowlist: [/webpack(\/.*)?/, 'uuid', /^wdio-electron-service/],
            allowlist: [/webpack(\/.*)?/, /^wdio-electron-service/],
            // allowlist: [/webpack(\/.*)?/],
            // allowlist: ['uuid', /^wdio-electron-service/],
            // allowlist: [/webpack(\/.*)?/, 'uuid'],
            // allowlist: ['uuid'],
        }),
    ],
    node: {
        __dirname: true,
        __filename: true,
    },
};
export default merge(baseConf, main);
