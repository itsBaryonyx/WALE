// mainscreenin.jsx
import React from 'react';
import './mainscreenin.css';
import book from '../../Assets/elements/book.png'
import calculator from '../../Assets/elements/calculator.png'
// import quiz from '../../Assets/elements/quiz.png'
import bg1 from '../../Assets/background/bg1.jpg'

export function Mainscreenin() {
  return (
    <div className="mainscreenincontainer-bg1">
      <img className="bg1" src={bg1} alt="bg1-alt" />
      <div className="mainscreenincontainer-row">
        <h1 className="msc-homep">Home</h1>
        <div className="mainscreenincontainer-column1">
          <a href="/Lessons">
            <img src={book} alt="book-alt"></img>
            <span className="tooltip">Lessons</span>
          </a>
        </div>
        <div className="mainscreenincontainer-column2">
          <a href="/calculator">
            <img src={calculator} alt="calculator-alt"></img>
            <span className="tooltip">Calculator</span>
          </a>
        </div>
        {/* <div className="mainscreenincontainer-column3">
          <a href="/quiz">
            <img src={quiz} alt="quiz-alt"></img>
            <span className="tooltip">Quiz</span>
          </a>
        </div> */}
      </div>        
    </div>
  );
};

export default Mainscreenin;

