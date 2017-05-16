import { h, Component } from 'preact';
import style from './style.css';

export default class EggsPage extends Component {

	render(props) {
		return (
			<div className={ style.box }>
				<h1 className={ style.title }>Welcome to my wall of inspiration</h1>
			</div>
		);
	}

}
