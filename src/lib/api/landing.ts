import { axiosInstance } from './instance';
import type { LandingPageData, LandingPage } from './types';

export async function getLandingPageContent(): Promise<LandingPageData> {
	const data = await axiosInstance.get<LandingPage>('/website-content?populate=deep');

	return data.data.data.attributes;
}
