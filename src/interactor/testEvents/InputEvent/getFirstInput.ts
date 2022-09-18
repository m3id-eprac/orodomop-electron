import ipcMainHandle from 'src/interactor/utils/mainHandle';
import passRealm from 'src/data/passInputRlm';

// const getFirstInput = () => {
//     ipcMain.handle('getFirstInput', async (event, args) => {
//         const rlm = await passRealm();
//         const item = rlm.getItem();
//         // return JSON.stringify(item)
//         /**
//          * JSON.stringify 두번 하면 안된다. 조심해
//          */
//         return item;
//     });
// };
const getFirstInput = ipcMainHandle('getFirstInput', async () => {
    const rlm = await passRealm();
    const item = rlm.getItem()
    return item;
})
export default getFirstInput;

