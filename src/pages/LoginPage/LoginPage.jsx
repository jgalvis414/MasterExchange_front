
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import "./LoginPage.css";

const LoginPage = () => {
  const { authenticated, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", { email, password });
    login(email, password); //intengracion con el contexto y la Api
  };
  if (!authenticated) {
    return (
      <>
        <div id="login">
          <h1 className="title">Login del sistema</h1>
          <p>{String(authenticated)}</p>
          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="actions">
              <button type="submit"> Ingresar </button>
            </div>
          </form>
        </div>
      </>
    );
  } else {  navigate("/dashboard");}
};
export default LoginPage;
