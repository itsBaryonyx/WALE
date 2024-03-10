import React from 'react';
import bg3 from '../../Assets/background/bg3.jpg';
import book from '../../Assets/elements/time.png';
import calculator from '../../Assets/elements/speed.png';
import pericumference from '../../Assets/elements/pericumference.png';
import area from '../../Assets/elements/area.png';
import volume from '../../Assets/elements/volume.png';
import temperature from '../../Assets/elements/temperature.png';
import surfacearea from '../../Assets/elements/surfacearea.png';
import { Link } from 'react-router-dom';
import './msc.css';

export function MSC() {
  return (
    <div className="mainscreencalculator-bg1">
      <img className="msc-bg3" src={bg3} alt="bg3-alt" />
      <h1 className="msc-homep">Calculator</h1>
      <div className="mainscreencalculator-row">
      <Link to="/homepage"> {/* Link to the calculator page */}
        <button className="back-btn-mcalc">Back</button>
      </Link>
        <div className="mainscreencalculator-column1">
          <a href="/timeconversion">
            <img src={book} alt="book-alt" />
            <span className="msc-tooltip">Time Conversion</span>
          </a>
        </div>
        <div className="mainscreencalculator-column2">
          <a href="/speedtimedistance">
            <img src={calculator} alt="calculator-alt" />
            <span className="msc-tooltip">Speed, Distance & Time</span>
          </a>
        </div>
        <div className="mainscreencalculator-column3">
          <a href="/perimetercircumference">
            <img src={pericumference} alt="pericumference-alt" />
            <span className="msc-tooltip">Perimeter & Circumference</span>
          </a>
        </div>
        <div className="mainscreencalculator-column3">
          <a href="/area">
            <img src={area} alt="area-alt" />
            <span className="msc-tooltip">Area of Plane Figures</span>
          </a>
        </div>
        <div className="mainscreencalculator-column3">
          <a href="/volume">
            <img src={volume} alt="volume-alt" />
            <span className="msc-tooltip">Volume</span>
          </a>
        </div>
        <div className="mainscreencalculator-column3">
          <a href="/temperature">
            <img src={temperature} alt="temperature-alt" />
            <span className="msc-tooltip">Temperature</span>
          </a>
        </div>
        <div className="mainscreencalculator-column3">
          <a href="/surfacearea">
            <img src={surfacearea} alt="surfacearea-alt" />
            <span className="msc-tooltip">Surface Area</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MSC;
