import { v4 } from "uuid";
import passRealm from "src/data/passInputRlm";

const createDataPass = async () => {
    const rlm = await passRealm();
    console.log('Create Data Pass get First');
    if (rlm.getItem() === undefined) {
        console.log('Write First Realm');
        rlm.passWrite({ id: v4(), input: 'First open App' });
    }
    console.log(JSON.parse(rlm.getItem()));
    rlm.close();
};

export default createDataPass

