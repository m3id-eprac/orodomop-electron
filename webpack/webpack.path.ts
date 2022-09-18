import { join } from 'node:path';

const rootPath = join(__dirname, '../');

const srcPath = join(rootPath, 'src');

const distPath = join(rootPath, 'dist');

const tsConfigPath = join(rootPath, 'tsconfig.json');

export { rootPath, srcPath, distPath, tsConfigPath };
