import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import sassDts from 'vite-plugin-sass-dts';
import vike from 'vike/plugin';

const debug = true;

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		modules: {
			generateScopedName: debug ? '[name]_[local]_[hash:base64:5]' : '[hash:base64:5]'
		}
	},
	clearScreen: false,
	build: {
		minify: !debug ? 'esbuild' : false,
		sourcemap: debug,
		manifest: true,
	},
	plugins: [
		react(),
		sassDts({
			enabledMode: ['development', 'production'],
		}),
		visualizer({
			sourcemap: debug,
		}),
		vike({ prerender: true }),
	],
});
