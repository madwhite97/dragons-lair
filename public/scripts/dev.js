import { createServer as createViteServer } from 'vite';
import { startServer as startApiServer } from '../server/index.js';
import { vitePort } from '../vite.config.js';

async function startDevServer() {
    const apiPort = process.env.PORT ? parseInt (process.env.PORT, 10) : 3001;

    await startApiServer(apiPort);

    const vite = await createViteServer({
        configFile: 'vite.config.js',
        server: {
            port: vitePort,
        },
    });
    await vite.listen();

    vite.printUrls();
}

startDevServer().catch((err) => {
    console.error('Failed to start dev server:', err);
    process.exit(1);
});