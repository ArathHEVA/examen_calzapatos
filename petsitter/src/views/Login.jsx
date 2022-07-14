import React, { useState } from "react";
import { postAPI } from "../services/servicios.js";
import logo from "../assets/login.jpg";
import { useNavigate } from "react-router-dom";

export default function Header() {
	const [user, setUser] = useState({ email: "", password: "" });
	const [touched, setTouched] = useState({});
	const [loginError, setLoginError] = useState({});
	const errors = getErrors(user);
	const navigate = useNavigate();

	function handleChange(e) {
		const { id, value } = e.target;
		setUser((curUser) => {
			return {
				...curUser,
				[id]: value,
			};
		});
	}

	function handleBlur(event) {
		const { id } = event.target;
		setTouched((cur) => {
			return { ...cur, [id]: true };
		});
	}
	async function login() {
		const response = await postAPI("api/user/login", user);
		console.log("🍺 ~ createUser ~ response", response);
		if (response.length === 0) {
			setLoginError({ errorlogin: "Invalid username/password" });
		} else {
			navigate("/");
		}
	}

	function getErrors(user) {
		const result = {};

		if (!user.email) result.email = "Required";
		if (!user.password) result.password = "Required";
		return result;
	}

	return (
		<>
			<section
				className="vh-100"
				style={{ backgroundColor: "rgb(183 204 231)" }}
			>
				<div className="container py-5 h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col col-xl-10">
							<div className="card" style={{ borderRadius: "1rem" }}>
								<div className="row g-0">
									<div className="col-md-6 col-lg-5 d-none d-md-block">
										<img
											src={logo}
											alt="login form"
											className="img-fluid"
											style={{
												borderRadius: "1rem 0 0 1rem",
												marginTop: "25px",
											}}
										/>
									</div>
									<div className="col-md-6 col-lg-7 d-flex align-items-center">
										<div className="card-body p-4 p-lg-5 text-black">
											<form>
												<div className="d-flex align-items-center mb-3 pb-1">
													<span className="h1 fw-bold mb-0">PET SITTER</span>
												</div>

												<h5
													className="fw-normal mb-3 pb-3"
													style={{ letterSpacing: "1px" }}
												>
													Sign into your account
												</h5>

												<div className="form-outline mb-4">
													<p role="alert">{loginError.errorlogin}</p>
													<input
														id="email"
														type="email"
														placeholder="Email"
														value={user.email}
														onChange={handleChange}
														onBlur={handleBlur}
														className="form-control form-control-lg"
													/>
													<p role="alert">{touched.email && errors.email}</p>
												</div>

												<div className="form-outline mb-4">
													<input
														type="password"
														id="password"
														placeholder="Password"
														value={user.password}
														onChange={handleChange}
														onBlur={handleBlur}
														className="form-control form-control-lg"
													/>
													<p role="alert">
														{touched.password && errors.password}
													</p>
												</div>

												<div className="pt-1 mb-4">
													<button
														className="btn btn-dark btn-lg btn-block"
														type="button"
														onClick={login}
													>
														Login
													</button>
												</div>

												<a className="small text-muted" href="#!">
													Forgot password?
												</a>
												<p
													className="mb-5 pb-lg-2"
													style={{ color: "#393f81" }}
												>
													Don't have an account?{" "}
													<a
														onClick={() => navigate("/Register")}
														href="#!"
														style={{ color: "#393f81" }}
													>
														Register here
													</a>
												</p>
												<a href="#!" className="small text-muted">
													Terms of use.
												</a>
												<a href="#!" className="small text-muted">
													Privacy policy
												</a>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
