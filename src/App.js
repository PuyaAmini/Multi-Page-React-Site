import "./App.css";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Article from "./pages/Article";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Howya?</h1>
          {/* always use this when you navigating in ur React websites (Link & NavLink) instead od <a/> */}
          {/* use '<a href  for external links*/}
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </nav>

        {/* <nav> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/articles/:id" element={<Article />} />
          {/* ":" is Route Parameter and it say the id part is changeable */}
        </Routes>

        {/* </nav> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
