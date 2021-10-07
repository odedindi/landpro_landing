// state
type AuthState = {
	authenticated: boolean;
	userData: any[];
	loading: boolean;
};

// actions
type AuthenticateType = any;

type Authenticate = {
	(data: AuthenticateType): {
		type: string;
		payload: AuthenticateType;
	};
};

type Logout = {
	(): {
		type: string;
		payload: null;
	};
};
type AuthActionType = {
	type: string;
	payload: AuthenticateType | null;
};

type AuthReducer = {
	(state: AuthState | undefined, action: AuthActionType): {
		authenticated: boolean;
		userData: any;
		loading: boolean;
	};
};
