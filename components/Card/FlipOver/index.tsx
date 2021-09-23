import * as S from './style';

type AnimatedCardProps = {
	imgSrc: string;
	title: string;
	text: string;
};

const FlipOverCard = ({ imgSrc, text, title }: AnimatedCardProps) => {
	return (
		<S.Card>
			<S.CardContainer>
				<div
					className="front"
					style={{
						backgroundImage: `url(${imgSrc})`,
					}}>
					<S.ContentWrapper>
						<S.Title>{title}</S.Title>
					</S.ContentWrapper>
				</div>
				<div className="back">
					<S.ContentWrapper>
						<p>{text}</p>
					</S.ContentWrapper>
				</div>
			</S.CardContainer>
		</S.Card>
	);
};
export default FlipOverCard;
