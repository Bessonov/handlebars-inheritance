import path, {
} from 'path'
import HtmlBundlerPlugin from 'html-bundler-webpack-plugin'

const usePluginEntry = false

export default {
	mode: 'development',
	target: 'node20',
	...usePluginEntry ? {} : {
		entry: './src/index.mjs',
	},
	output: {
		path: path.resolve('dist'),
		filename: 'index.mjs',
	},
	experiments: {
		outputModule: true,
	},
	devtool: false,
	plugins: [
		new HtmlBundlerPlugin({
			...usePluginEntry ? {
				entry: {
					index: {
						import: './src/index.mjs',
					},
				},
			} : {},
			preprocessor: 'handlebars',
			preprocessorOptions: {
				partials: [
					`./src/partials`,
				],
			},
		}),
	],
}
