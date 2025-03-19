import express, { json } from "express";
import { connect, Schema, model } from "mongoose";
import cors from "cors";
const app = express();
app.use(cors());
app.use(json());

connect("mongodb://localhost:27017/studentDB")
  .then((res) => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("DB Connection unsuccessful");
  });

const StudentSchema = new Schema({
  name: String,
  age: Number,
  subject: String,
  course: String,
  mobile: String,
  email: String,
});

const student = model("students", StudentSchema);

app.get("/", async (req, res) => {
  var result = await student.find();
  res.send(result);
});

app.post("/create", async (req, res) => {
  var result = await student.insertOne(req.body);
  await result.save();
  res.send("Student Added Successfully");
});

app.put("/update/:_id", async (req, res) => {
  var result = await student.updateOne(req.params._id, { $set: req.body });
  res.send("Student Updated");
});

app.put("/delete/:_id", async (req, res) => {
  var result = await student.deleteOne(req.params._id);
  res.send("Student Deleted");
});

app.listen(4000, () => {
  console.log("Server running on 4000");
});


