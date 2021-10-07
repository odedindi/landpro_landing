import { NextApiRequest, NextApiResponse } from 'next';
import { url } from 'utils/constants';

type NewPolygonResponse = {
	status?: number;
	message?: string;
	data?: any;
};

const handler = async (
	{ body }: NextApiRequest,
	res: NextApiResponse<NewPolygonResponse>,
) => {
	console.log(body);
	const config = {
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'application/json',
		}),
		body: body,
	};

	const response = await fetch(`${url}api/polygons/new/`, config);
	console.log(response);
	res.json({
		data: response,
	});
	// const data = await response.json();
	// console.log('NewPolygonResponse_data: ', data);
	// if (data.ok) {
	// 	res.status(200).json({
	// 		status: 200,
	// 		message: 'New polygon analysed triumphantly',
	// 		data: data,
	// 	});
	// } else {
	// 	res.status(500).json({ status: 500, message: 'Error: Email not sent!' });
	// }
};

export default handler;
