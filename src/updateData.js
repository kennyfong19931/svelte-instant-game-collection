'use strict';

import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { load } from 'cheerio';

const __dirname = path.resolve();
const storePageUrl = 'https://store.playstation.com/?resolve={CODE}';
const baseUrl =
	'https://web.np.playstation.com/api/graphql/v1/op?operationName=productRetrieveForUpsellWithCtas&variables=%7B%22productId%22%3A%22{CODE}%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%227d46a3b7949a7a980a04213ba6355c72b3713cb96f2e3cb077f318883fa3092b%22%7D%7D';
const lang = 'zh-hant-HK';

async function getDataFromAPI(code) {
	return Promise.all([
		fetch(storePageUrl.replace('{CODE}', code)).then((r) => r.text()),
		fetch(baseUrl.replace('{CODE}', code), {
			headers: { 'x-psn-store-locale-override': lang }
		}).then((r) => r.json())
	])
		.then(([storePageResponse, apiResponse]) => {
			let response = {};

			// handle storePageResponse
			const $ = load(storePageResponse);
			let element = $('dd[data-qa=gameInfo#releaseInformation#publisher-value]');
			response.brand = element.text();

			// handle apiResponse
			response.name = apiResponse.data.productRetrieve.concept.products[0].name;
			apiResponse.data.productRetrieve.concept.products[0].media.forEach(function (element) {
				if (element.role === 'MASTER') {
					response.image = element.url + '?w=240&h=240';
				}
			});
			response.platforms = apiResponse.data.productRetrieve.concept.products[0].platforms;

			return response;
		})
		.catch(function (err) {
			console.log(err.message);
		});
}

console.log('Start update');

(async function () {
	// read current file
	var filePath = path.join(__dirname, 'src', 'routes', 'api', 'hk', '_ps.json');
	let rawdata = fs.readFileSync(filePath, 'utf8');
	let json = JSON.parse(rawdata);

	// update
	for (const item of json) {
		if (
			item.title === undefined ||
			item.image === undefined ||
			item.platforms === undefined ||
			item.brand === undefined
		) {
			console.log(`${item.code} need update`);
			let response = await getDataFromAPI(item.code);
			console.log(response);
			item.title = response.name;
			item.image = response.image;
			item.platforms = response.platforms;
			item.brand = response.brand;
			console.log(`- ${item.title} updated`);
		}
	}

	// save result
	let data = JSON.stringify(json, null, 4);

	fs.writeFile(filePath, data, (err) => {
		if (err) throw err;
		console.log('Update finish');
	});
})();
