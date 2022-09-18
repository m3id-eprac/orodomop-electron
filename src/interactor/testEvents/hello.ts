import {
    appContent,
    appDistPath,
    appDocuments,
    appPath,
    appProductOromodopPath,
    appResource,
} from 'src/config/appPaths';
import ipcMainHandle from '../utils/mainHandle';

const mainHello = ipcMainHandle('hello', async () => {
    const LargeWord = `appPath: ${appPath}\n
appData: ${appProductOromodopPath}\n
appDist: ${appDistPath}\n
appDocument: ${appDocuments}\n
appResource: ${appResource}\n
appContent: ${appContent}\n
`;
    // return LargeWord
    return LargeWord;
});

// const ql = (arg: string) => {
//     logBgRed('main Hello');
//     logBgGn(arg);
//     console.log('worf')
//     const LargeWord = `appPath: ${appPath}\n
// appData: ${appProductOromodopPath}\n
// appDist: ${appDevRoot}\n
// appDocument: ${appDocuments}\n
// appResource: ${appResource}\n
// appContent: ${appContent}\n
// `;
//     // return LargeWord
//     return LargeWord;
//
// }
// const qHello = () =>
//     ipcMain.handle('hello', async (event, arg: string) => {
//         const reqult = await ql(arg)
//         return reqult
//         //         logBgRed('main Hello');
//         //         logBgGn(arg);
//         //         const LargeWord = `appPath: ${appPath}\n
//         // appData: ${appProductOromodopPath}\n
//         // appDist: ${appDevRoot}\n
//         // appDocument: ${appDocuments}\n
//         // appResource: ${appResource}\n
//         // appContent: ${appContent}\n
//         // `;
//         //         // return LargeWord
//         //         return LargeWord;
//     });
export { mainHello };
