import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.css';

export default class NavBarPartial extends Component {

	render(props, state) {
		return (
			<nav className={style.nav}>
				<ul className={style.list}>
					<li className={style.item}>
						<Link activeClassName='active' className={ style.link } href="/projects">
							Projects
						</Link>
					</li>
					<li className={style.item}>
						<Link activeClassName='active' className={ style.link } href="/about">
							About
						</Link>
					</li>
					<li className={style.item}>
						<Link activeClassName='active' className={ style.link } href="/eggs">
							Eggs
						</Link>
					</li>
				</ul>
			</nav>
		);
	}

}
