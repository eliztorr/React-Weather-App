import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container p-0">
        <Weather defaultCity="Barcelona" />
        <footer>
          Open source code by{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/elizabethtorralbo/"
            rel="noreferrer"
          >
            Elizabeth Torralbo
          </a>{" "}
          available on{" "}
          <a
            target="_blank"
            href="https://github.com/eliztorr/React-Weather-App"
            rel="noreferrer"
          >
            Github{" "}
          </a>
          and hosted on
          <a
            target="_blank"
            href="https://vocal-elf-22c086.netlify.app/"
            rel="noreferrer"
          >
            {" "}
            Netlify
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
