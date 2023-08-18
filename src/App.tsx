import {
	Routes,
	Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import NewProduct from "./pages/NewProduct";

export function App() {
	//TODO: get user role from auth
	const userRole = 'vendedor'

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
					<Route path="/dashboard/productos"
						element={
							<PrivateRoute role={userRole} authorizedRoles={['vendedor']}>
								<Products />
							</PrivateRoute>
						}
					/>

					<Route path="/dashboard/agregar"
						element={
							<PrivateRoute role={userRole} authorizedRoles={['vendedor']}>
								<NewProduct />
							</PrivateRoute>
						}
					/>
				</Route>
			</Route>



		</Routes >
	);
}
