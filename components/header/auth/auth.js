import React, {Component} from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../../css/core.scss';
import css from './auth.scss';
import Btn from '../btn/btn'

@styleable(css)
export default class Auth extends Component {   
	render() {
		return (
			<div className={'hwrld ' + this.props.css.cmpnt}>
				<Btn opts={{
					url: '#',
					alt: 'the quick brown fox'
				}} >Sign in</Btn>
			</div>
		);
	};
}