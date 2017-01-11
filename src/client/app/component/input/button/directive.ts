
import {definition} from '../../../Definition';
export function directive() {
	return {
		scope: {
			'label': '=',
			'disabled': '=',
			'click': '&',
			'type': '=',
		},
		controller: definition.inputButton.controllerName,
		controllerAs: 'vm',
		bindToController: true,
		// replace: true,
		templateUrl: definition.inputButton.templateUrl
	};
}

