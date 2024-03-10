import React, { useState } from 'react';
import '../Converter components CSS/msct.css';
import { Link } from 'react-router-dom';
import bg2 from '../../../Assets/background/bg1.jpg'

export function MSCT() {
    const [sourceUnit, setSourceUnit] = useState('');
    const [targetUnit, setTargetUnit] = useState('');
    const [sourceValue, setSourceValue] = useState('');
    const [result, setResult] = useState('');
  
    const celsiusToFahrenheit = (celsius) => {
      return (celsius * 9 / 5) + 32;
    };
  
    const celsiusToKelvin = (celsius) => {
      return celsius + 273.15;
    };
  
    const fahrenheitToCelsius = (fahrenheit) => {
      return (fahrenheit - 32) * 5 / 9;
    };
  
    const fahrenheitToKelvin = (fahrenheit) => {
      return (fahrenheit + 459.67) * 5 / 9;
    };
  
    const kelvinToCelsius = (kelvin) => {
      return kelvin - 273.15;
    };
  
    const kelvinToFahrenheit = (kelvin) => {
      return (kelvin * 9 / 5) - 459.67;
    };
  
    const displaySolution = (sourceUnit, targetUnit, sourceValue, targetValue, formula) => {
      setResult(`Step-by-Step Solution:\nFormula: ${formula}\nSubstitution: ${sourceUnit} = ${sourceValue}\nSolving:\n   ${formula} = ${targetValue} ${targetUnit}`);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const sourceValueFloat = parseFloat(sourceValue);
      if (sourceUnit === 'Celsius') {
        if (targetUnit === 'Celsius') {
          displaySolution('Celsius', 'Celsius', sourceValueFloat, sourceValueFloat, 'source');
        } else if (targetUnit === 'Fahrenheit') {
          const targetValue = celsiusToFahrenheit(sourceValueFloat);
          displaySolution('Celsius', 'Fahrenheit', sourceValueFloat, targetValue, '(source * 9/5) + 32');
        } else if (targetUnit === 'Kelvin') {
          const targetValue = celsiusToKelvin(sourceValueFloat);
          displaySolution('Celsius', 'Kelvin', sourceValueFloat, targetValue, 'source + 273.15');
        }
      } else if (sourceUnit === 'Fahrenheit') {
        if (targetUnit === 'Celsius') {
          const targetValue = fahrenheitToCelsius(sourceValueFloat);
          displaySolution('Fahrenheit', 'Celsius', sourceValueFloat, targetValue, '(source - 32) * 5/9');
        } else if (targetUnit === 'Fahrenheit') {
          displaySolution('Fahrenheit', 'Fahrenheit', sourceValueFloat, sourceValueFloat, 'source');
        } else if (targetUnit === 'Kelvin') {
          const targetValue = fahrenheitToKelvin(sourceValueFloat);
          displaySolution('Fahrenheit', 'Kelvin', sourceValueFloat, targetValue, '(source + 459.67) * 5/9');
        }
      } else if (sourceUnit === 'Kelvin') {
        if (targetUnit === 'Celsius') {
          const targetValue = kelvinToCelsius(sourceValueFloat);
          displaySolution('Kelvin', 'Celsius', sourceValueFloat, targetValue, 'source - 273.15');
        } else if (targetUnit === 'Fahrenheit') {
          const targetValue = kelvinToFahrenheit(sourceValueFloat);
          displaySolution('Kelvin', 'Fahrenheit', sourceValueFloat, targetValue, '(source * 9/5) - 459.67');
        } else if (targetUnit === 'Kelvin') {
          displaySolution('Kelvin', 'Kelvin', sourceValueFloat, sourceValueFloat, 'source');
        }
      }
    };
  
  return (
    <div className="mainscreenincontainer-bg1">
      <img className="bg1" src={bg2} alt="bg2-alt" />
      <h1 className="msc-homep">Temperature</h1>
      <div className="mainscreenincontainer-row">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Choose the source temperature unit:</label>
            <select value={sourceUnit} onChange={(e) => setSourceUnit(e.target.value)}>
              <option value="">Select</option>
              <option value="Celsius">Celsius</option>
              <option value="Fahrenheit">Fahrenheit</option>
              <option value="Kelvin">Kelvin</option>
            </select>
          </div>
          <div>
            <label>Choose the target temperature unit:</label>
            <select value={targetUnit} onChange={(e) => setTargetUnit(e.target.value)}>
              <option value="">Select</option>
              <option value="Celsius">Celsius</option>
              <option value="Fahrenheit">Fahrenheit</option>
              <option value="Kelvin">Kelvin</option>
            </select>
          </div>
          <div>
            <label>Enter the source temperature value:</label>
            <input type="number" value={sourceValue} onChange={(e) => setSourceValue(e.target.value)} />
          </div>
          <button type="submit">Convert</button>
        </form>
        <div>
          <p>Solution:</p>
          <pre>{result}</pre>
        </div>
        <Link to="/calculator">
          <button className="back-btn-calc">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default MSCT;

