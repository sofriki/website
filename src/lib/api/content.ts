import { axiosInstance } from './instance';
import type { LandingPageData, LandingPage, LinkData, Links, Banner } from './types';

export async function getLandingPageContent(): Promise<LandingPageData> {
	const data = await axiosInstance.get<LandingPage>('/website-content?populate=deep');

	return data.data.data.attributes;
}

export async function getLinks(): Promise<LinkData[]> {
	const data = await axiosInstance.get<Links>('/links');

	return data.data.data;
}

export async function getBanner(): Promise<Banner> {
	const data = await axiosInstance.get<Banner>('/banner');

	return data.data;
}
