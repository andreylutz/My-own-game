import React from 'react';
import './question.css';



const NewQuest = ({questions, id}) => {

  return (
    <div id={id} className="quest">
  <div className="quest-dialog">
    <div className="quest-content">
      <div className="quest-header">
        <h3 className="quest-title">{questions}</h3>
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

export default NewQuest;
