import { createRoot } from "react-dom/client";
import { App } from "./template/components/App";
import "./template/css/style.css";

const root = document.getElementById("root");

createRoot(root).render(<App />);
