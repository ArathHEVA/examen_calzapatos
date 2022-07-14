import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { listar } from "../services/servicios.js";
import banner from "../assets/banner.jpg";

export default function Details() {
	const { id } = useParams();
	const [user, setUser] = useState({ pettypes: [], reviews: [] });

	useEffect(() => {
		find();
		findPetTypes();
		getReviews();
	}, []);
	async function find() {
		const response = await listar(`api/petsitter/findByUser/id/${id}`);
		const { errors } = response;
		if (errors) {
			alert("oh no");
		} else {
			setUser((cur) => {
				const { name, lastname, city, photourl, email, cellphone, age } =
					response;
				return {
					...cur,
					// ...response,
					name: `${name} ${lastname}`,
					address: `${city.name}, ${city.state.name}`,
					photourl,
					email,
					cellphone,
					age,
					pettypes: [],
				};
			});
		}
	}

	async function findPetTypes() {
		const response = await listar(`api/petsitter/getPetsByUser/id/${id}`);
		const { errors } = response;
		if (errors) {
			alert("oh no");
		} else {
			setUser((cur) => {
				return {
					...cur,
					pettypes: response,
				};
			});
		}
	}
	async function getReviews() {
		const response = await listar(`api/review/findByUser/id/${id}`);
		console.log("🍺 ~ createUser ~ response", response);
		const { errors } = response;
		if (errors) {
			alert("oh no");
		} else {
			let sum = 0;
			let raiting = 0;
			if (response.length > 0) {
				sum = response.reduce((accumulator, object) => {
					return accumulator + object.raiting;
				}, 0);
				raiting = sum / response.length;
			}

			setUser((cur) => {
				return {
					...cur,
					raiting,
					reviews: response,
				};
			});
		}
	}

	function generateRaiting(raiting) {
		let stars = Math.round(raiting);
		let maxstars = 5;
		let arrSpan = [];

		for (let index = 1; index <= maxstars; index++) {
			if (index <= stars) {
				arrSpan.push(
					<span
						style={{ fontSize: "2em" }}
						className="fa fa-star checked "
					></span>
				);
			} else {
				arrSpan.push(
					<span style={{ fontSize: "2em" }} className="fa fa-star"></span>
				);
			}
		}
		return <p className="text-muted mb-0">{arrSpan}</p>;
	}

	return (
		<>
			<section
				className="vh-100"
				style={{ backgroundColor: "rgb(183 204 231)" }}
			>
				<div className="container">
					<section className="h-100 gradient-custom-2">
						<div className="container py-5 h-100">
							<div className="row d-flex justify-content-center align-items-center h-100">
								<div className="col col-lg-9 col-xl-7">
									<div className="card">
										<div
											className="rounded-top text-white d-flex flex-row"
											style={{
												backgroundColor: "#000",
												height: "200px",
											}}
										>
											<div
												className="ms-4 mt-5 d-flex flex-column "
												style={{ width: "150px" }}
											>
												<img
													src={user.photourl}
													alt="No images"
													className="img-fluid img-thumbnail mt-4 mb-2"
													style={{ width: "150px", zIndex: 1 }}
												/>
											</div>
											<div className="ms-3" style={{ marginTop: "130px" }}>
												<h5>{user.name}</h5>
												<p>{user.address}</p>
											</div>

											<div
												className="pl-5  text-center "
												style={{ marginTop: "130px" }}
											>
												<h5> Rating </h5>
												<h5>
													{user.raiting}{" "}
													<span className="fa fa-star checked "></span>
												</h5>
											</div>
										</div>
										{/* <div
											className="p-4 text-black"
											style={{ backgroundColor: "#f8f9fa" }}
										>
											<div className="d-flex justify-content-end text-center py-1">
												<div>
													<p className="mb-1 h5">{user.numReviews} reviwers</p>
													<p className="small text-muted mb-0">
														{generateRaiting(user.raiting)}
													</p>
												</div>
											</div>
										</div> */}
										<div className="card-body p-4 text-black">
											<div className="row">
												<div className=" col-md-6 ">
													<p className="lead fw-normal mb-1">About</p>
													<div
														className="p-4"
														style={{ backgroundColor: " #f8f9fa" }}
													>
														<p className="font-italic mb-1">
															Email: {user.email}
														</p>
														<p className="font-italic mb-1">
															Phone: {user.cellphone}
														</p>
														<p className="font-italic mb-0">Age: {user.age}</p>
													</div>
												</div>
												<div className=" col-md-6 ">
													<p className="lead fw-normal mb-1">Pet types</p>
													<div
														className="p-4"
														style={{ backgroundColor: " #f8f9fa" }}
													>
														{user.pettypes.length > 0 &&
															user.pettypes.map((pet, index) => (
																<p key={index} className="font-italic mb-1">
																	{pet.description}
																</p>
															))}
													</div>
												</div>
											</div>
										</div>

										<div className="card-body p-4 text-black">
											<div className="row">
												<div className=" col-md-6 ">
													<p className="lead fw-normal mb-1">
														Reviews ({user.reviews.length})
													</p>
												</div>
												{user.reviews.map((review) => (
													<div className="row">
														<div className="col-md-1">
															<h5 className="d-flex pull-right">
																{review.raiting}
															</h5>
														</div>

														<div className="col-md-4">
															<span className="d-flex">
																{generateRaiting(review.raiting)}
															</span>
														</div>

														<div className="col-md-7">"{review.commets}"</div>
													</div>
													// <p className="lead fw-normal mb-1 d-flex  align-items-start">
													// 	{review.raiting}
													// 	{generateRaiting(review.raiting)}
													// 	{review.commets}
													// </p>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</section>
		</>
	);
}
