import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';


const Login = () => {

    const history=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e){
    e.preventDefault();
    try {
        if (!email || !password) {
            alert("Email and password are required.");
            return; // Stop execution if email or password are missing
        }
    
        // Add email and password to the request
        const data = { email, password };
    
        await axios.post("http://localhost:8000/", data)
            .then(res => {
                if (res.data === "exist") {
                    history("/home", { state: { id: email } });
                } else if (res.data === "notexist") {
                    alert("User has not signed up");
                }
            })
            .catch(e => {
                alert("Wrong details");
                console.log(e);
            });
    } catch (e) {
        console.log(e);
    }}
    

  return (
    <div className='container'>
        <Navbar/>
    <div className='login-container'>
      <h1>Login</h1>
      <form action="POST" className='login-form'>
              <input
                  type='email'
                  onChange={(e) => {
                      setEmail(e.target.value);
                  }}
                  placeholder='Email'
                  name=''
                  id=''
              />
              <input
                  type='password'
                  onChange={(e) => {
                      setPassword(e.target.value);
                  }}
                  placeholder='Password'
                  name=''
                  id=''
              />
        <button onClick={submit}>Login</button>
      </form>
      <div className='or-divider'>
        <p>OR</p>
      </div>
      <Link to="./Signup" className='signup-link'>Signup Page</Link>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Login;
