import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import MetaTags from "react-meta-tags";

ReactDOM.render(
  <div className="wrapper">
    <MetaTags>
      <title>nanovert</title>
      <meta
        name="description"
        content="Get rewards for your instagram stories!"
      />
      <meta property="og:title" content="nanovert" />
      <meta property="og:image" content="./images/socialMedia.jpg" />
      <meta property="og:url" content="www.nanovert.co.uk" />
    </MetaTags>
    <App />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
