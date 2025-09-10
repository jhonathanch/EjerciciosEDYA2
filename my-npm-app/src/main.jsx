import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import App from "./App";

function App() {
    return <h1>Parcial 1 Jhonathan Chicaiza herrera 2215286 ESTRUCTURA 2 </h1>;
}

ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App title="Parcial1" />
    </React.StrictMode>
);