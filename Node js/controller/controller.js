
const { User } = require('../models'); // Import the sequalize model here....

//here i am handling  form submissions
async function submitForm(req, res) {
  try {
    const { name, email, phone } = req.body;
    const newUser = await User.create({            // here we insering  the form data into the database
      name,
      email,
      phone,
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


async function getUsers(req, res) {
  try {
    
    const users = await User.findAll();// that fetch all data from db

    res.status(200).json(users);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// edit user 
async function editUser(req, res) {
  try {
    const userId = req.params.id;   // takeing the user id from url  for editing
    // console.log(userid + " "+"-------------------------------------------------------------------------------------------")
    const { name, email, phone } = req.body;

  
    const user = await User.findByPk(userId);  // here i store the user id  in   user for editing  
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // here i upadate all  user data
    user.name = name;
    user.email = email;
    user.phone = phone;

    await user.save(); // on db aslo th data changes

    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// here delete the user 
async function deleteUser(req, res) {
  try {
    const userId = req.params.id;  // same like above i take user id from url 

    
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    
    await user.destroy(); // delete user from db aslo

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {   // here exports all routes 
  submitForm,
  getUsers,
  editUser,
  deleteUser,
};
