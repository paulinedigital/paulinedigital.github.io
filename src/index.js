import 'styles/main.critical.css';
import 'styles/main.global.css';

import { h, render } from 'preact';
import Prismic from 'prismic.io';

window.app = {};

System.import('Page').then(module => {
	Prismic.api('https://paulinedigital.prismic.io/api').then(api => {
		window.app.api = api;

		render(<module.default />, document.querySelector('.app'));
	}).catch(err => {
		console.log(err);
	});
});

if (process.env.NODE_ENV === 'production') {
	require('offline-plugin/runtime').install();
}
