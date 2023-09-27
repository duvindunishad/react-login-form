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
        await axios.post("http://localhost:8000/",{password,email})
        .then(res=>{
            if(res.data="exsit"){
                history("/home",{state:{id:email}})
            }
            else if(res.data="notexsit"){
                alert("user have not signup")
            }
        })
        .catch(e=>{
            alert("wrong details")
            console.log(e)
        })
    } catch (e) {
        console.log(e);
    }
  }

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
              <button type='submit' onClick={submit}>Login</button>
        {/* <button onClick={submit}>Login</button> */}
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
