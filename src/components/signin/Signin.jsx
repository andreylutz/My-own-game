import React from 'react';
import './signin.css';

const Signin = () => {
  return (
    <div id="openModal_2" className="signin">
  <div className="signin-dialog">
    <div className="signin-content">
      <div className="signin-header">
        <h3 className="signin-title">Авторизация</h3>
        <a href="/" title="Close" className="close">×</a>
      </div>
      <div className="signin-body">
        <input type='text' className='pols' name='userName' placeholder='Введите логин'/>
        <input type='password' className='pols' name='userPassword' placeholder='Введите пароль'/>
        <button type='button' className='click' name='authBatton'>Войти</button>
      </div>
    </div>
  </div>
</div>
  );
};

export default Signin;
