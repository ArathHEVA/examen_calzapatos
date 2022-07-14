import React, { useState } from "react";
import { postAPI } from "../services/servicios.js";
import logo from "../assets/login.jpg";
import { useNavigate } from "react-router-dom";

export default function Header() {
	const [user, setUser] = useState({});
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

	async function createUser(e) {
		e.preventDefault();
		const response = await postAPI("api/user/create", user);
		console.log("🍺 ~ createUser ~ response", response);
		const { errors } = response;
		if (errors) {
			console.error("inputs");
		} else {
			navigate("/");
		}
	}

	return (
		<>
			<section
				className="vh-100"
				style={{ backgroundColor: "rgb(183 204 231)" }}
			>
				<div className="container py-5 h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col col-xl-8">
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
												height: "600px",
											}}
										/>
									</div>
									<div className="col-md-6 col-lg-7 d-flex align-items-center">
										<div className="card-body p-4 p-lg-5 text-black">
											<form onSubmit={createUser}>
												<div className="d-flex align-items-center mb-3 pb-1">
													<h5
														className="fw-normal mb-3 pb-3"
														style={{ letterSpacing: "1px" }}
													>
														CREATE AN ACCOUNT
													</h5>
												</div>

												<div className="col-11">
													<div class="form-outline mb-4">
														<input
															type="text"
															id="name"
															className="form-control form-control-lg"
															placeholder="Name"
															value={user.name}
															onChange={handleChange}
															required
														/>
													</div>

													<div class="form-outline mb-4">
														<input
															type="text"
															id="lastname"
															className="form-control form-control-lg"
															placeholder="Last name"
															value={user.lastname}
															onChange={handleChange}
															required
														/>
													</div>

													<div class="form-outline mb-4">
														<input
															type="text"
															id="address"
															placeholder="Address"
															className="form-control form-control-lg"
															value={user.address}
															onChange={handleChange}
															required
														/>
													</div>

													<div class="form-outline mb-4">
														<input
															type="email"
															id="email"
															placeholder="Email"
															className="form-control form-control-lg"
															value={user.email}
															onChange={handleChange}
															required
														/>
													</div>

													<div class="form-outline mb-4">
														<input
															type="text"
															id="cellphone"
															placeholder="Phone"
															className="form-control form-control-lg"
															value={user.cellphone}
															onChange={handleChange}
															required
														/>
													</div>

													<div class="form-outline mb-4">
														<input
															type="password"
															id="password"
															placeholder="Password"
															className="form-control form-control-lg"
															value={user.password}
															onChange={handleChange}
															required
														/>
													</div>

													<button
														onClick={createUser}
														type="submit"
														className="btn btn-dark btn-lg btn-block"
													>
														REGISTER
													</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <div className="container">
				<div className="row d-flex justify-content-center">
					<div className="col-5">
						<div class="form-outline mb-4">
							<input
								type="text"
								id="name"
								class="form-control"
								placeholder="Name"
								value={user.name}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</div>

						<div class="form-outline mb-4">
							<input
								type="text"
								id="lastname"
								class="form-control"
								placeholder="Last name"
								value={user.lastname}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</div>

						<div class="form-outline mb-4">
							<input
								type="text"
								id="address"
								placeholder="Address"
								class="form-control"
								value={user.address}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</div>

						<div class="form-outline mb-4">
							<input
								type="email"
								id="email"
								placeholder="Email"
								class="form-control"
								value={user.email}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</div>

						<div class="form-outline mb-4">
							<input
								type="text"
								id="cellphone"
								placeholder="Phone"
								class="form-control"
								value={user.cellphone}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</div>

						<div class="form-outline mb-4">
							<input
								type="password"
								id="password"
								placeholder="Password"
								class="form-control"
								value={user.password}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</div>

						<div class="form-outline mb-4">
							<input
								type="password"
								placeholder="Repeat password"
								id="registerRepeatPassword"
								class="form-control"
							/>
						</div>

						<button
							onClick={createUser}
							// type="submit"
							class="btn btn-primary btn-block mb-3"
						>
							Sign in
						</button>
					</div>
				</div>
			</div> */}
		</>
	);
}
