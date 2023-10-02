const Sequelize = require('sequelize');
const sequelize = require('./db'); 

// Define the User model
const User = sequelize.define('User', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.STRING,
});

module.exports = {
  User,
};
