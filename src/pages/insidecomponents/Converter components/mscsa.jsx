import React, { useState } from 'react';
import '../Converter components CSS/mscsa.css';
import bg1 from '../../../Assets/background/bg1.jpg'
import { Link } from 'react-router-dom';

export function MSCSA() {
  const [shapeChoice, setShapeChoice] = useState('');
  const [baseMeasure, setBaseMeasure] = useState('');
  const [height, setHeight] = useState('');
  const [baseArea, setBaseArea] = useState('');
  const [result, setResult] = useState('');

  const prismSurfaceArea = (basePerimeter, height, baseArea) => {
    const lateralArea = basePerimeter * height;
    const totalSurfaceArea = lateralArea + 2 * baseArea;
    return [lateralArea, totalSurfaceArea];
  };

  const cylinderSurfaceArea = (radius, height) => {
    const lateralArea = 2 * Math.PI * radius * height;
    const baseArea = Math.PI * radius ** 2;
    const totalSurfaceArea = lateralArea + 2 * baseArea;
    return [lateralArea, totalSurfaceArea];
  };

  const pyramidSurfaceArea = (width, length, height, baseArea) => {
    const lateralArea = 2 * (0.5 * width * height) + 2 * (0.5 * length * height);
    const totalSurfaceArea = lateralArea + baseArea;
    return [lateralArea, totalSurfaceArea];
  };

  const coneSurfaceArea = (radius, slantHeight) => {
    const lateralArea = Math.PI * radius * slantHeight;
    const baseArea = Math.PI * radius ** 2;
    const totalSurfaceArea = lateralArea + baseArea;
    return [lateralArea, totalSurfaceArea];
  };

  const sphereSurfaceArea = (radius) => {
    const totalSurfaceArea = 4 * Math.PI * radius ** 2;
    return [null, totalSurfaceArea];
  };

  const displaySolution = (shape, baseMeasure, height, lateralArea, totalSurfaceArea) => {
    setResult(
      `Step-by-Step Solution:\n1. Calculate the lateral area (LA) of the ${shape}:\n2. Calculate the total surface area (SA) of the ${shape}:\n   SA = ${totalSurfaceArea}`
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const baseMeasureFloat = parseFloat(baseMeasure);
    if (shapeChoice === '1') {
      const basePerimeter = parseFloat(event.target.basePerimeter.value);
      const heightVal = parseFloat(event.target.height.value);
      const baseAreaVal = parseFloat(event.target.baseArea.value);
      const [lateralArea, totalSurfaceArea] = prismSurfaceArea(basePerimeter, heightVal, baseAreaVal);
      displaySolution('prism', baseAreaVal, heightVal, lateralArea, totalSurfaceArea);
    } else if (shapeChoice === '2') {
      const radius = parseFloat(event.target.radius.value);
      const heightVal = parseFloat(event.target.height.value);
      const [lateralArea, totalSurfaceArea] = cylinderSurfaceArea(radius, heightVal);
      displaySolution('cylinder', radius, heightVal, lateralArea, totalSurfaceArea);
    } else if (shapeChoice === '3') {
      const width = parseFloat(event.target.width.value);
      const length = parseFloat(event.target.length.value);
      const heightVal = parseFloat(event.target.height.value);
      const baseAreaVal = parseFloat(event.target.baseArea.value);
      const [lateralArea, totalSurfaceArea] = pyramidSurfaceArea(width, length, heightVal, baseAreaVal);
      displaySolution('pyramid', baseAreaVal, heightVal, lateralArea, totalSurfaceArea);
    } else if (shapeChoice === '4') {
      const radius = parseFloat(event.target.radius.value);
      const slantHeight = parseFloat(event.target.slantHeight.value);
      const [lateralArea, totalSurfaceArea] = coneSurfaceArea(radius, slantHeight);
      displaySolution('cone', radius, slantHeight, lateralArea, totalSurfaceArea);
    } else if (shapeChoice === '5') {
      const radius = parseFloat(event.target.radius.value);
      const [, totalSurfaceArea] = sphereSurfaceArea(radius);
      displaySolution('sphere', null, null, null, totalSurfaceArea);
    }
  };

  return (
    <div className="mainscreenincontainer-bg1">
      <img className="bg2" src={bg1} alt="bg2-alt" />
      <h1 className="msc-homep">Surface Area</h1>
      <div className="mainscreenincontainer-row">
        <form onSubmit={handleSubmit}>
          <label>Calculate surface area for a geometric shape:</label>
          <select value={shapeChoice} onChange={(e) => setShapeChoice(e.target.value)}>
            <option value="">Select</option>
            <option value="1">Prism</option>
            <option value="2">Cylinder</option>
            <option value="3">Pyramid</option>
            <option value="4">Cone</option>
            <option value="5">Sphere</option>
          </select>
          {shapeChoice && (
            <>
              <div>
                {shapeChoice === '1' && (
                  <>
                    <label>Enter Base Perimeter:</label>
                    <input type="number" name="basePerimeter" />
                    <label>Enter Height:</label>
                    <input type="number" name="height" />
                    <label>Enter Base Area:</label>
                    <input type="number" name="baseArea" />
                  </>
                )}
                {shapeChoice === '2' && (
                  <>
                    <label>Enter Radius:</label>
                    <input type="number" name="radius" />
                    <label>Enter Height:</label>
                    <input type="number" name="height" />
                  </>
                )}
                {shapeChoice === '3' && (
                  <>
                    <label>Enter Width:</label>
                    <input type="number" name="width" />
                    <label>Enter Length:</label>
                    <input type="number" name="length" />
                    <label>Enter Height:</label>
                    <input type="number" name="height" />
                    <label>Enter Base Area:</label>
                    <input type="number" name="baseArea" />
                  </>
                )}
                {shapeChoice === '4' && (
                  <>
                    <label>Enter Radius:</label>
                    <input type="number" name="radius" />
                    <label>Enter Slant Height:</label>
                    <input type="number" name="slantHeight" />
                  </>
                )}
                {shapeChoice === '5' && (
                  <>
                    <label>Enter Radius:</label>
                    <input type="number" name="radius" />
                  </>
                )}
              </div>
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

export default MSCSA;

