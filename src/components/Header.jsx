// Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-[#282c34] text-white  text-2xl h-20 flex justify-evenly items-center">
          <Link to="/" className='hover:text-red-200'>Home</Link>
       
          <Link to="/about" className='hover:text-red-200'>About</Link>
       
    </nav>
  );
};

export default Navigation;
