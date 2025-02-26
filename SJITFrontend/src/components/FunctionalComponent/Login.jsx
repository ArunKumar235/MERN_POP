import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
    const navigate = useNavigate();
    const [email, setMail] = useState("");
    const [password, setPass] = useState("");
    const handleLogin = async ( event ) => {
        event.preventDefault();
        const res = await axios.post("https://mern-pop.onrender.com/login", {
            email: email,
            password: password
        });
        const data = res.data;
        alert(data.message);
        if(data.isLoggedIn){
            navigate("/");
        }else{
            alert("Try LoggingIn again");
        }
    };
    return (
        <div>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setMail(e.target.value)} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPass(e.target.value)} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;