import IHttpService = angular.IHttpService;
import IWindowService = angular.IWindowService;

export function generateGUID() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}

	return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
		s4() + '-' + s4() + s4() + s4();
}

export abstract class BaseMultipleController {
	static controllerName: string = 'Base_Item_Multiple_Controller';
	static $inject: any[] = ['UserFactory', '$window'];

	constructor(public userFactory,
				public $window: IWindowService,
				public itemsUrl: string) {
		this.itemId = '';
	}

	mode: string;

	eventDetailFocused: boolean = false;
	eventCreateFocused: boolean = false;
	itemId: string = undefined;

	items: any[] = [];
	PAGE_SIZE: number = 100;

	listenerGUID: string = generateGUID();

	loadMore() {
		this.userFactory.httpServerCall(this.itemsUrl, 'GET', {
			limit: this.PAGE_SIZE,
			skip: this.items.length
		}, (response) => {
			let nItems = response.data;

			for (let i: number = 0; i < nItems.length; ++i) {
				this.items.push(nItems[i]);

			}
		});
	}

	abstract navigateToItem(id: string);

	selectItem(id: string) {
		if (this.mode === 'router') {
			return this.navigateToItem(id);
		}
		else if (this.mode == 'event') {
			this.eventDetailFocused = true;
			return this.itemId = id;
		}
	}

	create(route: string) {
		if (this.mode === 'event')
			return this.eventCreateFocused = true;
		else if (this.mode === 'router') {
			this.$window.location.href = route;
		}
	}
}

BaseMultipleController.$inject.push(BaseMultipleController);