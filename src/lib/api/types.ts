export interface LandingPage {
	data: {
		attributes: LandingPageData;
	};
}

export interface LandingPageData {
	title: string;
	heroImage: { data: StrapiImage };
	headerLogo: { data: StrapiImage };
	subtitle: string;
	aboutUs: (AboutUsTextSection | AboutUsImageSection | AboutUsDivider)[];
}

export interface AboutUsTextSection {
	__component: AboutUsComponentTypes.TextSection;
	title: string | null;
	content: string | null;
}

export interface AboutUsImageSection {
	__component: AboutUsComponentTypes.ImageSection;
	images: {
		data: StrapiImage[];
	};
}

export interface AboutUsDivider {
	__component: AboutUsComponentTypes.Divider;
	text: string | null;
}

export interface StrapiImage {
	id: number;
	attributes: {
		url: string;
	};
}

export interface Links {
	data: LinkData[];
}

export interface LinkData {
	id: number;
	attributes: {
		display: string;
		link: string;
	};
}

export enum AboutUsComponentTypes {
	TextSection = 'landing.about-us',
	ImageSection = 'landing.image-section',
	Divider = 'landing.divider'
}
