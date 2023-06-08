const task = require("../models/taskSchema");

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await task.find({});
    res.status(200).json({ tasks: allTasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const taskid = req.params.id;
    const singleTask = await task.findOne({ _id: taskid });
    if (!singleTask) {
      return res.status(404).json({ msg: "no task with given id" });
    }
    res.status(200).json({ task: singleTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTasks = async (req, res) => {
  try {
    const newTask = await task.create(req.body);
    res.status(201).json({ newTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateTask = async (req, res) => {
  try {
    const taskid = req.params.id;
    const singleTask = await task.findOneAndUpdate({ _id: taskid }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!singleTask) {
      return res.status(404).json({ msg: "no task with given id" });
    }
    res.status(200).json({ task: singleTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const taskid = req.params.id;
    const singleTask = await task.findOneAndDelete({ _id: taskid });
    if (!singleTask) {
      return res.status(404).json({ msg: "no task with given id" });
    }
    res.status(200).json({ task: singleTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTasks,
  deleteTask,
  updateTask,
  getSingleTask,
};
