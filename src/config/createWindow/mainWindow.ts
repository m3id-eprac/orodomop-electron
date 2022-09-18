import { app, BrowserWindow } from 'electron';
import{appDistPath} from 'config/appPaths'

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: `${appDistPath}/preload.js`,
        },
    });
    // if(process.env.NODE_TEST ==='true'){
    // win.loadURL('http://localhost:3000');
    // }

    // process.env.NODE_TEST === 'true' ||  win.loadURL('http://localhost:3000');
    // if (process.env.NODE_TEST === undefined) {
        // console.log(chalk.blue.bgRed(('set process.env.NODE-TEST')))
    //     logBgRed('seedfdf')
    //     throw new Error('set process.env.NODE_TEST');
    // }
    process.env.NODE_TEST === 'true'
        ? win.loadURL('http://localhost:3000')
        : win.loadFile(`${appDistPath}/build/index.html`);
        // : win.loadFile(`${appRootPath}/index.html`);

    // if(process.env.NODE_ENV ==='production'){
    //     win.loadFile(`${appRootPath}/build/index.html`)
    // }
    win.webContents.openDevTools();
    // win.on('ready-to-show', () => {
    //     win.title = 'this is the title of the main window';
    // });
};

export default createWindow;
