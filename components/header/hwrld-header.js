import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { handleDefaults } from '../helpers/utils';
import Header from './header';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import HeaderReducer from './header-reducer';


export default class HwrldHeader {
	constructor(element, dynamicOptions) {
	    let defaults = {};
		this.element = element;
		this.options = handleDefaults(defaults, dynamicOptions);
        this.renderElm();
	}

	renderElm() {
		ReactDom.render(
			<Provider store={createStore(HeaderReducer)}>
				<Header />
			</Provider>	
			,
			document.querySelector(this.element));
	}
}

window.HwrldHeader = HwrldHeader;