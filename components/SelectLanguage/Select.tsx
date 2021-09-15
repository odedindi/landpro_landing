// ======================= React & Next =======================
import * as React from 'react';
import Image from 'next/image';
// ========================== styles ==========================
import * as S from './style';
// ======================== components ========================
import InputLabel from '@material-ui/core/InputLabel';
import LanguageIcon from '@material-ui/icons/Language';
import { Header, Body, Close } from '@zendeskgarden/react-modals';
// ============================================================

type SelectProps = {
	currentLanguage: string;
	options: JSX.Element[];
	isVisible: boolean;
	isVisibleHandler: () => void;
	modalTitle: string;
};

const Select = ({
	currentLanguage,
	options,
	isVisible,
	isVisibleHandler,
	modalTitle,
}: SelectProps) => (
	<>
		<S.OpenLanguageModalButton onClick={isVisibleHandler}>
			<LanguageIcon fontSize="medium" />
		</S.OpenLanguageModalButton>
		{isVisible && (
			<S.SelectLanguageModal onClose={isVisibleHandler}>
				<Header>
					<InputLabel>
						<Image
							src={`/assets/languageIcons/${currentLanguage}.png`}
							alt={`${currentLanguage} flag`}
							width="25%"
							height="25%"
						/>
					</InputLabel>
					{modalTitle}
				</Header>
				<Body>{options}</Body>
				<Close aria-label="Close modal" />
			</S.SelectLanguageModal>
		)}
	</>
);

export default Select;
