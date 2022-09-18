import { Configuration, open, UpdateMode } from 'realm';
import { logBgGn, logElc } from 'src/useless/chalk';

const openRealm = async (conf: Configuration) => {
    const rlm = await open(conf);
    const rlmClose = () => rlm.close();
    const { stringify } = JSON;
    // const firstName = rlm.schema[0].name;

    // const collection = rlm.objects(firstName);
    // collection.addListener((cl, changes) => {
    //
    //     cl.addListener((collection, changes) => {
    // changes.deletions.forEach((v) => {
    //     logElc('Collection Delete Listener');
    // });
    // changes.insertions.forEach((v) => {
    //     logElc('Collection Insertion Listener');
    // });
    // changes.oldModifications.forEach((v) => {
    //
    //     logElc(`Collection oldModification Listener: ${JSON.stringify(cl[v])}`);
    // });
    //         changes.newModifications.forEach((v) => {
    //             logElc(`Collection newModifications Listener: ${JSON.stringify(cl[v].toJSON())}`);
    //         });
    //     });
    // });

    const write = <T>(type: string, properties: RealmInsertionModel<T>) => {
        let result;

        try {
            rlm.write(() => {
                result = rlm.create<T>(type, properties);
            });
        } catch (error) {
            console.log(error);
            throw new Error('Utils Realm Write Error');
        }

        console.log('== create ==');
        console.log(stringify(result));
        logBgGn('Ok');
        console.log('== end ==');
        return 'Ok';
    };

    const getCollection = (type: string) => {
        const collections = rlm.objects(type);
        return stringify(collections);
    };

    const getFirstItem = (type: string) => {
        const item = rlm.objects(type)[0];
        return stringify(item);
    };

    const deleteAll = () => {
        try {
            rlm.write(() => {
                rlm.deleteAll();
            });
        } catch (error) {
            console.error(error);
        }
        console.log('Delete All');
    };

    const update = <T extends Record<string, any>>(
        type: string,
        args: Omit<T, 'id'>
    ) => {
        try {
            rlm.write(() => {
                const obj = rlm.objects<T>(type)[0];
                /**
                 * NOTE:
                 * literanl name 사용 해 봤어
                 */
                // a = { ...obj, ...args };
                console.log('Utils open realm');
                // @ts-ignore
                // obj[i] = 'literal name test'
                // const keys = Object.keys(args);
                for (const [k, _] of Object.entries(args)) {
                    /**
                     * NOTE:
                     * 22/09/14 Wed 19:04
                     * why????
                     */
                    // obj.qw
                    // @ts-ignore
                    obj[k] = args[k] as const;
                }
                // keys.forEach((v) => {
                //     obj[v] = args[v]
                // })
                logElc(JSON.stringify(obj));
                // console.log({ ...args });
                // console.log(a)
            });
        } catch (error) {
            console.log('Utils openRealm Update Error');
            console.error(error);
        }
    };

    const upsert = <T>(
        type: string,
        properties: Partial<RealmInsertionModel<T>>
        // mode: UpdateMode.Modified
    ) => {
        try {
            let alert: (T & Realm.Object) | undefined;

            rlm.write(() => {
                alert = rlm.create<T>(type, properties, UpdateMode.Modified);
            });

            console.log(' === Upsert === ');
            logElc(JSON.stringify(alert));
            console.log(' === Upsert === ');
        } catch (error) {
            console.log('Realm Upsert Error');
            console.log(error);
        }
    };

    return {
        write,
        getCollection,
        rlmClose,
        deleteAll,
        getFirstItem,
        update,
        upsert,
    };
};

export default openRealm;
