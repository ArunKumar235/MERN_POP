import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <form action="">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" />
                </div>
                <button type="submit"><Link to='/'>Submit</Link></button>
            </form>
        </div>
    );
}

export default Login;