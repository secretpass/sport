import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { App } from "./manager/app";

createRoot(document.getElementById("root") || document.body).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
