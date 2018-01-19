const {
  authenticate,
  encryptUserPW,
  compareUserPW
} = require('../utils/middlewares');

const {
  getAllJokes,
  createUser,
  login
} = require('../controllers');

module.exports = server => {
  server.get('/api/jokes', authenticate, getAllJokes);
  server
    .route('/api/users')
    .post(encryptUserPW, createUser /* I need some controller Love*/);
  server.route('/api/login').post(compareUserPW, login);
};
