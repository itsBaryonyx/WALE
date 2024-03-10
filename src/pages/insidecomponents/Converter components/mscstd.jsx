import React, { useState } from 'react';
import '../Converter components CSS/mscstd.css';
import bg1 from '../../../Assets/background/bg1.jpg'
import { Link } from 'react-router-dom';

const MSCSTD = () => {
    const [choice, setChoice] = useState('');
    const [result, setResult] = useState('');
  
    const calculateDistance = (speed, time) => {
      const distance = speed * time;
      const steps = [
        "Step 1: Formula",
        "   Distance (d) = Speed (s) * Time (t)",
        "",
        "Step 2: Substitute Values",
        `   Distance (d) = ${speed} * ${time}`,
        "",
        "Step 3: Calculate",
        `   Distance (d) = ${distance}`,
        "",
        `The distance is ${distance}.`
      ];
      setResult(steps.join('\n'));
    };
  
    const calculateSpeed = (distance, time) => {
      const speed = distance / time;
      const steps = [
        "Step 1: Formula",
        "   Speed (s) = Distance (d) / Time (t)",
        "",
        "Step 2: Substitute Values",
        `   Speed (s) = ${distance} / ${time}`,
        "",
        "Step 3: Calculate",
        `   Speed (s) = ${speed}`,
        "",
        `The speed is ${speed}.`
      ];
      setResult(steps.join('\n'));
    };
  
    const calculateTime = (distance, speed) => {
      const time = distance / speed;
      const steps = [
        "Step 1: Formula",
        "   Time (t) = Distance (d) / Speed (s)",
        "",
        "Step 2: Substitute Values",
        `   Time (t) = ${distance} / ${speed}`,
        "",
        "Step 3: Calculate",
        `   Time (t) = ${time}`,
        "",
        `The time is ${time}.`
      ];
      setResult(steps.join('\n'));
    };
  
    const handleChoiceChange = (event) => {
      setChoice(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (choice === '1') {
        const speed = parseFloat(event.target.speed.value);
        const time = parseFloat(event.target.time.value);
        calculateDistance(speed, time);
      } else if (choice === '2') {
        const distance = parseFloat(event.target.distance.value);
        const time = parseFloat(event.target.time.value);
        calculateSpeed(distance, time);
      } else if (choice === '3') {
        const distance = parseFloat(event.target.distance.value);
        const speed = parseFloat(event.target.speed.value);
        calculateTime(distance, speed);
      } else {
        setResult("Invalid choice. Please enter a valid number.");
      }
    };
  
    return (
      <div className="mainscreencalculator-bg1">
        <img className="msc-bg1" src={bg1} alt="bg1-alt" />
        <h1 className="msc-homep">Distance Speed Time Calculator</h1>
        <div className="distance-speed-time-calc">
          <form onSubmit={handleSubmit}>
            <label>Choose what you want to calculate:</label>
            <select value={choice} onChange={handleChoiceChange}>
              <option value="">Select</option>
              <option value="1">Distance (d)</option>
              <option value="2">Speed (s)</option>
              <option value="3">Time (t)</option>
            </select>
            {choice && (
              <>
                {choice === '1' && (
                  <>
                    <div>
                      <label>Enter Speed (s):</label>
                      <input type="number" name="speed" />
                    </div>
                    <div>
                      <label>Enter Time (t):</label>
                      <input type="number" name="time" />
                    </div>
                  </>
                )}
                {choice === '2' && (
                  <>
                    <div>
                      <label>Enter Distance (d):</label>
                      <input type="number" name="distance" />
                    </div>
                    <div>
                      <label>Enter Time (t):</label>
                      <input type="number" name="time" />
                    </div>
                  </>
                )}
                {choice === '3' && (
                  <>
                    <div>
                      <label>Enter Distance (d):</label>
                      <input type="number" name="distance" />
                    </div>
                    <div>
                      <label>Enter Speed (s):</label>
                      <input type="number" name="speed" />
                    </div>
                  </>
                )}
                <button type="submit">Calculate</button>
              </>
            )}
          </form>
          <div>
            <p className="solution">Solution:</p>
            <pre className="solution">{result}</pre>
          </div>
          <Link to="/calculator">
            <button className="back-btn-calc">Back</button>
          </Link>
        </div>
      </div>
    );
  };
  

export default MSCSTD;
