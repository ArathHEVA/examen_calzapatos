"use strict";
module.exports = (sequelize, DataTypes) => {
	const State = sequelize.define(
		"state",
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
			tableName: "state",
			classMethods: {},
		}
	);
	State.associate = function (models) {
		// associations can be defined here
		// State.belongsTo(models.city, {
		// 	as: "city",
		// 	foreignKey: "stateid",
		// });
	};
	return State;
};
