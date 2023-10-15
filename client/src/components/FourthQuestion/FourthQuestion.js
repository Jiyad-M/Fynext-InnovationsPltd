import React,{useState} from 'react'

function FourthQuestion({onDataReceived}) {
  const [data,setData]=useState("")
  const handleTxt=(event)=>{
    setData(event.target.value)
  onDataReceived(event.target.value)
};
  return (
    <div className='FourthQuestion'>
        <label >
            <h2>Suggest Any Improvement</h2>
            <input value={data}  type="text" onChange={handleTxt}/>

        </label>
    </div>
  )
}

export default FourthQuestion