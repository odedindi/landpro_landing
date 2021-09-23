// ========================== styles ==========================
import * as S from '../style';
// ======================== components ========================
import { Col, Row } from 'antd';
import { SocialIcon } from 'react-social-icons';
// ============================================================
const SocialMediaButton = ({ label, url }: { label: string; url: string }) => (
	<SocialIcon
		label={label}
		url={url}
		style={{ width: '2rem', height: '2rem' }}
	/>
);

type ContactPersonProps = {
	name: string;
	email: string;
	linkedin: string;
};
export const ContactPerson = ({
	name,
	email,
	linkedin,
}: ContactPersonProps) => (
	<Col lg={8} md={8} sm={12} xs={14}>
		<S.ContactName>{name}</S.ContactName>
		<Row typeof="flex" justify="space-around">
			<SocialMediaButton label="Email" url={`mailto:${email}`} />
			<SocialMediaButton
				label="Linkedin"
				url={`https://www.linkedin.com/in/${linkedin}/`}
			/>
		</Row>
	</Col>
);

type GithubLinkProps = {
	href: string;
};
export const GithubLink = ({ href }: GithubLinkProps) => (
	<SocialIcon label="Github" url={href} />
);
