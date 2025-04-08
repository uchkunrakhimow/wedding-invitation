import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@fontsource/instrument-sans/400.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/instrument-sans/600.css";
import "@fontsource/instrument-sans/700.css";

createRoot(document.getElementById("root")!).render(<App />);
