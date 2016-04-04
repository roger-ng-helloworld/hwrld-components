import { LATLONG_RECEIVED } from './agent-locator-action';

export default function (state = null, action) {

	switch(action.type) {
        case LATLONG_RECEIVED:
        	return {Latitude: action.payload.coords.latitude, Longitude: action.payload.coords.longitude};       
    }

	return state;
}
