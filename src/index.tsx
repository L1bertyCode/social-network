import { createRoot } from "react-dom/client";
import { App } from "./app/App";
import GlobalStyles from "./app/styles/GlobalStyles";

const container = document.getElementById("root");
if (!container) {
 throw new Error(
  "Container root not found. Failed to mount react app"
 );
}

const root = createRoot(container);
root.render(
 <>
  <App />
  <GlobalStyles/>
 </>
);
