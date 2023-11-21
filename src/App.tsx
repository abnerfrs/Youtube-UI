import { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Shorts from "./pages/shorts";
import Subscribe from "./pages/subscribe";
import Library from "./pages/library";
import Historic from "./pages/historic";

function App() {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <BrowserRouter>
      <div className="App">
        <Header menuState ={openMenu} setMenuState={setOpenMenu} />
        <div style={{ width: "100%", display: "flex" }}>
          <Menu menuState ={openMenu} />
          <div style={{ width: "100%", padding:'50px 70px', boxSizing: 'border-box', display:'flex',justifyContent: 'center'}}>
            <Routes>
              <Route path="/" element={<Home menuState ={openMenu}/>} />
              <Route path="/shorts" element={<Shorts />} />
              <Route path="/subscribe" element={<Subscribe />} />
              <Route path="/library" element={<Library />} />
              <Route path="/historic" element={<Historic />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
