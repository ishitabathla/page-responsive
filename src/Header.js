import React from 'react';
import searchIcon from './assets/search_icon.svg';
function Header() {
  return (
    <div className="main-header">
      <div className="submain-header">
        <div className="logo"></div>
        <div className="search-bar">
          <div className="icon-section">
            <img src={searchIcon}/></div></div>
      </div>
    </div>
  );
}

export default Header;
