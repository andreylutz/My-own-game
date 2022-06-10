import React from 'react';
import './questiontable.css';
import { Link } from 'react-router-dom';

const QuestionTable = () => {
  return (
    <>
     <table id="table">
	<tbody>
		<tr>
			<td>IT</td>
			<td className="tds"><a className='numberScores' href='#1'>150</a></td>
			<td className="tds"><a className='numberScores' href='#2'>200</a></td>
			<td className="tds"><a className='numberScores' href='#3'>350</a></td>
      <td className="tds"><a className='numberScores' href='#4'>400</a></td>
      <td className="tds"><a className='numberScores' href='#5'>550</a></td>
      <td className="tds"><a className='numberScores' href='#6'>800</a></td>
		</tr>
		<tr>
    <td>Фильмы</td>
			<td className="tds"><a className='numberScores' href='#7' >150</a></td>
			<td className="tds"><a className='numberScores' href='#8'>200</a></td>
			<td className="tds"><a className='numberScores' href='#9'>350</a></td>
      <td className="tds"><a className='numberScores' href='#10'>400</a></td>
      <td className="tds"><a className='numberScores' href='#11'>550</a></td>
      <td className="tds"><a className='numberScores' href='#12'>800</a></td>
		</tr>
		<tr>
    <td>Животные</td>
			<td className="tds"><a className='numberScores' href='#13'>150</a></td>
			<td className="tds"><a className='numberScores' href='#14'>200</a></td>
			<td className="tds"><a className='numberScores' href='#15'>350</a></td>
      <td className="tds"><a className='numberScores' href='#16'>400</a></td>
      <td className="tds"><a className='numberScores' href='#17'>550</a></td>
      <td className="tds"><a className='numberScores' href='#18'>800</a></td>
		</tr>
	</tbody>
</table>
<span id='score'>SCORE: 000</span>
    </>
  );
};

export default QuestionTable;
