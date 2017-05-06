// Created by trevor on 12/4/16.

import {io} from './particle';
import {CheckNumberParameter} from "../commonFunctions";

function success(res) {
	res.send({error: false});
}

export function makeRed(req, res) {
	io.makeRed();
	success(res);
}

export function makeGreen(req, res) {
	io.makeGreen();
	success(res);
}

export function makeBlue(req, res) {
	io.makeBlue();
	success(res);
}

export function on(req, res) {
	io.turnOnAll();
	success(res);
}

export function off(req, res) {
	io.turnOffAll();
	success(res);
}

export function reset(req, res) {
	io.resetParticle();
	success(res);
}

export function getCurrentPower(req, res) {
	res.json({error: false, power: io.getPower()});
}

export function setColors(req, res) {
	let red: number = CheckNumberParameter(req.query['r']);
	let green: number = CheckNumberParameter(req.query['g']);
	let blue: number = CheckNumberParameter(req.query['b']);
	io.setColor(red, green, blue);
	getCurrentPower(req, res);
}