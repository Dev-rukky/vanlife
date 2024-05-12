import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import loginpic from "../assets/svg/sign-up.svg";
import { loginUser } from "../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

function Login() {
  const [loginFormData, setLoginFormData] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const message = useLoaderData();
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    loginUser(loginFormData)
      .then((data) =>
        navigate("/host", { replace: true })
    )
      .catch((err) => setError(err))
      .finally(() => setStatus("idle"));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="login-container">
      <div className="login-info">
        <div className="login-head">
          {message && <h3 className="login-req">{message}</h3>}
          {error && <h3 className="login-req">{error.message}</h3>}
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
            />{" "}
            <br />
            <label htmlFor="password">Password</label> <br />
            <input
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Enter your password"
              value={loginFormData.password}
            />{" "}
            <br />
            <button disabled={status === "submitting"}>
              {status === "submitting" ? "Logging in...." : "Log in"}
            </button>
          </form>
        </div>
      </div>
      <div className="login-pic">
        <img src={loginpic} alt="loginpic" className="login-img" />
      </div>
    </div>
  );
}

export default Login;