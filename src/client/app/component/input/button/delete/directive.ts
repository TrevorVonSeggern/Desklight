import {definition} from '../../../../Definition';
import {controller} from './controller';
export function directive() {
	return {
		scope: {
			'click': '&'
		},
		controller: definition.inputDeleteButton.controllerName,
		controllerAs: "vm",
		bindToController: true,
		templateUrl: definition.inputDeleteButton.templateUrl
	};
}

