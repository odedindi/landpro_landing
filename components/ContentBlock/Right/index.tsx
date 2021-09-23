// ======================== style =========================
import * as S from '../style';
import { Col } from 'antd';
// ====================== components ======================
import { Fade } from 'react-awesome-reveal';
// ========================================================

const RightContentBlock: React.FC<ContentBlockProps> = ({
	children,
	content,
	icon,
	iconAlt,
	id,
	isFirst,
	title,
}) => {
	if (isFirst)
		return (
			<S.BlockContainer id={id}>
				<Col lg={10} md={12} sm={24} xs={24}>
					<Fade delay={550} triggerOnce={true} duration={2000} direction="left">
						<S.ContentWrapper>
							<h6>{title}</h6>
							<S.Content>{content}</S.Content>
							<S.ChildrenWrapper>{children}</S.ChildrenWrapper>
						</S.ContentWrapper>
					</Fade>
				</Col>
				<Col lg={10} md={12} sm={24} xs={24}>
					<Fade delay={250} triggerOnce={true} direction="right">
						{icon && <S.Image src={icon} alt={iconAlt} />}
					</Fade>
				</Col>
			</S.BlockContainer>
		);
	return (
		<S.BlockContainer id={id}>
			<Col lg={10} md={12} sm={24} xs={24}>
				<>
					<S.ContentWrapper>
						<h6>{title}</h6>
						<S.Content>{content}</S.Content>
						<S.ChildrenWrapper>{children}</S.ChildrenWrapper>
					</S.ContentWrapper>
				</>
			</Col>
			<Col lg={10} md={12} sm={24} xs={24}>
				<>{icon && <S.Image src={icon} alt={iconAlt} />}</>
			</Col>
		</S.BlockContainer>
	);
};

export default RightContentBlock;
