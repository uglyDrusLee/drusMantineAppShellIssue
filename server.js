import express, {raw} from 'express';
import path from "node:path";
import {createServer} from "vite";
import react from '@vitejs/plugin-react';
import {fileURLToPath} from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

const vite = await createServer({
    root: path.join(__dirname, 'frontend'),
    server: {
        middlewareMode: true,
    },
    appType: 'custom',
    plugins: [
        react(),
    ],
});

app.use(vite.middlewares);

app.get('/', async (req, res) => {
    res.write("<!DOCTYPE html><html>");
    const renderer = (await vite.ssrLoadModule(path.join(__dirname, '/frontend/server.jsx'))).default;



    const stream = renderer({
            onShellReady: () => {
                stream.pipe(res);
            },
            onError: (error) => {
                console.error(error);
                res.end('Error');
            },
            bootstrapModules: ['/client.jsx']
    })

});

app.listen(3000);
