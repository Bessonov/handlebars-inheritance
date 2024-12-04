import path, {
} from 'path'
import HtmlBundlerPlugin from 'html-bundler-webpack-plugin'

const usePluginEntry = false

export default {
	mode: 'development',
	//target: 'node20', // <= Bundler Plugin generate static HTML files, not JavaScript
	//entry: './src/index.mjs',
	output: {
		path: path.resolve('dist'),
		filename: 'index.mjs',
		clean: true,
	},
	experiments: {
		outputModule: true,
	},
	devtool: false,
	plugins: [
		new HtmlBundlerPlugin({
			// ...usePluginEntry ? {
			// 	entry: {
			// 		index: {
			//      // NOTE: Bundler Plugin render only template files with extensions associated with deined template engine,
			//      //       for handlebars: `*.html` and `*.hbs`, but not `*.m?js`
			// 			import: './src/index.mjs',
			// 		},
			// 	},
			// } : {},
			entry: {
				// compile imported template into template function
				'test-js': 'src/test-js.hbs',
				// render template into HTML
				'test-html': {
					import:  'src/test-html.hbs',
					data: {
						headerText: 'test header',
						outsideText: 'test outside',
						navText: 'test nav',
						layoutText: 'test layout',
					}
				},
			},
			preprocessor: 'handlebars',
			preprocessorOptions: {
				partials: [
					`./src/partials`,
				],
			},
		}),
	],

	// enable live reload
  devServer: {
    static: path.resolve('dist'),
    watchFiles: {
      paths: ['src/**/*.*'],
      options: {
        usePolling: true,
      },
    },
  },
}
