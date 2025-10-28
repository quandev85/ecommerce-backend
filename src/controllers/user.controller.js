'use strict';

class UserController {
  signUp = async (req, res) => {
    res.send('User sign up');
  };
}

module.exports = new UserController();
