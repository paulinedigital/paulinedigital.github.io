import { h, Component } from 'preact';
import style from './style.css';

import Prismic from 'prismic.io';

import ImagePartial from 'ImagePartial';

class FeedItem extends Component {
	render(props) {
		return (
			<li className={ style.feedItem }>
				<ImagePartial src={ props.src } />
			</li>
		);
	}
}

export default class FeedPartial extends Component {

	constructor() {
		super();

		this.state.items = [];
		this.state.page = 1;
	}

	componentDidMount() {
		this.getData();
	}

	viewMore = (event) => {
		event.preventDefault();
		this.getData();
	}

	getData() {
		if (this.state.page) {
			window.app.api.query(
				Prismic.Predicates.at('document.type', 'image-feed'),
				{ pageSize: 6, page: this.state.page }
			).then(resp => {
				this.setState({
					items: [...this.state.items, ...resp.results.map(prop => {
						return <FeedItem
							src={ prop.fragments['image-feed.image'].url }
							alt={ prop.fragments['image-feed.headline'].asText() }
						/>;
					})],
					page: resp.next_page ? this.state.page += 1 : null
				});
			});
		}
	}

	render(props, state) {
		return (
			<section className={ style.grid }>
				<h3>My life in pictures</h3>
				<ul className={ style.grid + ' ' + style.feed }>
					{ state.items }
				</ul>
				{ state.page ? <p><a className={ style.viewMore } onClick={ this.viewMore } href="#">View More</a></p> : '' }
			</section>
		);
	}
}
