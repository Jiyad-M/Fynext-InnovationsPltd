import React, { useState } from 'react'

function FifthQuestion({onDataReceived}) {
  const [data,setData]=useState("")
  const handleDate=(event)=>{
    setData(event.target.value)
    onDataReceived(event.target.value)

  };
  return (
    <div className='FifthQuestion'>
        <label htmlFor="">
            <h2>Enter your birthday?</h2>
            <input value={data} type="date" onChange={handleDate}/>
        </label>
    </div>
  )
}

export default FifthQuestion