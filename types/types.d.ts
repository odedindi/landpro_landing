type ContentBlockProps = {
	children: string;
	content: string;
	icon: string;
	iconAlt: string;
	id: string;
	isFirst?: boolean;
	title: string;
};

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
