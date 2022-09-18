import { contextBridge } from 'electron';
import { invoke } from 'useless/preload/invoke';
import { PreloadName } from 'interactor/IpcStore';

type NewPreload = Record<PreloadName, (arg: unknown) => Promise<unknown>>;

/**
 * NOTE:
 * 22/09/07 Wed 13:25
 *여긴 module import 가 안되
 * 그러면 Type, interface 로 해결 해야 되나
 */
if (process.env.TEST === 'true') {
    require('wdio-electron-service/preload');
}

const newPreload: NewPreload = {
    hello: () => invoke('hello'),
    getFirstInput: () => invoke('getFirstInput'),
    updateInput: (arg) => invoke('updateInput', arg),
    modifiedInput: (args) => invoke('modifiedInput', args),
};
// const preload: Preload = {
//     //     /**
//     //      * NOTE:
//     //      *차이가 모야??
//     //      */
//     //     // Yes
//     //     // hello: (args) => ipcRenderer.invoke('hello',args),
//     hello: (args) => invoke('hello', args),
//     passInput: (args) => invoke('passInput', args),
//     realmInput: (arg) => invoke('realmInput', arg),
//     realmGetInput: () => invoke('getInput'),
//     getFirstInput: () => invoke('getFirstInput'),
//     updateInput: (arg) => invoke('updateInput', arg)
//     //     // Nope
//     //     // hello:(args:string)=>{preloadHello(args)}
//     //     // hello: (args: string) => preloadHello(ipcRenderer, args),
// };
/**
 * HACK:
 * XXX:
 * apiKey === renderer 이름이랑 똑같이
 *이거 때문에 오류 검나 뜸
                                vvvvvvvv
 */
contextBridge.exposeInMainWorld('electron', newPreload);
