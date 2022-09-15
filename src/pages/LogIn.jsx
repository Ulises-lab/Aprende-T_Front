import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./Signup";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import { Link } from "react-router-dom";

export default function LogIn({ authenticate }) {
  console.log(authenticate,'authenticate es')
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      email,
      password,
    };
    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: "Credenciales invalidas" });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.USERPROFILE);
    });
  }

  return (
    <div>
      <h1>Ingresar</h1>
      <form onSubmit={handleFormSubmission} className="signup__form">
        <label htmlFor="input-email">Correo: </label>
        <input
          id="input-email"
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-password">Password: </label>
        <input
          id="input-password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
          required
          minLength="8"
        />

        {error && (
          <div className="error-block">
            <p>Ocurrio un error al ingresar tus credenciales:</p>
            <p>{error.message}</p>
          </div>
        )}

        <div>
          <Link to='/auth/recoverPassword'>Recuperar password</Link>
        </div>

        <button className="button__submit" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}
