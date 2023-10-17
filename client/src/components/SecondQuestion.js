import React, { useState } from 'react';

function SecondQuestion({ onDataReceived2 }) {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleCheckboxChange = (event) => {
    const newValue = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      // If checked, add it to the array
      setSelectedCheckboxes([...selectedCheckboxes, newValue]);
    } else {
      // If unchecked, remove it from the array
      setSelectedCheckboxes(selectedCheckboxes.filter((value) => value !== newValue));
    }

    {onDataReceived2(selectedCheckboxes)} 
  };
  
  return (
    <div className='checkbox-container up boarder'>
      <h2><i className="fa-solid fa-arrow-right"></i> Main app goal? </h2>
      <label htmlFor="1"><input
        id='1'
        type="checkbox"
        onChange={handleCheckboxChange}
        value="Information"
        checked={selectedCheckboxes.includes("Information")}
      />Information</label>
      <label htmlFor="2"><input
        id='2'
        type="checkbox"
        onChange={handleCheckboxChange}
        value="Chat"
        checked={selectedCheckboxes.includes("Chat")}
      />Chat</label>
      <label htmlFor="3"><input
        id='3'
        type="checkbox"
        onChange={handleCheckboxChange}
        value="Entertainment"
        checked={selectedCheckboxes.includes("Entertainment")}
      />Entertainment</label>
      <label htmlFor="4"><input
        id='4'
        type="checkbox"
        onChange={handleCheckboxChange}
        value="Buy"
        checked={selectedCheckboxes.includes("Buy")}
      />Buy</label>
      <label htmlFor="5"><input
        id='5'
        type="checkbox"
        onChange={handleCheckboxChange}
        value="Socialize"
        checked={selectedCheckboxes.includes("Socialize")}
      />Socialize</label>
      <label htmlFor="6"><input
        id='6'
        type="checkbox"
        onChange={handleCheckboxChange}
        value="Others"
        checked={selectedCheckboxes.includes("Others")}
      />Others</label>
    </div>
  );
}

export default SecondQuestion;
