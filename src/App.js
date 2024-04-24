import './App.css';
import { BrowserRouter, Route , Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {
  return (
    <div className="App">

      <h1>Howya?</h1>
      <BrowserRouter>
        <nav>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
          </Routes>

        </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
