import React from 'react';
import {
	type PipeableStream,
	type RenderToPipeableStreamOptions,
	renderToPipeableStream,
} from 'react-dom/server';
import App from './App';

export function render(
	_url: string,
	_ssrManifest?: string,
	options?: RenderToPipeableStreamOptions,
): PipeableStream {
	return renderToPipeableStream(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		options,
	);
}
