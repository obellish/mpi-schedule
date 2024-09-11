import express from 'express';
import compression from 'compression';
import { renderPage } from 'vike/server';
import { root } from './root.js';

const isProduction = process.env.NODE_ENV === 'production';

const startServer = async (): Promise<void> => {
    const app = express();

    app.use(compression());

    if (isProduction) {
        const sirv = (await import('sirv')).default;
        app.use(sirv(`${root}/dist/client`));
    } else {
        const vite = await import('vite');
        const viteDevMiddleware = (
            await vite.createServer({
                root,
                server: { middlewareMode: true },
            })
        ).middlewares;
        app.use(viteDevMiddleware);
    }

    app.get('*', async (req, res) => {
        const pageContextInit = {
            urlOriginal: req.originalUrl,
            headersOriginal: req.headers,
        };

        const pageContext = await renderPage(pageContextInit);
        if (pageContext.errorWhileRendering) {

        }

        const { httpResponse } = pageContext;
        if (res.writeEarlyHints) res.writeEarlyHints({ link: httpResponse.earlyHints.map(e => e.earlyHintLink) });
        httpResponse.headers.forEach(([name, value]) => res.setHeader(name, value));
        res.status(httpResponse.statusCode);
        httpResponse.pipe(res);
    });

    const port = process.env.PORT || 5173;
    app.listen(port);
    console.log(`Server running at http://localhost:${port}`);
}

startServer();