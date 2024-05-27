const sendAllUsers = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(req.usersArray));
};
const sendMe = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};
const sendUserById = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};
const sendUserUpdated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(JSON.stringify({ message: "категория обновлена" }));
};
const sendUserDeleted = (req, res) =>{
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify(req.user));
}
module.exports = {
  sendAllUsers,
  sendUserById,
  sendUserUpdated,
  sendUserDeleted,
  sendMe,
};
