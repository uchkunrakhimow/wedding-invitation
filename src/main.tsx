import { createRoot } from "react-dom/client";

import "@fontsource/instrument-sans/400.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/instrument-sans/600.css";
import "@fontsource/instrument-sans/700.css";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(<App />);
