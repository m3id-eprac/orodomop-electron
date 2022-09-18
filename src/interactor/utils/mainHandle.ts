import { ipcMain } from 'electron';

// type IpcMainReturn<Q> = {
//     channel: Q;
//     event: () => void;
// };

const ipcMainHandle = <Q extends string, T, K>(
    type: Q,
    listener: (args: T) => K
) => {
    const channel: Q = type;
    const event = () =>
        ipcMain.handle(type, async (_, args: T) => {
            /**
             * 22/09/14 Wed 14:13
             * 자꾸 undefined 가 뜬다???
             * 이유를 찾았어
             *
             *async 를 사용 했기 때문에 기다려야지
             *listener(args) X
             *              VVVVVVVVVVVVVVV   work
             */
            const result = await listener(args);
            return result;
        });
    return {
        channel,
        event,
    };
};

export default ipcMainHandle;
