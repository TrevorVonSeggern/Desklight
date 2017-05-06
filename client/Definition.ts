import {IComponent} from "web-angularjs-component-definition/IComponent";

export class DefinitionConfiguration {
	light: IComponent = new IComponent('light', 'client/light/');

	constructor() {
	}
}

export let definition: DefinitionConfiguration = new DefinitionConfiguration();