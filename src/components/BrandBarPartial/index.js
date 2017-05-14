import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.css';

export default class BrandBarPartial extends Component {
	render() {
		return (
			<div className={style.brand}>
				<Link activeClassName={style.active} className={style.link} href="/">
					<svg className={style.mark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200">
					<title>pauline.digital</title>
					<path fill="currentColor" d="M644 912s0-.1 0 0c85.8-103.8 137.3-236.9 137.3-382s-51.5-278.1-137.2-381.9c-13.8-16.7-28.5-32.7-44.1-47.8-15.5 15.1-30.2 31.1-44.1 47.8C470.2 251.9 418.7 384.9 418.7 530s51.5 278.1 137.2 381.9l.1.1-202 202 109-11.5 137-137 110.9 110.9 88.2-9.3L644 912zM483.7 530c0-125.9 43.5-241.6 116.3-333 55.1 69.2 93.4 152.4 108.8 243.3L484.1 549.9c-.2-6.6-.4-13.2-.4-19.9zm7.4 88.8l224.8-109.6c.3 6.9.4 13.9.4 20.8 0 125.9-43.5 241.6-116.3 333-55.3-69.4-93.7-152.9-108.9-244.2z"/>
					</svg>
				</Link>
			</div>
		);
	}
}
