/**
 * Created by trevor on 5/31/16.
 */
import {LightController} from './controller';
import IModule = angular.IModule;
import {definition} from "../Definition";
import * as angular from "angular";

import 'angular-bootstrap-colorpicker';

let module: IModule = angular.module(definition.light.moduleName, ['colorpicker.module']);

module.controller(LightController.controllerName, LightController.$inject);

export let LightModule = module;