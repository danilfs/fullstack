import express from "express";
import jwt from "jsonwebtoken";
import mongoose from 'mongoose'

mongoose.connect()

const app = express();

app.use(express.json());

app.post("/auth/login", (req, res) => {
  console.log(req.body);

  const token = jwt.sign(
    {
      email: req.body.email,
      fullName: "Dafalena",
    },
    "secret123"
  );
  res.json({
    success: true,
    token,
  });
});

app.get("/", (req, res) => {
  res.send("Hello World 111111");
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server Ok");
});
