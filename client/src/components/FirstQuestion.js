import React, { useState } from 'react';

function FirstQuestion({ onDataReceived1 }) {
  const [selectedCheckbox, setSelectedCheckbox] = useState("checkbox1");

  const handleCheckboxChange = (event) => {
    setSelectedCheckbox(event.target.value);
    onDataReceived1(event.target.value);
  };


  return (
    <div className='checkbox-container up boarder'>
      <h2><i className="fa-solid fa-arrow-right"></i> How often do you use this app?</h2>
      <label htmlFor="firstid4">

        <input
        id='firstid4'
          type="checkbox"
          value="Daily"
          checked={selectedCheckbox === "Daily"}
          onChange={handleCheckboxChange}
        />
        Daily
      </label>

      <label htmlFor="firstid5">
        <input
        id='firstid5'
          type="checkbox"
          value="Weekly"
          checked={selectedCheckbox === "Weekly"}
          onChange={handleCheckboxChange}
        />
        Weekly
      </label>

      <label htmlFor="firstid1">
        <input
        id='firstid1'
          type="checkbox"
          value="Monthly"
          checked={selectedCheckbox === "Monthly"}
          onChange={handleCheckboxChange}
        />
        Monthly
      </label>

      <label htmlFor="firstid2">
        <input
        id='firstid2'
          type="checkbox"
          value="Rarely"
          checked={selectedCheckbox === "Rarely"}
          onChange={handleCheckboxChange}
        />
        Rarely
      </label>

      <label htmlFor="firstid3">
        <input
        id='firstid3'
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
