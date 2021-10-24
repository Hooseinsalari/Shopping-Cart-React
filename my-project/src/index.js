import React from "react";
import ReactDom from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

// ReactDom.render(<h1>Hossein</h1>, document.getElementById("root"))
// const header = <h1>Hossein</h1>
// ReactDom.render(header, document.getElementById("root"))

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById("root"));
