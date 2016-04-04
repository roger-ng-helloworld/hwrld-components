import React, {Component} from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../../css/core.scss';
import css from './main.scss';
import Btn from '../btn/btn';
import Secondary from '../secondary/secondary';
import { connect } from 'react-redux';
import { clickBurger } from './main-action';
import { bindActionCreators } from 'redux';

@styleable(css)
class Main extends Component {

	render() {
		return (
			<div className={'hwrld ' + this.props.css.cmpnt} >
				<div className={this.props.css.hwrld + ' ' + this.props.css[this.props.mainReducer]}>
					<div
						onClick={() => this.props.clickBurger(this.props.mainReducer)} 
						className={this.props.css.burger} >
						<div className={this.props.css['burger-stripe']}></div>
						<div className={this.props.css['burger-stripe']}></div>
						<div className={this.props.css['burger-stripe']}></div>
					</div>
					<div className={this.props.css['main-list']} >
						<ul >
							<li>
								<Btn opts={{
									url: 'http://www.helloworld.com.au/hotel',
									alt: 'Helloworld - Hotel'
								}} >Hotel</Btn>
							</li>
							<li>
								<Btn opts={{
									url: 'http://www.helloworld.com.au/packages',
									alt: 'Helloworld - Packages'
								}} >Packages</Btn>
							</li>
							<li>
								<Btn opts={{
									url: 'http://www.helloworld.com.au/flights',
									alt: 'Helloworld - Flights'
								}} >Flights</Btn>
							</li>
							<li>
								<Btn opts={{
									url: 'http://www.helloworld.com.au/car-hire',
									alt: 'Helloworld - Car hire'
								}} >Car hire</Btn>
							</li>
							<li>
								<Btn opts={{
									url: 'http://www.helloworld.com.au/activities',
									alt: 'Helloworld - Activities'
								}} >Activities</Btn>
							</li>
							<li>
								<Btn opts={{
									url: 'http://www.helloworld.com.au/deals',
									alt: 'Helloworld - Deals'
								}} >Deals</Btn>
							</li>
							<li>
								<Btn opts={{
									url: 'http://www.helloworld.com.au/cruises',
									alt: 'Helloworld - Cruises'
								}} >Cruises</Btn>
							</li>
						</ul>
						<Secondary />
					</div>
				</div>
			</div>
		);
	};
}

function mapStateToProps(state) {
	return {
		mainReducer: state.mainReducer
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({clickBurger: clickBurger}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
