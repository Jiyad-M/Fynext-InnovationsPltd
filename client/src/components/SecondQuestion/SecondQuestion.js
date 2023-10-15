import React, { useState } from 'react';

function SecondQuestion({onDataReceived}) {
  const [selectedCheckbox, setSelectedCheckbox] = useState([]);

  const handleCheckboxChange = (event) => {
    const newValue=event.target.value

    setSelectedCheckbox([...selectedCheckbox,newValue]);
    onDataReceived([...selectedCheckbox,newValue])
  };

  return (
    <div>
      <h2>Main app goal? </h2>
    <label ><input type="checkbox" onChange={handleCheckboxChange} value="Information" name="Information" id="1" />Information</label>
    <label ><input type="checkbox" onChange={handleCheckboxChange} value="Chat" name="Chat" id="2" />Chat</label>
    <label ><input type="checkbox" onChange={handleCheckboxChange} value="Entertainment" name="Entertainment" id="3" />Entertainment</label>
    <label ><input type="checkbox" onChange={handleCheckboxChange} value="Buy" name="Buy" id="4" />Buy</label>
    <label ><input type="checkbox" onChange={handleCheckboxChange} value="Socialize" name="Socialize" id="5" />Socialize</label>
    <label ><input type="checkbox" onChange={handleCheckboxChange} value="Others" name="Others" id="6" />Others</label>
    </div>
  );
}

export default SecondQuestion;
