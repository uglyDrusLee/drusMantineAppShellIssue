import { hydrateRoot } from 'react-dom/client';
import App from "./App";

const rootEl = document.getElementById('root');
if (rootEl) {
    hydrateRoot(
        rootEl,
        // mock store
        <App store={{ key: () => 'fromPromise' }} />
    );
}

