import React, { useState } from 'react';
function ThirdQuestion({onDataReceived}) {
  const [num, setNum] = useState(5);
  const [rate,setRate]=useState("Good")

  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setNum(newValue);
   
    setRate(getValueLabel(newValue))
    onDataReceived(rate)
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
    <div>
      <label htmlFor="scale">Select a value on a scale of 1 to 10:</label>
      <input
        type="range"
        id="scale"
        min="1"
        max="10"
        step="1"
        value={num}
        onChange={handleInputChange}
      />
      <p>
        Selected Value: {num} -{' '}{rate}
      </p>
    </div>
  );
}

// Function to map values to labels


export default ThirdQuestion;
