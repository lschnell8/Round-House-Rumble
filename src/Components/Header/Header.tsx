import './Header.scss';
import React from 'react';
import  { NavLink } from 'react-router-dom';


const Header: React.FC<{path: string}> = ({path}) => {
  return(
   <header className="header">
     <h1>Round House Rumble</h1>
     <NavLink to={'/Form'}>
     <button className="form-page">Make Your Own Jokes</button>
     </NavLink>
     < NavLink to={'/Favorites'}>
     <button className="favorites">Favorites!</button>
     </NavLink>
      <NavLink to={'/'}>
        <button className="home">Home</button>
      </NavLink>
   </header>
  )
}

export default Header;