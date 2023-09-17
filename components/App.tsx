import React, { useEffect } from "react";
import Hi from "@/Hi";


const App = () => {
  useEffect(() => {
    const call = async () => {
      // fetch("api/dd.js").then((res) => res.json());
    };
    call();
  }, []);

  return (
    <div>
      Hello from MySDK!<Hi></Hi>
    </div>
  );
};

export default App;
