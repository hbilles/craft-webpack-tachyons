const elixir = require('laravel-elixir')
elixir.config.publicPath = 'dist/public'
require('laravel-elixir-pug')

elixir(mix => {
	mix.copy('node_modules/tachyons/css/tachyons.min.css', 'dist/public/assets/css/tachyons.min.css')
		.copy('resources/rootfiles', 'dist/public')
		.copy('resources/assets/img', 'dist/public/assets/img')
		.sass('styles.scss', 'dist/public/assets/css')
		.webpack('app.js', 'dist/public/assets/js')
		.pug({
			blade: false,
			pretty: true,
			src: 'resources/assets/pug',
			dest: 'dist/craft/templates'
		})
		.browserSync({ proxy: 'craft-webpack-tachyons.dev' })
})
