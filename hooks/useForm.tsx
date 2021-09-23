// ======================= React & Next =======================
import * as React from 'react';
// ========================== toast ===========================
import toast from 'react-hot-toast';
// ============================================================

export const useForm = (validate: Validate) => {
	const [values, setValues] = React.useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [errors, setErrors] = React.useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [formWasSubmited, setFormWasSubmited] = React.useState(false);

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
		event,
	) => {
		event.preventDefault();
		setErrors(validate(values));
		let userShouldCheckHisErrors: boolean = false;
		(Object.keys(errors) as Array<keyof typeof errors>).map((error) => {
			if (errors[error].length) return (userShouldCheckHisErrors = true);
		});

		if (!userShouldCheckHisErrors) {
			const formspreeUrl = '/api/contact';
			const sendGridUrl = '/api/sendgrid';
			const body = (Object.keys(values) as Array<keyof typeof values>).reduce(
				(body, key) => {
					body[key] = values[key];
					if (key === 'email') body._replyTo = values[key];
					return body;
				},
				{
					name: '',
					email: '',
					subject: '',
					message: '',
					_replyTo: '',
				},
			);

			const response = await fetch(formspreeUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(body),
			});
			const { status, message } = await response.json();

			const notify = (type: 'success' | 'error', msg: string) =>
				toast[type](msg, { position: 'top-center' });

			if (status === 200) {
				notify('success', message);
				setFormWasSubmited(true);
			} else {
				notify('error', message);
			}
		}
	};

	React.useEffect(() => {
		const restartForm = () => {
			setValues({
				name: '',
				email: '',
				subject: '',
				message: '',
			});
			setFormWasSubmited(false);
		};
		if (Object.values(errors).length === 0 && formWasSubmited) {
			restartForm();
		}
	}, [errors, formWasSubmited]);

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		event.persist();
		setValues((values) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
		setErrors((errors) => ({ ...errors, [event.target.name]: '' }));
	};

	return {
		handleChange,
		handleSubmit,
		values,
		errors,
	};
};

export default useForm;
