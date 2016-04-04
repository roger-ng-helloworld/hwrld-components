import React, {Component} from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../css/core.scss';
import css from './flight-rate.scss';

@styleable(css)
export default class FlightRate extends Component {

	render() {
	    let self = this;
		return (

			<div className={'hwrld ' + this.props.css['hwrld']}>
				<div className={this.props.css.title}>{this.props.deals.general.title}</div>			
				<ul className={this.props.css.list + ' container-fluid'}>
					{this.props.deals.items.map(function(val, ind){          
			            return (
			            	<li key={ind} className={self.props.css['list-item'] + ' col-lg-3 col-md-6 col-sm-12'}>
			            		<a className={self.props.css.cta} href={val.cta}></a>
			            		<span className={self.props.css.depart}>Ex {val.depart}:</span> <span className={self.props.css['from-txt']}>FROM</span> <span className={self.props.css.price}>${val.price}*</span> <i></i>
			            	</li>
			            )
			       	})}
				</ul>
				
        	</div>
		);
	};
}