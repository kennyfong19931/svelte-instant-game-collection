import json from '_ps.json';
import dayjs from 'dayjs';

const yearList = new Set();
json.forEach(json => {
	let year = dayjs(json.startTime).year();
	yearList.add(year);
});

export function get(req, res, next) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify({
		code: '1000',
		message: 'Success',
		data: Array.from(yearList).sort(function (a, b) { return b - a })
	}));
}
