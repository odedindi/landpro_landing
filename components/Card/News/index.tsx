// ========================== styles ==========================
import * as S from './style';
// ======================== components ========================
import {
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@material-ui/core';
import { Breadcrumb } from 'antd';
// ===========================================================
type NewsCardProps = {
	article: Article;
};
const NewsCard = ({ article: { title, content, source } }: NewsCardProps) => {
	const fallbackImage =
		'/assets/imgs/newsFeed/default_img_william-bossen-Q1js5z4tKLA-unsplash.jpg';

	const cardHeader = (
		<CardActions>
			<Breadcrumb>
				<Breadcrumb.Item>
					<a href={source.url} target="_blank" rel="noreferrer">
						{source.name}
					</a>
				</Breadcrumb.Item>
				<Breadcrumb.Item>{source.author}</Breadcrumb.Item>
			</Breadcrumb>
		</CardActions>
	);

	const cardImage = (
		<CardActionArea>
			{content.mediaType === 'image' ? (
				<a href={content.url} target="_blank" rel="noreferrer">
					<CardMedia
						component="img"
						height="300"
						image={content.media ? content.media : fallbackImage}
						title={`LandPro News Item by ${source.author}`}
						alt={content.publishedAt}
					/>
				</a>
			) : (
				<iframe
					src={content.media}
					width="100%"
					height="360"
					allowFullScreen
					frameBorder="0"
					title={title}
				/>
			)}
		</CardActionArea>
	);

	const cardContent = (
		<CardContent>
			<Typography gutterBottom variant="h5" component="h3">
				{title}
			</Typography>
			<Typography variant="body2" color="textSecondary" component="p">
				{content.description}
			</Typography>
		</CardContent>
	);
	const cardReadMoreBtn = (
		<a href={content.url} target="_blank" rel="noreferrer" className="nav-link">
			<S.NewsCardButton>Read More</S.NewsCardButton>
		</a>
	);
	return (
		<S.NewsCardWrapper className="card-x" variant="outlined">
			{cardHeader}
			{cardImage}
			{cardContent}
			{cardReadMoreBtn}
		</S.NewsCardWrapper>
	);
};

export default NewsCard;
