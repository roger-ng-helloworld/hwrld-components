import React, {Component} from 'react';
import styleable from 'react-styleable';
import css from './search-site.scss';

const searchUrl = 'http://www.helloworld.com.au/search?term=';

@styleable(css)
export default class SearchSite extends Component {   
	constructor(props) {
		super(props);
		this.state = {term: ''};
		this.onInputChange = this.onInputChange.bind(this);
		this.submitSearch = this.submitSearch.bind(this);
		this.detectEnterKey = this.detectEnterKey.bind(this);
	}

	onInputChange(evt) {		
		this.setState({term: evt.target.value});
	}

	detectEnterKey(evt) {
		if (evt.charCode === 13) {
			this.targetUrl();
		}
	}

	submitSearch(evt) {
		evt.preventDefault();
		this.targetUrl();
	}

	targetUrl() {
		window.location.href = searchUrl + this.state.term;
	} 

	render() {
		return (
			<div className={this.props.css.hwrld}>			
				<input type="text" className={this.props.css.textfield} 
					value={this.state.term}
					onChange={this.onInputChange}
					onKeyPress={this.detectEnterKey}
				/>
				<a href="#" className={this.props.css['search-btn']}
					onClick={this.submitSearch}
				></a>
			</div>			
		);
	};
}