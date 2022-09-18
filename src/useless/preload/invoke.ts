import {  ipcRenderer } from "electron";

const {invoke,send} = ipcRenderer

// const send = ipcRenderer.send

export {
    invoke,
    send,
}





