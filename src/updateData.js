'use strict';

const request = require('request-promise-native');
const fs = require('fs');
var path = require('path');
const cheerio = require('cheerio');

const baseUrl = 'https://store.playstation.com/valkyrie-api/ch/HK/19/resolve/';
const baseUrlGraphql = 'https://web.np.playstation.com/api/graphql/v1/op?operationName=productRetrieveForUpsellWithCtas&variables=%7B%22productId%22%3A%22{CODE}%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%227d46a3b7949a7a980a04213ba6355c72b3713cb96f2e3cb077f318883fa3092b%22%7D%7D';
const lang = 'zh-hant-HK';

function getDataFromAPI(code) {
	return request({ url: baseUrl + code, json: true }).then(body => {
		let response = {};
		response.name = body.included[0].attributes.name;
		if (body.included[0].attributes.skus != undefined && body.included[0].attributes.skus[0] != undefined) {
			response.name += " (" + body.included[0].attributes.skus[0].name + ")";
		}
		response.image = body.included[0].attributes["thumbnail-url-base"] + "?w=240&h=240";
		response.platforms = body.included[0].attributes.platforms;
		response.brand = body.included[0].attributes["provider-name"];
		return response;
	})
		.catch(function (err) {
			console.log(err.message)
		});
}

async function getDataFromGraphqlAPI(code) {
	let brand = await request({ url: "https://store.playstation.com/?resolve=" + code })
		.then(body => {
			const $ = cheerio.load(body);
			let element = $("dd[data-qa=gameInfo#releaseInformation#publisher-value]");
			return element.text();
		})
		.catch((err) => {
			console.error(err);
			return '';
		});

	return request({ url: baseUrlGraphql.replace('{CODE}', code), json: true, headers: { 'x-psn-store-locale-override': lang } }).then(body => {
		let response = {};
		response.name = body.data.productRetrieve.concept.products[0].name;
		body.data.productRetrieve.concept.products[0].media.forEach(function (element) {
			if (element.role === 'MASTER') {
				response.image = element.url + "?w=240&h=240";
			}
		})
		response.platforms = body.data.productRetrieve.concept.products[0].platforms;
		response.brand = brand;
		return response;
	})
		.catch(function (err) {
			console.log(err.message)
		});
}

console.log("Start update");


(async function () {
	// read current file
	var filePath = path.join(__dirname, 'routes', 'api', 'hk', '_ps.json');
	let rawdata = fs.readFileSync(filePath, 'utf8');
	let json = JSON.parse(rawdata);

	// update
	// json.forEach(item => {
	for (const item of json) {
		if (item.title === undefined || item.image === undefined || item.platforms === undefined || item.brand === undefined) {
			console.log(item.code + " need update");
			let response = await getDataFromGraphqlAPI(item.code);
			item.title = response.name;
			item.image = response.image;
			item.platforms = response.platforms;
			item.brand = response.brand;
			console.log(item.title + " updated");
		}
	};

	// save result
	let data = JSON.stringify(json, null, 4);

	fs.writeFile(filePath, data, (err) => {
		if (err) throw err;
		console.log("Update finish");
	});
})();