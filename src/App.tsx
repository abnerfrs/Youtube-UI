import React, { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";

function App() {
  
    const [openMenu, setOpenMenu] = useState(true);
  
    return (
    <div className="App">
      <Header menuState={openMenu} setMenuState={setOpenMenu}/>
      <div style={{ width: "100%", display: "flex" }}>
        <Menu menuState={openMenu}/>
        <div style={{ backgroundColor: "blue", width: "100%" }}></div>
      </div>
    </div>
  );
}

export default App;
