import { getGalleries } from '$lib/api/content';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const content = getGalleries();

	return content;
};
