import { CHANGE_STORE_CLICKED } from './change-store-action';

export default function (state = 'inactive', action) {

	switch(action.type) {
        case CHANGE_STORE_CLICKED:
        	return action.payload;
    }
	return state;
}
