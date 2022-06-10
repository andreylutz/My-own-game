import React from 'react';
import './questiontable.css';
// import { Link } from 'react-router-dom';

const QuestionTable = () => {
  return (
    <>
     <table id="table">
	<tbody>
		<tr>
			<td>ТЕМА</td>
			<td className="tds"><a className='numberScores' href='#openQuestion'>150</a></td>
			<td className="tds"><a className='numberScores' href='#openQuestion'>200</a></td>
			<td className="tds"><a className='numberScores' href='#openQuestion'>350</a></td>
      <td className="tds"><a className='numberScores' href='#openQuestion'>400</a></td>
      <td className="tds"><a className='numberScores' href='#openQuestion'>550</a></td>
      <td className="tds"><a className='numberScores' href='#openQuestion'>800</a></td>
		</tr>
		<tr>
    <td>ТЕМА</td>
			<td className="tds"><a className='numberScores' href='#openQuestion' >150</a></td>
			<td className="tds"><a className='numberScores' href='#openQuestion'>200</a></td>
			<td className="tds"><a className='numberScores' href='#openQuestion'>350</a></td>
      <td className="tds"><a className='numberScores' href='#openQuestion'>400</a></td>
      <td className="tds"><a className='numberScores' href='#openQuestion'>550</a></td>
      <td className="tds"><a className='numberScores' href='#openQuestion'>800</a></td>
		</tr>
		<tr>
    <td>ТЕМА</td>
			<td className="tds"><a className='numberScores' href='#openQuestion'>150</a></td>
			<td className="tds"><a className='numberScores' href='#openQuestion'>200</a></td>
			<td className="tds"><a className='numberScores' href='#openQuestion'>350</a></td>
      <td className="tds"><a className='numberScores' href='#openQuestion'>400</a></td>
      <td className="tds"><a className='numberScores' href='#openQuestion'>550</a></td>
      <td className="tds"><a className='numberScores' href='#openQuestion'>800</a></td>
		</tr>
	</tbody>
</table>
<span id='score'>SCORE: 000</span>
    </>
  );
};

export default QuestionTable;
