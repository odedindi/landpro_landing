import Image from 'next/image';
import * as S from '../style';

import { Col, Row } from 'antd';

type SocialLinkProps = {
	href: string;
	src: string;
	title: string;
};
const SocialLink = ({ href, src, title }: SocialLinkProps) => (
	<S.SocialLink>
		<S.NavLink
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			key={title}
			aria-label={title}>
			<Image src={src} alt={title} width="20px" height="20px" />
		</S.NavLink>
	</S.SocialLink>
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
			<SocialLink
				href={`mailto:${email}`}
				src="/assets/logos/gmail.svg"
				title="gmail"
			/>
			<SocialLink
				href={`https://www.linkedin.com/in/${linkedin}/`}
				src="/assets/logos/linkedin-color.svg"
				title="linkedin"
			/>
		</Row>
	</Col>
);

type GithubLinkProps = {
	href: string;
};
export const GithubLink = ({ href }: GithubLinkProps) => (
	<SocialLink href={href} src="/assets/logos/github.svg" title="github" />
);
