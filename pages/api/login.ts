import { NextApiRequest, NextApiResponse } from 'next';
import { url } from 'utils/constants';

type LoginResponse = {
	status: number;
	message: string;
	data?: any;
};
const handler = async (
	{ body, method }: NextApiRequest,
	res: NextApiResponse<LoginResponse>,
) => {
	const config = {
		method: method,
		headers: new Headers({ 'Content-Type': 'application/json' }),
		body: body,
	};
	const response = await fetch(url, config);
	const data = await response.json();
	if (data.ok) {
		res
			.status(200)
			.json({ status: 200, message: 'Loging in triumphantly', data: data });
	} else {
		res.status(500).json({ status: 500, message: 'Error: Login Failed!' });
	}
};

export default handler;
