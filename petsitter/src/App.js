import "./App.css";
import Header from "./header";
import Footer from "./footer";
import Search from "./views/Search";
import Login from "./views/Login";
import Home from "./views/Home";
import Detail from "./views/Details";
import UserRegister from "./views/UserRegister";
import { Route, Routes } from "react-router-dom";
function App() {
	return (
		<>
			<div className="content">
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />

						<Route path="/Login" element={<Login />} />
						<Route path="/Register" element={<UserRegister />} />
						<Route path="/Search" element={<Search />} />
						<Route path="/Detail/:id" element={<Detail />} />
					</Routes>
				</main>
			</div>
			<Footer />
		</>
	);
}

export default App;
