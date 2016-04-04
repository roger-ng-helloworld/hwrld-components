import React from 'react';
import ReactDom from 'react-dom';
import { handleDefaults } from '../helpers/utils';
import promise from 'es6-promise';
import fetch from 'whatwg-fetch';
import fetchMock from 'fetch-mock';
import Chart from './chart';

fetchMock.mock('http://foo.com/api/chart', 'POST', function(url, data) {
	if (JSON.parse(data.body).content === 'popularity') {
		return {
			general: {
				type: 'popularity'
			}, 
			items: [
				{
					x: '2016-08-01',
					y: 8.2			
				},
				{
					x: '2016-08-15',
					y: 6		
				},
				{
					x: '2016-09-01',
					y: 7		
				},
				{			
					x: '2016-09-15',
					y: 3
				},
				{
					x: '2016-10-01',
					y: 7
				},
				{
					x: '2016-10-15',
					y: 6.5		
				},
				{
					x: '2016-11-01',
					y: 2.9		
				},
				{
					x: '2016-11-15',
					y: 5.5		
				},
				{
					x: '2016-12-01',
					y: 4.6		
				},
				{			
					x: '2016-12-15',
					y: 6.8
				},
				{
					x: '2017-01-01',
					y: 7
				},
				{
					x: '2017-01-15',
					y: 10			
				}
						
			]
		}
	}
	else if (JSON.parse(data.body).content === 'price') {
		return {
			general: {
				type: 'price'
			}, 
			items: [
				{
					x: '2016-08-01',
					y: 1200.97			
				},
				{
					x: '2016-08-15',
					y: 1100.00		
				},
				{
					x: '2016-09-01',
					y: 1567.20		
				},
				{			
					x: '2016-09-15',
					y: 1209.03
				},
				{
					x: '2016-10-01',
					y: 1348.67,
				},
				{
					x: '2016-10-15',
					y: 1854.00			
				},
				{
					x: '2016-11-01',
					y: 1286.45			
				},
				{
					x: '2016-11-15',
					y: 1693.04			
				},
				{
					x: '2016-12-01',
					y: 1376.00			
				},
				{			
					x: '2016-12-15',
					y: 956.98
				},
				{
					x: '2017-01-01',
					y: 865.99,
				},
				{
					x: '2017-01-15',
					y: 568.00			
				}
						
			]
		}
	}
	else if (JSON.parse(data.body).content === 'weather') {
		return {
			general: {
				type: 'weather'
			}, 
			items: [
				{
					x: '2016-08-01',
					y: 24			
				},
				{
					x: '2016-08-15',
					y: 23			
				},
				{
					x: '2016-09-01',
					y: 24			
				},
				{			
					x: '2016-09-15',
					y: 25
				},
				{
					x: '2016-10-01',
					y: 27,
				},
				{
					x: '2016-10-15',
					y: 27			
				},
				{
					x: '2016-11-01',
					y: 28			
				},
				{
					x: '2016-11-15',
					y: 28			
				},
				{
					x: '2016-12-01',
					y: 29			
				},
				{			
					x: '2016-12-15',
					y: 30
				},
				{
					x: '2017-01-01',
					y: 29,
				},
				{
					x: '2017-01-15',
					y: 28			
				}
						
			]
		}
	}
});

class HwrldChartWidget {
	constructor(element, dynamicOptions) {
		let defaults = {
		    dataUrl: 'http://content.helloworld.com.au/api/v1/flight/GetWidgetData'
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
			    content: this.options.content,
                dest: this.options.dest
			})
		}).then(function(response) {
    		return response.json();
  		}).then(function(json) {
    		self.chart = json;
    		self.renderElm();
  		}).catch(function(err) {
    		console.log('parsing failed', err);
  		});
	}

	renderElm() {
		ReactDom.render(<Chart chart={this.chart} options={this.options} />, document.querySelector(this.element));
	}
}

window.HwrldChartWidget = HwrldChartWidget;