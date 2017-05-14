import { h, Component } from 'preact';
import style from './style.css';

export default class LinkListPartial extends Component {
	render(props, state) {
		return (
			<ul className={ style.list + ' ' + style.grid }>
				<li className={ style.listItem }>
					<a href="" className={ style.listLink }>Email</a>
				</li>
				<li className={ style.listItem }>
					<a href="" className={ style.listLink }>Twitter</a>
				</li>
				<li className={ style.listItem }>
					<a href="" className={ style.listLink }>Instagram</a>
				</li>
				<li className={ style.listItem }>
					<a href="" className={ style.listLink }>Dribble</a>
				</li>
				<li className={ style.listItem }>
					<a href="" className={ style.listLink }>Behance</a>
				</li>
				<li className={ style.listItem }>
					<a href="" className={ style.listLink }>Society6</a>
				</li>
			</ul>
		);
	}
}
