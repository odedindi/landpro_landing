import { Button } from '@zendeskgarden/react-buttons';
import { Modal } from '@zendeskgarden/react-modals';
import styled from 'styled-components';
import { device } from 'utils/mediaQueries';

// nav
export const NavBarWrapper = styled.header`
	display: flex;
	flex-flow: row;
	justify-content: space-between;
	height: 7rem;
	background: ${({ theme }) => theme.colors.background};
	padding: 0 0 0 2rem;
	/* margin-bottom: 3.5rem; */
`;

export const ButtonsWrapper = styled.section`
	width: 40rem;
`;
export const ShowOnBigScreen = styled.section`
	display: flex;
	flex-direction: row;

	${device.phone} {
		display: none !important;
	}
`;

export const ShowOnSmallScreen = styled.section`
	display: none;
	width: 3.5rem;
	${device.phone} {
		display: block !important;
	}
`;
export const DrawerModal = styled(Modal)`
	display: flex;
	flex-direction: column;
	align-items: start;
	padding: 1.5rem 2.45rem;

	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 35vh;

	.modalHeader {
		${device.phone} {
			padding: 2rem 5rem;
		}
		${device.xs} {
			padding: 2rem 1.45rem;
		}
	}
	${device.phone} {
		padding: 0.5rem 1.45rem;
		height: 100vh;
	}
	${device.xs} {
		padding: 1.5rem 0.45rem;
	} ;
`;

export const NavBarButton = styled(Button)`
	height: 6rem;
	width: auto;
	border: none;
	font-size: large;
	transition: 0.75s ease-in-out;
	color: ${({ theme }) => theme.logo};

	&:hover {
		color: ${({ theme }) => theme.brand};
		background: transparent;
	}
`;

export const MenuTitle = styled.h6`
	letter-spacing: 0.125rem;
	margin: -0.5rem 0 0 0.25rem;
	color: ${({ theme }) => theme.colors.header};
`;

export const MenuItemsWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;

	${device.phone} {
		flex-direction: column;
	} ;
`;

// layout
export const LayoutWrapper = styled.section``;

// page Container
export const Container = styled.div<ContainerProps>`
	position: relative;
	width: 100%;
	max-width: 1280px;
	margin-right: auto;
	margin-left: auto;
	padding: ${(props) => (props.padding ? '2.8rem' : '0 25px')};
	overflow: hidden;
	border-top: ${(props) => (props.border ? '1px solid #CDD1D4' : '')};

	${device.desktop} {
		max-width: 950px;
	}
	${device.tablet} {
		max-width: 700px;
	}
	${device.phone} {
		max-width: 370px;
	}
`;

// footer

export const Footer = styled.footer`
	width: 100vw;
	background: rgb(245, 245, 245);
	padding: 2.5rem 2.5rem 0 2.5rem;
`;

export const Row = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
`;
export const Title = styled.h4`
	font-size: 16px;
	text-transform: uppercase;
	color: #000;

	${device.phone} {
		padding: 1.5rem 0;
	}
`;

export const Paragraph = styled.div<{ left?: boolean }>`
	color: rgba(2, 7, 62, 0.8);
	max-width: 340px;
	font-size: 14px;
	width: 100%;
	text-align: ${(props) => (props.left ? 'left' : '')};
	padding: ${(props) => (props.left ? '0 10%' : '')};
`;

export const NavLink = styled.a`
	display: block;
	font-size: 1rem;
	margin-bottom: 0.625rem;
	transition: all 0.2s ease-in-out;
	&:hover,
	&:active,
	&:focus {
		color: #15418e;
	}
`;

export const FooterLink = styled.a`
	display: block;
	font-size: 0.875rem;
	color: rgba(2, 7, 62, 0.8);
	margin-bottom: 0.625rem;
	max-width: 340px;
	width: 100%;
	transition: all 0.25s ease-in-out;

	&:hover,
	&:active,
	&:focus {
		color: #15418e;
	}
`;

export const Extra = styled.section`
	width: 100vw;
	background: rgb(245, 245, 245);
	position: relative;
	padding: 3rem 2rem 1rem 2rem;
`;

export const LogoContainer = styled.div`
	display: flex;
	flex-direction: column;

	padding-top: 2rem;

	p {
		text-align: center;
		font-weight: bold;
	}
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 3rem 0 3rem;
`;

export const SelectLanguageWrapper = styled.div`
	line-height: 24px;
	align-content: center;

	select {
		cursor: pointer;
		border: none;
		font-size: 1.125rem;
		background: transparent;
	}

	${device.desktop} {
		padding: 0 10%;
	} ;
`;

export const ContactName = styled.p`
	text-align: center;
	color: rgba(2, 7, 62, 0.8);
	width: 100%;
	margin-top: 1rem;
	border-bottom: 1.5px solid rgba(225, 115, 82, 0.8);
`;
export const SocialLink = styled.div`
	:hover {
		filter: opacity(0.25) drop-shadow(0 0 0 orange);
		color: rgb(255, 130, 92);
	}
`;
