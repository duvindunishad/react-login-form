import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';


  const Signup = () => {
  const history = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/signup", { name, email, password });

      if (!name || !email || !password) {
        alert("Please Enter Name, Email & Password.");
        return; // Stop execution if email or password are missing
    }
      else if (res.data === "exist") {
        alert("User already exists");
      } else if (res.data === "notexist") {
        history("/", { state: { id: email } });
        alert("User signup successfully");
      }
    } catch (error) {
      alert("Wrong details");
      console.log(error);
    }
  }

  return (
    
    <div className='container'><Navbar/>
    <div className='signup-container'>
      <h1>SignUp</h1>
      <form action="POST" className='signup-form'>
      <input
          type='name'
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
          name=''
          id=''
        />
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          name=''
          id=''
        />
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          name=''
          id=''
        />
        <button type='submit' onClick={submit}>Signup</button>
      </form>
      <div className='or-divider'>
        <p>OR</p>
      </div>
      <Link to="/" className='login-link'>Login Page</Link>
    </div>
    <Footer/>
    </div>
  );
};

export default Signup;
