/* eslint-disable @next/next/no-img-element */
// ======================== style =========================
import * as S from '../../style';
import { Col } from 'antd';
// ===================== components =======================
import { Fade } from 'react-awesome-reveal';
// const AyoraExample = lazy(() => import('../../../Carousel/ayora'));
//=========================================================

const LeftContentBlock: React.FC<ContentBlockProps> = ({
	children,
	content,
	icon,
	iconAlt,
	id,
	isFirst,
	title,
}: any) => {
	if (isFirst)
		return (
			<S.BlockContainer id={id}>
				<Col lg={8} md={16} sm={18} xs={24}>
					<Fade triggerOnce={true} direction="left">
						{icon === 'ayoraExample' ? (
							'' // <AyoraExample />
						) : (
							<img
								src={icon}
								alt={iconAlt}
								width="100%"
								height="100%"
								style={{ textAlign: 'center' }}
							/>
						)}
					</Fade>
				</Col>
				<Col lg={14} md={24} sm={24} xs={24}>
					<Fade delay={550} duration={2000}>
						<S.ContentWrapper>
							<h6>{title}</h6>
							<S.Content>{content}</S.Content>
							{children && <S.ChildrenWrapper>{children}</S.ChildrenWrapper>}
						</S.ContentWrapper>
					</Fade>
				</Col>
			</S.BlockContainer>
		);
	return (
		<S.BlockContainer id={id}>
			<Col lg={8} md={16} sm={18} xs={24}>
				<>
					{icon === 'ayoraExample' ? (
						'' // <AyoraExample />
					) : (
						<img
							src={icon}
							alt={iconAlt}
							width="100%"
							height="100%"
							style={{ textAlign: 'center' }}
						/>
					)}
				</>
			</Col>
			<Col lg={14} md={24} sm={24} xs={24}>
				<>
					<S.ContentWrapper>
						<h6>{title}</h6>
						<S.Content>{content}</S.Content>
						{children && <S.ChildrenWrapper>{children}</S.ChildrenWrapper>}
					</S.ContentWrapper>
				</>
			</Col>
		</S.BlockContainer>
	);
};
export default LeftContentBlock;
