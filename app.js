require("./database/connect");
const connectDB = require("./database/connect");
const express = require("express");
const app = express();

const port = 8000;

const taskRouter = require("./routes/taskRouter");

app.use(express.json());

app.use("/api/v1/tasks", taskRouter);

app.get("/hello", (req, res) => {
  res.send("task manager app");
});

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`database connected successfully`);
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log("error connecting to database");
  }
};

start();
