import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app";

import "@fontsource/noto-sans/latin-400.css";
import "@fontsource/noto-sans/latin-500.css";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
