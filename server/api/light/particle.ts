// Created by trevor on 1/8/17.
import logs from "web-server-database/server/logs";
let Particle = require('particle-io');
let request = require('request');
import {config} from '../../config/database';

function resetParticleBoard() {
	io.turnOffAll();
}

function unInitialized(value: number) {
	logs('Not initialized yet...');
}

// init colors.
let timer = 600;

let changeRed = unInitialized;
let changeBlue = unInitialized;
let changeGreen = unInitialized;
let changeAll = function (r, g, b) {
	logs('Not initialized yet...');
};

let redPin = 'A4';
let greenPin = 'A5';
let bluePin = 'A7';

let redPower: number = 0;
let greenPower: number = 0;
let bluePower: number = 0;

let board;

let Particle_api = require('particle-api-js');
let particle_api = new Particle_api();
particle_api.login({username: config.light.particleUsername, password: config.light.particlePassword}).then((data) => {
	logs('particle login success.');
	let token = data.body.access_token;
	let devicesPr = particle_api.listDevices({auth: token});

	devicesPr.then(
		function (devices) {
			logs('particle device list success.');
			let deviceId = devices.body[0].id;

			function httpCall() {
				let url: string = 'https://api.particle.io/v1/devices/' + deviceId.toString() +
					'/set';
				let options = {
					access_token: token.toString(),
				};
				let body = 'arg=' + redPower.toString() + ',' + greenPower.toString() + ',' + bluePower.toString();

				request({
					headers: {'content-type': 'application/x-www-form-urlencoded'},
					url: url,
					qs: options,
					method: 'POST',
					form: body
				}, (error) => {
					if (error)
						logs(error);
				})
			}

			changeRed = function (value) {
				redPower = value;
				httpCall();
			};
			changeGreen = function (value) {
				greenPower = value;
				httpCall();
			};
			changeBlue = function (value) {
				bluePower = value;
				httpCall();
			};
			changeAll = function (r, g, b) {
				redPower = r;
				greenPower = g;
				bluePower = b;
				httpCall();
			};

		},
		function (err) {
			console.log('List devices call failed: ', err);
		}
	);


}, (error) => {
	logs(error);
});


export class io {
	static makeRed() {
		changeAll(255, 0, 0);
	}

	static makeGreen() {
		changeAll(0, 255, 0);
	}

	static makeBlue() {
		changeAll(0, 0, 255);
	}

	static turnOnAll() {
		changeAll(255, 255, 255);
	}

	static turnOffAll() {
		changeAll(0, 0, 0);
	}

	static setColor(red: number, green: number, blue: number) {
		changeAll(red, green, blue);
	}

	static getPower() {
		return {
			red: redPower,
			green: greenPower,
			blue: bluePower
		}
	}

	static resetParticle() {
		resetParticleBoard();
	}
}

function initSequence() {
	setTimeout(() => {
		setTimeout(() => {
			io.makeRed();
			setTimeout(() => {
				io.makeGreen();
				setTimeout(() => {
					io.makeBlue();
					setTimeout(() => {
						io.turnOnAll();
						setTimeout(() => {
							io.turnOffAll();
						}, timer);
					}, timer);
				}, timer);
			}, timer);
		}, timer);
	}, 100);
}
