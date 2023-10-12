export interface LandingPage {
	data: {
		attributes: LandingPageData;
	};
}

export interface LandingPageData {
	title: string;
	heroImage: StrapiImage;
	headerLogo: StrapiImage;
	subtitle: string;
	aboutUs: (AboutUsTextSection | AboutUsImageSection)[];
}

interface AboutUsTextSection {
	title: string;
	content: string;
}

interface AboutUsImageSection {
	images: StrapiImage[];
}

interface StrapiImage {
	data: {
		id: number;
		attributes: {
			url: string;
		};
	};
}
