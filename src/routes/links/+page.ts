import { getLinks } from '$lib/api/content';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const content = getLinks();

	return {
		data: content
	};
};
