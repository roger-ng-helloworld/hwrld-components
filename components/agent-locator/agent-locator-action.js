import cookie from 'react-cookie';
import xhr from 'xhr';
import Interceptor from 'xhr-interceptor';
import { getPosition, ajaxPromise } from '../helpers/utils';

export const LATLONG_RECEIVED = 'LATLONG_RECEIVED';
export const AGENT_DETAILS_COOKIE_LOADED = 'AGENT_DETAILS_COOKIE_LOADED';
export const AGENT_DETAILS_AJAXED = 'AGENT_DETAILS_AJAXED';

export function getLatLong() {
	let latLong = getPosition({enableHighAccuracy: true});
	return {
		type: LATLONG_RECEIVED,
		payload: latLong
	}
}

export function getAgentDetailsFromCookie(cookieId) {
	let agentDetails = cookie.load(cookieId) || null;
	return {
		type: AGENT_DETAILS_COOKIE_LOADED,
		payload: agentDetails
	}
}

export function getAgentDetailsFromLatLong(dataUrl, latLong = {Lat: 0, Longitude: 0}) {
	let request = ajaxPromise(dataUrl, latLong);
	return {
		type: AGENT_DETAILS_AJAXED,
		payload: request
	}
}
