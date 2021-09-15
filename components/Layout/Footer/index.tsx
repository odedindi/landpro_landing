// ======================= React & Next =======================
import * as React from 'react';
import Image from 'next/image';
// ========================== styles ==========================
import { Row, Col } from 'antd';
import * as S from '../style';
// ======================= translations =======================
import { useTranslation } from 'next-i18next';
// ======================== components ========================
import { ContactPerson, GithubLink } from './IconLinks';
import Container from '../Container';
import { Logo } from 'components/Logo';
const Footer = () => {
	const { t } = useTranslation('footer');

	type Contact = {
		name: string;
		email: string;
		linkedin: string;
	};
	const contacts: Contact[] = [
		{
			name: 'Matteo J.R.',
			email: 'matteo.jriva@gmail.com',
			linkedin: 'matteojriva',
		},
		{
			name: 'Oded W.',
			email: 'oded.winberger@gmail.com',
			linkedin: 'odedw',
		},
	];

	return (
		<>
			<S.Footer>
				<Container>
					<Row typeof="flex" justify="space-around">
						<Col lg={24} md={24} sm={24} xs={24}>
							<S.Title>{t('footer.company')}</S.Title>
							<S.FooterLink href="/about">{t('footer.about')}</S.FooterLink>
							<S.FooterLink href="/#">{t('footer.career')}</S.FooterLink>
						</Col>
					</Row>
					<Row justify="center">
						<Col lg={10} md={10} sm={24} xs={24}>
							<br />
							<S.Title>{t('footer.contact')}</S.Title>
							<S.Paragraph>{t(`footer.description`)}</S.Paragraph>
						</Col>
						<Col lg={10} md={10} sm={24} xs={14}>
							<Row>
								{contacts.map((contact) => (
									<Col lg={24} md={24} sm={24} xs={24} key={contact.name}>
										<ContactPerson
											name={contact.name}
											email={contact.email}
											linkedin={contact.linkedin}
										/>
									</Col>
								))}
							</Row>
						</Col>
					</Row>
				</Container>
			</S.Footer>
			<S.Extra>
				<Container border={true}>
					<S.FooterContainer>
						<GithubLink href="https://github.com/odedindi/landpro" />
						<S.LogoContainer>
							<Logo type="Footer" />
						</S.LogoContainer>
					</S.FooterContainer>
				</Container>
			</S.Extra>
		</>
	);
};

export default Footer;
