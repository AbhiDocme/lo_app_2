import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpage from "./Components/Login/Loginpage";
import Cardcomp from "./Component2/Card/Card";
import Settings from "./SettingsPage/Settings";
import Appearance from "./SettingsPage/Appearance";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />}></Route>
          <Route path="/home" element={<Cardcomp />}></Route>
          <Route path="/settings" element={<Settings/>}></Route>
          <Route path="/settings/appearance" element={<Appearance/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
