"use strict";
module.exports = (sequelize, DataTypes) => {
	const City = sequelize.define(
		"city",
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			stateid: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			name: {
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
			tableName: "city",
			classMethods: {},
		}
	);
	City.associate = function (models) {
		// associations can be defined here
		City.belongsTo(models.state, {
			as: "state",
			foreignKey: "stateid",
		});
	};
	return City;
};
