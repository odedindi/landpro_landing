import * as React from 'react';

export const useDidMount = () => {
	const [didMount, setDidMount] = React.useState(false);

	React.useEffect(() => {
		setDidMount(true);

		return () => {
			setDidMount(false);
		};
	}, []);
	return didMount;
};

export default useDidMount;
