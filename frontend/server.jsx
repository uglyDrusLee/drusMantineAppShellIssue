import { renderToPipeableStream } from 'react-dom/server';
import App from "./App";
import Html from "./Html.jsx";

export default function renderer (options) {
    return renderToPipeableStream(
        <Html>
            <App />
        </Html>,
        options,
    );
}
