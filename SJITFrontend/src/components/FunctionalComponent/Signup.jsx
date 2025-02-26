import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../CSS/Signup.css';

function Signup() {
  const navigate = useNavigate();
  const [firstName, setFN] = useState("");
  const [lastName, setLN] = useState("");
  const [email, setMail] =  useState("");
  const [phoneNumber, setPN] = useState();
  const [password, setPass] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();

    const res = await axios.post("http://localhost:3001/signup", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      password: password
    })
    const message = res.data.message;
    const isSignup = res.data.isSignup;
    if(isSignup){
      alert(message);
      navigate("/login");
    }else{
      alert(message);
    }
    console.log("Post request sent")
  };


  return (
    <section id="signup">
      <div id="signup-form">
      <form onSubmit={handleSignup}>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFN(e.target.value)}/>
          <br />
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={lastName} onChange={(e) => setLN(e.target.value)}/>
          <br />
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" value={email} onChange={(e) => setMail(e.target.value)}/>
          <br />
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="number" id="phoneNumber" value={phoneNumber} onChange={(e) => setPN(e.target.value)}/>
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPass(e.target.value)}/>
          <br />
        {/* <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" name="dob" />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <input type="radio" id="male" name="gender" value="male" />
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female">Female</label>
          <input type="radio" id="other" name="gender" value="other" />
          <label htmlFor="other">Other</label>
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="number" name="phone" id="phone" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" />
        </div>
        <div>
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input type="password" name="confirm_password" />
        </div> */}
          <button type="submit">Submit</button>
      </form>
      <p>Already have an account? <Link to='/login'>Login</Link></p>
      </div>
    </section>
  );
}

export default Signup;