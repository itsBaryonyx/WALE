import React, { useState } from 'react';
import '../Converter components CSS/mscpe.css';
import { Link } from 'react-router-dom';
import bg2 from '../../../Assets/background/bg1.jpg';

export function MSCPE() {
  const [choice, setChoice] = useState('');
  const [result, setResult] = useState('');

  const calculatePolygonPerimeter = (sides, sideLength) => {
    const perimeter = sides * sideLength;
    setResult(`Perimeter = ${sides} * ${sideLength} = ${perimeter}`);
  };

  const calculateRectanglePerimeter = (length, width) => {
    const perimeter = 2 * (length + width);
    setResult(`Perimeter = 2 * (${length} + ${width}) = ${perimeter}`);
  };

  const calculateCirclePerimeter = (radiusOrDiameter, isDiameter = false) => {
    let radius, perimeter;
    if (isDiameter) {
      radius = radiusOrDiameter / 2;
      perimeter = Math.PI * radiusOrDiameter;
      setResult(`Perimeter = π * ${radiusOrDiameter} = ${perimeter}`);
    } else {
      radius = radiusOrDiameter;
      perimeter = 2 * Math.PI * radius;
      setResult(`Perimeter = 2 * π * ${radius} = ${perimeter}`);
    }
  };

  const calculateTrianglePerimeter = (side1, side2, side3) => {
    const perimeter = side1 + side2 + side3;
    setResult(`Perimeter = ${side1} + ${side2} + ${side3} = ${perimeter}`);
  };

  const handleNumSidesChange = (event) => {
    const numSides = parseInt(event.target.value, 10);
    setChoice(`${numSides}`);
    setResult('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (choice === '1') {
      const length = parseFloat(event.target.length.value);
      const width = parseFloat(event.target.width.value);
      calculateRectanglePerimeter(length, width);
    } else if (choice === '2') {
      const sideLength = parseFloat(event.target.sideLength.value);
      calculatePolygonPerimeter(4, sideLength); // Square is a special case of polygon with 4 sides
    } else if (choice === '3') {
      const radius = parseFloat(event.target.radius.value);
      calculateCirclePerimeter(radius);
    } else if (choice === '4') {
      const diameter = parseFloat(event.target.diameter.value);
      calculateCirclePerimeter(diameter, true); // Treat diameter as input for circle perimeter calculation
    } else if (choice === '5') {
      const side1 = parseFloat(event.target.side1.value);
      const side2 = parseFloat(event.target.side2.value);
      const side3 = parseFloat(event.target.side3.value);
      calculateTrianglePerimeter(side1, side2, side3);
    } else if (parseInt(choice) >= 6 && parseInt(choice) <= 12) {
      const sideLengths = Array.from(event.target.elements).filter((elem) => elem.type === 'number').map((elem) => parseFloat(elem.value));
      const totalSides = parseInt(choice);
      if (sideLengths.length === totalSides) {
        const sumOfSides = sideLengths.reduce((acc, curr) => acc + curr, 0);
        calculatePolygonPerimeter(totalSides, sumOfSides);
      } else {
        setResult('Please enter all side lengths.');
      }
    } else {
      setResult('Invalid choice. Please enter a valid number.');
    }
  };

  return (
    <div className="mainscreencalculator-bg1">
      <img className="msc-bg1" src={bg2} alt="bg1-alt" />
      <h1 className="msc-homep">Perimeter Calculator</h1>
      <div className="perimeter-calculator">
        <form onSubmit={handleSubmit}>
          <label>Choose a shape to calculate perimeter:</label>
          <select value={choice} onChange={(e) => setChoice(e.target.value)}>
            <option value="">Select</option>
            <option value="1">Rectangle</option>
            <option value="2">Square</option>
            <option value="3">Circle (Radius)</option>
            <option value="4">Circle (Diameter)</option>
            <option value="5">Triangle</option>
            <option value="6">Pentagon</option>
            <option value="7">Hexagon</option>
            <option value="8">Heptagon</option>
            <option value="9">Octagon</option>
            <option value="10">Nonagon</option>
            <option value="11">Decagon</option>
            <option value="12">Hendecagon</option>
            <option value="13">Dodecagon</option>
          </select>
          {choice && (
            <>
              {(choice === '1' || choice === '2') && (
                <div>
                  <label>Enter Length:</label>
                  <input type="number" name="length" />
                  <label>Enter Width:</label>
                  <input type="number" name="width" />
                </div>
              )}
              {(choice === '3' || choice === '4') && (
                <div>
                  <label>Enter {choice === '3' ? 'Radius' : 'Diameter'}:</label>
                  <input type="number" name={choice === '3' ? 'radius' : 'diameter'} />
                </div>
              )}
              {choice === '5' && (
                <div>
                  <label>Enter Side 1:</label>
                  <input type="number" name="side1" />
                  <label>Enter Side 2:</label>
                  <input type="number" name="side2" />
                  <label>Enter Side 3:</label>
                  <input type="number" name="side2" />
                </div>
              )}
             {parseInt(choice) >= 6 && parseInt(choice) <= 13 && (
  <div>
    {[...Array(parseInt(choice) - 1)].map((_, index) => (
      <div key={index}>
        <label>Enter Side {index + 1} Length:</label>
        <input type="number" name={`side${index + 1}`} />
      </div>
    ))}
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

export default MSCPE;
