import { getLandingPageContent } from '$lib/api/content';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const content = getLandingPageContent();

	return content;
};
