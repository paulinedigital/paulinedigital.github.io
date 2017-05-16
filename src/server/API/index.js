import Prismic from 'prismic.io';

export default class API {

	constructor() {
		this.endpoint = 'https://paulinedigital.prismic.io/api';
	}

	get(cb) {
		Prismic.api(this.endpoint).then(api => {
			cb(api);
		}).catch(err => {
			cb(err);
		});
	}

}
