import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
<div className="header">
<div className='logo'><h1>Fynext Innovations</h1>
    <h2>Product Survey</h2></div>
    <div className="nav">
      <Link className='Link' to="/">Home</Link>
      
    
  </div>
  </div>
  )
}

export default Header