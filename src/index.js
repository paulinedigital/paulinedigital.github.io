import 'styles/main.critical.css';
import 'styles/main.global.css';

import { h, render } from 'preact';

System.import('API').then(module => {
	const SERVER = new module.default();

	SERVER.get((api) => {
		window.app = {};
		window.app.api = api;

		System.import('Page').then(module => {
			render(<module.default />, document.querySelector('.app'));
		});
	});
});

if (process.env.NODE_ENV === 'production') {
	require('offline-plugin/runtime').install();
}
