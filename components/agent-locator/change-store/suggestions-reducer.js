import { AGENT_DETAILS_POSTCODE_LOADED } from './change-store-action';

export default function (state = [], action) {

	switch(action.type) {
        case AGENT_DETAILS_POSTCODE_LOADED:
        	return action.payload.slice(0, 10);webpack
    }

	return state;
}
