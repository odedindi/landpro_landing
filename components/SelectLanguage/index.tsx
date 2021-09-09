/* eslint-disable @next/next/no-img-element */
// ======================= React & Next =======================
import * as React from 'react';
import { useRouter } from 'next/router';
// ========================== styles ==========================
import * as S from './style';
// ======================= translations =======================
import { useTranslation } from 'next-i18next';
// ======================== components ========================
import Select from './Select';
import { Button } from '@zendeskgarden/react-buttons';
// ============================================================

const SelectLanguage = () => {
	const { t, i18n } = useTranslation('common');
	const router = useRouter();
	const { locale: activeLocale, locales } = router;
	const otherLocales = locales!.filter((locale) => locale !== activeLocale);

	const [isVisible, setIsVisible] = React.useState(false);
	const isVisibleHandler = () => setIsVisible(!isVisible);
	const [currentLanguage] = React.useState(() => i18n.language);

	const onChangeLanguage = (locale: string) => {
		const { asPath, pathname, push, query } = router;

		push({ pathname, query }, asPath, { locale: locale });
	};

	return (
		<Select
			currentLanguage={currentLanguage}
			options={otherLocales.map((locale) => (
				<S.SelectLanguageButton
					key={locale}
					onClick={() => onChangeLanguage(locale)}>
					{t(`languages.${locale}`)}
					<Button.EndIcon>
						<img
							src={`assets/languageIcons/${locale}.png`}
							alt={`${locale} flag`}
						/>
					</Button.EndIcon>
				</S.SelectLanguageButton>
			))}
			isVisible={isVisible}
			isVisibleHandler={isVisibleHandler}
			modalTitle={t('languages.selectLang')}
		/>
	);
};

export default SelectLanguage;
