import * as React from 'react';

export const useMousePosition = () => {
	const [mousePosition, setPosition] = React.useState({ x: 0, y: 0 });

	React.useEffect(() => {
		const setFromEvent = ({
			clientX,
			clientY,
		}: {
			clientX: number;
			clientY: number;
		}) =>
			setPosition({
				x: (clientX / innerWidth) * 2 - 1,
				y: (clientY / innerHeight) * 2 + 1,
			});
		window.addEventListener('mousemove', setFromEvent);

		return () => {
			window.removeEventListener('mousemove', setFromEvent);
		};
	}, []);
	return mousePosition;
};

export default useMousePosition;
