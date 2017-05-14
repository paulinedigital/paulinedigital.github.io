import { h, Component } from 'preact';
import style from './style.css';

import Prismic from 'prismic.io';

export default class WorkSection extends Component {
	constructor() {
		super();

		this.state.projects = [];
	}

	componentDidMount() {
		// this.props.api.query(Prismic.Predicates.at('document.type', 'projects')).then(resp => {
		// 	console.log(resp.results);
		//
		// 	this.setState({
		// 		projects: resp.results
		// 	});
		// });

		if (this.scrollController) {
			this.setupAnimation();
		}
	}

	componentWillMount() {
		this.scrollController = new ScrollMagic.Controller();
	}

	componentWillUnmount() {
		this.scrollController.destroy(true);
	}

	handleExternal = e => {
		e.preventDefault();

		let a = e.currentTarget;

		if (((window.location.hostname !== a.hostname) &&
			a.href.indexOf('http') > -1)) {

			a.blur();
			window.open(a.href);
		}
	}

	buildList() {
		let data = [];

		let sup = [
			<svg className={style.bg} x="0px" y="0px" viewBox="0 0 1240 720" style="enable-background:new 0 0 1240 720;" xmlSpace="preserve">
				<polygon className={style.poly} points="39,465.8 13.5,465.8 26.5,440.3 "/>
				<polygon className={style.poly} points="128,397.3 106,375.3 139.2,364.5 "/>
				<polygon className={style.poly} points="339,418.1 323.1,434 315.4,410 "/>
				<polygon className={style.poly} points="250.9,95 219.8,95 235.7,63.9 "/>
				<polygon className={style.poly} points="412.5,196.6 433.2,217.3 402,227.5 "/>
				<polygon className={style.poly} points="110.8,122.2 95,138.1 87.2,114.1 "/>
				<polygon className={style.poly} points="512.5,492.6 533.2,513.3 502,523.5 "/>
				<polygon className={style.poly} points="483.1,680.8 454.4,680.8 469,652 "/>
				<polygon className={style.poly} points="825.4,510.8 809.2,494.5 833.7,486.6 "/>
				<polygon className={style.poly} points="1227,483.8 1201.5,483.8 1214.5,458.3 "/>
				<polygon className={style.poly} points="409,504.2 393.1,520 385.4,496.1 "/>
				<polygon className={style.poly} points="692.7,447.5 670.3,470 659.3,436.1 "/>
				<polygon className={style.poly} points="49.5,607.6 70.2,628.3 39,638.5 "/>
				<polygon className={style.poly} points="1206.3,39.2 1227,59.8 1195.8,70 "/>
				<polygon className={style.poly} points="730,265.1 714.1,281 706.3,257 "/>
			</svg>,

			<svg className={style.bg} x="0px" y="0px" viewBox="0 0 1240 720" style="enable-background:new 0 0 1240 720;" xmlSpace="preserve">
				<rect className={style.poly} x="82" y="114.1" transform="matrix(0.7071 0.7071 -0.7071 0.7071 116.7206 -29.5147)" width="24" height="24"/>
				<rect className={style.poly} x="224" y="68" transform="matrix(0.9841 -0.1776 0.1776 0.9841 -10.6997 43.4864)" width="27" height="27"/>
				<rect className={style.poly} x="110.8" y="364.5" transform="matrix(0.9431 -0.3325 0.3325 0.9431 -118.8187 63.1231)" width="28.4" height="28.4"/>
				<rect className={style.poly} x="13.5" y="440.3" transform="matrix(0.9574 0.2888 -0.2888 0.9574 131.9663 11.7266)" width="25.5" height="25.5"/>
				<rect className={style.poly} x="32" y="607.6" transform="matrix(0.969 -0.2472 0.2472 0.969 -152.6055 31.1143)" width="31.2" height="31.2"/>
				<rect className={style.poly} x="310" y="410" transform="matrix(0.866 0.5 -0.5 0.866 254.5077 -104.6607)" width="25.1" height="25.1"/>
				<rect className={style.poly} x="402" y="196.6" transform="matrix(0.9834 0.1816 -0.1816 0.9834 44.7035 -71.6484)" width="23.3" height="23.3"/>
				<rect className={style.poly} x="502" y="496.1" transform="matrix(0.969 -0.2472 0.2472 0.969 -109.6505 142.826)" width="23.9" height="23.9"/>
				<rect className={style.poly} x="385.4" y="496.1" transform="matrix(0.9574 0.2888 -0.2888 0.9574 163.1593 -92.725)" width="20.8" height="20.8"/>
				<rect className={style.poly} x="454.4" y="656" transform="matrix(0.8961 0.4438 -0.4438 0.8961 346.2124 -138.4014)" width="28.8" height="28.8"/>
				<rect className={style.poly} x="659.3" y="436.1" transform="matrix(0.9135 -0.4068 0.4068 0.9135 -124.4229 312.1082)" width="25.3" height="25.3"/>
				<rect className={style.poly} x="706.3" y="257" transform="matrix(0.9431 -0.3325 0.3325 0.9431 -47.4615 252.6034)" width="15.9" height="15.9"/>
				<rect className={style.poly} x="809.2" y="486.6" transform="matrix(0.9969 7.844225e-02 -7.844225e-02 0.9969 41.6484 -62.8853)" width="24.2" height="24.2"/>
				<rect className={style.poly} x="1211.4" y="461.4" transform="matrix(0.9699 -0.2437 0.2437 0.9699 -78.299 312.1252)" width="22.4" height="22.4"/>
				<rect className={style.poly} x="1195.8" y="45" transform="matrix(0.9323 0.3617 -0.3617 0.9323 102.585 -433.1144)" width="25" height="25"/>
			</svg>,
			<svg className={style.bg} x="0px" y="0px" viewBox="0 0 1240 720" style="enable-background:new 0 0 1240 720;" xmlSpace="preserve">
				<path className={style.poly} d="M677.5 433.8c-.4-.1-.7.1-.8.5 0 .1-.1.1-.1.2v.1c-.1.1-.1.3-.2.4-.3.6-.6 1.2-1 1.7l-.1.1c0 .1-.1.1-.1.2-.1.1-.2.3-.3.4-.2.3-.5.5-.7.7l-.2.2-.2.1c-.1.1-.2.2-.3.2-.2.1-.5.3-.7.4.2-.1.4-.3.6-.5 1.5-1.5 1.6-3.7 1.6-4v-.8c0-.4-.3-.8-.8-.8h-.8c-.2 0-2 .1-3.5 1.2 0-.2 0-.4.1-.5.1-1.2 0-2.5-.1-3.7 0-.3-.3-.6-.6-.6s-.7.3-.6.6c.1 1.2.2 2.4.1 3.6v.8c-.1.3-.1.6-.2.9 0 .2-.1.3-.1.5-.5-1-1.1-1.6-1.2-1.7l-.5-.6c-.3-.3-.8-.3-1.1 0-.3.3-.5.6-.5.6-.2.2-1.4 1.5-1.6 3.3l-.4-.4c-.2-.2-.7-.2-1 .1-.3.3-.5.6-.5.6-.2.2-1.4 1.5-1.6 3.4l-.4-.4c-.2-.2-.7-.2-1 .1-.3.3-.5.6-.5.6-.2.2-1.7 1.8-1.7 3.9 0 2.1 1.5 3.8 1.7 3.9l.1.1-3.4 3.4c-.4.4-.4.9-.2 1.2.3.3.8.2 1.2-.2l3.4-3.4c.2.2 1.8 1.7 3.9 1.7 2.1 0 3.8-1.5 3.9-1.7l.6-.5c.3-.3.4-.7.1-1l-.4-.4c1.8-.2 3.2-1.5 3.3-1.6l.6-.5c.3-.3.4-.7.1-1l-.4-.4c1.8-.2 3.2-1.5 3.3-1.6l.6-.5c.3-.3.3-.8 0-1.1-.3-.3-.6-.5-.6-.5-.1-.1-.4-.3-.8-.6 1.1-.4 2-1.2 2.8-2.1.9-1 1.6-2.2 2.1-3.5-.4-.7-.6-1-.9-1.1zm-7.1 1.8c1.1-1.1 2.9-1.1 2.9-1.1s0 1.8-1.1 2.9-2.9 1.1-2.9 1.1 0-1.8 1.1-2.9zm-4.5-.6s1.3 1.3 1.3 2.9-1.3 2.9-1.3 2.9-1.3-1.3-1.3-2.9 1.3-2.9 1.3-2.9zm-3.6 3.6s1.3 1.3 1.3 2.9-1.3 2.9-1.3 2.9-1.3-1.3-1.3-2.9c.1-1.6 1.3-2.9 1.3-2.9zm-3.5 9.3s-1.3-1.3-1.3-2.9c0-1.6 1.3-2.9 1.3-2.9s1.3 1.3 1.3 2.9c-.1 1.6-1.3 2.9-1.3 2.9zm4 2.4c-1.5 0-2.7-1.1-2.9-1.2l.3-.3c.5-.4 1.4-1 2.6-1 1.6 0 2.9 1.3 2.9 1.3s-1.3 1.2-2.9 1.2zm3.6-3.6c-1.5 0-2.7-1.1-2.9-1.2l.3-.3c.5-.4 1.4-1 2.6-1 1.6 0 2.9 1.3 2.9 1.3s-1.4 1.2-2.9 1.2zm3.5-3.6c-1.5 0-2.7-1.1-2.9-1.2.3-.2 1.4-1.2 2.8-1.2 1.6 0 2.9 1.2 2.9 1.2s-1.2 1.2-2.8 1.2z"/><path className={style.poly} d="M731.7 288.4h-14.9c-.2 0-.5-.1-.6-.3-.1-.2-.2-.4-.2-.7 0-.1 1.5-6.7 1.5-15.1 0-4-1.4-8-2.8-12.3-1.5-4.5-3.1-9.2-3.1-14.3 0-9.6 3.2-16 3.4-16.3.1-.3.4-.4.7-.4h17.2c.3 0 .6.2.7.4.1.3 3.4 6.7 3.4 16.3 0 5-1.6 9.7-3.1 14.3-1.4 4.3-2.8 8.3-2.8 12.3 0 8.3 1.4 15 1.5 15.1.1.2 0 .5-.2.7-.3.1-.5.3-.7.3zm-14-1.6h13c-.1-.4-.2-.8-.2-1.4H718c-.1.5-.2 1-.3 1.4zm.5-3h12.1c-.4-2.8-.8-6.9-.8-11.5 0-4.3 1.4-8.4 2.9-12.8s3-9 3-13.8v-2h-22.1c0 .7-.1 1.3-.1 2 0 4.8 1.5 9.3 3 13.8 1.5 4.4 2.9 8.5 2.9 12.8-.1 4.6-.5 8.7-.9 11.5zm-4.8-41.6H735c.1-.8-.1-1.6-.4-2.3-.5-1-1.5-1.7-2.3-1.7-.3 0-.7-.2-.7-.6-.3-1.1-1.4-1.9-2.6-1.9-1.4 0-2.5 1-2.6 2.4 0 .3-.2.5-.4.6-.2.1-.5.1-.7 0-.3-.1-.6-.2-.9-.2-.6 0-1.6.5-2.1 1.2-.2.2-.4.3-.7.3-.3 0-.5-.2-.6-.4-.8-1.3-2-2.1-3.3-2.1-2.3.1-4 2.1-4.3 4.7zm4.1-6.2c1.5 0 3 .7 4.1 2 .7-.6 1.7-1 2.6-1h.7c.6-1.7 2.1-2.9 4-2.9 1.7 0 3.2 1 3.9 2.5.6.1 1.2.4 1.7.7-.7-3.4-1.7-5.8-2.1-6.8h-16.2c-.4.9-1.4 3.4-2.1 6.9.8-.8 2.1-1.4 3.4-1.4zm7.5 36.9c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm-2.3-10.1c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm3.2-8.6c-.6 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .5 1 1s-.5 1-1 1zm-5.2-3.9c-.5 0-1-.4-1-1 0-.5.4-1 1-1s1 .4 1 1-.5 1-1 1zm9.3-1.6c-.6 0-1-.5-1-1s.5-1 1-1c.6 0 1 .5 1 1s-.5 1-1 1z"/><path className={style.poly} d="M1200.8 49.3c-.5.1-.8.5-.8 1v1c-.1.9-.2 1.8-.4 2.7 0 .1 0 .1-.1.2 0 .1-.1.2-.1.3-.1.2-.1.4-.2.6-.2.4-.3.9-.6 1.3-.1.1-.1.2-.2.3l-.1.2c-.1.2-.2.3-.3.5-.2.3-.5.6-.7.9.2-.3.4-.6.5-.9 1.2-2.7.1-5.5 0-5.9l-.4-1c-.2-.6-.8-.8-1.4-.6l-1 .4c-.3.1-2.6 1.1-3.9 3.3-.1-.2-.1-.5-.2-.7-.5-1.6-1.2-3.2-2.1-4.7-.2-.4-.7-.7-1.1-.5-.4.2-.7.7-.5 1.1.8 1.5 1.5 3 2 4.6.1.2.1.4.2.7v.1c0 .1 0 .2.1.3.1.4.2.8.2 1.2v.7c-1.1-1-2.2-1.5-2.4-1.6l-1-.4c-.5-.2-1.2 0-1.4.5l-.4 1c-.1.3-1 2.6-.4 5.1l-.8-.3c-.4-.2-1 .1-1.2.6l-.4 1c-.1.3-1 2.6-.4 5.1l-.8-.3c-.4-.2-.9.1-1.2.6l-.4 1c-.1.3-1.2 3.1-.1 5.9 1.1 2.7 3.9 4 4.2 4.2l.2.1-2.6 6c-.3.7-.1 1.4.4 1.6.5.2 1.1-.1 1.4-.8l2.6-6c.4.1 3.1 1.2 5.8.1 2.7-1.1 4-3.8 4.2-4.1l.4-1c.2-.5.1-1.1-.3-1.3-.4-.2-.8-.3-.8-.3 2.2-1.2 3.3-3.5 3.4-3.8l.4-1c.2-.5.1-1.1-.3-1.3-.4-.2-.8-.3-.8-.3 2.2-1.2 3.3-3.5 3.4-3.8l.4-1c.2-.5 0-1.2-.5-1.4l-1-.4c-.1-.1-.6-.2-1.3-.4 1.2-1.1 2-2.6 2.5-4.1.6-1.8.9-3.7.9-5.5.4-.6-.1-.9-.6-.8zm-8 5.9c.9-2 3.1-2.9 3.1-2.9s.9 2.3 0 4.3-3.1 2.9-3.1 2.9-.8-2.3 0-4.3zm-6 1.5s2.2 1 3 3c.8 2-.1 4.3-.1 4.3s-2.2-1-3-3c-.9-2.1.1-4.3.1-4.3zM1184 63s2.2 1 3 3-.1 4.3-.1 4.3-2.2-1-3-3c-.8-2 .1-4.3.1-4.3zm.2 13.7s-2.2-1-3-3c-.8-2 .1-4.3.1-4.3s2.2 1 3 3c.8 2.1-.1 4.3-.1 4.3zm6.3 1.1c-1.9.7-4 0-4.3-.1l.2-.5c.4-.7 1.3-2 2.8-2.6 2-.8 4.3.1 4.3.1s-1 2.3-3 3.1zm2.7-6.4c-1.9.7-4 0-4.3-.1l.2-.5c.4-.7 1.3-2 2.8-2.6 2-.8 4.3.1 4.3.1s-.9 2.3-3 3.1zm2.8-6.4c-1.9.7-4 0-4.3-.1v-.1c.2-.4 1.2-2.3 3-3 2-.8 4.3.1 4.3.1s-1 2.3-3 3.1z"/><path className={style.poly} d="M1192.8 504.7H1180c-.2 0-.4-.1-.5-.3s-.2-.4-.1-.6c0-.1 1.3-5.8 1.3-12.9 0-3.4-1.2-6.9-2.4-10.6-1.3-3.9-2.7-7.9-2.7-12.2 0-8.2 2.8-13.7 2.9-14 .1-.2.3-.4.6-.4h14.8c.3 0 .5.1.6.4.1.2 2.9 5.7 2.9 14 0 4.3-1.4 8.3-2.7 12.2-1.2 3.7-2.4 7.1-2.4 10.6 0 7.2 1.2 12.9 1.3 12.9 0 .2 0 .4-.1.6-.3.2-.5.3-.7.3zm-12-1.3h11.2c-.1-.3-.1-.7-.2-1.2H1181c0 .5-.1.9-.2 1.2zm.5-2.6h10.4c-.3-2.4-.7-5.9-.7-9.9 0-3.7 1.2-7.2 2.5-11s2.6-7.7 2.6-11.8v-1.7h-19v1.7c0 4.1 1.3 8 2.6 11.8 1.3 3.8 2.5 7.3 2.5 11-.2 4-.6 7.5-.9 9.9zm-4.2-35.7h18.6c.1-.7-.1-1.4-.4-2-.5-.9-1.3-1.4-2-1.4-.3 0-.6-.2-.6-.5-.3-1-1.2-1.6-2.2-1.6-1.2 0-2.2.9-2.3 2.1 0 .2-.1.4-.3.5s-.4.1-.6 0c-.2-.1-.5-.1-.8-.1-.5 0-1.4.5-1.8 1-.1.2-.3.3-.6.3-.2 0-.4-.1-.5-.3-.7-1.1-1.7-1.8-2.9-1.8-1.8-.1-3.3 1.6-3.6 3.8zm3.6-5.3c1.3 0 2.6.6 3.5 1.8.6-.5 1.4-.9 2.2-.9h.6c.5-1.5 1.8-2.5 3.5-2.5 1.4 0 2.7.9 3.3 2.2.5.1 1 .3 1.5.6-.6-3-1.5-5-1.8-5.8h-13.9c-.4.8-1.2 2.9-1.8 5.9.7-.8 1.7-1.3 2.9-1.3zm6.4 31.7c-.4 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.4.8-.8.8zm-2-8.7c-.4 0-.7-.3-.7-.7s.3-.7.7-.7c.4 0 .7.3.7.7s-.2.7-.7.7zm2.7-7.3c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm-4.4-3.4c-.5 0-.8-.4-.8-.8s.4-.8.8-.8c.5 0 .8.4.8.8s-.3.8-.8.8zm8-1.4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"/><path className={style.poly} d="M187.4 403.5h-14.9c-.2 0-.5-.1-.6-.3-.1-.2-.2-.4-.2-.7 0-.1 1.5-6.7 1.5-15.1 0-4-1.4-8-2.8-12.3-1.5-4.5-3.1-9.2-3.1-14.3 0-9.6 3.2-16 3.4-16.3.1-.3.4-.4.7-.4h17.2c.3 0 .6.2.7.4.1.3 3.4 6.7 3.4 16.3 0 5-1.6 9.7-3.1 14.3-1.4 4.3-2.8 8.3-2.8 12.3 0 8.3 1.4 15 1.5 15.1.1.2 0 .5-.2.7-.3.1-.5.3-.7.3zm-14-1.6h13c-.1-.4-.2-.8-.2-1.4h-12.5c-.1.5-.2 1-.3 1.4zm.5-3H186c-.4-2.8-.8-6.9-.8-11.5 0-4.3 1.4-8.4 2.9-12.8s3-9 3-13.8v-2H169c0 .7-.1 1.3-.1 2 0 4.8 1.5 9.3 3 13.8 1.5 4.4 2.9 8.5 2.9 12.8-.1 4.6-.5 8.7-.9 11.5zm-4.8-41.6h21.6c.1-.8-.1-1.6-.4-2.3-.5-1-1.5-1.7-2.3-1.7-.3 0-.7-.2-.7-.6-.3-1.1-1.4-1.9-2.6-1.9-1.4 0-2.5 1-2.6 2.4 0 .3-.2.5-.4.6s-.5.1-.7 0c-.3-.1-.6-.2-.9-.2-.6 0-1.6.5-2.1 1.2-.2.2-.4.3-.7.3-.3 0-.5-.2-.6-.4-.8-1.3-2-2.1-3.3-2.1-2.3.1-4 2.1-4.3 4.7zm4.1-6.2c1.5 0 3 .7 4.1 2 .7-.6 1.7-1 2.6-1h.7c.6-1.7 2.1-2.9 4-2.9 1.7 0 3.2 1 3.9 2.5.6.1 1.2.4 1.7.7-.7-3.4-1.7-5.8-2.1-6.8h-16.2c-.4.9-1.4 3.4-2.1 6.9.9-.8 2.1-1.4 3.4-1.4zm7.5 36.9c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm-2.3-10.1c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm3.2-8.5c-.6 0-1-.5-1-1s.5-1 1-1c.6 0 1 .5 1 1s-.5 1-1 1zm-5.2-4c-.5 0-1-.4-1-1 0-.5.4-1 1-1s1 .4 1 1-.5 1-1 1zm9.3-1.6c-.6 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1z"/><path className={style.poly} d="M266.7 99.4c.2-.3 0-.7-.3-.9-.1 0-.1-.1-.2-.1 0 0-.1 0-.1-.1-.1-.1-.2-.2-.3-.2-.5-.4-1-.8-1.5-1.3l-.1-.1c0-.1-.1-.1-.1-.2-.1-.1-.2-.3-.3-.4l-.6-.9c0-.1-.1-.2-.1-.2l-.1-.2c-.1-.1-.1-.2-.2-.4-.1-.3-.2-.5-.2-.8.1.2.2.5.4.7 1.2 1.8 3.3 2.3 3.6 2.3l.8.2c.4.1.8-.2.9-.6.1-.4.1-.8.1-.8 0-.2.3-2-.5-3.6.2.1.3.1.5.2 1.2.3 2.4.5 3.7.6.3 0 .7-.1.7-.5.1-.3-.2-.7-.5-.7-1.2-.1-2.4-.2-3.6-.6-.2 0-.3-.1-.5-.1h-.1c-.1 0-.1 0-.2-.1-.3-.1-.5-.2-.8-.4-.1-.1-.3-.2-.4-.2 1-.3 1.8-.7 1.9-.8l.7-.4c.4-.2.5-.7.2-1.1-.2-.4-.4-.6-.4-.6-.1-.2-1.2-1.7-3-2.2l.5-.3c.3-.2.3-.6.1-1-.2-.4-.4-.6-.4-.6-.1-.2-1.2-1.7-3-2.2l.5-.3c.3-.2.3-.6.1-1-.2-.4-.4-.6-.4-.6-.1-.2-1.4-2-3.5-2.4-2.1-.4-4 .8-4.2.9l-.1.1-2.7-4c-.3-.4-.8-.6-1.1-.4-.3.2-.4.8-.1 1.2l2.7 4c-.2.2-2 1.4-2.4 3.5-.4 2.1.8 4 .9 4.2l.4.7c.2.4.7.5.9.3.3-.2.5-.4.5-.4-.1 1.9.8 3.4 1 3.6l.4.7c.2.4.7.5.9.3.3-.2.5-.4.5-.4-.1 1.9.8 3.4 1 3.6l.4.7c.2.4.7.5 1.1.2s.6-.4.6-.4c.1-.1.4-.3.8-.7.2 1.1.8 2.2 1.5 3.1.8 1.1 1.9 2 3.1 2.7.1-.1.5-.3.6-.6zm-.4-7.3c.9 1.3.6 3.1.6 3.1s-1.8-.4-2.6-1.7c-.9-1.3-.6-3.1-.6-3.1s1.7.4 2.6 1.7zm1.4-4.3s-1.5 1-3.1.7c-1.6-.3-2.6-1.8-2.6-1.8s1.5-1 3.1-.7 2.6 1.8 2.6 1.8zm-2.8-4.2s-1.5 1-3.1.7c-1.6-.3-2.6-1.8-2.6-1.8s1.5-1 3.1-.7c1.6.4 2.6 1.8 2.6 1.8zm-8.5-5.3s1.5-1 3.1-.7c1.6.3 2.6 1.8 2.6 1.8s-1.5 1-3.1.7c-1.5-.3-2.6-1.8-2.6-1.8zm-3.1 3.5c.3-1.4 1.6-2.4 1.8-2.6l.2.3c.3.5.7 1.6.5 2.7-.3 1.6-1.8 2.6-1.8 2.6s-1-1.4-.7-3zm2.9 4.2c.3-1.4 1.6-2.4 1.8-2.6l.2.3c.3.5.7 1.6.5 2.7-.3 1.6-1.8 2.6-1.8 2.6s-1-1.4-.7-3zm2.8 4.2c.3-1.4 1.6-2.4 1.8-2.6.2.3.9 1.6.6 3-.3 1.6-1.8 2.6-1.8 2.6s-.9-1.4-.6-3z"/><path className={style.poly} d="M54 441.3c-.4.1-.5.4-.4.8V442.8c.1.7.1 1.3 0 2v.4c0 .2-.1.3-.1.5-.1.3-.2.7-.3 1 0 .1-.1.2-.1.3l-.1.2c-.1.1-.1.2-.2.4s-.3.5-.4.7c.1-.2.2-.5.3-.7.5-2.1-.5-4-.7-4.2l-.4-.7c-.2-.4-.7-.5-1.1-.3-.4.2-.7.4-.7.4-.2.1-1.7 1.1-2.4 2.8-.1-.2-.1-.3-.2-.5-.5-1.1-1.3-2.2-2-3.1-.2-.3-.5-.4-.9-.2-.3.2-.4.6-.2.9.7 1 1.4 2 2 3 .1.2.1.3.2.5v.1c0 .1 0 .1.1.2.1.3.2.6.3.8 0 .2.1.3.1.5-.9-.6-1.7-.9-1.9-.9l-.8-.2c-.4-.1-.8.1-.9.6l-.2.8c-.1.2-.4 2 .3 3.7l-.6-.2c-.3-.1-.7.2-.8.6l-.2.8c-.1.2-.4 2 .3 3.7l-.6-.2c-.3-.1-.7.2-.8.6l-.2.8c-.1.2-.5 2.4.6 4.2 1.1 1.8 3.2 2.5 3.5 2.5h.2l-1.2 4.6c-.1.5.1 1 .5 1.1.4.1.8-.2.9-.7l1.2-4.6c.3.1 2.4.5 4.2-.6 1.8-1.1 2.5-3.2 2.5-3.4l.2-.8c.1-.4-.1-.8-.4-.9-.3-.1-.6-.1-.6-.1 1.5-1.1 2-2.9 2-3.1l.2-.8c.1-.4-.1-.8-.4-.9-.3-.1-.6-.1-.6-.1 1.5-1.1 2-2.9 2-3.1l.2-.8c.1-.4-.1-.8-.6-.9l-.8-.2c-.1 0-.5-.1-1-.1.7-.9 1.1-2.1 1.3-3.2.2-1.3.3-2.7 0-4.1.4-.5 0-.6-.3-.6zm-5.1 5.2c.4-1.5 1.9-2.5 1.9-2.5s.9 1.6.5 3.1-1.9 2.5-1.9 2.5-.9-1.6-.5-3.1zm-4.2 1.8s1.7.5 2.5 1.8c.8 1.4.4 3.1.4 3.1s-1.7-.5-2.5-1.8c-.8-1.4-.4-3.1-.4-3.1zm-1.3 4.9s1.7.5 2.5 1.8c.8 1.4.4 3.1.4 3.1s-1.7-.5-2.5-1.8c-.8-1.4-.4-3.1-.4-3.1zm1.7 9.8s-1.7-.5-2.5-1.8c-.8-1.4-.4-3.1-.4-3.1s1.7.5 2.5 1.8c.8 1.4.4 3.1.4 3.1zm4.7 0c-1.3.7-2.9.4-3.1.4l.1-.4c.2-.5.7-1.6 1.7-2.2 1.4-.8 3.1-.4 3.1-.4s-.5 1.8-1.8 2.6zm1.2-4.9c-1.3.7-2.9.4-3.1.4l.1-.4c.2-.5.7-1.6 1.7-2.2 1.4-.8 3.1-.4 3.1-.4s-.4 1.8-1.8 2.6zm1.3-4.9c-1.3.7-2.9.4-3.1.4.1-.3.6-1.8 1.8-2.5 1.4-.8 3.1-.4 3.1-.4s-.5 1.7-1.8 2.5z"/><path className={style.poly} d="M823.9 480.3c-.5.3-.6.9-.4 1.4.1.1.1.2.2.3 0 0 0 .1.1.1.1.2.2.4.2.6.4 1 .6 2 .8 3.1v.7c0 .3 0 .5.1.8v2.5c0 .2-.1.4-.1.6-.1.4-.2.9-.4 1.3.1-.4.1-.8.1-1.2 0-3.4-2.4-6-2.7-6.3l-.9-.9c-.5-.5-1.3-.5-1.7 0l-.9.9c-.2.3-2.2 2.4-2.6 5.3-.2-.2-.4-.4-.5-.7-1.3-1.5-2.8-2.9-4.4-4.1-.4-.3-1-.4-1.4 0-.4.4-.4 1.1 0 1.4 1.5 1.2 3 2.5 4.3 4 .2.2.4.4.5.6l.1.1c.1.1.1.2.2.3.3.4.5.8.8 1.2.1.2.2.5.4.7-1.6-.6-3.1-.6-3.3-.6h-1.3c-.7 0-1.2.5-1.2 1.2v1.3c0 .4.1 3.3 1.9 5.7h-1c-.5 0-1 .5-1 1.2v1.2c0 .4.1 3.3 1.9 5.7h-1c-.5 0-1 .5-1 1.2v1.3c0 .4.1 3.9 2.6 6.4 2.4 2.4 6 2.6 6.4 2.6h.3v7.7c0 .8.5 1.5 1.2 1.5.6 0 1.2-.7 1.2-1.5v-7.7c.5 0 4-.1 6.4-2.6 2.4-2.4 2.6-6 2.6-6.4v-1.3c0-.7-.4-1.2-1-1.2h-1c1.8-2.4 1.9-5.3 1.9-5.7v-1.3c0-.7-.4-1.2-1-1.2h-1c1.8-2.4 1.9-5.3 1.9-5.7v-1.3c0-.7-.5-1.2-1.2-1.2h-1.3c-.2 0-.8 0-1.6.2.7-1.7.9-3.7.8-5.5-.2-2.2-.7-4.4-1.6-6.4-.2-.4-.9-.5-1.4-.3zm-5.9 10.1c0-2.6 2-4.6 2-4.6s2 2.1 2 4.6c0 2.6-2 4.6-2 4.6s-2-2.1-2-4.6zm-5.8 4.4s2.9 0 4.7 1.8c1.8 1.8 1.8 4.7 1.8 4.7s-2.9 0-4.7-1.8c-1.8-1.8-1.8-4.7-1.8-4.7zm0 8.2s2.9 0 4.7 1.8c1.8 1.8 1.8 4.7 1.8 4.7s-2.9 0-4.7-1.8c-1.8-1.8-1.8-4.7-1.8-4.7zm6.5 14.6s-2.9 0-4.7-1.8c-1.8-1.8-1.8-4.7-1.8-4.7s2.9 0 4.7 1.8c1.8 1.9 1.8 4.7 1.8 4.7zm7.3-1.8c-1.7 1.7-4.3 1.8-4.6 1.8v-.6c.1-.9.5-2.8 1.8-4.1 1.8-1.8 4.7-1.8 4.7-1.8s-.1 2.9-1.9 4.7zm0-8.1c-1.7 1.7-4.3 1.8-4.6 1.8v-.6c.1-.9.5-2.8 1.8-4.1 1.8-1.8 4.7-1.8 4.7-1.8s-.1 2.9-1.9 4.7zm0-8.2c-1.7 1.7-4.3 1.8-4.6 1.8v-.1c0-.6.2-3 1.8-4.6 1.8-1.8 4.7-1.9 4.7-1.9s-.1 3-1.9 4.8z"/><path className={style.poly} d="M404 507.4h-10.9c-.2 0-.3-.1-.4-.2-.1-.1-.1-.3-.1-.5 0 0 1.1-4.9 1.1-11 0-2.9-1-5.9-2-9-1.1-3.3-2.3-6.7-2.3-10.4 0-7 2.4-11.7 2.5-11.8.1-.2.3-.3.5-.3h12.5c.2 0 .4.1.5.3.1.2 2.5 4.9 2.5 11.8 0 3.7-1.2 7.1-2.3 10.4-1 3.1-2 6-2 9 0 6.1 1.1 10.9 1.1 11 0 .2 0 .3-.1.5-.3.1-.5.2-.6.2zm-10.2-1.2h9.5c-.1-.3-.1-.6-.2-1H394c-.1.4-.2.8-.2 1zm.3-2.1h8.8c-.3-2.1-.6-5-.6-8.4 0-3.1 1-6.1 2.1-9.3 1.1-3.2 2.2-6.6 2.2-10v-1.5h-16.1v1.5c0 3.5 1.1 6.8 2.2 10s2.1 6.2 2.1 9.3c-.1 3.3-.4 6.3-.7 8.4zm-3.5-30.4h15.7c.1-.6-.1-1.2-.3-1.7-.4-.7-1.1-1.2-1.7-1.2-.3 0-.5-.2-.5-.4-.2-.8-1-1.4-1.9-1.4-1 0-1.8.8-1.9 1.8 0 .2-.1.3-.3.4-.2.1-.4.1-.5 0-.2-.1-.4-.1-.7-.1-.5 0-1.2.4-1.5.8-.1.1-.3.2-.5.2s-.4-.1-.5-.3c-.6-1-1.5-1.5-2.4-1.5-1.5.1-2.8 1.5-3 3.4zm3-4.5c1.1 0 2.2.5 3 1.5.5-.4 1.2-.8 1.9-.8h.5c.4-1.2 1.6-2.1 2.9-2.1 1.2 0 2.3.7 2.8 1.8.4.1.9.3 1.2.5-.5-2.5-1.2-4.3-1.5-4.9h-11.8c-.3.7-1 2.5-1.6 5 .8-.6 1.7-1 2.6-1zm5.5 26.9c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7s.7.3.7.7c-.1.4-.4.7-.7.7zm-1.7-7.4c-.4 0-.6-.3-.6-.6 0-.4.3-.6.6-.6.4 0 .6.3.6.6.1.4-.2.6-.6.6zm2.3-6.2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.4 0 .7.3.7.7.1.4-.3.7-.7.7zm-3.8-2.8c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7s.7.3.7.7c0 .4-.3.7-.7.7zm6.8-1.2c-.4 0-.8-.3-.8-.8 0-.4.3-.8.8-.8s.8.3.8.8c0 .4-.4.8-.8.8z"/><path className={style.poly} d="M111 150c.8-3.2 1.3-6.3 1.4-9.4.3-.2.4-.5.4-.9v-1.2c0-.4-.2-.7-.4-.9-.1-1.4-.2-2.8-.4-4.1-.1-.7-.6-1.2-1.3-1.4l-19.6-5c-.7-.2-1.4.1-1.8.6-.8 1-1.6 2.2-2.3 3.4-.3.1-.7.3-.8.6l-.6 1.1c-.2.3-.2.7-.1 1-1.4 2.8-2.5 5.7-3.3 8.9-.8 3.2-1.3 6.3-1.4 9.4-.3.2-.4.5-.4.9v1.2c0 .4.2.7.4.9.1 1.4.2 2.8.4 4.1.1.7.6 1.2 1.3 1.4l19.6 5c.7.2 1.4-.1 1.8-.6.8-1 1.6-2.2 2.3-3.4.3-.1.7-.3.8-.6l.6-1.1c.2-.3.2-.7.1-1 1.4-2.8 2.5-5.8 3.3-8.9zm-15.2 12.7c.4-1.1.8-2.2 1.2-3.5l4.5 1.1c-.6 1.2-1.2 2.3-1.9 3.3l-3.8-.9zm-5.4-1.4c.2-1.1.4-2.4.6-3.6l5 1.3c-.4 1.2-.8 2.4-1.2 3.5l-4.4-1.2zm-4.9-1.2c-.1-1.2-.1-2.5-.1-3.8l4.5 1.1c-.2 1.3-.4 2.5-.6 3.6l-3.8-.9zm-4-6v-1.3l3.4.9 21.7 5.6-.6 1.1-24.5-6.3zm15.9-24.3c-.4 1.1-.8 2.2-1.2 3.5l-4.5-1.1c.6-1.2 1.2-2.3 1.9-3.3l3.8.9zm5.4 1.4c-.2 1.1-.4 2.4-.6 3.6l-5-1.3c.4-1.2.8-2.4 1.2-3.5l4.4 1.2zm4.9 1.2c.1 1.2.1 2.5.1 3.8l-4.5-1.1c.2-1.3.4-2.5.6-3.6l3.8.9zm4 6v1.3l-25.1-6.5.6-1.1 24.5 6.3zm-7.6 19.1c1.1-2.7 2.1-5.5 2.9-8.5.8-3 1.3-6 1.6-8.9l2.7.7c-.1 2.9-.6 5.9-1.4 8.9-.8 3-1.8 5.8-3.1 8.5l-2.7-.7zm-6-1.6c.9-2.7 1.7-5.6 2.5-8.6s1.4-5.9 2-8.8l4.9 1.3c-.3 2.9-.8 5.9-1.6 8.9s-1.7 5.9-2.9 8.5l-4.9-1.3zm-16.2-4.1c.1-2.9.6-5.9 1.4-8.9s1.8-5.8 3.1-8.5l2.7.7c-1.1 2.7-2.1 5.5-2.9 8.5-.8 3-1.3 6-1.6 8.9l-2.7-.7zm3.8.9c.3-2.9.8-5.9 1.6-8.9s1.7-5.9 2.9-8.5l4.9 1.3c-.9 2.7-1.7 5.6-2.5 8.6s-1.4 5.9-2 8.8l-4.9-1.3zm5.9 1.6c.6-2.8 1.2-5.8 2-8.8.8-3 1.6-5.9 2.5-8.6l5.4 1.4c-.6 2.8-1.2 5.8-2 8.8-.8 3-1.6 5.9-2.5 8.6l-5.4-1.4zm19.2-20.7c.2 1.1.3 2.3.4 3.5l-2.4-.6v-3.8l1.6.4c.2.1.4.3.4.5zm-20.6-5.3c.1-.2.4-.3.6-.2l1.6.4c-.6 1-1.3 2.1-1.8 3.3l-2.4-.6c.6-1 1.3-2 2-2.9zm-7.9 30.6c-.2-1.1-.3-2.3-.4-3.5l2.4.6v3.8l-1.6-.4c-.2-.1-.3-.3-.4-.5zm20.7 5.3c-.1.2-.4.3-.6.2l-1.6-.4c.6-1 1.3-2.1 1.8-3.3l2.4.6c-.6 1-1.3 2-2 2.9z"/><path className={style.poly} d="M421.2 224.9c-1.1-1.8-2.3-3.4-3.6-4.9 0-.2-.1-.4-.2-.6l-.6-.6c-.2-.2-.4-.2-.6-.2-.7-.6-1.3-1.2-2-1.7-.4-.3-.8-.3-1.2 0l-11.1 6.6c-.4.2-.6.7-.5 1.1.1.8.3 1.7.5 2.6-.1.2-.2.4-.1.6l.2.8c.1.2.2.4.4.5.6 1.9 1.5 3.7 2.5 5.5 1.1 1.8 2.3 3.4 3.6 4.9 0 .2.1.4.2.6l.6.6c.2.2.4.2.6.2.7.6 1.3 1.2 2 1.7.4.3.8.3 1.2 0l11.1-6.6c.4-.2.6-.7.5-1.1-.1-.8-.3-1.7-.5-2.6.1-.2.2-.4.1-.6l-.2-.8c-.1-.2-.2-.4-.4-.5-.6-1.8-1.5-3.7-2.5-5.5zm-1.1 12.7c-.3-.7-.6-1.4-1-2.1l2.5-1.5c.3.8.5 1.6.6 2.3l-2.1 1.3zm-3.1 1.8c-.4-.6-.9-1.2-1.4-1.9l2.8-1.7c.4.7.7 1.5 1 2.1l-2.4 1.5zm-2.8 1.6c-.6-.5-1.2-1.1-1.7-1.7l2.5-1.5c.5.7.9 1.3 1.4 1.9l-2.2 1.3zm-4.5-.9l-.6-.6 1.9-1.1 12.3-7.3.2.8-13.8 8.2zm-3.8-18.1c.3.7.6 1.4 1 2.1l-2.5 1.5c-.3-.8-.5-1.6-.6-2.3l2.1-1.3zm3-1.9c.4.6.9 1.2 1.4 1.9l-2.8 1.7c-.4-.7-.7-1.5-1-2.1l2.4-1.5zm2.8-1.6c.6.5 1.2 1.1 1.7 1.7l-2.5 1.5c-.5-.7-.9-1.3-1.4-1.9l2.2-1.3zm4.6.9l.6.6-14.3 8.4-.2-.8 13.9-8.2zm5.1 12c-.7-1.7-1.6-3.5-2.6-5.2-1-1.7-2.1-3.3-3.3-4.7l1.5-.9c1.3 1.4 2.4 2.9 3.4 4.6 1 1.7 1.8 3.5 2.4 5.2l-1.4 1zm-3.3 2c-.9-1.6-1.8-3.3-2.8-5-1-1.7-2-3.3-3-4.9l2.8-1.6c1.2 1.4 2.3 3 3.3 4.7 1 1.7 1.9 3.4 2.6 5.2l-2.9 1.6zm-9.3 5.5c-1.3-1.4-2.4-2.9-3.4-4.6s-1.8-3.5-2.4-5.2l1.5-.9c.7 1.7 1.6 3.5 2.6 5.2 1 1.7 2.1 3.3 3.3 4.7l-1.6.8zm2.2-1.3c-1.2-1.4-2.3-3-3.3-4.7-1-1.7-1.9-3.4-2.6-5.2l2.8-1.6c.9 1.6 1.8 3.3 2.8 5 1 1.7 2 3.3 3 4.9l-2.7 1.6zm3.4-2c-1-1.5-2-3.2-3-4.9-1-1.7-1.9-3.4-2.8-5l3.1-1.8c1 1.5 2 3.2 3 4.9 1 1.7 1.9 3.4 2.8 5l-3.1 1.8zm-.7-18c.6.4 1.2.9 1.8 1.4l-1.4.8c-.6-.6-1.1-1.2-1.7-1.7l.9-.5c.1-.1.3-.1.4 0zm-11.7 6.9c0-.2.1-.3.2-.4l.9-.5c.2.8.4 1.5.7 2.3l-1.4.8c-.2-.7-.3-1.4-.4-2.2zm10.2 17.4c-.6-.4-1.2-.9-1.8-1.4l1.4-.8c.6.6 1.1 1.2 1.7 1.7l-.9.5c-.1.1-.2.1-.4 0zM424 235c0 .2-.1.3-.2.4l-.9.5c-.2-.8-.4-1.5-.7-2.3l1.4-.8c.2.7.3 1.5.4 2.2z"/><path className={style.poly} d="M482.2 654.7c1.8-2.7 3.3-5.6 4.4-8.4.3-.1.6-.4.7-.7l.4-1.2c.1-.3.1-.7-.1-1 .4-1.4.7-2.7.9-4 .1-.7-.2-1.4-.8-1.7l-16.8-11.1c-.6-.4-1.3-.4-1.9 0-1.1.7-2.2 1.5-3.3 2.4-.3-.1-.7 0-1 .3l-.9.8c-.3.2-.4.6-.4.9-2.2 2.1-4.2 4.6-6 7.3-1.8 2.7-3.3 5.6-4.4 8.4-.3.1-.6.4-.7.7l-.4 1.2c-.1.3-.1.7.1 1-.4 1.4-.7 2.7-.9 4-.1.7.2 1.4.8 1.7l16.8 11.1c.6.4 1.3.4 1.9 0 1.1-.7 2.2-1.5 3.3-2.4.3.1.7 0 1-.3l.9-.8c.3-.2.4-.6.4-.9 2.1-2.1 4.2-4.6 6-7.3zm-18.6 7.1c.7-.9 1.5-1.8 2.3-2.9l3.8 2.5c-1 .9-1.9 1.8-2.8 2.5l-3.3-2.1zm-4.6-3.1c.5-1 1.1-2.1 1.7-3.2l4.3 2.8c-.8 1-1.6 2-2.3 2.9l-3.7-2.5zm-4.2-2.8c.3-1.2.7-2.4 1.2-3.6l3.8 2.5c-.6 1.1-1.2 2.2-1.7 3.2l-3.3-2.1zm-1.9-6.9s0-.1 0 0l.4-1.2 2.9 1.9L475 662l-.9.8-21.2-13.8zm23-17.8c-.7.9-1.5 1.8-2.3 2.9l-3.8-2.5c1-.9 1.9-1.8 2.8-2.5l3.3 2.1zm4.6 3c-.5 1-1.1 2.1-1.7 3.2l-4.3-2.8c.8-1 1.6-2 2.3-2.9l3.7 2.5zm4.2 2.8c-.3 1.2-.7 2.4-1.2 3.6l-3.8-2.5c.6-1.1 1.2-2.2 1.7-3.2l3.3 2.1zm1.9 7l-.4 1.2-21.6-14.3.9-.8 21.1 13.9zm-13.4 15.5c1.9-2.2 3.8-4.6 5.5-7.1 1.7-2.6 3.2-5.2 4.4-7.8l2.3 1.5c-1.1 2.7-2.5 5.4-4.2 8-1.7 2.6-3.6 4.9-5.7 7l-2.3-1.6zm-5.1-3.4c1.7-2.3 3.4-4.8 5.1-7.4s3.3-5.1 4.8-7.6l4.2 2.8c-1.2 2.6-2.7 5.3-4.4 7.8s-3.6 5-5.5 7.1l-4.2-2.7zm-14-9.2c1.1-2.7 2.5-5.4 4.2-8 1.7-2.6 3.6-4.9 5.7-7l2.3 1.5c-1.9 2.2-3.8 4.6-5.5 7.1-1.7 2.6-3.2 5.2-4.4 7.8l-2.3-1.4zm3.3 2.1c1.2-2.6 2.7-5.3 4.4-7.8 1.7-2.6 3.6-5 5.5-7.1l4.2 2.8c-1.7 2.3-3.4 4.8-5.1 7.4-1.7 2.6-3.3 5.1-4.8 7.6l-4.2-2.9zm5.1 3.4c1.5-2.5 3.1-5 4.8-7.6 1.7-2.6 3.4-5.1 5.1-7.4l4.7 3.1c-1.5 2.5-3.1 5-4.8 7.6s-3.4 5.1-5.1 7.4l-4.7-3.1zm24.9-13.2c-.2 1.1-.4 2.3-.8 3.4l-2.1-1.4c.5-1.2.9-2.4 1.2-3.6l1.4.9c.2.2.3.5.3.7zm-17.8-11.8c.2-.1.5-.1.7 0l1.4.9c-.9.8-1.9 1.6-2.8 2.5l-2.1-1.4c.9-.7 1.8-1.4 2.8-2zm-17.4 26.3c.2-1.1.4-2.3.8-3.4l2.1 1.4c-.5 1.2-.9 2.4-1.2 3.6l-1.4-.9c-.3-.2-.4-.4-.3-.7zm17.8 11.8c-.2.1-.5.1-.7 0l-1.4-.9c.9-.8 1.9-1.6 2.8-2.5l2.1 1.4c-.9.7-1.9 1.4-2.8 2z"/><path className={style.poly} d="M1022.1 245.3c1.9.9 3.9 1.7 5.8 2.2.1.2.3.3.5.4l.8.2c.2.1.5 0 .6-.2.9.2 1.8.2 2.7.3.4 0 .9-.2 1.1-.6l5.9-11.8c.2-.4.1-.9-.1-1.2-.5-.7-1.2-1.3-1.8-2 0-.2-.1-.5-.3-.6l-.6-.5c-.2-.1-.4-.2-.6-.2-1.6-1.3-3.3-2.4-5.3-3.3-1.9-.9-3.9-1.7-5.8-2.2-.1-.2-.3-.3-.5-.4l-.8-.2c-.2-.1-.5 0-.6.2-.9-.2-1.8-.2-2.7-.3-.4 0-.9.2-1.1.6l-5.9 11.8c-.2.4-.1.9.1 1.2.5.7 1.2 1.3 1.8 2 0 .2.1.5.3.6l.6.5c.2.1.4.2.6.2 1.6 1.3 3.4 2.4 5.3 3.3zm-6.1-11.4c.6.4 1.3.8 2 1.3l-1.3 2.7c-.7-.5-1.3-1.1-1.9-1.6l1.2-2.4zm1.6-3.3c.7.3 1.5.5 2.2.9l-1.5 3c-.7-.4-1.4-.9-2-1.3l1.3-2.6zm1.5-2.9c.8.1 1.6.3 2.4.5l-1.3 2.7c-.8-.3-1.5-.6-2.2-.9l1.1-2.3zm4.3-1.8l.8.2-1 2.1-6.5 13.1-.6-.5 7.3-14.9zm13.4 13.4c-.6-.4-1.3-.8-2-1.3l1.3-2.7c.7.5 1.3 1.1 1.9 1.6l-1.2 2.4zm-1.6 3.3c-.7-.3-1.5-.5-2.2-.9l1.5-3c.7.4 1.4.9 2 1.3l-1.3 2.6zm-1.4 3c-.8-.1-1.6-.3-2.4-.5l1.3-2.7c.8.3 1.5.6 2.2.9l-1.1 2.3zm-4.4 1.7l-.8-.2 7.5-15.2.6.5-7.3 14.9zm-11.2-7.4c1.6 1.1 3.3 2.1 5.1 3 1.8.9 3.6 1.6 5.4 2.2l-.8 1.6c-1.9-.5-3.7-1.2-5.5-2.1-1.8-.9-3.5-2-5-3.1l.8-1.6zm1.8-3.6c1.6.9 3.4 1.8 5.2 2.7 1.8.9 3.6 1.7 5.3 2.5l-1.5 2.9c-1.8-.6-3.6-1.3-5.5-2.2-1.8-.9-3.5-1.9-5.1-3l1.6-2.9zm4.9-9.8c1.9.5 3.7 1.2 5.5 2.1 1.8.9 3.5 2 5 3.1l-.8 1.6c-1.6-1.1-3.3-2.1-5.1-3-1.8-.9-3.6-1.6-5.4-2.2l.8-1.6zm-1.2 2.3c1.8.6 3.6 1.3 5.5 2.2 1.8.9 3.5 1.9 5.1 3l-1.5 2.9c-1.6-.9-3.4-1.8-5.2-2.7-1.8-.9-3.6-1.7-5.3-2.5l1.4-2.9zm-1.7 3.6c1.7.7 3.5 1.6 5.3 2.5 1.8.9 3.6 1.8 5.2 2.7l-1.6 3.3c-1.7-.7-3.5-1.6-5.3-2.5-1.8-.9-3.6-1.8-5.2-2.7l1.6-3.3zm10.6 15c-.7 0-1.5-.1-2.3-.2l.7-1.5c.8.2 1.6.4 2.4.5l-.5 1c0 .2-.2.2-.3.2zm6.2-12.5c.1.1.1.3 0 .4l-.5 1c-.6-.5-1.2-1.1-1.9-1.6l.7-1.5c.7.6 1.2 1.2 1.7 1.7zm-18.5-9.1c.7 0 1.5.1 2.3.2l-.7 1.5c-.8-.2-1.6-.4-2.4-.5l.5-1c-.1-.1.1-.2.3-.2zm-6.2 12.5c-.1-.1-.1-.3 0-.4l.5-1c.6.5 1.2 1.1 1.9 1.6l-.7 1.5c-.7-.6-1.3-1.1-1.7-1.7z"/>
			</svg>
		];

		this.state.projects.forEach((project, index) => {

			data.push(
				<article className={style.card}>

					<header className={style.header}>
						<p className={style.type}>{project.fragments['projects.type'].asText()}</p>
						<h2 className={style.title}>{project.fragments['projects.headline'].asText()}</h2>
					</header>

					<div className={style.media}>
						<img className={style.image} src='' alt=''/>
					</div>

					<div className={style.services}>
						<img className={style.image} src='' alt=''/>
					</div>

					<div className={style.story}>
						<h3>Story</h3>
						<p className={style.description}>{project.fragments['projects.body'].asText()}</p>
					</div>

					{ sup[index] }

				</article>
			);
		});

		return (<div className={style.container}>{data}</div>);
	}

	setupAnimation() {
		let cardClassName, cardMediaClassName, cards, scenes;

		cardClassName = '.' + style.card;
		cardMediaClassName = '.' + style.media;
		cards  = this.base.querySelectorAll(cardClassName);
		scenes = [];

		for (let i = 0, len = cards.length; i < len; i++) {

			var polys = cards[i].querySelectorAll('.' + style.poly);
			for (let i = 0, len = polys.length; i < len; i++) {
				scenes.push(
					new ScrollMagic.Scene({
						triggerElement: polys[i],
						triggerHook: 1,
						duration: (Math.random() * (100 - 70) + 70) + '%'
					})
					.setTween(
						TweenMax.fromTo(
							polys[i],
							Math.random(),
							{ y: '100%', rotate: 13, opacity: 0, ease: Linear.easeNone },
							{ y: '-100%', rotate: 0, opacity: 1, ease: Linear.easeNone  }
						)
					)
				);
			}

			var images = cards[i].querySelectorAll('.' + style.image);
			for (let i = 0, len = images.length; i < len; i++) {
				scenes.push(
					new ScrollMagic.Scene({
						triggerElement: images[i],
						triggerHook: 1,
						duration: (Math.random() * (100 - 70) + 70) + '%'
					})
					.setTween(
						TweenMax.from(
							images[i],
							0.2,
							{ y: '30%', opacity: 0, ease: Linear.easeNone }
						)
					)
				);
			}
		}

		this.scrollController.addScene(scenes);
	}

	render() {
		return (
			<section className={style.work} id="work">
				{ this.buildList() }
			</section>
		);
	}
}
