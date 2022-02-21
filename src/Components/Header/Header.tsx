import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <h1>Round House Rumble</h1>
      <button className='to-form'>Make Ya Own</button>
      <button className='to-favs'>Favorites</button>
    </header>
  )
};

export default Header;