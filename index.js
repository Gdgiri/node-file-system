// import spacing

import express from "express";

// declaration/initalization
const app = express();
const PORT = 4000;

// middleware
app.use(express.json());

// routes

app.get("/", (req, res) => {
  res.status(200).send("hai! Baiyaa cockrach may kartha ai")
});

// running port
app.listen(PORT, () => {
  console.log(`App is listening on the port= ${PORT}`);
});
