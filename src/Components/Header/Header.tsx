import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <h1>Round House Rumble</h1>
      <button className='to-form' onclick={reRoute}>Make Ya Own</button>
      <button className='' onclick={reRoute}>Favorites</button>
    </header>
  )
};

export default Header;