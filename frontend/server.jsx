import { renderToPipeableStream } from 'react-dom/server';
import App from "./App";
import Html from "./Html.jsx";

// store added, so vite cannot cache resolved promise
export default function renderer (options, store) {
    return renderToPipeableStream(
        <Html>
            <App store={store} />
        </Html>,
        options,
    );
}
