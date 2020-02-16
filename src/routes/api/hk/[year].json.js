import json from '_ps.json';
import dayjs from 'dayjs';

const gamelist = new Map();
json.forEach(json => {
    let year = String(dayjs(json.startTime).year());
    // let month = dayjs(json.startTime).month() + 1;
    // if(gamelist.has(year)){
    //     let yearObject = gamelist.get(year);
    //     if(month in yearObject){
    //         yearObject[month].push(json);
    //     } else {
    //         yearObject[month] = [json];
    //     }
    //     gamelist.set(year, yearObject);
    // } else {
    //     let yearObject = {};
    //     yearObject[month] = [json];
    //     gamelist.set(year, yearObject);
	// }
	if (gamelist.has(year)) {
		gamelist.get(year).push(json);
	} else {
		let yearList = [json];
		gamelist.set(year, yearList);
	}
});

export function get(req, res, next) {
    const { year } = req.params;
    
	if (gamelist.has(year)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
            code: '1000',
            message: 'Success',
            data: gamelist.get(year).sort(function (a, b) {
				return a.startTime < b.startTime ? 1 : -1;
			})
		}));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
            code: '9000',
			message: 'No data'
		}));
	}
}
