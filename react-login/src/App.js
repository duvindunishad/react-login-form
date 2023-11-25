import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';


import Contact from './components/navpages/contact';
import About from './components/navpages/about';
import Blog from './components/navpages/blog';

import {useState} from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>

          <Route path="/navpages/contact" element={<Contact/>}/>
          <Route path="/navpages/about" element={<About/>}/>
          <Route path="/navpages/blog" element={<Blog/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
