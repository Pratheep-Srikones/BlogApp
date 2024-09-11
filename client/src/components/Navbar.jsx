import { useContext } from 'react';
import {AuthContext} from '../context/authCotext';
import {Link} from 'react-router-dom';
const Navbar = () => {
  const {currentUser,logout} = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to='/'>
            <img src= './logo.png' alt="logo" />
          </Link>
          
        </div>
        <div className="links">
          <Link className='link' to='/?cat=objects'><h6>Celestial Objects</h6></Link>
          <Link className='link' to='/?cat=explore'><h6>Exploration</h6></Link>
          <Link className='link' to='/?cat=science'><h6>Science</h6></Link>
          <Link className='link' to='/?cat=history'><h6>History</h6></Link>
          <span>{currentUser?.username}</span>
          {currentUser ? <span onClick={logout}>Logout</span> : <Link className='link' to="/login">Login</Link>}
          <span className='write'>
            <Link className='link' to='/write'>Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
