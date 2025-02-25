const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const Signup = require("./models/signupSchema");

const app = express();
const PORT = 3001;
dotenv.config();
app.use(express.json())

console.log(process.env.MONGODB_URL);

mdb
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connection Successful"))
  .catch((err) => console.log("Check your connection String", err));

app.get("/", (req, res) => {
  res.send("<h1>Hello, World</h1>");
});

app.post("/signup", (req, res) => {
  try {

    const {firstName, lastName, email, phoneNumber, password} = req.body

    const newSignup = new Signup({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    });

    newSignup.save();
    
    console.log("Signup successful");
    
    res.status(201).json({ message: "Signup Successful", isSignup: true });
  
} catch (error) {
    console.log("Error", error);
    res.status(400).json({ message: "Signup unsuccessful", isSignup: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});