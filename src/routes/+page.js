import { redirect } from '@sveltejs/kit';

import dayjs from 'dayjs';
import { base } from '$app/paths';

const year = dayjs().year();

export async function load() {
	throw redirect(302, `${base}/ps/hk/${year}`);
}
