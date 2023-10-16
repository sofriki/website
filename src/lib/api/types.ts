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
	sections: (
		| AboutUsTitleComponent
		| AboutUsTextComponent
		| AboutUsImageComponent
		| AboutUsDividerComponent
		| AboutUsSpacerComponent
	)[];
}

export interface AboutUsTitleComponent {
	__component: AboutUsComponentTypes.Title;
	title: string | null;
}

export interface AboutUsTextComponent {
	__component: AboutUsComponentTypes.TextSection;
	title: string | null;
	content: string | null;
}

export interface AboutUsImageComponent {
	__component: AboutUsComponentTypes.ImageSection;
	images: {
		data: StrapiImage[];
	};
}

export interface AboutUsDividerComponent {
	__component: AboutUsComponentTypes.Divider;
	text: string | null;
}

export interface AboutUsSpacerComponent {
	__component: AboutUsComponentTypes.Spacer;
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

export interface Banner {
	data: BannerData | null;
}

export interface BannerData {
	attributes: {
		content: string | null;
	};
}

export enum AboutUsComponentTypes {
	Title = 'landing.title',
	TextSection = 'landing.about-us',
	ImageSection = 'landing.image-section',
	Divider = 'landing.divider',
	Spacer = 'landing.spacer'
}
