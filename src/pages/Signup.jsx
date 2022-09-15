import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";

export default function Signup({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    lastname: "",
    email: "",
    profile_pic: "",
    password: "",
  });
  const { username, lastname, email, profile_pic, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      ...form
    };
    signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error("El registro no fue exitoso, intentalo de nuevo", res);
        return setError({
          message: res.errorMessage,
        });
      }
      // successful signup
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.USERPROFILE);
    });
  }

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleFormSubmission} className="auth__form">
        <label htmlFor="input-username">Nombre: </label>
        <input
          id="input-username"
          type="text"
          name="username"
          placeholder="Text"
          value={username}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-lastname">Apellido: </label>
        <input
          id="input-lastname"
          type="text"
          name="lastname"
          placeholder="Text"
          value={lastname}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-email">Correo: </label>
        <input
          id="input-email"
          type="email"
          name="email"
          placeholder="ejemplo@dominio.yxz"
          value={email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-image">Imagen: </label>
        <input
          id="input-profile_pic"
          type="file"
          name="profile_pic"
          value={profile_pic}
          onChange={handleInputChange}
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
            <p>Ocurrio un error en el formulario: </p>
            <p>{error.message}</p>
          </div>
        )}

        <button className="button__submit" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}
