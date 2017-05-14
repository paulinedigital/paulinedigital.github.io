import { h, Component } from 'preact';
import style from './style.css';
import placeholder from 'images/general/placeholder.svg';

export default class ImagePartial extends Component {

	constructor() {
		super();

		this.state.showImage = false;
	}

	componentDidMount() {
		this.checkPosition();
	}

	componentWillUnmount() {
		cancelAnimationFrame(this.loop);
	}

	checkPosition() {
		this.loop = requestAnimationFrame(this.checkPosition.bind(this));

		if (this.elementInViewport(this.base)) {
			this.loadImage();
		}
	}

	elementInViewport(el) {
		let top, left, width, height;

		top = el.offsetTop;
		left = el.offsetLeft;
		width = el.offsetWidth;
		height = el.offsetHeight;

		while (el.offsetParent) {
			el = el.offsetParent;
			top += el.offsetTop;
			left += el.offsetLeft;
		}

		return (
			top < (window.pageYOffset + window.innerHeight) &&
			left < (window.pageXOffset + window.innerWidth) &&
			(top + height) > window.pageYOffset &&
			(left + width) > window.pageXOffset
		);
	}

	loadImage() {
		let img;

		if (this.props.src) {
			img = new Image();
			img.src = this.props.src;

			img.onload = () => {
				this.setState({
					showImage: true
				});
				cancelAnimationFrame(this.loop);
			};
			img.onerror = () => cancelAnimationFrame(this.loop);
		}
	}

	render(props, state) {
		let className = style.box +
			(state.showImage ? ' ' + style.boxIsVisible : '') +
			(props.className ? ' ' + props.className : '');

		return (
			<div className={ className }>
				<img className={ style.image }
					 src={ state.showImage ? props.src : placeholder }
					 alt={ props.alt || '' }
				/>
			</div>
		);
	}
}
