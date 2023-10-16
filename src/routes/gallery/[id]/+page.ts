import { getGallery } from '$lib/api/content';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const content = await getGallery(params.id);

	return content;
};
