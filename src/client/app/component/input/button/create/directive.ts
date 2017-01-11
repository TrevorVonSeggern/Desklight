import {definition} from '../../../../Definition';
export function directive() {
	return {
		scope: {
			'click': '&'
		},
		controller: definition.inputCreateButton.controllerName,
		controllerAs: "vm",
		bindToController: true,
		templateUrl: definition.inputCreateButton.templateUrl
	};
}

