// ======================= React & Next =======================
import * as React from 'react';
// ========================== styles ==========================
import { Row, Col } from 'antd';
import * as S from './style';
// ======================= translations =======================
import { useTranslation } from 'next-i18next';
// ========================== modal ===========================
import {
	Modal,
	Header,
	Body,
	Footer,
	FooterItem,
	Close,
} from '@zendeskgarden/react-modals';
// ======================== components ========================
import { Fade } from 'react-awesome-reveal';
import useForm from 'hooks/useForm';
import validate from './valudationRules';
import { Input, TextArea } from './InputFields';
import Button from 'components/Button';
// import { Button } from '@zendeskgarden/react-buttons';
// const Block = lazy(() => import('../layout/Block'));
// ========================== icons ===========================
import RateReviewRoundedIcon from '@material-ui/icons/RateReviewRounded';
import { NavBarButton } from 'components/Layout/style';
// ============================================================

type ContactFormProps = {
	title: string;
	content?: string;
	id: string;
};
const ContactForm = ({ title, content, id }: ContactFormProps) => {
	const { t } = useTranslation();
	const [isVisible, setIsVisible] = React.useState(false);

	const { values, errors, handleChange, handleSubmit } = useForm(validate);

	type ValidationTypeProps = { type: 'name' | 'email' | 'subject' | 'message' };

	const ValidationType = ({ type }: ValidationTypeProps) => {
		const ErrorMessage = errors[type];
		return errors[type] ? (
			<Fade>
				<S.Span>{ErrorMessage}</S.Span>
			</Fade>
		) : (
			<S.Span />
		);
	};

	return (
		<>
			<NavBarButton onClick={() => setIsVisible(true)} isBasic>
				Contact
				<RateReviewRoundedIcon fontSize="medium" />
			</NavBarButton>

			{isVisible && (
				<Modal onClose={() => setIsVisible(false)} isLarge>
					<Header>Do you need plant food?</Header>
					<Body>
						<S.ContactWrapper id={id}>
							<Row justify="space-between" align="middle">
								{/* <Col lg={12} md={11} sm={24}>
                        <Block padding={true} title={title} content={content} />
                    </Col> */}
								<Col lg={12} md={12} sm={24}>
									<S.FormGroup
										method="post"
										autoComplete="off"
										onSubmit={handleSubmit}>
										<Col span={24}>
											<Input
												type="text"
												name="name"
												label={t('contact.form.Name')}
												placeholder={t('contact.form.NamePlaceholder')}
												value={values.name || ''}
												onChange={handleChange}
											/>
											<ValidationType type="name" />
										</Col>
										<Col span={24}>
											<Input
												type="text"
												name="email"
												label={t('contact.form.Email')}
												placeholder={t('contact.form.EmailPlaceholder')}
												value={values.email || ''}
												onChange={handleChange}
											/>
											<ValidationType type="email" />
										</Col>
										<Col span={24}>
											<Input
												type="text"
												name="subject"
												label={t('contact.form.Subject')}
												placeholder={t('contact.form.SubjectPlaceholder')}
												value={values.subject || ''}
												onChange={handleChange}
											/>
										</Col>
										<Col span={24}>
											<TextArea
												name="message"
												label={t('contact.form.Message')}
												placeholder="MessagePlaceholder"
												value={values.message || ''}
												onChange={handleChange}
											/>
											<ValidationType type="message" />
										</Col>
										<S.ButtonWrapper>
											<Button type="submit">
												{t('contact.form.submitBtn')}
											</Button>
										</S.ButtonWrapper>
									</S.FormGroup>
								</Col>
							</Row>
						</S.ContactWrapper>
					</Body>
					<Footer>
						<FooterItem>
							<Button onClick={() => setIsVisible(false)} isBasic>
								Cancel
							</Button>
						</FooterItem>
					</Footer>
				</Modal>
			)}
		</>
	);
};

export default ContactForm;
