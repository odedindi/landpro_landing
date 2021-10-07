import toast from 'react-hot-toast';

type Notify = (type: 'success' | 'error' | 'loading', msg: string) => string;

export const notify: Notify = (type, msg) =>
	toast[type](msg, {
		position: 'top-center',
		style: {
			borderRadius: '10px',
			background: '#333',
			color: '#fff',
		},
	});

export default notify;
