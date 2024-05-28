const gamesRouter = require('express').Router();

const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIsVoteRequest, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkIsGameExists } = require('../middlewares/games');
const { sendAllGames, sendGameById, sendGameUpdated, sendGameDeleted } = require('../controllers/games');
const { checkAuth } = require("../middlewares/auth.js");

const sendGameCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.game));
  };

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.get('/games/:id', findGameById, sendGameById);
gamesRouter.post("/games", findAllGames, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth, createGame, sendGameCreated);
gamesRouter.put("/games/:id", findGameById, checkIsVoteRequest, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth,  updateGame, sendGameUpdated);
gamesRouter.delete('/games/:id', checkAuth, deleteGame, sendGameDeleted);

module.exports = gamesRouter;