// from https://www.w3schools.com/react/react_usecallback.asp
import "./App.css";
import App1 from "./components/App1";
import App2 from "./components/App2";
import App3 from "./components/App3";
import App4 from "./components/App4";
import App5 from "./components/App5";
import Bpp1 from "./components/Bpp1";
import Bpp2 from "./components/Bpp2";
import Bpp3 from "./components/Bpp3";

import AppSelector from "./components/AppSelector";

function App() {
  console.log("App render");
  return (
    <AppSelector apps={[Bpp1, Bpp2, Bpp3, App1, App2, App3, App4, App5]} />
  );
}

export default App;
