/**
 * Created by trevor on 7/8/2016.
 */
import * as angular from 'angular';
import * as um from 'web-user-management/user/module';
import {InputSuiteModule} from "web-input";
import {definition} from "./Definition";
import {IRouter} from "web-angularjs-component-definition/IRouter";
import {LightModule} from './light/module';

export let LoadRouter = function (stateProvider, $urlRouterProvider) {
	um.loadRouter(stateProvider, $urlRouterProvider); // user management states.

	stateProvider.state('light', new IRouter('/light', definition.light));
};

export let DeskLightApp = angular.module('desk-light-app', [
	InputSuiteModule.name,
	LightModule.name
]);


