import { createContext, useContext, useReducer, ReactNode } from 'react';


type State = {
	user?: {
		email: string;
		role: string;
	} | null;
	token?: String | null;
};

const initialState: State = {
	token: JSON.parse(localStorage.getItem('token') || '[]'),
	user: JSON.parse(localStorage.getItem('user') || '[]'),

};

type Action =

	| {
		type: 'login';
		payload: State;
	}
	| {
		type: 'logout';
	}


function reducer(state: State, action: Action): State {
	switch (action.type) {
		case 'login':
			return { ...state, user: { email: action?.payload?.user?.email, role: action.payload.user?.role }, token: action.payload.token };
		case 'logout':
			return { ...state, user: initialState.user, token: initialState.token }

		default:
			return state;
	}
}
type AppContextType = State & {
	dispatch: React.Dispatch<Action>;
};
const AppContext = createContext<AppContextType>({
	...initialState,
	dispatch: () => { },
});

type Props = {
	children: ReactNode;
};
export function AppProvider({ children }: Props) {

	const [{ user, token }, dispatch] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider value={{ user, token, dispatch }} >
			{children}
		</AppContext.Provider>
	);
}
export const useRoleContext = () => {
	const { user } = useContext(AppContext);
	if (user?.role === '') {
		throw new Error('useRoleContext must be used within a RoleProvider');
	}
	return context;
};
export const useAppContext = () => useContext(AppContext);
