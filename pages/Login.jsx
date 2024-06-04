import { useLoaderData, useNavigation, Form, redirect, useActionData } from "react-router-dom";
import { useState } from "react";
import loginpic from "../assets/svg/sign-up.svg";
import { loginUser } from "../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"
  try {
    const data = await loginUser({ email, password })
    localStorage.setItem("loggedin", true)
    return redirect(pathname)
  } catch(err) {
    return err.message
  }

}

function Login() {
  const errorMessage = useActionData()
  const message = useLoaderData()
  const navigation = useNavigation()


  return (
    <div className="login-container">
      <div className="login-info">
        <div className="login-head">
          {message && <h3 className="login-req">{message}</h3>}
          {errorMessage && <h3 className="login-req">{errorMessage}</h3>}
          <p>Welcome Back</p>
          <h1>Sign in to your account</h1>
          <span>Enter your log in details</span>
        </div>
        <div className="input-fields">
          <Form method="post" className="login-form" replace>
            <label htmlFor="email">Email</label> <br />
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
            />{" "}
            <br />
            <label htmlFor="password">Password</label> <br />
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
            />{" "}
            <br />
            <button disabled={navigation.state === "submitting"}>
              {navigation.state === "submitting" ? "Logging in...." : "Log in"}
            </button>
          </Form>
        </div>
      </div>
      <div className="login-pic">
        <img src={loginpic} alt="loginpic" className="login-img" />
      </div>
    </div>
  );
}

export default Login;