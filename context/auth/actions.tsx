import * as C from 'utils/constants';

export const authenticate: Authenticate = (data) => ({
	type: C.AUTHENTICATE,
	payload: data,
});

export const logout: Logout = () => ({
	type: C.LOGOUT,
	payload: null,
});
