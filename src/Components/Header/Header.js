import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className=' '>
      <div className='header  d-lg-flex  justify-content-center d-sm-inline-flex  '>
  
  <h1 ><Link to='/home'>Home</Link></h1>
  <h1> <Link to='/products'>Product</Link></h1>
  <h1><Link to='/friend'>Friend</Link></h1>
  <h1><Link to='/about'>About</Link></h1>
  <h1><Link to='/posts'>Post</Link></h1>

     
   </div>
    </div>
  );
};

export default Header;

