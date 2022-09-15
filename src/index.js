import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

/* 
https://v5.reactrouter.com/web/guides/quick-start
react-router-dom v6
location
useLocation,useParams,useNavigate
history (navegar )
match (era para la info de la ruta) */