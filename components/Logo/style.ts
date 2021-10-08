import styled from 'styled-components';
import { device } from 'styles/mediaQueries';

export const Container = styled.a`
	display: flex;
	padding: 1.5rem 0 2.5rem 0;
	min-width: 150px;
	/* width: 10rem; */

	#brand {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		span {
			color: ${({ theme }) => theme.landproSlogen.span};
		}
		#land {
			color: ${({ theme }) => theme.landproSlogen.land};
			font-size: 1.9rem;
			position: relative;
			top: 1.7rem;
			right: 0.46rem;
			letter-spacing: 0.125rem;

			${device.phone} {
				top: 1.8rem;
				right: 0.3rem;
			}
		}
		#pro {
			color: ${({ theme }) => theme.landproSlogen.pro};
			position: relative;
			bottom: 0.5rem;
			right: 0.415rem;
			letter-spacing: -0.125rem;

			${device.phone} {
				bottom: 0.75rem;
			}
		}
	}
`;
