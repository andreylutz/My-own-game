import React from 'react';
import './question.css';

const Question = () => {
  return (
    <div id="openQuestion" className="quest">
  <div className="quest-dialog">
    <div className="quest-content">
      <div className="quest-header">
        <h3 className="quest-title">Впорс такой-тоdfds fsdf sdfsdfsdfsdfd sfdsfdsf dsfsdfsdf аупакп цукап а у  авыаыв вав в ва ва вавцацауацуа уау а sdfsdfsdfs dfdsf dsfsdfdsf ?</h3>
        <a href="#target" title="Close" className="close">&#8594;</a>
      </div>
      <div className="quest-body">
        <button className='click' type='button' name='authBatton'>Ответ 1</button>
        <button className='click' type='button' name='authBatton'>Ответ 2</button>
        <button className='click' type='button' name='authBatton'>Ответ 3</button>
      </div>
    </div>
  </div>
</div>
  );
};

export default Question;
