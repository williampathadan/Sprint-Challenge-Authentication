const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  // there should be a user object set on req
  // use that req.user object to create a user and save it to our Mongo instance.
  const { user } = req;
  new User(user)
    .save()
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log('ERR ::', err);
    });
};

module.exports = {
  createUser
};
