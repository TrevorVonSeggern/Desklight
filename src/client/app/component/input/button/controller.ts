import IScope = angular.IScope;

export class controller {
	type;

	constructor(scope) {
		if (scope.type === undefined) {
			scope.type = 'button'
		}
	}

	static $inject:string[];
}
controller.$inject = ['$scope'];
