import { axiosInstance } from './instance';
import type {
	LandingPageData,
	LandingPage,
	LinkData,
	Links,
	Banner,
	Galleries,
	Gallery
} from './types';

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

export async function getGalleries(): Promise<Galleries> {
	const data = await axiosInstance.get<Galleries>('/galleries?populate[0]=cover');

	return data.data;
}

export async function getGallery(id: string): Promise<Gallery> {
	const data = await axiosInstance.get<{ data: Gallery }>(`/galleries/${id}?populate=deep`);

	return data.data.data;
}
