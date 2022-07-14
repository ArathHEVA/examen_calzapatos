const mongoose = require("mongoose");

const Reviews = new mongoose.Schema(
	{
		Nombre: { type: String },
		pettsitterId: { type: String },
		raiting: { type: Number },
		commets: { type: String },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

module.exports = mongoose.model("Reviews", Reviews, "Reviews");
