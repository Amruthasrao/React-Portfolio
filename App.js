import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Home from "./routes/Home";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import About from "./routes/About";
import './App.css'; 
import Scrolltotop from './components/Scrolltotop';



function App(){
 
  return (
    <div classname="App" >
      <Scrolltotop/>
      <div className='content'>
    <Routes>   
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/project" element={<Project/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </div>
    </div>
  );
};

export default App;
