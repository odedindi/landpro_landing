import * as S from './style';

type ButtonProps = {
	onClick: () => void;
};
const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
	<S.Button onClick={onClick}>{children}</S.Button>
);

export default Button;
