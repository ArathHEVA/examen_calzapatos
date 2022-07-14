"use strict";
module.exports = (sequelize, DataTypes) => {
	const Petsitter = sequelize.define(
		"petsitter",
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			cityid: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			name: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			lastname: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			email: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			cellphone: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			photourl: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			age: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			petstypes: {
				allowNull: false,
				type: DataTypes.JSON,
			},
		},
		{
			timestamps: false,
			freezeTableName: true,
			tableName: "petsitter",
			classMethods: {},
		}
	);
	Petsitter.associate = function (models) {
		// associations can be defined here
		Petsitter.belongsTo(models.city, {
			as: "city",
			foreignKey: "cityid",
		});
	};
	return Petsitter;
};
