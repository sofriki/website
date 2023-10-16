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
		| TitleComponent
		| TextComponent
		| ImageComponent
		| DividerComponent
		| SpacerComponent
		| UOComponent
	)[];
}

export interface TitleComponent {
	__component: ComponentTypes.Title;
	title: string | null;
}

export interface TextComponent {
	__component: ComponentTypes.TextSection;
	title: string | null;
	content: string | null;
}

export interface ImageComponent {
	__component: ComponentTypes.ImageSection;
	images: {
		data: StrapiImage[];
	};
}

export interface DividerComponent {
	__component: ComponentTypes.Divider;
	text: string | null;
}

export interface SpacerComponent {
	__component: ComponentTypes.Spacer;
}

export interface UOComponent {
	__component: ComponentTypes.UO;
	uos: {
		data: UORep[];
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

export interface Galleries {
	data: Gallery[] | [];
}

export interface Gallery {
	id: number;
	attributes: {
		title: string;
		description: string;
		images: {
			data: StrapiImage[];
		};

		cover: {
			data: StrapiImage;
		};
	};
}

export interface UORep {
	id: number;
	attributes: {
		name: string;
		role: string;
		image: {
			data: StrapiImage;
		};
	};
}

export interface StrapiImage {
	id: number;
	attributes: {
		url: string;
	};
}

export enum ComponentTypes {
	Title = 'landing.title',
	TextSection = 'landing.about-us',
	ImageSection = 'landing.image-section',
	Divider = 'landing.divider',
	Spacer = 'landing.spacer',
	UO = 'landing.uo'
}
