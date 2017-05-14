import { h, Component } from 'preact';
import style from './style.css';

import FeedPartial from 'FeedPartial';
import ImagePartial from 'ImagePartial';
import LinkListPartial from 'LinkListPartial';

export default class AboutPage extends Component {

	constructor() {
		super();

		this.state.heading = '';
		this.state.body1 = '';
		this.state.body2 = '';
		this.state.body3 = '';
	}

	componentDidMount() {
		window.app.api.getSingle('about').then(resp => {
			this.setState({
				heading: resp.fragments['about.headline'].asText(),
				body1: resp.fragments['about.body-1'].asHtml(),
				body2: resp.fragments['about.body-2'].asHtml(),
				body3: resp.fragments['about.body-3'].asHtml(),
				image1: resp.fragments['about.image-1'].url,
				image2: resp.fragments['about.image-2'].url
			});
		});
	}

	render(props, state) {
		return (
			<div className={ style.box }>
				<h1 className={ style.title }>{ state.heading }</h1>
				<section className={ style.grid }>
					<div className={ style.gridItem + ' ' + style.gridText } dangerouslySetInnerHTML={{ __html: state.body1 }} />
					<ImagePartial className={ style.gridItem } src={ state.image1 } />

					<div className={ style.gridItem + ' ' + style.gridText } dangerouslySetInnerHTML={{ __html: state.body2 }} />
					<ImagePartial className={ style.gridItem } src={ state.image2 } />
				</section>

				<section className={ style.grid + ' ' + style.centered }>
					<div className={ style.gridItem } dangerouslySetInnerHTML={{ __html: state.body3 }} />
					<LinkListPartial />
				</section>

				<FeedPartial />
			</div>
		);
	}

}
