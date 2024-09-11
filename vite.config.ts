import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import sassDts from 'vite-plugin-sass-dts';
import vike from 'vike/plugin';
import { resolve } from 'node:path';

const debug = true;

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		modules: {
			generateScopedName: debug ? '[name]_[local]_[hash:base64:5]' : '[hash:base64:5]'
		},
		preprocessorOptions: {
			scss: {
				importer(...args: string[]) {
					console.log(args);
					if (args[0] !== '@/styles') {
						return;
					}

					return {
						file: resolve(__dirname, 'src', 'assets', 'styles')
					}
				}
			}
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
			global: {
				generate: true,
				outputFilePath: resolve(__dirname, 'src', 'style.d.ts')
			},
			sourceDir: resolve(__dirname, 'src'),
			outputDir: resolve(__dirname, 'dist'),
		}),
		visualizer({
			sourcemap: debug,
		}),
		vike({ prerender: true }),
	],
});
