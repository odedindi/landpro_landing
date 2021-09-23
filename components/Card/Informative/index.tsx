import { useTranslation } from 'react-i18next';
import { PhotoCredit } from 'styles/global';
import * as S from './style';

type InformativeCardProps = {
	img: { src: string; alt: string; credit: ImgCredit };
	title: string;
	text: string;
};
const InformativeCard = ({ img, title, text }: InformativeCardProps) => {
	const { t } = useTranslation('common');

	return (
		<S.Card>
			<S.CardImage src={img.src} alt={img.alt} />
			<S.CardContentWrapper>
				<S.CardTitle className="withAnimation">{title}</S.CardTitle>
				<S.CardText className="withAnimation">{text}</S.CardText>
				<div className="imgCredit">
					<PhotoCredit>
						{t('copyRights.Photo by')}
						<a href={`${img.credit.link}`}>{img.credit.name}</a>
					</PhotoCredit>
				</div>
			</S.CardContentWrapper>
		</S.Card>
	);
};

export default InformativeCard;
