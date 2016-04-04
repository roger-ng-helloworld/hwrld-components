import React, {Component} from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../css/core.scss';
import css from './header.scss';
import Main from './main/main';
import Secondary from './secondary/secondary';
import Auth from './auth/auth';


@styleable(css)
export default class Header extends Component {   

	render() {
		return (
			<div className={'hwrld ' + this.props.css.hwrld}>
				<a href="http://www.helloworld.com.au" alt="Helloworld" className={this.props.css.brand}></a>
				<Main />
			</div>
		);
	};
}