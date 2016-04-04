import { AGENT_DETAILS_COOKIE_LOADED, AGENT_DETAILS_AJAXED } from './agent-locator-action';
import { AGENT_CHOSEN	} from './change-store/change-store-action';

export default function (state = null, action) {

	switch(action.type) {
        case AGENT_DETAILS_COOKIE_LOADED:
        	return action.payload;

        case AGENT_DETAILS_AJAXED:
        	return action.payload;

				case AGENT_CHOSEN:
					return action.payload;
    }

	return state;
}
