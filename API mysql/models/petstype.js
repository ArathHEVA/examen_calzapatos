"use strict";
module.exports = (sequelize, DataTypes) => {
	const Petstype = sequelize.define(
		"petstype",
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			description: {
				allowNull: false,
				type: DataTypes.STRING,
			},
		},
		{
			timestamps: false,
			freezeTableName: true,
			tableName: "petstype",
			classMethods: {},
		}
	);
	Petstype.associate = function (models) {
		// associations can be defined here
	};
	return Petstype;
};
