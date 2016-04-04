export default function (state = {helpPanel: 'deactivate'}, action) {
	switch(action.type) {
        case 'HELP_ACTIVATED':
        	if (state.helpPanel === 'activate') {
        		return {helpPanel: 'deactivate'};
        	}
        	else {
        		return {helpPanel: 'activate'};
        	}            
    }

	return state;
}

