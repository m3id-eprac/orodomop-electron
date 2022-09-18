import { appContent } from "src/config/appPaths";
import PassInput from "src/models/realm/schema/passInputSchema";
import openRealm from "src/models/realm/utils/openRealm";

const passConf = {
    schema: [PassInput.schema],
    path: `${appContent}/data/${PassInput.schema.name}`,
};

const passRealm = async () => {
    const passRlm = await openRealm(passConf);
    const passInput = PassInput.schema.name;
    const passWrite = (properties: RealmInsertionModel<PassInput>) =>
        passRlm.write<PassInput>(PassInput.schema.name, properties);

    const passGet = () => passRlm.getCollection(PassInput.schema.name);
    const getItem = () => passRlm.getFirstItem(PassInput.schema.name);
    const delteAll = () => passRlm.deleteAll();
    const close = () => passRlm.rlmClose();
    const update = (input: string) =>
        passRlm.update<PassInput>(PassInput.schema.name, { input });
    const modified = (input: { id: string; input: string }) =>{

        /**
         *                                   input      X
         *                                   {...input} O
         *                                     VVVVVVVVV  destructure
         */
        passRlm.upsert<PassInput>(passInput, { ...input });
    }

    return {
        passWrite,
        passGet,
        getItem,
        delteAll,
        close,
        update,
        modified,
    };
};

export default passRealm;
