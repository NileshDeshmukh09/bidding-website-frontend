

import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/user.slice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const useSelector( state => state.user.logout)
  const handleLogout = () => {
    dispatch(logout())
    navigate("/signup/select-user")
  }
  return (
    <nav className="bg-[#282c34] text-white  text-2xl h-20 flex justify-evenly items-center">
          <Link to="/" className='hover:text-red-200'>Home</Link>
       
          <Link to="/about" className='hover:text-red-200'>About</Link>

          <li  onClick={handleLogout} className='hover:text-red-200'>Logout</li>

       
    </nav>
  );
};

export default Header;
