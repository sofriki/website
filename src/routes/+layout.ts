import { getBanner } from '$lib/api/content';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	const content = getBanner();

	return content;
};
