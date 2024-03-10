// mainscreenin.jsx
import React from 'react';
import '../02. Admin components CSS/mainscreenadmin.css';
import book from '../../Assets/elements/book.png'
import list from '../../Assets/elements/list.png'
import quiz from '../../Assets/elements/quiz.png'
import bg1 from '../../Assets/background/bg1.jpg'

export function Mainscreenadmin() {
  return (
    <div className="mainscreenincontainer-bg1">
      <img className="bg1" src={bg1} alt="bg1-alt" />
      <div className="mainscreenincontainer-row">
        <h1 className="homep">Home</h1>
        <div className="mainscreenincontainer-column1">
          <a href="/adminlessons">
            <img src={book} alt="book-alt"></img>
            <span className="tooltip">Lessons</span>
          </a>
        </div>
        <div className="mainscreenincontainer-column2">
          <a href="/adminlist">
            <img src={list} alt="list-alt"></img>
            <span className="tooltip">Students</span>
          </a>
        </div>
        <div className="mainscreenincontainer-column3">
          <a href="/quiz">
            <img src={quiz} alt="quiz-alt"></img>
            <span className="tooltip">Quiz</span>
          </a>
        </div>
      </div>        
    </div>
  );
};

export default Mainscreenadmin;

