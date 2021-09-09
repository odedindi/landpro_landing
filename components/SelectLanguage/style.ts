import styled from 'styled-components';
import { device } from 'utils/mediaQueries';

import { Modal } from '@zendeskgarden/react-modals';
import { NavBarButton } from 'components/Layout/style';

export const SelectLanguageModal = styled(Modal)`
	z-index: 10;
	${device.tablet} {
		position: fixed;
		top: 30;
		left: 0;
		width: 100vw;
	}
`;

export const SelectLanguageButton = styled(NavBarButton)`
	padding: 0 2rem 0 0.25rem;
	transition: 0.75s ease-in-out;
	color: ${({ theme }) => theme.logo};

	&:hover {
		color: ${({ theme }) => theme.brand};
		/* background: transparent; */
	}

	${device.phone} {
		padding: 0;
	}
`;

export const OpenLanguageModalButton = styled(SelectLanguageButton)`
	${device.phone} {
		position: fixed;
		top: -1.1rem;
		right: 5rem;
	}
`;
