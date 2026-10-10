import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Self-hosted fonts: no requests to third-party font CDNs.
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
