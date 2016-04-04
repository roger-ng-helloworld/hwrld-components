import React, {Component} from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../../css/core.scss';
import css from './secondary.scss';
import Btn from '../btn/btn';
import { connect } from 'react-redux';
import { activateHelp } from './secondary-action';
import { bindActionCreators } from 'redux';

@styleable(css)
class Secondary extends Component {   

	render() {
		return (
			<div className={'hwrld ' + this.props.css.cmpnt}>			
				<ul className={this.props.css.hwrld}>
					<li>
						<Btn opts={{
							url: 'http://agents.helloworld.com.au',
							alt: 'Helloworld - Agents'
						}} >Find a store</Btn>		
					</li>
					<li className={this.props.css[this.props.secondaryReducer.helpPanel] + ' ' + this.props.css.help}>
						<div 
							onClick={()=>this.props.activateHelp(this.props.secondaryReducer.helpPanel)}
							className={this.props.css['help-btn']} >
							<span>
								Help
							</span>
							<i className={this.props.css.arrow}></i>	
						</div>

						<div className={this.props.css['help-panel']}>
							<div className={this.props.css['help-item']}>
								<Btn opts={{
									url: 'http://www.helloworld.com.au/contact-details',
									alt: 'Helloworld - Contact details',
									full: true
								}} >Contact details</Btn>
							</div>

							<div className={this.props.css['help-item']}>
								<Btn opts={{
									url: 'http://www.helloworld.com.au/faq',
									alt: 'Helloworld - FAQ',
									full: true
								}} >Faq</Btn>
							</div>
						</div>							
					</li>
				</ul>
			</div>			
		);
	};
}

function mapStateToProps(state) {
	return {
		secondaryReducer: state.secondaryReducer
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({activateHelp: activateHelp}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Secondary);