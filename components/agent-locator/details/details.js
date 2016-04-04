import React, {Component} from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../../css/core.scss';
import css from './details.scss';
import ChangeStore from '../change-store/change-store';

@styleable(css)
export default class Details extends Component {

	processOpeningHours(obj) {
		let dayArr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
			todayNo = new Date().getDay(),
			tomorrowNo = (today + 1) < 6 ? (today + 1) : 0,
			today = dayArr[todayNo],
			tomorrow = dayArr[tomorrowNo],
			todayOpeningHours,
			tomorrowOpeningHours;

		for (let key in obj) {
			if (today === key.toLowerCase()) {
				todayOpeningHours = 'Today ' + obj[key];
			}

			if (tomorrow === key.toLowerCase()) {
				tomorrowOpeningHours = 'Tomorrow ' + obj[key];
			}
		}

		return (
			<span className={this.props.css['opening-hours']}>{`${todayOpeningHours} ${tomorrowOpeningHours}`}</span>
		)

	}

	render() {
		return (
			<div className={this.props.css.hwrld}>
				<div className={this.props.css['agent-mug']}>
					<img src={this.props.agent.img?this.props.agent.img:this.props.genericAgentImg} alt="agent image" />
				</div>

				<div className={this.props.css['store-name']}>
					<span className={this.props.css['store-name-label']}>Your store is:</span> <span className={this.props.css['store-name-text']}>{this.props.agent.storeName}</span>
				</div>

				<div className={this.props.css['details']}>
					<ChangeStore
						options={this.props.options}
					/>

					<div className={this.props.css['address-container']}>
						<i className={this.props.css.icon + ' ' + this.props.css['icon-address']}></i>
						<span className={this.props.css['address']}>{this.props.agent.address}</span>
					</div>

					<div className={this.props.css['phone-container']}>
						<i className={this.props.css.icon + ' ' + this.props.css['icon-phone']}></i>
						<span className={this.props.css.phone}>{this.props.agent.phone}</span>
					</div>

					<div className={this.props.css['opening-hours-container']}>
						<i className={this.props.css.icon + ' ' + this.props.css['icon-opening-hours']}></i>
						{this.processOpeningHours(this.props.agent.openingHours)}
					</div>
				</div>


			</div>
		);
	};
}
