import { Link } from "react-router-dom";

function Signup() {
  return (
    <section>
      <form action="">
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" />
        </div>
        <div>
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
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <p>Already have an account? <Link to='/login'>Login</Link></p>
    </section>
  );
}

export default Signup;