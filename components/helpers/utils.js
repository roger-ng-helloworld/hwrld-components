import promise from 'es6-promise';
import UnJQ, {serialize, upload} from 'unjq-ajax'
import fetch from 'whatwg-fetch';

export function handleDefaults(defaultObj, dynamicObj) {
	for (let key in dynamicObj) {
		defaultObj[key] = dynamicObj[key];
	}

	return defaultObj;
}

export function getPosition(settings) {

	return new Promise(function(resolve, reject) {
  		navigator.geolocation.getCurrentPosition(
	        // On Success
	        function(position) {
	        	resolve(position);
	        	return position;
	        },
         	// On Error
         	function(error) {
            	reject(error);	         	},

         	settings
  		);
  	});
}

export function ajaxPromise(dataUrl, data) {
	return new Promise(function(resolve, reject) {
		UnJQ.post(dataUrl,
	  	data,
	  	(resp) => {
		    resolve(resp);
	    },
	    'json');



	})

}
