import {definition} from "../Definition";
import {AjaxFactory} from "web-angularjs-user-factory/AjaxFactory";
import * as _ from 'lodash';

export class LightController {
	static controllerName = definition.light.controllerName;
	static $inject: any[] = ['$scope', AjaxFactory.factoryName];

	name: string;

	r: number = 0;
	g: number = 0;
	b: number = 0;

	constructor($scope: any, public ajaxFactory: AjaxFactory) {
		this.update();
		this.name = "Light";
		$scope.vm = this;
		let selectColor = (input) => {
			if (!input || typeof(input) !== 'string')
				return;
			try {
				input = input.replace('rgb(', '');
				input = input.replace(')', '');
				let parts = input.split(",");
				$scope.vm.r = parseInt(parts[0]);
				$scope.vm.g = parseInt(parts[1]);
				$scope.vm.b = parseInt(parts[2]);
				let params: string = '?r=' + $scope.vm.r + '&g=' + $scope.vm.g + '&b=' + $scope.vm.b;
				ajaxFactory.httpServerCall('/api/light/set' + params, 'put', undefined, (data) => {
					if (!data.error) {
						$scope.vm.r = data.power.red;
						$scope.vm.g = data.power.green;
						$scope.vm.b = data.power.blue;
					}
				});
			}
			catch (ignored) {
			}
		}

		$scope.$watch('color', _.debounce((value) => {
			$scope.$apply(() => {
				selectColor(value);
			});
		}, 500));
	}

	update() {
		this.ajaxFactory.httpServerCall('/api/light/', 'get', undefined, (data) => {
			if (!data.error) {
				this.r = data.power.red;
				this.g = data.power.green;
				this.b = data.power.blue;
			}
		});
	}

	red() {
		this.ajaxFactory.httpServerCall('/api/light/red', 'put', undefined, () => {
			this.r = 255;
			this.g = 0;
			this.b = 0;
		});
	}

	green() {
		this.ajaxFactory.httpServerCall('/api/light/green', 'put', undefined, () => {
			this.r = 0;
			this.g = 255;
			this.b = 0;
		});
	}

	blue() {
		this.ajaxFactory.httpServerCall('/api/light/blue', 'put', undefined, () => {
			this.r = 0;
			this.g = 0;
			this.b = 255;
		});
	}

	on() {
		this.ajaxFactory.httpServerCall('/api/light/on', 'put', undefined, () => {
			this.r = 255;
			this.g = 255;
			this.b = 255;
		});
	}

	off() {
		this.ajaxFactory.httpServerCall('/api/light/off', 'put', undefined, () => {
			this.r = 0;
			this.g = 0;
			this.b = 0;
		});
	}

	reset() {
		this.ajaxFactory.httpServerCall('/api/light/reset', 'put', undefined, () => {
			this.update();
		});
	}

	setCustom() {
		let rValue: number = Math.floor(this.r);
		let gValue: number = Math.floor(this.g);
		let bValue: number = Math.floor(this.b);
		let params: string = '?r=' + rValue + '&g=' + gValue + '&b=' + bValue;

		this.ajaxFactory.httpServerCall('/api/light/set' + params, 'put', undefined, (data) => {
			if (!data.error) {
				this.r = data.power.red;
				this.g = data.power.green;
				this.b = data.power.blue;
			}
		});
	}

}
LightController.$inject.push(LightController);

