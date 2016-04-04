import axios from 'axios';
import { ajaxPromise } from '../../helpers/utils';

export const CHANGE_STORE_CLICKED = 'CHANGE_STORE_CLICKED';
export const AGENT_DETAILS_POSTCODE_LOADED = 'AGENT_DETAILS_POSTCODE_LOADED';
export const VALUE_KEYED = 'VALUE_KEYED';
export const AGENT_CHOSEN = 'AGENT_CHOSEN';

export function handleActivation(state) {
	let payload;
	if (state === 'active') {
		payload = 'inactive';
	}
	else {
		payload = 'active';
	}

	return {
		type: CHANGE_STORE_CLICKED,
		payload
	}
}

export function getKeyValue(key) {
	return {
		type: VALUE_KEYED,
		payload: key
	}
}

export function getAgentDetailsFromPostcode(dataUrl, area = {location: 2000}) {
	let request = ajaxPromise(dataUrl, area);
	return {
		type: AGENT_DETAILS_POSTCODE_LOADED,
		payload: request
	}
}

export function getAgent(details) {
	return {
		type: AGENT_CHOSEN,
		payload: details
	}
}
