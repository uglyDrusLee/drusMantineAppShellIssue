import {wrapPromise} from "./usePromise.js";

const getPromise = (store, key) => {
    if (!store[key]) {
        store[key] = wrapPromise(new Promise(resolve => {
            setTimeout(() => resolve('fromPromise'), 3000)
        }))
    }

    return store[key]
}

function AnotherComponent({ store }) {
    const data = getPromise(store, 'key')();

    return (
        <div>
            AnotherComponent: {data}
        </div>
    );
}

export default AnotherComponent;
