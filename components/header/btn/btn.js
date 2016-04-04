import React, {Component} from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../../css/core.scss';
import css from './btn.scss';

@styleable(css)
export default class Btn extends Component {   

	render() {
		let full = this.props.opts.full?this.props.css.full:'';
		return (
			<div className='hwrld'>
				<div className={this.props.css.hwrld + ' ' + full}>
					<a href={this.props.opts.url} alt={this.props.opts.alt} >
						<span>
							{this.props.children}
						</span>						
					</a>
				</div>
			</div>
		);
	};
}