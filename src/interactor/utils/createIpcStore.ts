type EventParameter = Array<() => void>;

const createIpcStore = (events: EventParameter) => {
    return () =>
        events.forEach((v) => {
            v();
        });
};
// type KeyofIpc<T extends object> = keyof typeof T
const createIpcStoreObj = <T extends Object>(events: T) => {
    // let k: keyof typeof events
    return () => {
        for (const [_, q] of Object.entries(events)) {
            q();
        }
    };
};
export { createIpcStore, createIpcStoreObj };
