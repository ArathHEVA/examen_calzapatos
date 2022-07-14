"use strict";
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		"user",
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
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
			address: {
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
			password: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			createdAt: {
				type: DataTypes.DATE,
				defaultValue: sequelize.NOW,
			},
			updatedAt: {
				type: DataTypes,
				defaultValue: sequelize.NOW,
			},
		},
		{
			timestamps: false,
			freezeTableName: true,
			tableName: "user",
			classMethods: {},
		}
	);
	User.associate = function (models) {
		// associations can be defined here
	};
	return User;
};
