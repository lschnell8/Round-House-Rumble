import React from 'react';
import './Header.scss';
import { Switch, Route, Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <h1>Round House Rumble</h1>
      <Switch>
        <Route exact path='/'>
          <div className='header-buttons'>
            <Link to='/form'>
              <button className='to-form'>Make Ya Own</button>
            </Link>
            <Link to='/favorites'>
              <button className='to-favs'>Favorites</button>
            </Link>
          </div>
        </Route>
        <Route exact path='/form'>
          <div className='header-buttons'>
            <Link to='/'>
              <button className='to-home'>Home</button>
            </Link>
            <Link to='/favorites'>
              <button className='to-favs'>Favorites</button>
            </Link>
          </div>
        </Route>
        <Route path='/favorites'>
          <div className='header-buttons'>
            <Link to='/'>
              <button className='to-home'>Home</button>
            </Link>
            <Link to='/form'>
              <button className='to-form'>Make Ya Own</button>
            </Link>
          </div>
        </Route>
        <Route path='/user-joke'>
          <div className='header-buttons'>
            <Link to='/'>
              <button className='to-home'>Home</button>
            </Link>
            <Link to='/favorites'>
              <button className='to-favs'>Favorites</button>
            </Link>
          </div>
        </Route>
      </Switch>
    </header>
  )
};

export default Header;