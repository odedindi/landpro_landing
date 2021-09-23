import styled from 'styled-components';
import { Card } from '@material-ui/core';
import { Button } from '@zendeskgarden/react-buttons';

export const NewsCardWrapper = styled(Card)`
	padding: 1rem 0;
	margin: 1rem 0;
`;

export const NewsCardButton = styled(Button)`
	border: none;
	background: none;
	:hover {
		background: none;
	}
`;
