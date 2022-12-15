// from https://www.w3schools.com/react/react_usecallback.asp
import "./App.css";
import App1 from "./components/App1";
import App2 from "./components/App2";
import AppSelect from "./AppSelect";
import { createElement, useState } from "react";

const apps = [App1, App2];

const App = () => {
  const [appNr, setAppNr] = useState(0);
  return (
    <>
      <AppSelect apps={apps} onClick={(n) => setAppNr(n)} />
      {createElement(apps[appNr])}
    </>
  );
};

export default App;
