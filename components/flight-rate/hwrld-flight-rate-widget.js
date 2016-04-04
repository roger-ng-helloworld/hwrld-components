import React from 'react';
import ReactDom from 'react-dom';
import { handleDefaults } from '../helpers/utils';
import promise from 'es6-promise';
import fetch from 'whatwg-fetch';
import fetchMock from 'fetch-mock';
import FlightRate from './flight-rate';

fetchMock.mock('http://foo.com/api/flight-rate', 'POST', function(url, data) {
	return {
		general: {
			title: 'Flight to Salt Lake City'
		}, 
		items: [
			{
				cta: 'http://google.com',
				depart: 'Sydney',
				price: 2250
			},
			{
				cta: 'http://google.com',
				depart: 'Melbourne',
				price: 1190
			},
			{
				cta: 'http://google.com',
				depart: 'Adelaide',
				price: 2190
			},
			{
				cta: 'http://google.com',
				depart: 'Perth',
				price: 3500
			}			
		]
	}
});

class HwrldFlightRateWidget {
	constructor(element, dynamicOptions) {
		let defaults = {
		    dataUrl: 'http://content.helloworld.com.au/api/flight-rate',
            content: 'rate'
		};		
		this.element = element;
		this.options = handleDefaults(defaults, dynamicOptions);
		this.getData();
	}

	getData() {
		let self = this;
	    window.fetch(this.options.dataUrl, {
		    method: 'POST',
		    headers: {
		        'Accept': 'application/json',
		        'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({
		        dest: this.options.dest,
		        content: this.options.content,
		        endDate: this.options.endDate,
		        startDate: this.options.startDate,
		        origins: this.options.origins		        
		    })
		}).then(function(response) {
    		return response.json();
  		}).then(function(json) {
    		self.deals = json;    		
  		    self.renderElm();
  		}).catch(function(err) {
    		console.log('parsing failed', err);
  		});
	}

	renderElm() {
		ReactDom.render(<FlightRate deals={this.deals} />, document.querySelector(this.element));
	}
}

window.HwrldFlightRateWidget = HwrldFlightRateWidget;