import * as angular from 'angular';
import '@uirouter/angularjs';
import {InputSuiteModule} from 'web-input';
import {UserManagementModule} from 'web-user-management';
import {SingleSelectModule} from 'web-input-select-list';
import {LoadRouter, DeskLightApp} from './client/app';

export let clientApp = angular.module('app', [
	'ui.router',
	InputSuiteModule.name,
	DeskLightApp.name,
	UserManagementModule.name,
	// SingleSelectModule.name
]).controller('ctrl', function ($scope, $rootScope) {
	let vm = $scope;

	vm.root = $rootScope;
	vm.loggedIn = false;
	vm.userRole = 'Guest';
	vm.userless = false;

	let users = ['Administrator', 'User'];
	vm.menu = [
		{name: 'Light', url: 'light', baseName: 'light', requireLogin: true, users: users},
	];
}).config(($stateProvider, $urlRouterProvider) => {
	LoadRouter($stateProvider, $urlRouterProvider);
});

