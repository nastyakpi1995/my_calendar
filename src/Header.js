import React from 'react';

import './Header.css';

const Header = () => (
  <div>
    <header className="header">
      <div className="header__search__input">
        <img
          src="img/icon_search.svg"
          alt="search"
          className="header__search"
        />
        <input
          name="search"
          type="text"
          className="n__header__input"
          placeholder="Search transactions, invoices or help"
        />
      </div>

      <img alt="planet" className="header__planet" src="img/SupportIocn.svg" />
      <img alt="path" className="header__planet" src="img/Path_9.svg" />
      <img alt="planet" className="header__planet" src="img/Path_3.svg" />
      <img alt="planet" className="header__planet" src="img/Divider.svg" />
      <p className="header__name">John Doe</p>
      <img alt="planet" className="header__planet" src="img/Path_26.svg" />
      <img alt="planet" className="header__avatar" src="img/Avatar@2x.png" />
    </header>
    <div className="main" />
  </div>
);

export default Header;
