// ======================= React & Next =======================
import * as React from 'react';
import Image from 'next/image';
// ========================== styles ==========================
import { Row, Col } from 'antd';
import Fade from 'react-reveal/Fade';
import * as S from '../style';
// ======================= translations =======================
import { useTranslation } from 'next-i18next';
// ======================== components ========================
import { ContactPerson, GithubLink } from './IconLinks';
import Container from '../Container';

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
			<Fade>
				<S.Footer>
					<Container>
						<Row typeof="flex" justify="space-between">
							<Col lg={12} md={14} sm={16} xs={24}>
								<S.Title>{t('footer.contact')}</S.Title>
								<br />
								<S.Paragraph>{t(`footer.description`)}</S.Paragraph>
								<br />
							</Col>
							<Col lg={12} md={14} sm={16} xs={24}>
								{contacts.map((contact) => (
									<ContactPerson
										key={contact.name}
										name={contact.name}
										email={contact.email}
										linkedin={contact.linkedin}
									/>
								))}
							</Col>
						</Row>
						<Row typeof="flex" justify="space-around">
							<Col lg={6} md={6} sm={6} xs={24}>
								<S.Title>{t('footer.company')}</S.Title>
								<S.FooterLink href="/about">{t('footer.about')}</S.FooterLink>
								<S.FooterLink href="/#">{t('footer.career')}</S.FooterLink>
							</Col>
							{/* <Col lg={6} md={6} sm={6} xs={24}>
                                <S.Title>{t('footer.language')}</S.Title>
                                <S.SelectLanguageWrapper>
                                    <SelectLanguage iconSize="small" />
                                </S.SelectLanguageWrapper>
                            </Col> */}
						</Row>
					</Container>
				</S.Footer>
				<S.Extra>
					<Container border={true}>
						<S.FooterContainer>
							<GithubLink href="https://github.com/odedindi/landpro" />
							<S.LogoContainer>
								<Image
									src="/assets/logos/logo.png"
									alt="landpro logo"
									height="50%"
									width="50%"
								/>
								<p>&copy;{new Date().getFullYear()}</p>
							</S.LogoContainer>
						</S.FooterContainer>
					</Container>
				</S.Extra>
			</Fade>
		</>
	);
};

export default Footer;
