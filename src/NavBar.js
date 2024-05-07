// NavBar.js

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import { LanguageContext } from './Language';

function NavBar() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const favoritesCount = useSelector(state => state.favorites.favoritesCount); // Get favorites count from Redux store

  const handleChangeLanguage = (e) => {
    toggleLanguage(e.target.value);
  };

  const direction = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ direction }}>
        <Link className="navbar-brand" to="/MovieList">
          Movie List
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/WatchList">
              Watch List
            </Link>
            <Link className="nav-item nav-link" to="/NotFound">
              Not found
            </Link>
            <Link className="nav-item nav-link" to="/Register">
              Register
            </Link>
          </div>
        </div>
        <div className="ml-auto">
          <span style={{ marginRight: '10px' }}>Favorites: {favoritesCount}</span>
          <select className="custom-select" onChange={handleChangeLanguage} value={language}>
            <option value="en">English</option>
            <option value="ar">Arabic</option>
          </select>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
