// ======================= React & Next =======================
import * as React from 'react';
// ========================== styles ==========================
import * as S from './style';
// ======================= translations =======================
import { useTranslation } from 'next-i18next';
// ======================== components ========================
import Card from 'components/Card';
// ============================================================

const PotentialUsers = () => {
	const { t } = useTranslation('common');
	const potentialUsers: PotentialUser[] = [
		{
			id: '1',
			img: {
				src: '/assets/imgs/potentialUsers/farmers.jpg',
				alt: 'Two hands holding a young plantling',
				credit: {
					name: 'Noah Buscher',
					link: 'https://unsplash.com/@noahbuscher?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
				},
			},
		},
		{
			id: '2',
			img: {
				src: '/assets/imgs/potentialUsers/carbonMarket.jpg',
				alt: 'A person reading a business newspaper',
				credit: {
					name: 'Adeolu Eletu',
					link: 'https://unsplash.com/@adeolueletu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
				},
			},
		},
		{
			id: '3',
			img: {
				src: '/assets/imgs/potentialUsers/government.jpg',
				alt: 'A person holding a shiny lightbulb',
				credit: {
					name: 'Riccardo Annandale',
					link: 'https://unsplash.com/@pavement_special?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
				},
			},
		},
	];

	return (
		<S.PotentialUsersWrapper>
			<S.PotentialUsersCardsWrapper>
				{potentialUsers.map((user) => (
					<Card
						key={user.id}
						type="informative"
						title={t(`about.section${user.id}Title`)}
						text={t(`about.section${user.id}Content`)}
						img={user.img}
					/>
				))}
			</S.PotentialUsersCardsWrapper>
		</S.PotentialUsersWrapper>
	);
};

export default PotentialUsers;
