import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
	const navigate = useNavigate();

	return (
		<header>
			<nav
				className="navbar navbar-expand-lg navbar-dark bg-dark"
				// style={{ backgroundColor: "#000000" }}
			>
				<a className="navbar-brand" href="/">
					PET SITTER
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item ">
							<a
								style={{ cursor: "pointer" }}
								className="nav-link"
								onClick={() => navigate("/")}
							>
								Home
							</a>
						</li>
						<li className="nav-item">
							<a
								style={{ cursor: "pointer" }}
								className="nav-link"
								onClick={() => navigate("/Search")}
							>
								Petsitters
							</a>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<button
							onClick={() => navigate("/Login")}
							className="btn btn-primary my-2 my-sm-0 mr-2"
							type="submit"
							// style={{ backgroundColor: "rgb(183 204 231)" }}
						>
							Log in
						</button>

						<button
							onClick={() => navigate("/Register")}
							className="btn btn-primary my-2 my-sm-0"
							type="submit"
							// style={{ backgroundColor: "rgb(183 204 231)" }}
						>
							Sign up
						</button>
					</form>
				</div>
			</nav>
		</header>
	);
}
