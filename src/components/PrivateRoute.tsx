// PrivateRoute.tsx
import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export type Role = 'admin' | 'vendedor' | 'comprador';

interface PrivateRouteProps {
	// Add any additional props you need
	children: JSX.Element; // A single React element
	role: Role;
	authorizedRoles: Role[];
}
const PrivateRoute = ({ children, role, authorizedRoles, ...rest }: PrivateRouteProps) => {

	const isAuthorized = authorizedRoles.includes(role);
	let location = useLocation();
	if (!isAuthorized) {
		return <Navigate to="/dashboard" state={{ from: location }} replace />;
	}


	return children;
};

export default PrivateRoute;
