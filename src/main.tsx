

import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import  App  from "./App";
import { ThirdwebProvider } from "thirdweb/react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";



createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <ThirdwebProvider>
        < App />
      </ThirdwebProvider>
  </React.StrictMode>
);

