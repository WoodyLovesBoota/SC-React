import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Web3ReactProvider } from "@web3-react/core";
import { getProvider } from "./utils/provider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Web3ReactProvider getLibrary={getProvider}>
    <App />
  </Web3ReactProvider>
);
