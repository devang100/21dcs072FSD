import React, { useState } from 'react';
import{BrowserRouter as Router , Routes, Route, Link} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/Notes/NoteState';

function App() {
  return(
    <>
    <NoteState>
    <Router>
    <Navbar/>
      {/*<Home/> */}
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/About" element={<About/>} />
        {/* <Route exact path="/About"></Route><About/> */}
      </Routes>
    </Router>
    </NoteState>
    
    
    </>
  );
}

export default App;
