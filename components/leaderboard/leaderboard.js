import React, {Component} from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../css/core.scss';
import css from './leaderboard.scss';


@styleable(css)
export default class Leaderboard extends Component {   

	render() {
		return (
			<div className='hwrld'>
				<div className={this.props.css.hwrld}>
					
					<div className={this.props.css.call}>
						<i className={this.props.css['call-icon'] + ' ' + this.props.css.icon}></i> 
                            <span className={this.props.css.text}>24/7 Support - Call 13 14 18 </span>
					</div>

					<div className={this.props.css.book}>
						<i className={this.props.css['retail-icon'] + ' ' + this.props.css.icon}></i> <i className={this.props.css['online-icon'] + ' ' + this.props.css.icon}></i> 
                            <span className={this.props.css.text}>Book in store or online</span>
					</div>
					

				</div>
			</div>
		);
	};
}