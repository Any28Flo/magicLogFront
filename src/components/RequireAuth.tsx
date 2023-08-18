import type { FC } from 'react';
import { useAppContext, useRoleContext } from '../context/appContext';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


type Role = 'admin' | 'vendedor' | 'comprador';


function RequireAuth({ children }: { children: JSX.Element }) {
	let auth = useAppContext();
	let location = useLocation();
	console.log(auth)
	if (!auth.user) {
		// Redirect to a suitable route for unauthorized access
		return <Navigate to="/" state={{ from: location }} replace />;

	}


	return children;
};

export default RequireAuth;
