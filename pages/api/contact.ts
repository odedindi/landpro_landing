import { NextApiRequest, NextApiResponse } from 'next';

// sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

type ContactFormResponse = {
	status: number;
	message: string;
};
const handler = async (
	{ body, method }: NextApiRequest,
	res: NextApiResponse<ContactFormResponse>,
) => {
	const config = {
		method: method,
		headers: new Headers({ 'Content-Type': 'application/json' }),
		body: body,
	};
	const url = `https://formspree.io/f/xzbyeqda`;
	const response = await fetch(url, config);
	const data = await response.json();
	if (data.ok) {
		res
			.status(200)
			.json({ status: 200, message: 'Email was sent triumphantly' });
	} else {
		res.status(500).json({ status: 500, message: 'Error: Email not sent!' });
	}
};

export default handler;
