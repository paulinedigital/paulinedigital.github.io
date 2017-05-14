import { h, Component } from 'preact';
import TweenMax from 'TweenMax';

import style from './style.css';

export default class ScenePartial extends Component {
	render() {
		let active = true;

		return <canvas className={`${style['hero']} hero active-hero`} />;
	}

	shouldComponentUpdate() {
		return false;
	}

	componentWillMount() {

	}

	componentWillUnmount() {
		cancelAnimationFrame(this.animationLoop);

		removeEventListener('resize', this.onResize, false);
	}

	componentDidMount() {
		this.setup();
		this.start();
	}

	updateCanvasMetrics() {
		this.base.width  = window.innerWidth;
		this.base.height = window.innerHeight;

		this.w = window.innerWidth;
		this.h = window.innerHeight;

		this.hmin = this.h - 50;
	}

	setup() {
		addEventListener('resize', this.onResize, false);

		this.canvas  = this.base;
		this.context = this.canvas.getContext('2d');

		this.updateCanvasMetrics();

		this.shapes = [
			{
				colour: 'rgba(255, 0, 109, 0.2)',
				offset: () => {
					return this.h * 0.05;
				},
				speed: Math.PI / 5,
				frequency: 0
			},
			{
				colour: 'rgba(255, 0, 109, 0.4)',
				offset: () => {
					return this.h * 0.05;
				},
				speed: Math.PI / 5,
				frequency: 0
			},
			{
				colour: 'rgba(255, 0, 109, 0.6)',
				offset: () => {
					return this.h * 0.05;
				},
				speed: Math.PI / 5,
				frequency: 0
			},
			{
				colour: 'rgba(255, 0, 109, 1)',
				offset: () => {
					return this.h * 0.05;
				},
				speed: Math.PI / 5,
				frequency: 0
			}
		];
	}

	start() {
		this.animationLoop = requestAnimationFrame(this.start.bind(this));

		if (this.isResizing) {
			this.isResizing = false;
			this.updateCanvasMetrics();
		}

		// clear canvas
		this.context.clearRect(0, 0, this.w, this.h);
		// draw shapes
		this.drawShapes();
	}

	onResize = e => {
		this.isResizing = true;
	}

	drawShapes() {
		this.shapes.forEach((shape, index) => {
			let x = shape.frequency * Math.PI;
			let m = (index + 1) * shape.offset();
			let h = this.hmin - m;

			// console.log((this.h / this.w));

			this.context.beginPath();

			// bottom left corner X, Y
			this.context.lineTo(0, h);

			// this.context.bezierCurveTo(
			// 	this.w * 0.25,
			// 	h - x,
			//
			// 	this.w * 0.75,
			// 	h + x,
			//
			// 	this.w, // bottom right corner X
			// 	h // bottom right corner Y
			// );

			this.context.bezierCurveTo(
				this.w * 0.15,
				h - (x / 2),

				this.w * 0.3,
				h + (x / 1.3),

				this.w / 2, // bottom right corner X
				h // bottom right corner Y
			);

			this.context.bezierCurveTo(
				this.w * 0.7,
				h - x,

				this.w * 0.85,
				h + (x / 2),

				this.w, // bottom right corner X
				h // bottom right corner Y
			);

			// top right corner X, Y
			this.context.lineTo(this.w, 0);
			// top left corner X, Y
			this.context.lineTo(0, 0);

			// set path colour
			this.context.fillStyle = shape.colour;

			this.context.closePath();
			this.context.fill();

			if (m < Math.round(Math.abs(shape.frequency))) {
				shape.speed = -shape.speed;
				shape.frequency -= shape.speed;
			}

			// update frequency
			shape.frequency -= shape.speed;
		});
	}

	distanceTo(pointA, pointB) {
		let dx = Math.abs(pointA.x - pointB.x);
		let dy = Math.abs(pointA.y - pointB.y);

		return Math.sqrt(dx * dx + dy * dy);
	}

	getRandomNumber(min, max) {
		return Math.random() * (max - min) + min;
	}

}
