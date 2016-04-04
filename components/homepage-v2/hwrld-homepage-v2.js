import { handleDefaults } from '../helpers/utils';
import HwrldHeader from '../header/hwrld-header';
import HwrldAgentLocator from '../agent-locator/hwrld-agent-locator';
import HwrldLeaderboard from '../leaderboard/hwrld-leaderboard';
import HwrldFooter from '../footer/hwrld-footer';


class HwrldHomepageV2 {
	constructor(dynamicOptions) {
	    let defaults = {};
		this.options = handleDefaults(defaults, dynamicOptions);
		this.renderElms();
	}

	renderElms() {
		new HwrldHeader(
			this.options.header.element, 
			this.options.header.options 
		);

		new HwrldAgentLocator(
			this.options.agentLocator.element, 
			this.options.agentLocator.options 
		);

		new HwrldLeaderboard(
			this.options.leaderboard.element, 
			this.options.leaderboard.options 
		);

		new HwrldFooter(
			this.options.footer.element, 
			this.options.footer.options 
		);
	}

	
}

window.HwrldHomepageV2 = HwrldHomepageV2;