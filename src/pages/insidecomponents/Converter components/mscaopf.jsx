import React, { useState } from 'react';
import '../Converter components CSS/mscaopf.css';
import bg1 from '../../../Assets/background/bg1.jpg';
import { Link } from 'react-router-dom';

export function MSCAOPF() {
  const [choice, setChoice] = useState('');
  const [result, setResult] = useState('');

  const calculateSquareArea = (side) => {
    const area = side ** 2;
    setResult(`Area = ${side}^2 = ${area}`);
  };

  const calculateRectangleArea = (length, width) => {
    const area = length * width;
    setResult(`Area = ${length} * ${width} = ${area}`);
  };

  const calculateTriangleArea = (base, height) => {
    const area = 0.5 * base * height;
    setResult(`Area = 0.5 * ${base} * ${height} = ${area}`);
  };

  const calculateCircleArea = (radiusOrDiameter, isDiameter = false) => {
    let radius, area;
    if (isDiameter) {
      radius = radiusOrDiameter / 2;
    } else {
      radius = radiusOrDiameter;
    }
    area = Math.PI * radius ** 2;
    setResult(`Area = π * ${radius}^2 = ${area}`);
  };

  const calculateSemiCircleArea = (radiusOrDiameter, isDiameter = false) => {
    let radius, area;
    if (isDiameter) {
      radius = radiusOrDiameter / 2;
    } else {
      radius = radiusOrDiameter;
    }
    area = 0.5 * Math.PI * radius ** 2;
    setResult(`Area = 0.5 * π * ${radius}^2 = ${area}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (choice === '1') {
      const side = parseFloat(event.target.side.value);
      calculateSquareArea(side);
    } else if (choice === '2') {
      const length = parseFloat(event.target.length.value);
      const width = parseFloat(event.target.width.value);
      calculateRectangleArea(length, width);
    } else if (choice === '3') {
      const base = parseFloat(event.target.base.value);
      const height = parseFloat(event.target.height.value);
      calculateTriangleArea(base, height);
    } else if (choice === '4' || choice === '5') {
      const radiusOrDiameter = parseFloat(event.target.radiusOrDiameter.value);
      const isDiameter = choice === '5';
      calculateCircleArea(radiusOrDiameter, isDiameter);
    } else if (choice === '6' || choice === '7') {
      const radiusOrDiameter = parseFloat(event.target.radiusOrDiameter.value);
      const isDiameter = choice === '7';
      calculateSemiCircleArea(radiusOrDiameter, isDiameter);
    } else {
      setResult('Invalid choice. Please enter a valid number.');
    }
  };

  return (
    <div className="mainscreenincontainer-bg1">
      <img className="bg2" src={bg1} alt="bg2-alt" />
      <h1 className="msc-homep">Area of Plane Figures</h1>
      <div className="area-calculator">
        <form onSubmit={handleSubmit}>
          <label>Choose a shape to calculate area:</label>
          <select value={choice} onChange={(e) => setChoice(e.target.value)}>
            <option value="">Select</option>
            <option value="1">Square</option>
            <option value="2">Rectangle</option>
            <option value="3">Triangle</option>
            <option value="4">Circle (Radius)</option>
            <option value="5">Circle (Diameter)</option>
            <option value="6">Semi-circle (Radius)</option>
            <option value="7">Semi-circle (Diameter)</option>
          </select>
          {choice && (
            <>
              {(choice === '1' || choice === '2') && (
                <div>
                  <label>Enter Side:</label>
                  <input type="number" name="side" />
                </div>
              )}
              {choice === '2' && (
                <div>
                  <label>Enter Length:</label>
                  <input type="number" name="length" />
                  <label>Enter Width:</label>
                  <input type="number" name="width" />
                </div>
              )}
              {choice === '3' && (
                <div>
                  <label>Enter Base:</label>
                  <input type="number" name="base" />
                  <label>Enter Height:</label>
                  <input type="number" name="height" />
                </div>
              )}
              {(choice === '4' || choice === '5' || choice === '6' || choice === '7') && (
                <div>
                  <label>Enter {choice === '5' || choice === '7' ? 'Diameter' : 'Radius'}:</label>
                  <input type="number" name="radiusOrDiameter" />
                </div>
              )}
              <button type="submit">Calculate</button>
            </>
          )}
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

export default MSCAOPF;
