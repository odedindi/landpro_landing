// ======================= React & Next =======================
import * as React from 'react';
// ========================== styles ==========================
import * as S from './style';
// ======================= translations =======================
import { useTranslation } from 'next-i18next';
// ======================== components ========================
import { Fade } from 'react-awesome-reveal';
import { Footer, FooterItem } from '@zendeskgarden/react-modals';
import { Input, TextArea } from './InputFields';
import useForm from 'hooks/useForm';
import validate from './validationRules';
// ============================================================

const ContactForm = ({ id }: { id: string }) => {
	const { t } = useTranslation('contactForm');
	const [isVisible, setIsVisible] = React.useState(false);
	const { values, errors, handleChange, handleSubmit } = useForm(validate);

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
			<S.ContactButton onClick={() => setIsVisible(true)}>
				{t('contactBtn')}
			</S.ContactButton>

			{isVisible && (
				<S.ContactModal onClose={() => setIsVisible(false)} isLarge>
					<S.ContactWrapper id={id}>
						<S.FormGroup
							method="post"
							autoComplete="off"
							onSubmit={handleSubmit}>
							<Input
								type="text"
								name="name"
								label={t('Name')}
								placeholder={t('NamePlaceholder')}
								value={values.name || ''}
								onChange={handleChange}
							/>
							<ValidationType type="name" />
							<Input
								type="text"
								name="email"
								label={t('Email')}
								placeholder={t('EmailPlaceholder')}
								value={values.email || ''}
								onChange={handleChange}
							/>
							<ValidationType type="email" />
							<Input
								type="text"
								name="subject"
								label={t('Subject')}
								placeholder=""
								value={values.subject || ''}
								onChange={handleChange}
							/>
							<TextArea
								name="message"
								label={t('Message')}
								placeholder=""
								value={values.message || ''}
								onChange={handleChange}
							/>
							<ValidationType type="message" />
							<S.ButtonWrapper>
								<S.ContactButton type="submit">
									{t('submitBtn')}
								</S.ContactButton>
							</S.ButtonWrapper>
						</S.FormGroup>
					</S.ContactWrapper>

					<Footer>
						<FooterItem>
							<S.ContactButton onClick={() => setIsVisible(false)} isBasic>
								{t('cancelBtn')}
							</S.ContactButton>
						</FooterItem>
					</Footer>
				</S.ContactModal>
			)}
		</>
	);
};

export default ContactForm;
