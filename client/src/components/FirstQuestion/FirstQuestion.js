import React, { useState } from 'react';

function FirstQuestion({onDataReceived}) {
  const [selectedCheckbox, setSelectedCheckbox] = useState("checkbox1");

  const handleCheckboxChange = (event) => {
    setSelectedCheckbox(event.target.value);
    onDataReceived(event.target.value);
  };


  return (
    <div>
      <h2>How often do you use this app?</h2>
      <label>
       
        <input
          type="checkbox"
          value="Daily"
          checked={selectedCheckbox === "Daily"}
          onChange={handleCheckboxChange}
        />
        Daily
      </label>
      
      <label>
        <input
          type="checkbox"
          value="Weekly"
          checked={selectedCheckbox === "Weekly"}
          onChange={handleCheckboxChange}
        />
         Weekly
      </label>
      
      <label>
        <input
          type="checkbox"
          value="Monthly"
          checked={selectedCheckbox === "Monthly"}
          onChange={handleCheckboxChange}
        />
        Monthly
      </label>
      
      <label>
        <input
          type="checkbox"
          value="Rarely"
          checked={selectedCheckbox === "Rarely"}
          onChange={handleCheckboxChange}
        />
        Rarely
      </label>
      
      <label>
        <input
          type="checkbox"
          value="First Time"
          checked={selectedCheckbox === "First Time"}
          onChange={handleCheckboxChange}
        />
        First Time
      </label>
    </div>
  );
}

export default FirstQuestion;
