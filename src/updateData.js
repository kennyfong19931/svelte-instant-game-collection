'use strict';

const request = require('request-promise-native');
const fs = require('fs');
var path = require('path');

const baseUrl = 'https://store.playstation.com/valkyrie-api/ch/HK/19/resolve/'


function getDataFromAPI(url){
	return request({ url: url, json: true }).then(body => {
		let response = {};
		response.name = body.included[0].attributes.name;
		if (body.included[0].attributes.skus != undefined && body.included[0].attributes.skus[0] != undefined){
			response.name += " (" + body.included[0].attributes.skus[0].name + ")";
		}
		response.image = body.included[0].attributes["thumbnail-url-base"] + "?w=240&h=240";
		response.platforms = body.included[0].attributes.platforms;
		response.brand = body.included[0].attributes["provider-name"];
		return response;
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
			let response = await getDataFromAPI(baseUrl + item.code);
			item.title = response.name;
			item.image = response.image;
			item.platforms = response.platforms;
			item.brand = response.brand;
			console.log(item.title + " updated");
		}	
	};

	// save result
	let data = JSON.stringify(json, null, 4);
	// console.log(data);

	fs.writeFile(filePath, data, (err) => {
		if (err) throw err;
		console.log("Update finish");
	});
})();