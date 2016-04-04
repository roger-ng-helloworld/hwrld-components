export function clickBurger(state) {
	let payload;
	if (state === 'inactive') {
		payload = 'active';
	}
	else {
		payload = 'inactive';
	}
	return {
		type: 'BURGER_CLICKED',
		payload
	}
}
