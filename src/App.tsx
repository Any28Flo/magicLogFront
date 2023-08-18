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

export function App() {


	return (
		<Routes>
			<Route index element={<Login />} />
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />

			</Route>
		</Routes>
	);
}
