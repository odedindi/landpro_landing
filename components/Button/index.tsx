import * as S from './style';

type ButtonProps = {
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	isBasic?: boolean;
	isPrimary?: boolean;
};
const Button: React.FC<ButtonProps> = ({
	children,
	isBasic,
	isPrimary,
	onClick,
	type,
}) => (
	<S.Button
		type={type}
		isBasic={isBasic}
		isPrimary={isPrimary}
		onClick={onClick}>
		{children}
	</S.Button>
);

export default Button;
