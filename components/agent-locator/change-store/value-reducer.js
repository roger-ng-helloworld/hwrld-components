import { VALUE_KEYED } from './change-store-action';

export default function (state = '', action) {

	switch(action.type) {
        case VALUE_KEYED:
        	return action.payload;
    }

	return state;
}
