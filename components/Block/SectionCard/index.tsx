/* eslint-disable @next/next/no-img-element */

// ======================== styles ========================
import { Row, Col } from 'antd';
import * as S from '../style';
// ========================= icons ========================
import notes from '../../../../assets/imgs/svg/notes.svg';
// ========================================================

const SectionCard = ({ content, span, title }: any) => {
	return (
		<Col span={span}>
			<Row justify="start" align="bottom">
				<img src="/assets/imgs/svg/notes.svg" alt="notes icon" width="30px" />
				<S.MinTitle>{title}</S.MinTitle>
			</Row>
			<S.MinPara>{content}</S.MinPara>
		</Col>
	);
};

export default SectionCard;
