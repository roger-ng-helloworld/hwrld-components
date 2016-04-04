export default function (state = 'inactive', action) {
	switch(action.type) {
        case 'BURGER_CLICKED':
        	return action.payload
    }
	return state;
}
