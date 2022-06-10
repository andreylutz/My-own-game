import React from 'react';
import QuestionTable from '../table/QuestionTable.jsx';
import './home.css'
import Navbar from '../navbar/Navbar.jsx';
import Signup from '../signup/Signup.jsx';
import Signin from '../signin/Signin.jsx';
import Question from '../question/Question.jsx';


const Home = () => {
  return (
    <>
    <Signin/>
    <Signup/>
    <Question/>
  <div className="flipper" id="target">
    <div className="front">
      <a href="#target" className="home-button">START</a>
      <Navbar/>
      </div>
    <div className="back">
      <a href="#close" className="close-button">RESTART</a>
      <Navbar/>
      <div className="inner">
        <QuestionTable/>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
