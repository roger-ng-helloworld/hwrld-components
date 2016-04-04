import React from 'react';
import ReactDom from 'react-dom';
import { handleDefaults } from '../helpers/utils';
import promise from 'es6-promise';
import fetch from 'whatwg-fetch';
import fetchMock from 'fetch-mock';
import HotelRate from './hotel-rate';

fetchMock.mock('http://foo.com/api/hotel-rate', 'POST', {
	general: {
		title: 'Hotel near Jackson Hole',
		moreHotels: 'http://google.com'
	},
	items: [
		{
			cta: 'http://google.com',
			hotel: 'Spring Creek Ranch',
			rating: 3,
			price: 200
		},
		{
			cta: 'http://google.com',
			hotel: 'The Inn At Jackson Hole',
			rating: 4,
			price: 340
		},
		{
			cta: 'http://google.com',
			hotel: 'Teton Mountain Lodge & Spa',
			rating: 5,
			price: 456
		},
		{
			cta: 'http://google.com',
			hotel: 'Snake River Lodge & Spa',
			rating: 3.4,
			price: 466
		},
		{
			cta: 'http://google.com',
			hotel: 'Hotel Terra',
			rating: 2.6,
			price: 500
		},
		{
			cta: 'http://google.com',
			hotel: 'Elk Country Inn',
			rating: 4,
			price: 534
		},
		{
			cta: 'http://google.com',
			hotel: 'Hampton Inn Jackson Hole',
			rating: 3,
			price: 566
		},
		{
			cta: 'http://google.com',
			hotel: 'Hotel Jackson',
			rating: 4,
			price: 599
		},
		{
			cta: 'http://google.com',
			hotel: 'Cowboy Village Resort',
			rating: 5,
			price: 658
		}
	]
});

class HwrldHotelRateWidget {
	constructor(element, dynamicOptions) {
        let defaults = {
            dataUrl: 'http://content.helloworld.com.au/api/hotel-rate',
            content: 'hotelrate'
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
          moreHotels: this.options.moreHotels
			})
		}).then(function(response) {
  		return response.json();
		}).then(function(json) {
	    self.deals = json;
	    //console.log(json);

  		self.renderElm();
		}).catch(function(err) {
  		console.log('parsing failed', err);
		});
	}

	renderElm() {
		ReactDom.render(<HotelRate deals={this.deals} />, document.querySelector(this.element));
	}
}

window.HwrldHotelRateWidget = HwrldHotelRateWidget;
