import { h, Component } from 'preact';

import Router from 'preact-router';
import AsyncRoute from 'preact-async-route';

import TweenMax from 'TweenMax';
import ScrollMagic from 'ScrollMagic';

import style from './style.css';

import HeaderPartial from 'HeaderPartial';
import ScenePartial from 'ScenePartial';

export default class Page extends Component {

	shouldComponentUpdate() {
		return false;
	}

	componentDidMount() {
		this.hideLoader();
	}

	componentWillMount() {
		this.scrollController = new ScrollMagic.Controller();
	}

	componentWillUnmount() {
		this.scrollController.destroy(true);
	}

	hideLoader() {
		if (!this.loaderHidden) {
			document.querySelector('.is-loading').classList
				.add('is-loaded', 'is-animating');

			document.querySelector('.is-loading').classList
				.remove('is-loading');

			document.querySelector('.app').classList
				.add('mask');

			setTimeout(() => {
				document.querySelector('.is-loaded').classList
					.remove('is-animating');
				document.querySelector('.app').classList
					.remove('mask');
			}, 1000);

			this.loaderHidden = true;
		}
	}

	handleRoute = (e) => {

		let elm = document.querySelector('.hero');

		console.log('handleRoute');

		if (elm) {
			if (e.url === '/') {
				document.querySelector('header').style.zIndex = 1;
				elm.classList.remove('active-hero');
			} else {
				document.querySelector('header').style.zIndex = 3;
				elm.classList.add('active-hero');
			}
		}
	}

	render(props, state) {
		console.log('render Page');
		return (
			<div className={ style.page }>

				<HeaderPartial>
					<ScenePartial />
				</HeaderPartial>

				<main className={ style.container }>
					<Router onChange={this.handleRoute}>
						<AsyncRoute path='/'
							component={
								() => System.import('HomePage')
									.then(module => module.default)
							}
						/>
						<AsyncRoute path='/projects'
							component={
								() => System.import('ProjectsPage')
									.then(module => module.default)
							}
						/>
						<AsyncRoute path='/about'
							component={
								() => System.import('AboutPage')
									.then(module => module.default)
							}
						/>
						<AsyncRoute path='/eggs'
							component={
								() => System.import('EggsPage')
									.then(module => module.default)
							}
						/>
					</Router>
				</main>
			</div>
		);
	}

}
