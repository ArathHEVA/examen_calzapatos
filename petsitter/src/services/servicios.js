// import Globals from "../../../../utils/Globales";
const API_URL = "http://localhost:5000/";

export const listar = async (metodo = "") => {
	try {
		const respuesta = await fetch(`${API_URL}${metodo}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			mode: "cors",
		});
		const datos = await respuesta.json();
		return datos;
	} catch (error) {
		console.log({ error });
	}
};

export const postAPI = async (metodo = "", payload = {}) => {
	try {
		const respuesta = await fetch(`${API_URL}${metodo}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(payload),
			mode: "cors",
		});
		console.log(respuesta);
		const datos = await respuesta.json();
		return datos;
	} catch (error) {
		const datos = {
			data: [],
			error: true,
			mensaje: "ocurrio un error en el servidor",
		};
		console.log({ error });
		return datos;
	}
};
