
import {definition} from '../../../Definition';
export function InputSliderDirective() {
	return {
		scope: {
			'label': '=',
			'value': '=',
			'disabled': '=',
		},
		controller: definition.inputSlider.controllerName,
		controllerAs: "vm",
		bindToController: true,
		templateUrl: definition.inputSlider.templateUrl
	};
}

