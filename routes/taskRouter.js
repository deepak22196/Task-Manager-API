const express = require("express");

const {
  getAllTasks,
  createTasks,
  updateTask,
  getSingleTask,
  deleteTask,
} = require("../controllers/taskControllers");

const router = express.Router();

router.get("/", getAllTasks);

router.get("/:id", getSingleTask);

router.post("/", createTasks);

router.patch("/:id", updateTask);

router.delete("/:id", deleteTask);

module.exports = router;
