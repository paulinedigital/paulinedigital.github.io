import { h, Component } from 'preact';
import style from './style.css';

export default class AboutSection extends Component {

	constructor() {
		super();

		this.state.heading = '';
	}

	componentDidMount() {
		window.app.api.getSingle('homepage').then(resp => {
			this.setState({
				heading: resp.fragments['homepage.headline'].asText()
			});
		});
	}

	render(props, state) {
		return (
			<section className={style.about} id="about">
				<div className={style.container}>
					<h1 className={style.title} dangerouslySetInnerHTML={{__html: state.heading}} />
				</div>
			</section>
		);
	}
}
