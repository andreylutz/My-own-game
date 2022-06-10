import React, { useEffect } from 'react';
import './question.css';
import { useDispatch, useSelector } from 'react-redux';
import NewQuest from './NewQuest';



const Question = () => {
  

  const dispatch = useDispatch();
  const quest = useSelector((state) => state.quest.quest);

  useEffect(() => {
    fetch('http://localhost:2500')
      .then((response) => response.json())
      .then((question) => dispatch({ type: 'INIT_QUESTION', payload: question.questions }));
  }, [dispatch]);

  console.log(quest);

  return (

<>
{quest.map((el) => <NewQuest id={el.id} questions={el.questions} />)}
</>
//     <div id="1" className="quest">
//   <div className="quest-dialog">
//     <div className="quest-content">
//       <div className="quest-header">
//         <h3 className="quest-title">{quest[1].questions}</h3>
//         <a href="#target" title="Close" className="close">&#8594;</a>
//       </div>
//       <div className="quest-body">
//         <button className='click' type='button' name='authBatton'>Ответ 1</button>
//         <button className='click' type='button' name='authBatton'>Ответ 2</button>
//         <button className='click' type='button' name='authBatton'>Ответ 3</button>
//       </div>
//     </div>
//   </div>
// </div>
  );
};

export default Question;
