import React, { useEffect, useState } from 'react';
import './Common.css'
function ThirdQuestion({ onDataReceived3 }) {
  const [num, setNum] = useState(5);
  const [rate, setRate] = useState("Good")
  const [rateColor, setRateColor] = useState("green")

  useEffect(() => {

    onDataReceived3(rate)
  }, [rate])
  useEffect(() => {
    if (num < 5) {
      setRateColor("red")
    }
    else {
      setRateColor("green")
    }
  }, [num])

  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setNum(newValue);

    setRate(getValueLabel(newValue))
  };
  function getValueLabel(value) {
    switch (value) {
      case 1:
        return 'Very Bad';
      case 2:
        return 'Bad';
      case 3:
        return 'Not Good';
      case 4:
        return 'Okay';
      case 5:
        return 'Good';
      case 6:
        return 'Very Good';
      case 7:
        return 'Excellent';
      case 8:
        return 'Outstanding';
      case 9:
        return 'Exceptional';
      case 10:
        return 'Perfect';
      default:
        return '';
    }
  }

  return (
    <div className='third up boarder'>
      <h2><i className="fa-solid fa-arrow-right">
      </i> Select a value on a scale of 1 to 10:</h2>
      <div className="thirdInp">

        <label htmlFor="scale">
          <input
            className='form-range '
            type="range"
            id="scale"
            min="1"
            max="10"
            step="1"
            value={num}
            onChange={handleInputChange}
          />
          <p style={{ color: rateColor }}>
            {num + " " + rate}
          </p></label>
      </div>
    </div>
  );
}

// Function to map values to labels


export default ThirdQuestion;
