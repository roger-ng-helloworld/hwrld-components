import React, {Component} from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../css/core.scss';
import css from './hotel-rate.scss';
import StarRating from '../star-rating/star-rating';

@styleable(css)
export default class HotelRate extends Component {

	render() {
	    let self = this;
		return (

			<div className={'hwrld ' + this.props.css['hwrld']}>
				<div className={this.props.css.title}>{this.props.deals.general.title}</div>			
				<ul className={this.props.css.list + ' container-fluid'}>
					{this.props.deals.items.map(function(val, ind){          
			            return (
			            	<li key={ind} className={self.props.css['list-item'] + ' col-lg-4 col-md-6 col-sm-12 col-xs-12'}>
			            		<a className={self.props.css.cta} href={val.cta}></a>
			            		<div className={self.props.css.hotel}>{val.hotel}</div>

			            		<div>
			            			<div className={self.props.css['rating-container']}>
			            				<StarRating rating={val.rating} />
			            			</div>

			            			<div className={self.props.css['price-container']}>
			            				<span className={self.props.css['from-txt']}>FROM</span> <span className={self.props.css.price}>${val.price}*</span> <i></i>
			            			</div>
			            			
			            		</div>
			            	</li>
			            )
			       	})}
				</ul>
				<a href={this.props.deals.general.moreHotels} className={this.props.css['see-more']}>See more Hotels</a>
        	</div>
		);
	};
}