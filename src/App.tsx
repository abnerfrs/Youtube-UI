import { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Shorts from "./pages/shorts";
import Subscribe from "./pages/subscribe";
import Library from "./pages/library";
import Historic from "./pages/historic";
import { UserStorage } from "./context/userContext";
import Login from "./pages/login";

function App() {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <UserStorage>
      <BrowserRouter>
        <div className="App">
          <Header menuState={openMenu} setMenuState={setOpenMenu} />
          <div style={{ width: "100%", display: "flex" }}>
            <Menu menuState={openMenu} />
            <div
              style={{
                width: "100%",
                padding: "50px 70px",
                boxSizing: "border-box",
              }}
            >
              <Routes>
                <Route path="/" element={<Home menuState={openMenu} />} />
                <Route path="/shorts" element={<Shorts />} />
                <Route path="/subscribe" element={<Subscribe />} />
                <Route path="/library" element={<Library />} />
                <Route path="/historic" element={<Historic />} />
                <Route path="/login" element={<Login/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </UserStorage>
  );
}

export default App;
