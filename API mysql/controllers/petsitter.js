const Sequelize = require("sequelize");
const petsitter = require("../models").petsitter;
const city = require("../models").city;
const state = require("../models").state;
const petstype = require("../models").petstype;
const Reviews = require("../Schemas/Reviews");

module.exports = {
	create(req, res) {
		console.log("🍺 ~ create ~ req", req.body);
		return petsitter
			.create({
				cityid: req.body.cityid,
				name: req.body.name,
				lastname: req.body.lastname,
				email: req.body.email,
				cellphone: req.body.cellphone,
				photourl: req.body.photourl,
				age: req.body.age,
				petstypes: req.body.petstypes,
			})
			.then((petsitter) => res.status(200).send(petsitter))
			.catch((error) => res.status(400).send(error));
	},
	update(req, res) {
		return petsitter
			.update(
				{
					name: req.body.name,
				},
				{ where: { id: req.body.id } }
			)
			.then((petsitter) => res.status(200).send(petsitter))
			.catch((error) => res.status(400).send(error));
	},
	delete(req, res) {
		return petsitter.destroy({ where: { id: req.params.id } }).then((count) => {
			if (!count) {
				return res.status(404).send({ error: "Id not found" });
			}
			res.status(200).send({ message: "exito" });
		});
	},
	async list(_, res) {
		const siiters = await petsitter.findAll({
			include: {
				model: city,
				as: "city",
				include: {
					model: state,
					as: "state",
				},
			},
		});
		let sitterAux = siiters.map((sit) => {
			console.log("🍺 ~ sitterAux ~ sit", sit);

			return {
				id: sit.id,
				cityid: sit.cityid,
				name: sit.name,
				lastname: sit.lastname,
				email: sit.email,
				cellphone: sit.cellphone,
				photourl: sit.photourl,
				age: sit.age,
				petstype: sit.petstype,
				city: sit.city,
				raitings: [],
			};
		});

		for (let index = 0; index < sitterAux.length; index++) {
			let item = sitterAux[index];
			const raiting = await Reviews.find({ pettsitterId: item.id });
			sitterAux[index]["raiting"] = raiting;
		}

		// .then((petsitter) => res.status(200).send(petsitter))
		// .catch((error) => res.status(400).send(error));

		res.status(200).send(sitterAux);
	},
	find(req, res) {
		return petsitter
			.findAll({
				include: {
					model: city,
					as: "city",
					where: {
						stateid: req.params.id,
					},
					include: {
						model: state,
						as: "state",
					},
				},
			})
			.then((petsitter) => res.status(200).send(petsitter))
			.catch((error) => res.status(400).send(error));
	},
	findByUser(req, res) {
		return petsitter
			.findOne({
				where: { id: req.params.id },
				include: {
					model: city,
					as: "city",

					include: {
						model: state,
						as: "state",
					},
				},
			})
			.then((petsitter) => res.status(200).send(petsitter))
			.catch((error) => res.status(400).send(error));
	},
	async addPets(req, res) {
		const { id, petstypes } = req.body;
		const item = await petsitter.findOne({
			where: {
				id: id,
			},
		});
		if (item) {
			let arrPets = JSON.parse(item.petstypes);
			arrPets = [...arrPets, ...JSON.parse(petstypes)];
			const updateItem = await petsitter.update(
				{
					petstypes: JSON.stringify(arrPets),
				},
				{ where: { id: id } }
			);
			res.status(200).send(updateItem);
		} else {
			res.status(400).send({ error: "id not found" });
		}
	},
	async getPetsByUser(req, res) {
		const item = await petsitter.findOne({
			where: {
				id: req.params.id,
			},
		});
		if (item) {
			const pets = await petstype.findAll({
				where: {
					id: JSON.parse(item.petstypes),
				},
			});
			res.status(200).send(pets);
		} else {
			res.status(400).send({ error: "id not found" });
		}
	},
	async deletePetType(req, res) {
		const { id, idPet } = req.body;
		const item = await petsitter.findOne({
			where: {
				id: id,
			},
		});
		if (item) {
			let arrPets = JSON.parse(item.petstypes);
			let newArr = arrPets.filter((type) => type != idPet);
			console.log("🍺 ~ deletePetType ~ newArr", newArr);
			const updateItem = await petsitter.update(
				{
					petstypes: JSON.stringify(newArr),
				},
				{ where: { id: id } }
			);
			res.status(200).send(updateItem);
		} else {
			res.status(400).send({ error: "id not found" });
		}
	},
};
