import React, {Component} from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../css/core.scss';
import css from './activities.scss';
import StarRating from '../star-rating/star-rating';

@styleable(css)
export default class Activities extends Component {
    processBlurb(blurb, cta) {
        let maxLength = 140,
            finalBlurp,
            ellipsis,
            moreInfo;

        if (blurb.length > maxLength) {
            finalBlurp = blurb.slice(0, maxLength);
            ellipsis = '...';
            moreInfo = 'More info';
        }
        else {
            finalBlurp = blurb;
            ellipsis = '';
            moreInfo = '';
        }

        return (
            <div className={this.props.css.blurb}>{finalBlurp}{ellipsis}<span className={this.props.css['more-info']}>{moreInfo}</span></div>
        )
    }

	render() {
		let self = this;
		return (
			<div className={'hwrld ' + this.props.css['hwrld']}>			
				<ul className={this.props.css.list + ' container-fluid'}>
					{this.props.deals.items.map(function(val, ind){			            
			            return (
			            	<li key={ind} className={self.props.css['list-item'] + ' row'}>
			            		<a href={val.cta} className={self.props.css.cta}></a>          		
			            		<div className="col-sm-3">
			            			<div className={self.props.css['img-panel']}>	
			            				<img src={val.img} alt={val.title} />
			            			</div>	
			            		</div>
			            		<div className="col-sm-5 col-md-6">
				            		<div className={self.props.css.title}>{val.title}</div>
				            		<div>{val.subTitle}</div>

				            		<div>
                                        <StarRating rating={val.rating} />
                                    </div>
                                    {self.processBlurb(val.blurb, val.cta)}
				            	</div>	
				            	<div className={self.props.css['price-container'] + ' col-sm-4 col-md-3'}>
				            		<div className={self.props.css['arrow-panel']}>
				            			<i></i>
				            		</div>
				            		<div className={self.props.css['price-panel']}>
					            		<div className={self.props.css['top-aggregator']}>{val.price.topAggregator}</div>
					            		<div className={self.props.css.price}>${val.price.price}*</div>
					            		<div className={self.props.css['bottom-aggregator']}>{val.price.bottomAggregator}</div>
				            		</div>
				            	</div>
			            	</li>
			            )
			       	})}
				</ul>

                <a href={this.props.deals.general.moreActivities} className={this.props.css['see-more']}>See more Activities</a>
				
        	</div>
		);
	};
}