const getAllTasks = (req, res) => {
  res.send("all items");
};

const getSingleTask = (req, res) => {
  res.send("single item");
};

const createTasks = (req, res) => {
  res.send("create items");
};
const updateTask = (req, res) => {
  res.send("edit items");
};

const deleteTask = (req, res) => {
  res.send("delete item");
};

module.exports = { getAllTasks };
