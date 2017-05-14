import { h, Component } from 'preact';
import style from './style.css';

import AboutSection from './sections/AboutSection';

export default class HomePage extends Component {
	render(props) {
		return (
			<div className={style.page}>
				<AboutSection />
			</div>
		);
	}

}
