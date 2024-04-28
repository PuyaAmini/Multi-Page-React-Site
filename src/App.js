import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <nav>
      <h1>Howya?</h1>
      <NavLink exact to={'/'}>Home</NavLink>
      <NavLink to={'/Contact'}>Contact</NavLink>
      <NavLink to={'/About'}>About</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
