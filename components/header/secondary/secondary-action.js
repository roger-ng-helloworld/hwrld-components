export function activateHelp(className) {
	return {
		type: 'HELP_ACTIVATED',
		payload: className
	}
}