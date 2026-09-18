import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { GlobalLayout } from "./components/layout/main";
import { App } from "./init/app";

createRoot(document.getElementById("root") || document.body).render(
  <StrictMode>
    <GlobalLayout>
      <App />
    </GlobalLayout>
  </StrictMode>,
);
