import sendgrid from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

type ContactFormResponse = {
	status: number;
	message: string;
};

const sendEmail = async (
	{ body }: NextApiRequest,
	res: NextApiResponse<ContactFormResponse>,
) => {
	try {
		await sendgrid.send({
			to: 'odedindi@gmail.com', // Your email where you'll receive emails
			from: 'landpro.carbon@gmail.com', // your website email address here
			subject: `${body.subject}`,
			html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>We got a new mail from ${body.name}</h3>
            <br>
              <h3 style="padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Their email is: ✉️${body.email}</h3>
              <div style="font-size: 16px;">
              <br>
              <p>Subject:</p>
              <p>${body.subject}</p>
              <br>
              <p>Message:</p>
              <p>${body.message}</p>
              <br>
              </div>
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-top: 1px solid #D1D5DB;">landpro.ch<br></p>

              </div>
              </div>
      </body>
      </html>`,
		});
	} catch (error: any) {
		// console.log(error);
		return res
			.status(error.statusCode || 500)
			.json({ status: error.statusCode || 500, message: error.message });
	}

	return res.status(200).json({ status: 200, message: 'yay' });
};

export default sendEmail;
