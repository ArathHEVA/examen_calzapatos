import React, { useState, useEffect } from "react";
import { listar } from "../services/servicios.js";
import { useNavigate } from "react-router-dom";

export default function Search() {
	const [list, setList] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		listPetSitters();
	}, []);

	async function listPetSitters() {
		setList([]);
		const response = await listar("api/petsitter/list");
		console.log("🍺 ~ createUser ~ response", response);
		const { errors } = response;
		if (errors) {
			alert("oh no");
		} else {
			// navigate("/");
			const listAux = response.map((user) => {
				const cityName = user.city.name;
				const stateName = user.city.state.name;
				const sum = user.raiting.reduce((accumulator, object) => {
					return accumulator + object.raiting;
				}, 0);
				const raiting = sum / user.raiting.length;
				return {
					id: user.id,
					photourl: user.photourl,
					name: `${user.name} ${user.lastname}`,
					email: user.email,
					address: `${cityName}, ${stateName}`,
					raiting: raiting,
				};
			});

			setList((cur) => {
				return [...cur, ...listAux];
			});
			console.log(list);
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
						className="fa fa-star checked  "
					></span>
				);
			} else {
				arrSpan.push(
					<span style={{ fontSize: "2em" }} className="fa fa-star"></span>
				);
			}
		}
		console.log(arrSpan);
		return <p className="text-muted mb-0">{arrSpan}</p>;
	}

	return (
		<>
			<div className="container">
				<div className="row mb-5 mt-3  ">
					<div className="col-12 d-flex justify-content-center align-items-center">
						<h1>Pet sitters</h1>
					</div>
				</div>
				<table class="table align-middle mb-0 bg-white">
					<thead class="bg-light">
						<tr>
							<th>Name</th>
							<th>Location</th>
							<th>Raiting</th>
							<th>Details</th>
						</tr>
					</thead>
					<tbody>
						{list.map((user) => (
							<tr>
								<td>
									<div class="d-flex align-items-center">
										<img
											src={user.photourl}
											alt=""
											style={{ width: "45px", height: "45px" }}
											class="rounded-circle"
										/>
										<div class="ms-3">
											<p class="fw-bold mb-1">{user.name}</p>
											<p class="text-muted mb-0">{user.email}</p>
										</div>
									</div>
								</td>
								<td>
									<p class="fw-normal mb-1">{user.address}</p>
								</td>
								<td>
									<p className="small text-muted mb-0">
										{generateRaiting(user.raiting)}
									</p>
								</td>
								<td>
									<button
										type="button"
										class="btn btn-link btn-rounded btn-sm fw-bold"
										data-mdb-ripple-color="dark"
										onClick={() => navigate(`/Detail/${user.id}`)}
									>
										View
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}
