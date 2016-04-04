import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { handleDefaults } from '../helpers/utils';
import Leaderboard from './leaderboard';

export default class HwrldLeaderboard {
	constructor(element, dynamicOptions) {
	    let defaults = {};
		this.element = element;
		this.options = handleDefaults(defaults, dynamicOptions);
        this.renderElm();
	}

	renderElm() {
		ReactDom.render(
			<Leaderboard />,
			document.querySelector(this.element));
	}
}

window.HwrldLeaderboard = HwrldLeaderboard;