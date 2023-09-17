import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

class MySDK {
  renderApp() {
    const root = createRoot(document.getElementById("root")!);
    // ReactDOM.render(<App />, document.getElementById("root"));
    root.render(<App />);
  }
}
if (window) {
  window.MySDK = MySDK;
} else {
  throw new Error("My SDK can only be used in a browser environment.");
}
