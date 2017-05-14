import { h, Component } from 'preact';

import style from './style.css';

import BrandBarPartial from 'BrandBarPartial';
import NavBarPartial from 'NavBarPartial';

import Headroom from 'headroom.js';

export default class HeaderPartial extends Component {
	componentDidMount() {
		this.headrom = new Headroom(this.base, {
			tolerance: 5,
			classes : {
				initial : style.animated,
				pinned : style.slideDown,
				unpinned : style.slideUp
			}
		});
		this.headrom.init();
	}

	componentWillUnmount() {
		this.headrom.destroy();
	}

	render(props) {
		return (
			<header className={style.header}>
				<div className={style.container}>
					<BrandBarPartial />
					<NavBarPartial />
				</div>
				{ props.children }
			</header>
		);
	}
}
