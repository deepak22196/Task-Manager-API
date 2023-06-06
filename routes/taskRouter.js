const express = require("express");

const { getAllTasks } = require("../controllers/taskControllers");

const router = express.Router();

router.get("/", getAllTasks);

router.get("/:id", getAllTasks);

router.post("/", getAllTasks);

router.put("/:id", getAllTasks);

router.delete("/:delete", getAllTasks);

module.exports = router;
