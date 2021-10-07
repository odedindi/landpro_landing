import * as React from 'react';

type FetchState<T> = {
	data?: T;
	error?: Error;
};

type FetchAction<T> =
	| { type: 'loading' }
	| { type: 'fetched'; payload: T }
	| { type: 'error'; payload: Error };

type FetchReducer<T> = (
	state: FetchState<T>,
	action: FetchAction<T>,
) => FetchState<T>;

type Cache<T> = { [url: string]: T };

export const useFetch = <T = unknown>({
	url,
	options,
}: {
	url?: string;
	options?: RequestInit;
}): FetchState<T> => {
	const cancelRequest = React.useRef(false);

	const initialState: FetchState<T> = {
		error: undefined,
		data: undefined,
	};
	const fetchReducer: FetchReducer<T> = (state, action) => {
		switch (action.type) {
			case 'loading':
				return { ...initialState };
			case 'fetched':
				return { ...initialState, data: action.payload };
			case 'error':
				return { ...initialState, error: action.payload };
			default:
				return state;
		}
	};

	const [fetchState, dispatch] = React.useReducer(fetchReducer, initialState);

	React.useEffect(() => {
		if (!url || !options) return;

		const fetcher = async () => {
			dispatch({ type: 'loading' });
			try {
				const response = await fetch(url, options);
				console.log('url, options: ', url, options);
				if (!response.ok) throw new Error(response.statusText);

				const data = (await response.json()) as T;
				if (cancelRequest.current) return;
				dispatch({ type: 'fetched', payload: data });
			} catch (error) {
				if (cancelRequest.current) return;
				dispatch({ type: 'error', payload: error as Error });
			}
		};
		fetcher();
		return () => {
			cancelRequest.current = true;
		};
	}, [options, url]);

	return fetchState;
};
