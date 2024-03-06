import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Amplify } from "aws-amplify";
import amplifyConfig from "./amplifyconfiguration.json";

import "./index.css";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(amplifyConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
