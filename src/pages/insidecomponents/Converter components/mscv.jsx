import React, { useState } from 'react';
import '../Converter components CSS/mscv.css';
import bg2 from '../../../Assets/background/bg1.jpg'
import { Link } from 'react-router-dom';

export function MSCV() {
    const [choice, setChoice] = useState('');
    const [result, setResult] = useState('');
  
    const calculateCubeVolume = (side) => {
      const volume = side ** 3;
      setResult(`Volume = ${side}^3 = ${volume}`);
    };
  
    const calculateRectangularPrismVolume = (length, width, height) => {
      const volume = length * width * height;
      setResult(`Volume = ${length} * ${width} * ${height} = ${volume}`);
    };
  
    const calculateSphereVolume = (radiusOrDiameter, isDiameter = false) => {
      const radius = isDiameter ? radiusOrDiameter / 2 : radiusOrDiameter;
      const volume = (4 / 3) * Math.PI * radius ** 3;
      setResult(`Volume = (4/3) * π * ${radius}^3 = ${volume}`);
    };
  
    const calculateCylinderVolume = (radiusOrDiameter, height, isDiameter = false) => {
      const radius = isDiameter ? radiusOrDiameter / 2 : radiusOrDiameter;
      const volume = Math.PI * radius ** 2 * height;
      setResult(`Volume = π * ${radius}^2 * ${height} = ${volume}`);
    };
  
    const calculateRectangularPyramidVolume = (baseLength, baseWidth, height) => {
      const volume = (1 / 3) * baseLength * baseWidth * height;
      setResult(`Volume = (1/3) * ${baseLength} * ${baseWidth} * ${height} = ${volume}`);
    };
  
    const calculateConeVolume = (radiusOrDiameter, height, isDiameter = false) => {
      const radius = isDiameter ? radiusOrDiameter / 2 : radiusOrDiameter;
      const volume = (1 / 3) * Math.PI * radius ** 2 * height;
      setResult(`Volume = (1/3) * π * ${radius}^2 * ${height} = ${volume}`);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (choice === '1') {
        const side = parseFloat(event.target.side.value);
        calculateCubeVolume(side);
      } else if (choice === '2') {
        const length = parseFloat(event.target.length.value);
        const width = parseFloat(event.target.width.value);
        const height = parseFloat(event.target.height.value);
        calculateRectangularPrismVolume(length, width, height);
      } else if (choice === '3') {
        const isDiameter = event.target.inputType.value === '2';
        const radiusOrDiameter = parseFloat(event.target.radiusOrDiameter.value);
        calculateSphereVolume(radiusOrDiameter, isDiameter);
      } else if (choice === '4') {
        const isDiameter = event.target.inputType.value === '2';
        const radiusOrDiameter = parseFloat(event.target.radiusOrDiameter.value);
        const height = parseFloat(event.target.height.value);
        calculateCylinderVolume(radiusOrDiameter, height, isDiameter);
      } else if (choice === '5') {
        const baseLength = parseFloat(event.target.baseLength.value);
        const baseWidth = parseFloat(event.target.baseWidth.value);
        const height = parseFloat(event.target.height.value);
        calculateRectangularPyramidVolume(baseLength, baseWidth, height);
      } else if (choice === '6') {
        const isDiameter = event.target.inputType.value === '2';
        const radiusOrDiameter = parseFloat(event.target.radiusOrDiameter.value);
        const height = parseFloat(event.target.height.value);
        calculateConeVolume(radiusOrDiameter, height, isDiameter);
      } else {
        setResult('Invalid choice. Please enter a valid number.');
      }
    };
  return (
    <div className="mainscreenincontainer-bg1">
      <img className="bg2" src={bg2} alt="bg2-alt" />
      <h1 className="msc-homep">Volume</h1>
      <div className="mainscreenincontainer-row">
        <form onSubmit={handleSubmit}>
          <label>Choose a 3D shape to calculate volume:</label>
          <select value={choice} onChange={(e) => setChoice(e.target.value)}>
            <option value="">Select</option>
            <option value="1">Cube</option>
            <option value="2">Rectangular Prism</option>
            <option value="3">Sphere</option>
            <option value="4">Cylinder</option>
            <option value="5">Rectangular Pyramid</option>
            <option value="6">Cone</option>
          </select>
          {choice && (
            <>
              {choice === '1' && (
                <div>
                  <label>Enter Side Length:</label>
                  <input type="number" name="side" />
                </div>
              )}
              {choice === '2' && (
                <div>
                  <label>Enter Length:</label>
                  <input type="number" name="length" />
                  <label>Enter Width:</label>
                  <input type="number" name="width" />
                  <label>Enter Height:</label>
                  <input type="number" name="height" />
                </div>
              )}
              {['3', '4', '6'].includes(choice) && (
                <div>
                  <label>Choose Input Type:</label>
                  <select name="inputType">
                    <option value="1">Radius</option>
                    <option value="2">Diameter</option>
                  </select>
                  <label>Enter {choice === '3' ? 'Radius' : 'Radius or Diameter'}:</label>
                  <input type="number" name="radiusOrDiameter" />
                  {['4', '6'].includes(choice) && <label>Enter Height:</label>}
                  {['4', '6'].includes(choice) && <input type="number" name="height" />}
                </div>
              )}
              {choice === '5' && (
                <div>
                  <label>Enter Base Length:</label>
                  <input type="number" name="baseLength" />
                  <label>Enter Base Width:</label>
                  <input type="number" name="baseWidth" />
                  <label>Enter Height:</label>
                  <input type="number" name="height" />
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

       


export default MSCV;
