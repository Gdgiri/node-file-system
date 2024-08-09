// import necessary modules
import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import { format } from "date-fns";

// declaration/initialization
const app = express();
const PORT = 4000;

// middleware
app.use(express.json());
app.use(cors()); // enable CORS

// route to create a file with the current timestamp
app.get("/create", (req, res) => {
  let today = format(new Date(), "dd-MM-yyyy-HH-mm-ss"); // note the date format adjustment
  const filepath = path.join("Timestamp", `${today}.txt`);

  try {
    fs.writeFileSync(filepath, today, "utf-8");
    res.status(201).send(`File created with timestamp: ${today}`);
  } catch (error) {
    res.status(500).send("Error creating file");
  }
});

// route to read a file based on a timestamp
app.get("/read/:timestamp", (req, res) => {
  const { timestamp } = req.params;
  const filepath = path.join("Timestamp", `${timestamp}.txt`);

  try {
    const data = fs.readFileSync(filepath, "utf-8");
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send("File not found");
  }
});

// default route
app.get("/", (req, res) => {
  res.status(200).send("Hello! Welcome to the file operations API.");
});

// running port
app.listen(PORT, () => {
  console.log(`App is listening on the port= ${PORT}`);
});
