type ContentBlockProps = {
	content: string;
	icon: string;
	iconAlt: string;
	id: string;
	isFirst?: boolean;
	title: string;
};

type ValidationTypeProps = { type: 'name' | 'email' | 'subject' | 'message' };

type Validate = (values: {
	name: string;
	email: string;
	subject: string;
	message: string;
}) => {
	name: string;
	email: string;
	subject: string;
	message: string;
};

type ImgCredit = {
	name: string;
	link: string;
};

type PotentialUser = {
	id: string;
	img: {
		src: string;
		alt: string;
		credit: ImgCredit;
	};
};

type LandProStage = {
	imgSrc: string;
	title: string;
	text: string;
};

type AyoraImageID =
	| 'june13'
	| 'july13'
	| 'august13'
	| 'november13'
	| 'march14'
	| 'april14'
	| 'may14'
	| 'june14';

type AyoraExample = { id: AyoraImageID; image: string };

type Article = {
	title: string;
	content: {
		description: string;
		url: string;
		media: string;
		mediaType: 'image' | 'video';
		publishedAt: string;
	};
	source: {
		name: string;
		url: string;
		author: string;
	};
};
