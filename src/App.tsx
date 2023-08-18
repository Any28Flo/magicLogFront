import {
	Routes,
	Route,
	Link,
	useNavigate,
	useLocation,
	Navigate,
	Outlet,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RequireAuth from "./components/RequireAuth";

export function App() {


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
				/>
			</Route>



		</Routes >
	);
}
