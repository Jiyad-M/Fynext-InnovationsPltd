import React, { useEffect, useState, } from 'react';
import axios from 'axios';
import Header from '../components/Header/Header';
import './Review.css'

function Review() {
  const [rcvdData1, setRcvdData1] = useState(null);
  const [rcvdData2, setRcvdData2] = useState([]);
  const [rcvdData3, setRcvdData3] = useState(null);
  const [rcvdData4, setRcvdData4] = useState(null);
  const [rcvdData5, setRcvdData5] = useState(null);
  const [word, setWord] = useState("goal");

  useEffect(() => {
    axios.get('/review')
      .then((response) => {
        setRcvdData1(response.data.rcvdData1);
        setRcvdData2(response.data.rcvdData2);
        setRcvdData3(response.data.rcvdData3);
        setRcvdData4(response.data.rcvdData4);
        setRcvdData5(response.data.rcvdData5);

      })
  }, []);
  useEffect(() => {
    if (rcvdData2.length > 1) {
      setWord("goals");
    }
  }, [rcvdData2])
  return (
    <div className='review'>
      <Header />
      <div className="reviewIn">
        <div className="QA">
          <div className="que-ans">
            <h3>Thank you for the feedback</h3>
          </div>
          <div className="que-ans">
            <h1>You use this app</h1>
            <h2>{rcvdData1}</h2>
          </div>
          <div className="que-ans">
            <h1>Your primary {word} with the app is</h1>
            {rcvdData2.map((obj) => { return (<h2>{obj}</h2>) })}
          </div>
          <div className="que-ans">
            <h1>Your rating</h1>
            <h2>{rcvdData3}</h2>
          </div>
          <div className="que-ans fourQ">
            <h1>Your suggestions</h1>
            <h2>{rcvdData4}</h2>
          </div>
          <div className="que-ans">
            <h1>Your birthday</h1>
            <h2>{rcvdData5}</h2>
          </div>
        </div>
        <div className="image">
          <img src="https://chamonix.com.au/wp-content/uploads/2022/08/IntegrationInsurance.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Review