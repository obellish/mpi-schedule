import type { FC } from 'react';
import ReactDOMServer from 'react-dom/server';
import Layout from './Layout';
import { escapeInject, dangerouslySkipEscape } from 'vike/server';
import type { OnRenderHtmlAsync } from 'vike/types';
import getPageTitle from './getPageTitle';

export const onRenderHtml: OnRenderHtmlAsync = async (
    pageContext,
): ReturnType<OnRenderHtmlAsync> => {
    const Page = pageContext.Page as FC;
    if (!Page) throw new Error('My onRenderHtml() hook expects pageContext.Page to be defined');

    const pageHtml = ReactDOMServer.renderToString(
        <Layout pageContext={pageContext}>
            <Page />
        </Layout>,
    );

    const title = getPageTitle(pageContext);
    const desc =
        // @ts-expect-error data and config are both poorly typed
        pageContext.data?.description || pageContext.config.description || 'Demo of using Vike';

    const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

    return {
        documentHtml,
        pageContext: {},
    };
};
