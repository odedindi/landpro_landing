import styled from 'styled-components';
import { device } from 'utils/mediaQueries';

export const ContactWrapper = styled.div`
	/* padding: 5rem 0; */
	width: 100%;
	max-width: 1280px;
`;

export const IconWrapper = styled.div`
	${device.desktop} {
		/* padding: 10rem 7rem; */
	}
`;

export const FormGroup = styled.form`
	width: 100%;
	max-width: 520px;
	${device.desktop} {
		max-width: 100%;
		/* margin-top: 2rem; */
	}
`;

export const Span = styled.span`
	display: block;
	font-family: 'Ubuntu', sans-serif;
	font-weight: 600;
	color: rgb(255, 130, 92);
	height: 0.775rem;
	padding: 0 0.675rem;
`;

export const ButtonWrapper = styled.div`
	text-align: end;
	position: relative;
	${device.phone} {
		padding-top: 0.75rem;
	}
`;

export const InputWrapper = styled.section`
	display: inline-block;
	width: 100%;
	padding: 10px 5px;
`;

export const Input = styled.input<{ spellcheck: boolean }>`
	width: 100%;
	border-width: 1px;
	border-style: solid;
	border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
	outline: none;
	font-size: 0.875rem;
	padding: 1rem 1.25rem;
	transition: border-color 0.3s ease-in;
	border-radius: 8px;
	color: #000;

	&:focus,
	&:hover {
		border-color: #2e186a;
	}
`;

export const TextAreaWrapper = styled.section`
	display: inline-block;
	width: 100%;
	padding: 10px 5px;
	margin-bottom: -0.625rem;
`;

export const TextArea = styled.textarea<{ spellcheck: boolean }>`
	width: 100%;
	outline: none;
	border-radius: 8px;
	padding: 1rem 1.25rem;
	resize: none;
	font-size: 0.875rem;
	height: 185px;
	transition: border-color 0.3s ease-in;

	&:focus,
	&:hover {
		border-color: #2e186a;
	}
`;
