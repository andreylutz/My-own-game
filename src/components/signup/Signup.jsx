import React from 'react';
import './signup.css';

const Signup = () => {
  return (
  <div id="openModal" className="signup">
  <div className="signup-dialog">
    <div className="signup-content">
      <div className="signup-header">
        <h3 className="signup-title">Регистрация</h3>
        <a href="/" title="Close" className="close">×</a>
      </div>
      <div className="signup-body">    
        <input type='text' className='pols' name='userName' placeholder='Придумайте логин'/>
        <input type='password' className='pols' name='userPassword' placeholder='Придумайте пароль'/>
        <input type='password' className='pols' name='userPasswordExam' placeholder='Подтвердите пароль'/>
        <button type='button' className='click' name='authBatton'>Зарегистрироваться</button>
      </div>
    </div>
  </div>
</div>
  );
};

export default Signup;
