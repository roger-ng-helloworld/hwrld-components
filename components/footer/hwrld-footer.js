import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { handleDefaults } from '../helpers/utils';
import Footer from './footer';

export default class HwrldFooter {
	constructor(element, dynamicOptions) {
	    let defaults = {};
		this.element = element;
		this.options = handleDefaults(defaults, dynamicOptions);
        this.renderElm();
	}

	renderElm() {
		ReactDom.render(
			<Footer />,
			document.querySelector(this.element));
	}
}

window.HwrldFooter = HwrldFooter;