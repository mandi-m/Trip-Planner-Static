'use strict';

const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripplanner');
const Place = require('./place');
const Activity = require('./activity');
const Hotel = require('./hotel');
const Restaurant = require('./restaurant');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {
    db
};