import json from '../_ps.json';
import dayjs from 'dayjs';

export function GET() {
	const yearList = new Set();
	json.forEach((json) => {
		let year = dayjs(json.startTime).year();
		yearList.add(year);
	});

	return new Response(
		JSON.stringify(
			Array.from(yearList).sort(function (a, b) {
				return b - a;
			})
		)
	);
}
