import React, { useState } from 'react';
import '../Converter components CSS/mstcc.css';
import bg1 from '../../../Assets/background/bg1.jpg'
import { Link } from 'react-router-dom';

export function MSTCC() {
    const [value, setValue] = useState('');
    const [sourceUnit, setSourceUnit] = useState('');
    const [targetUnit, setTargetUnit] = useState('');
    const [solution, setSolution] = useState('');
  
    const timeFactors = {
      'second': 1,
      'minute': 60,
      'hour': 3600,
      'day': 86400,
      'week': 604800,  // 7 days in a week
      'year': 31536000  // Assuming an average year length
    };
  
    const handleInputChange = (event) => {
      setValue(event.target.value);
    };
  
    const handleSourceUnitChange = (event) => {
      setSourceUnit(event.target.value);
    };
  
    const handleTargetUnitChange = (event) => {
      setTargetUnit(event.target.value);
    };
  
    const convertTime = () => {
      try {
        const inputValue = parseFloat(value);
        const valueInSeconds = inputValue * timeFactors[sourceUnit];
        const convertedValue = valueInSeconds / timeFactors[targetUnit];
        const conversionSteps = [
          `Step 1: Conversion Factors`,
          `   1 ${sourceUnit} = ${timeFactors[sourceUnit]} seconds`,
          `Step 2: Convert ${value} ${sourceUnit} to ${targetUnit}`,
          `   ${valueInSeconds} seconds / ${timeFactors[targetUnit]} = ${convertedValue} ${targetUnit}`
        ];
        setSolution(conversionSteps.join('\n'));
        return convertedValue;
      } catch (error) {
        console.error("Error:", error);
        setSolution(`Error: ${error.message}`);
        return null;
      }
    };
  
    return (
      <div className="mainscreencalculator-bg1">
        <img className="msc-bg1" src={bg1} alt="bg1-alt" />   
        <h1 className="msc-homep">Time Converter</h1>
        <div className="time-convert">
          <div>
            <h1>Time Converter</h1>
            <div>
              <label>Enter Time:</label>
              <input type="number" value={value} onChange={handleInputChange} />
            </div>
            <div>
              <label>Select Source Unit:</label>
              <select value={sourceUnit} onChange={handleSourceUnitChange}>
                <option value="">Select</option>
                <option value="second">Second</option>
                <option value="minute">Minute</option>
                <option value="hour">Hour</option>
                <option value="day">Day</option>
                <option value="week">Week</option>
                <option value="year">Year</option>
              </select>
            </div>
            <div>
              <label>Select Target Unit:</label>
              <select value={targetUnit} onChange={handleTargetUnitChange}>
                <option value="">Select</option>
                <option value="second">Second</option>
                <option value="minute">Minute</option>
                <option value="hour">Hour</option>
                <option value="day">Day</option>
                <option value="week">Week</option>
                <option value="year">Year</option>
              </select>
            </div>
            <button onClick={convertTime}>Convert</button>
          </div>
          <div>
            <p>Solution:</p>
            <pre>{solution}</pre>
          </div>
          <Link to="/calculator">
            <button className="back-btn-calc">Back</button>
          </Link>
        </div>
      </div>
    );
  };

export default MSTCC;
