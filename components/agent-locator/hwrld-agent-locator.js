import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { handleDefaults } from '../helpers/utils';
import AgentLocator from './agent-locator';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import AgentLocatorCombinedReducers from './agent-locator-combined-reducers';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

export default class HwrldAgentLocator {
	constructor(element, dynamicOptions) {
	    let defaults = {
	    	cookieId: 'hwrld-agent',
	    	latLongDataUrl: 'http://agents.helloworld.com.au/api/agent/closest-agent-geolocation-search',
	    	postcodeDataUrl: 'http://agents.helloworld.com.au//api/agent/closest-agent-location-search',
	    	defaultAgent: {
	    		storeName: 'helloworld Circular Quay',
				address: 'Shop 1, AMP Centre 50 Bridge Street, Sydney, NSW 2000',
				phone: '02 9221 7988',
				openingHours: {
					Monday: '0900-1700',
					Tuesday: '0900-1700',
					Wednesday: '0900-1700',
					Thursday: '0900-1700',
					Friday: '0900-1700',
					Saturday: 'Closed',
					Sunday: 'Closed'
				},
				url: '/helloworld-circular-quay',
				img: ''
	    	},
	    	genericAgentImg: 'http://test.content.helloworld.com.au/l/Images/homepage-v2/generic-agent.jpg'
	    };
			console.log('XXX');

		this.element = element;
		this.options = handleDefaults(defaults, dynamicOptions);
        this.renderElm();
	}

	renderElm() {
		ReactDom.render(
			<Provider store={createStoreWithMiddleware(AgentLocatorCombinedReducers)}>
				<AgentLocator options={this.options} />
			</Provider>
			,
			document.querySelector(this.element));
	}
}

window.HwrldAgentLocator = HwrldAgentLocator;
