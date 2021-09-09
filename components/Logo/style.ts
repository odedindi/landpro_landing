import styled from 'styled-components';
import { device } from 'utils/mediaQueries';

export const Container = styled.a`
	display: flex;
	padding: 1.0125rem 0 0 0;
	min-width: 250px;
	width: 20rem;

	#brand {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		span {
			color: #fec97a;
		}
		#land {
			color: #63b263;
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
			color: #56934d;
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
