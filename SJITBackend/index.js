const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const Signup = require("./models/signupSchema");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 3001;
dotenv.config();
app.use(express.json())
app.use(cors())

console.log(process.env.MONGODB_URL);

mdb
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connection Successful"))
  .catch((err) => console.log("Check your connection String", err));

app.get("/", (req, res) => {
  res.send("<h1>Hello, World</h1>");
});

app.post("/signup", async (req, res) => {
  try {

    const {firstName, lastName, email, phoneNumber, password} = req.body
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(await bcrypt.compare(password,hashedPassword));
    const newSignup = new Signup({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      password: hashedPassword,
    });

    newSignup.save();
    
    console.log("Signup successful");
    
    res.status(201).json({ message: "Signup Successful", isSignup: true });
  
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({ message: "Signup unsuccessful", isSignup: false });
  }
});


app.post("/login", async (req, res) => {
  try{
    const {email, password} = req.body;
    const existingUser = await Signup.findOne({email: email})
    if(existingUser){
      const isValidPassword = await bcrypt.compare(password, existingUser.password);
      if(isValidPassword){
        res.json({message:"Login Successful", isLoggedIn: true});
      } else {
        res.status(201).json({message:"Incorrect password", isLoggedIn: false});
      }
    } else{
      res.status(201).json({message:"User not found, Signup first", isLoggedIn: false});  
    }
  } catch(err) {
    res.status(400).json({message:"Login Error", isLoggedIn: false});
  }
})

app.get("/getsignupdet", async (req, res) => {
  const signup = await Signup.find()
  res.json(signup)
})

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});