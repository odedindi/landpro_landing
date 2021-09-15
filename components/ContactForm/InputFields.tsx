import * as S from './style';

export const Input = ({ name, placeholder, onChange, label }: any) => (
	<S.InputWrapper>
		<label htmlFor={name}>{label}</label>
		<S.Input
			spellcheck={false}
			placeholder={placeholder}
			name={name}
			id={name}
			onChange={onChange}
		/>
	</S.InputWrapper>
);

export const TextArea = ({ name, onChange, label }: any) => (
	<S.TextAreaWrapper>
		<label htmlFor={name}>{label}</label>
		<S.TextArea spellcheck={false} id={name} name={name} onChange={onChange} />
	</S.TextAreaWrapper>
);
