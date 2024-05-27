const usersRouter = require('express').Router();
  const { findAllUsers, createUser, findUserById, updateUser, deleteUser, checkIsUserExists, hashPassword, checkEmptyNameAndEmail, checkEmptyNameAndEmailAndPassword }= require('../middlewares/users');
  const { sendAllUsers, sendUserById, sendUserUpdated, sendUserDeleted, sendMe }= require('../controllers/users');
const { checkAuth } = require('../middlewares/auth')
const sendUserCreated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};

  usersRouter.get('/users',
   findAllUsers,
    sendAllUsers);


  usersRouter.get('/users/:id',
   findUserById,
    sendUserById);


usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);
usersRouter.delete(
    "/users/:id",
    checkAuth,
    deleteUser,
    sendUserDeleted
);

usersRouter.get("/me", checkAuth, sendMe);

  module.exports = usersRouter;
  