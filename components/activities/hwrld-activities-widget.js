import React, { Component } from 'react';
import ReactDom from 'react-dom';
import promise from 'es6-promise';
import fetch from 'whatwg-fetch';
import fetchMock from 'fetch-mock';
import { handleDefaults } from '../helpers/utils';
import Activities from './activities';

fetchMock.mock('http://foo.com/api/activities', 'POST', function (url, data) {
	return {
		general: {
			moreActivities: 'http://activities.helloworld.com.au/'
		}, 
		items: [
			{
				cta: 'http://google.com',
				img: 'http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/9232/SITours/jackson-hole-food-tour-in-jackson-hole-198558.jpg',
				title: 'Jackson Hole Food Tour',
				subTitle: 'Jackson Hole, Wyoming',
				rating: 5,
				blurb: 'Get a taste for Jackson’s burgeoning culinary scene on this 3-hour food walking tour through the town center. With a guide, learn about the history of Jackson, a mountain',
				price: {
					topAggregator: 'from',
					bottomAggregator: 'per person',
					price: 109.13
				}
			},
			{
				cta: 'http://google.com',
				img: 'http://cdn.jacksonholenet.com/images/content/20_13950_Jackson_Hole_White_Water_Rafting_md.jpg',
				title: 'Whitewater Rafting Adventure from Jackson Hole',
				subTitle: 'Jackson Hole, Wyoming',
				rating: 5,
				blurb: 'Fuel up with adventure on this whitewater rafting trip on an exhilarating section of Wyomings Snake River. Your expert guide shares the best whitewater in the Rocky Mountain',
				price: {
					topAggregator: 'from',
					bottomAggregator: 'per person',
					price: 124.09
				}
			},
			{
				cta: 'http://google.com',
				img: 'https://media-cdn.tripadvisor.com/media/photo-s/08/8e/a0/36/jackson-hole-wildlife.jpg',
				title: 'Half-Day Wildlife Safari From Jackson Hole',
				subTitle: 'Jackson Hole, Wyoming',
				rating: 5,
				blurb: 'For those with time constraints late in the day, this half day Safari will give you a great experience that includes the National Elk Refuge and Grand Teton National Park',
				price: {
					topAggregator: 'from',
					bottomAggregator: 'per person',
					price: 189.75
				}
			}		
		]
	}
});

class HwrldActivitiesWidget {
	constructor(element, dynamicOptions) {
	    let defaults = {
			dataUrl: 'http://content.helloworld.com.au/api/v1/hotel/GetWidgetData'
		};
		this.element = element;
		this.options = handleDefaults(defaults, dynamicOptions);

		if (this.options.dataSource === 'local') {
		    this.deals = window.hwrldActivitiesData;
		    this.renderElm();
		}
		else {
			this.getData();
		}		
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
                moreHotels: this.options.moreHotels
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
		ReactDom.render(<Activities deals={this.deals} />, document.querySelector(this.element));
	}
}

window.HwrldActivitiesWidget = HwrldActivitiesWidget;