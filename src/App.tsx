import React, { useEffect } from "react";
const App = () => {
  useEffect(() => {
    const call = async () => {
      // fetch("api/dd.js").then((res) => res.json());
    };
    call();
  }, []);

  return <div>Hello from MySDK!</div>;
};

export default App;
