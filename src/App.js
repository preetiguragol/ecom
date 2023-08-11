import React, {useState, useEffect} from 'react';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Men from './components/Men';
import Women from './components/Women';
import About from './components/About';


function App() {
  return (
    <Router>
      <div>
        <section>                              
            <Routes>  
               <Route path="/Home" element={<Home/>}/>
               <Route path="/signup" element={<SignUp/>}/>
               <Route path="/" element={<Login/>}/>
               <Route path="/Men" element={<Men/>}/>
               <Route path="/Women" element={<Women/>}/>
               <Route path="/About" element={<About/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}

export default App;
