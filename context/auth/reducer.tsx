import * as C from 'utils/constants';

const initialUserState: AuthState = {
	authenticated: false,
	userData: [],
	loading: false,
};

const reducer: AuthReducer = (userState = initialUserState, action) => {
	const { payload, type } = action;
	switch (type) {
		case C.AUTHENTICATE:
			return {
				...userState,
				authenticated: true,
				userData: payload,
				loading: false,
			};
		case C.LOGOUT:
			return {
				...userState,
				authenticated: false,
				userData: [],
				loading: false,
			};

		default:
			throw new Error();
	}
};

export { initialUserState, reducer };
