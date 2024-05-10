import { useNavigate } from "react-router-dom";
import { useState } from "react";
import loginpic from "../assets/svg/sign-up.svg";

function Login() {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData);
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }


    return (
        <div className="login-container">
            <div className="login-info">
                <div className="login-head">
                    <p>Welcome Back</p>
                    <h1>Sign in to your account</h1>
                    <span>Enter your log in details</span>
                </div>
                <div className="input-fields">
                    <form onSubmit={handleSubmit} className="login-form">
                        <label htmlFor="email">Email</label> <br />
                        <input
                            name="email"
                            onChange={handleChange}
                            type="email"
                            placeholder="Enter your email address"
                            value={loginFormData.email}
                        />  <br />
                        <label htmlFor="password">Password</label>  <br />
                        <input
                            name="password"
                            onChange={handleChange}
                            type="password"
                            placeholder="Enter your password"
                            value={loginFormData.password}
                        />  <br />
                        <button>Sign In</button>
                    </form>
                </div>
            </div>
            <div className="login-pic">
                <img src={loginpic} alt="loginpic" className="login-img" />
            </div>
        </div>
    )
}

export default Login