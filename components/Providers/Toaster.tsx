import { Toaster } from 'react-hot-toast';

const Toast = () => (
	<Toaster
		position="bottom-center"
		reverseOrder={false}
		gutter={8}
		containerClassName=""
		containerStyle={{}}
		toastOptions={{
			// Define default options
			className: '',
			style: {
				background: '#363636',
				color: '#4863A0',
			},
			duration: 2500,
			success: {
				duration: 5000,
				theme: {
					primary: 'green',
					secondary: 'black',
				},
			},
			error: {
				duration: 3000,
				theme: {
					primary: 'red',
					secondary: 'white',
				},
			},
		}}
	/>
);

export default Toast;
