const express = require('express');
const router = express.Router();
const controller = require('../controller/controller'); 

// Define routes using controller functions
router.post('/submit-form', controller.submitForm);
router.get('/get-users', controller.getUsers);
router.put('/edit-user/:id', controller.editUser);
router.delete('/delete-user/:id', controller.deleteUser);

module.exports = router;
