// ======================== styles ========================
import * as S from './style';
import { Row, Col } from 'antd';
// ========================================================

type MiddleBlockProps = {
	content?: string;
	id?: string;
	title?: string;
};
const MiddleBlock: React.FC<MiddleBlockProps> = ({
	children,
	content,
	id,
	title,
}) => (
	<S.MiddleBlock id={id}>
		<Row justify="space-around" align="middle">
			<S.ContentWrapper>
				<Col lg={24} md={24} sm={24} xs={24}>
					<h6>{title}</h6>
					{content && <S.Content>{content}</S.Content>}
				</Col>
			</S.ContentWrapper>
		</Row>
		{children}
	</S.MiddleBlock>
);

export default MiddleBlock;
