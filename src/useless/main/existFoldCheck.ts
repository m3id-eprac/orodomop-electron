import { existsSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';

import { appDataPath } from 'src/config/appPaths';
import { logBgCyn } from '../chalk';

const ifFistOpenAppExistData = async (callback: () => Promise<void>) => {
    const existsCheck = existsSync(appDataPath);

    try {
        if (!existsCheck) {
            console.log('oromodop directory create Data directory ');
            await mkdir(appDataPath);
        }
        logBgCyn('Before exist fold check callback');
        await callback();
        logBgCyn('After exist fold check callback');
    } catch (error) {
        console.log(error);
    }

    console.log('exist oromodop directory');
};
export default ifFistOpenAppExistData;
