import {
	Routes,
	Route,
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
				>
					<Route path="/dashboard/productos" element={<h1>hols</h1>} />
				</Route>
			</Route>



		</Routes >
	);
}
