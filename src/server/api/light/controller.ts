// Created by trevor on 12/4/16.
import * as express from 'express';
import {isLoggedIn} from "../auth/authStrategies";
import * as ctrl from "./functions";
export var router = express.Router();

// Create endpoint handlers for /users
router.route('/') .get(ctrl.getCurrentPower);

router.route('/on').put(isLoggedIn, ctrl.on);
router.route('/off').put(isLoggedIn, ctrl.off);
router.route('/red').put(isLoggedIn, ctrl.makeRed);
router.route('/green').put(isLoggedIn, ctrl.makeGreen);
router.route('/blue').put(isLoggedIn, ctrl.makeBlue);

router.route('/set').put(isLoggedIn, ctrl.setColors);

router.route('/reset').put(isLoggedIn, ctrl.reset);

export let LightRouter = router;