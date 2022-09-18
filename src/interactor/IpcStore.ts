import { createIpcStore, createIpcStoreObj } from './utils/createIpcStore';
import { mainHello } from './testEvents/hello';
import getFirstInput from './testEvents/InputEvent/getFirstInput';
import updateInput from './testEvents/InputEvent/updateInput';
import modifiedInput from './testEvents/InputEvent/modifiedInput';

const conf = [mainHello.event];

const confobj = {
    [mainHello.channel]: mainHello.event,
    [getFirstInput.channel]: getFirstInput.event,
    [updateInput.channel]: updateInput.event,
    [modifiedInput.channel]: modifiedInput.event,
};

// type asd= typeof mainHello.channel
export type PreloadName = keyof typeof confobj;

const IpcStore = createIpcStore(conf);
const IpcStoreObj = createIpcStoreObj(confobj);

export { IpcStore, IpcStoreObj };
