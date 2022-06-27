import json from './_ps.json';
import dayjs from 'dayjs';

const gamelistByYear = new Map();
json.forEach(json => {
	let year = String(dayjs(json.startTime).year());
	if (gamelistByYear.has(year)) {
		gamelistByYear.get(year).push(json);
	} else {
		let yearList = [json];
		gamelistByYear.set(year, yearList);
	}
});

export function get({ params }) {
	let response = [];
	if (gamelistByYear.has(params.year)) {
		// merge different platform
		let gameList = gamelistByYear.get(params.year);
		let gameObject = {};
		gameList.map((game) => {
			if (gameObject.title !== game.title && gameObject.title !== undefined) {
				response.push(gameObject);
				gameObject = {};
			}

			if (gameObject.title === undefined) {
				gameObject = {
					startTime: game.startTime,
					endTime: game.endTime,
					title: game.title,
					image: game.image,
					brand: game.brand,
					platforms: game.platforms.map((platform) => ({
						platform: platform,
						code: game.code
					}))
				};
			} else {
				gameObject.platforms.push(...game.platforms.map((platform) => ({
					platform: platform,
					code: game.code
				})));
			}
		})

		return {
			body: response
		};
	} else {
		return {
			status: 404
		};
	}
}
