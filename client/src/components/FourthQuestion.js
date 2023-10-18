import React, { useState } from 'react'

function FourthQuestion({ onDataReceived4 }) {
  const [data, setData] = useState("")
  const [length, setlength] = useState("0")
  const handleTxt = (event) => {
    setData(event.target.value)
    setlength(event.target.value.length)

    onDataReceived4(event.target.value)
  };
  return (
    
      <div className="fourth-que">
        <h2><i className="fa-solid fa-arrow-right"></i> Suggest Any Improvement</h2>
        <label htmlFor='txtid'>
          <textarea
            id='txtid'
            value={data} rows='4' cols='30' type="text" maxLength='130' onChange={handleTxt} />
          <p>{length}/130</p>

        </label>
      
    </div>
  )
}

export default FourthQuestion