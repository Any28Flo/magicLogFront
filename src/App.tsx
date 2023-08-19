import {
	Routes,
	Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/ProductsByUser";
import NewProduct from "./pages/NewProduct";
import Search from "./pages/Search";
import ProductsByUser from "./pages/ProductsByUser";
import { useEffect, useState } from "react";
import { useAppContext } from "./context/appContext";
import AdminBoard from "./pages/AdminBoard";

export function App() {
	const { user } = useAppContext();
	const userRole = user?.role ?? 'comprador';

	const [messageByRole, setMessageByRole] = useState('');

	useEffect(() => {
		if (userRole === 'comprador') {
			setMessageByRole('Busca productos')
		}
		if (userRole === "admin") {
			setMessageByRole('Todos los productos')
		}

	}, [])
	return (
		<Routes>

			<Route element={<Layout />}>
				<Route path="/" element={<Login />} />
				<Route
					path="/dashboard"
					element={
						<RequireAuth>
							<Home />
						</RequireAuth>
					}
				>
					<Route path="/dashboard/agregar"
						element={
							<PrivateRoute role={userRole} authorizedRoles={['vendedor']}>
								<NewProduct />
							</PrivateRoute>
						}
					/>
					<Route path="/dashboard/productos"
						element={
							<PrivateRoute role={userRole} authorizedRoles={['vendedor']}>
								<ProductsByUser />
							</PrivateRoute>
						}
					/>


					<Route path="/dashboard/busqueda"
						element={
							<PrivateRoute role={userRole} authorizedRoles={['comprador']}>
								<Search message={messageByRole} roleSearch={userRole} />
							</PrivateRoute>
						}
					/>
					<Route path="/dashboard/productos-admin"
						element={
							<PrivateRoute role={userRole} authorizedRoles={['admin']}>
								<AdminBoard />
							</PrivateRoute>
						}
					/>
				</Route>
			</Route>



		</Routes >
	);
}
