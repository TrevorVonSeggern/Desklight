import {definition} from '../../Definition';
import {UserFactory} from "../userManagement/user/factory";

export class LightController {
	static controllerName = definition.light.controllerName;
	static $inject: any[] = ['$scope', UserFactory.factoryName];

	name: string;

	r: number = 0;
	g: number = 0;
	b: number = 0;

	constructor($scope: any, public userFactory: UserFactory) {
		this.update();
		this.name = "Light";
		$scope.vm = this;
	}

	update() {
		this.userFactory.httpServerCall('/api/light/', 'get', undefined, (data) => {
			data = data.data;
			if (!data.error) {
				this.r = data.power.red;
				this.g = data.power.green;
				this.b = data.power.blue;
			}
		});
	}

	red() {
		this.userFactory.httpServerCall('/api/light/red', 'put', undefined, () => {
			this.r = 255;
			this.g = 0;
			this.b = 0;
		});
	}

	green() {
		this.userFactory.httpServerCall('/api/light/green', 'put', undefined, () => {
			this.r = 0;
			this.g = 255;
			this.b = 0;
		});
	}

	blue() {
		this.userFactory.httpServerCall('/api/light/blue', 'put', undefined, () => {
			this.r = 0;
			this.g = 0;
			this.b = 255;
		});
	}

	on() {
		this.userFactory.httpServerCall('/api/light/on', 'put', undefined, () => {
			this.r = 255;
			this.g = 255;
			this.b = 255;
		});
	}

	off() {
		this.userFactory.httpServerCall('/api/light/off', 'put', undefined, () => {
			this.r = 0;
			this.g = 0;
			this.b = 0;
		});
	}

	reset() {
		this.userFactory.httpServerCall('/api/light/reset', 'put', undefined, () => {
			this.update();
		});
	}

	setCustom() {
		let rValue: number = Math.floor(this.r);
		let gValue: number = Math.floor(this.g);
		let bValue: number = Math.floor(this.b);
		let params: string = '?r=' + rValue + '&g=' + gValue + '&b=' + bValue;

		this.userFactory.httpServerCall('/api/light/set' + params, 'put', undefined, (data) => {
			data = data.data;
			if (!data.error) {
				this.r = data.power.red;
				this.g = data.power.green;
				this.b = data.power.blue;
			}
		});
	}

}
LightController.$inject.push(LightController);

