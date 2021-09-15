// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Status = {
	status: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Status>) => {
	res.status(200).json({ status: 'Ok' });
};

export default handler;
