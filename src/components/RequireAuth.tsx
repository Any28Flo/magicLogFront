import type { FC } from 'react';
import { useAppContext } from '../context/appContext';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function RequireAuth({ children }: { children: JSX.Element }) {
	let auth = useAppContext();
	let location = useLocation();
	if (!auth.user) {
		return <Navigate to="/" state={{ from: location }} replace />;
	}


	return children;
};

export default RequireAuth;
