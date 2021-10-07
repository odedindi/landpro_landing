// ========================= react =========================
import * as React from 'react';
// ==================== reducer & state ====================
import { initialUserState, reducer } from './reducer';
// =========================================================

type AuthContextType = {
	userState: AuthState;
	dispatch: React.Dispatch<AuthActionType>;
};
const AuthContext = React.createContext<Partial<AuthContextType>>({
	userState: initialUserState,
});

const { Provider } = AuthContext;

const AuthContextProvider: React.FC = ({ children }) => {
	const [userState, dispatch] = React.useReducer(reducer, initialUserState);

	return <Provider value={{ userState, dispatch }}>{children}</Provider>;
};

export { AuthContext, AuthContextProvider };
