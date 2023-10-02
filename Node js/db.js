const Sequelize = require('sequelize');

const sequelize = new Sequelize('savingdata', 'root', 'Ajay@1998', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
