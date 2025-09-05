import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBtn.css'; // import custom styles

function MenuBtn() {
  return (
    <Link to='/menu'>
      <button 
        type='button' 
        className='menu-btn-gradient btn-lg rounded-0 text-capitalize mx-2 mb-3 mb-sm-0'>
        Our full menu
      </button>
    </Link>
  )
}

export default MenuBtn;
