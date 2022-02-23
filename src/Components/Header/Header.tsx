import React from 'react';
import './Header.scss';
import { Switch, Route, Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <h1>Round House Rumble</h1>
      <Switch>
        <Route exact path='/'>
          <Link to='/form'>
            <button className='to-form'>Make Ya Own</button>
          </Link>
          <Link to='/favorites'>
            <button className='to-favs'>Favorites</button>
          </Link>
        </Route>
        <Route exact path='/form'>
          <Link to='/'>
            <button className='to-home'>Home</button>
          </Link>
          <Link to='/favorites'>
            <button className='to-favs'>Favorites</button>
          </Link>
        </Route>
        <Route path='/favorites'>
          <Link to='/'>
            <button className='to-home'>Home</button>
          </Link>
          <Link to='/form'>
            <button className='to-form'>Make Ya Own</button>
          </Link>
        </Route>
        <Route path='/user-joke/:id'>
          <Link to='/'>
            <button className='to-home'>Home</button>
          </Link>
          <Link to='/favorites'>
            <button className='to-favs'>Favorites</button>
          </Link>
        </Route>
      </Switch>
    </header>
  )
};

export default Header;