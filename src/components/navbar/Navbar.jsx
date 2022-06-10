import React from 'react';
// import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="share-block">
        <a href="#">Профиль</a>
        <a href="#openModal_2">Авторизация</a>
        <a href="#openModal">Регистрация</a>
        <a href="#">Выход</a>
      </div>
    </>
  );
};

export default Navbar;
