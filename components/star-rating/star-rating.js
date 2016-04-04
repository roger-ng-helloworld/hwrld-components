import React, {Component} from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../css/core.scss';
import css from './star-rating.scss';

@styleable(css)
export default class StarRating extends Component {

	render() {
		return (
			<div className={'hwrld-widget ' + this.props.css['hwrld-widget']}>				
				<span>{this.props.rating}</span> <span className={ 'star-' + Math.round(Number(this.props.rating)) + ' ' + this.props.css['star-base']}></span>            			
        	</div>
		);
	};
}