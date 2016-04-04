import React, {Component} from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../css/core.scss';
import css from './agent-locator.scss';
import { connect } from 'react-redux';
import { getLatLong, getAgentDetailsFromCookie, getAgentDetailsFromLatLong } from './agent-locator-action';
import { bindActionCreators } from 'redux';
import Details from './details/details';
import cookie from 'react-cookie';

@styleable(css)
export default class AgentLocator extends Component {
	componentWillMount() {
		this.props.getLatLong();
	    this.props.getAgentDetailsFromCookie(this.props.options.cookieId);
	}

	render() {

		if (!this.props.agentDetailsReducer) {
			if (this.props.latLongReducer || '') {
				this.props.getAgentDetailsFromLatLong(
					this.props.options.latLongDataUrl,
					this.props.latLongReducer
				)
			}

			return(
				<div className={'hwrld '+ this.props.css.hwrld}>
					<Details
					 	options={this.props.options}
						agent={this.props.options.defaultAgent}
						genericAgentImg={this.props.options.genericAgentImg}
					/>
				</div>
			);
		}

		else if (this.props.agentDetailsReducer) {
			cookie.save(
				this.props.options.cookieId,
				this.props.agentDetailsReducer
			);
		}

		return (
			<div className={'hwrld ' + this.props.css.hwrld}>
				<Details
				 	options={this.props.options}
					agent={this.props.agentDetailsReducer}
					genericAgentImg={this.props.options.genericAgentImg}
				/>
			</div>
		);
	};
}

function mapStateToProps(state) {
	return {
		agentDetailsReducer: state.agentDetailsReducer,
		latLongReducer: state.latLongReducer
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getLatLong,
		getAgentDetailsFromCookie,
		getAgentDetailsFromLatLong
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AgentLocator);
