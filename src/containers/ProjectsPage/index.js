import { h, Component } from 'preact';
import style from './style.css';

export default class ProjectsPage extends Component {

	render(props) {
		return (
			<div className={ style.box }>
				<h1 className={ style.title }>Projects</h1>
			</div>
		);
	}

}
