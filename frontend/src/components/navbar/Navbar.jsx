import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

  const handleClose = () => {
    fetch('http://localhost:2500/logout', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
  }

  return (
    <>
      <div className="share-block">
        <a href="#">Профиль</a>
        <a href="#openModal_2">Авторизация</a>
        <a href="#openModal">Регистрация</a>
        <Link to ="/" onClick={handleClose}>Выход</Link>
      </div>
    </>
  );
};

export default Navbar;
