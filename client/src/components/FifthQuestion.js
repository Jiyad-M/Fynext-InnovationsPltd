import React, { useState } from 'react'

function FifthQuestion({onDataReceived5}) {
  const [data,setData]=useState("")
  const handleDate=(event)=>{
    setData(event.target.value)
    onDataReceived5(event.target.value)

  };
  return (
    <div className='up boarder fifth-que'>
            <h2 className='up'><i className="fa-solid fa-arrow-right"></i> Enter your birthday?</h2>
        <label htmlFor="fifthid">
            <input id='fifthid' value={data} type="date" onChange={handleDate}/>
        </label>
    </div>
  )
}

export default FifthQuestion