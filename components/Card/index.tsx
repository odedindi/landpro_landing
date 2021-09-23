import FlipOverCard from './FlipOver';
import InformativeCard from './Informative';
import NewsCard from './News';

type CardProps = {
	type: 'flipOver' | 'informative' | 'news';
	img?: { src: string; alt: string; credit: ImgCredit };
	imgSrc?: string;
	title?: string;
	text?: string;
	article?: Article;
};
const Card = ({ article, img, imgSrc, text, title, type }: CardProps) => {
	if (type === 'flipOver')
		return (
			<FlipOverCard
				imgSrc={imgSrc as string}
				title={title as string}
				text={text as string}
			/>
		);
	if (type === 'informative')
		return (
			<InformativeCard
				img={img as { src: string; alt: string; credit: ImgCredit }}
				title={title as string}
				text={text as string}
			/>
		);
	if (type === 'news') return <NewsCard article={article as Article} />;

	return null;
};

export default Card;
