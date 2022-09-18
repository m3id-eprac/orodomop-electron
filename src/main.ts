import { app, BrowserWindow } from 'electron';
import createWindow from 'config/createWindow/mainWindow';

import { IpcStoreObj } from 'interactor/IpcStore';

import ifFistOpenAppExistData from 'useless/main/existFoldCheck';
import { logBgBlck, logBgGn, logBgYllw, logElc, logWarn } from 'useless/chalk';
import createDataPass from 'useless/main/firstCreatePassDataBase';

// wdio
if (process.env.TEST === 'true') {
    require('wdio-electron-service/main');
}

async function run() {
    try {
        logBgBlck('1. before Deady');
        await app.whenReady();
        /**
         * documents/oromodop directory check
         */
        // logBgGn('2. Ready ');
        // logElc('--diifehdsf')
        /**
         *  이게 미들웨어???
         */
        // logWarn('3. first data directory')
        await ifFistOpenAppExistData(async () => {
            await createDataPass();
            // logBgYllw('4. inner if First open app exist data');
        });
        console.log('5. await realm');

        console.log('6. passGet');
        IpcStoreObj();
        createWindow();

        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) createWindow();
        });
    } catch (error) {
        console.error(error);
    }
}

run().catch(console.error);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
