import React from 'react';
import ReactDom from 'react-dom';
import { handleDefaults } from '../helpers/utils';
import promise from 'es6-promise';
import fetch from 'whatwg-fetch';
import fetchMock from 'fetch-mock';
import HotelMap from './hotel-map';

fetchMock.mock('http://foo.com/api/hotel-map', 'POST', function(url, data) {
    return {
        general: {
            center: {
                lat: -25.363882,
                lng: 131.044922
            },
            zoom: 4
        }, 
        items: [
            {
                cta: 'http://google.com',
                img: 'http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/9232/SITours/jackson-hole-food-tour-in-jackson-hole-198558.jpg',
                title: 'Jackson Hole Food Tour',
                rating: 5,
                price: {
                    topAggregator: 'from',
                    bottomAggregator: 'per person',
                    price: 109.13
                },
                position: [-27.363882, 137.044922]                
            },
            {
                cta: 'http://google.com',
                img: 'http://cdn.jacksonholenet.com/images/content/20_13950_Jackson_Hole_White_Water_Rafting_md.jpg',
                title: 'Whitewater Rafting Adventure from Jackson Hole',
                rating: 5,
                price: {
                    topAggregator: 'from',
                    bottomAggregator: 'per person',
                    price: 124.09
                },
                position: [-23.363882, 129.044922]
            }			
        ]
    }
});

class HwrldHotelMapWidget {
	constructor(element, dynamicOptions) {
        let defaults = {
            dataUrl: 'http://content.helloworld.com.au/api/hotel-map',
            content: 'hotelmap'
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
			    content: this.options.content
			})
		}).then(function(response) {
    		return response.json();
  		}).then(function(json) {
    		json.items.map((val) => {
                val.position = new google.maps.LatLng(val.position[0], val.position[1]);
                val.showInfo = false;
            });
            self.mapInfo = json;
            self.renderElm();
  		}).catch(function(err) {
    		console.log('parsing failed', err);
  		});
	}

	renderElm() {
		ReactDom.render(<HotelMap mapInfo={this.mapInfo} />, document.querySelector(this.element));
	}
}

window.HwrldHotelMapWidget = HwrldHotelMapWidget;