import ipcMainHandle from 'src/interactor/utils/mainHandle';
import passRealm from 'src/data/passInputRlm';

const modifiedInput = ipcMainHandle(
    'modifiedInput',
    async (args: { id: string; input: string }) => {
        const rlm = await passRealm();
        rlm.modified(args);
        setTimeout(() => {
            rlm.close();
        }, 1000);
    }
);

export default modifiedInput;
