import * as S from './style';

const Container: React.FC<ContainerProps> = ({ padding, border, children }) => (
	<S.Container padding={padding} border={border}>
		{children}
	</S.Container>
);

export default Container;
