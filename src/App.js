import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import { getLoggedIn, logout } from "./services/auth";
import routes from "./config/routes";
import * as USER_HELPERS from "./utils/userToken";
import { AppBar } from "@mui/material";

export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate()
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error("Es necesario llenar todos los campos", res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      navigate('/')
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className={'App ' + theme}>
      <Navbar handleLogout={handleLogout} user={user} />
      <select className='themes' onChange={ event => setTheme(event.target.value) }>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>
      <Routes>
        {routes({ user, authenticate, handleLogout }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}
