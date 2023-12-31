import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'

const Home = () => {
    const history=useNavigate();

    const location = useLocation()

    const handleLogout = () => {
        // Implement your logout logic here
        // This could involve clearing user data from local storage, resetting state, etc.
        // For this example, let's just navigate to the login page
        history("/");
      };
  return (
    <div className='homepage'>
                  <div className='card-container-homepage'>
      <h1>Hello {location.state.name} and welcome to the home page</h1>
      <h1>Email:  {location.state.email}</h1>
      <button type='submit' onClick={handleLogout}>Logout</button>
</div>
    </div>
  )
}

export default Home
