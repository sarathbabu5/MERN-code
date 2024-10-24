import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { AppProvider } from "./Context.jsx";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
