import { createRoot } from "react-dom/client";
import { App } from "@/app/App";
import { StyledThemeProvider } from "@/app/providers/ThemeProvider/ui/ThemeProvider";
import GlobalStyles from "@/app/styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
if (!container) {
 throw new Error(
  "Container root not found. Failed to mount react app"
 );
}

const root = createRoot(container);
root.render(
  <BrowserRouter>
 <StyledThemeProvider>
  <App />
  <GlobalStyles />
 </StyledThemeProvider>
  </BrowserRouter>
);
