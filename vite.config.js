import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Strict Content Security Policy, added to production builds only
// (the dev server needs inline scripts for hot reload).
const csp = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self'",
  "img-src 'self' data:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
  "upgrade-insecure-requests",
].join("; ");

const cspPlugin = {
  name: "inject-csp",
  apply: "build",
  transformIndexHtml(html, ctx) {
    if (ctx.server || globalThis.process?.env.NO_CSP) return html;
    return html.replace(
      '<meta charset="UTF-8" />',
      `<meta charset="UTF-8" />\n    <meta http-equiv="Content-Security-Policy" content="${csp}" />`
    );
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cspPlugin],
});
