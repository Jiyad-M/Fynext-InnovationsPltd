import React, { useState } from 'react';
import axios from 'axios';
import FirstQuestion from '../components/FirstQuestion/FirstQuestion';
import SecondQuestion from '../components/SecondQuestion/SecondQuestion';
import ThirdQuestion from '../components/ThirdQuestion/ThirdQuestion';
import FourthQuestion from '../components/FourthQuestion/FourthQuestion';
import FifthQuestion from '../components/FifthQuestion/FifthQuestion';

function Survey() {
  // Set up state variables to store data from child components
  const [rcvdData1, setRcvdData1] = useState("");
  const [rcvdData2, setRcvdData2] = useState("");
  const [rcvdData3, setRcvdData3] = useState("");
  const [rcvdData4, setRcvdData4] = useState("");
  const [rcvdData5, setRcvdData5] = useState("");

  // Event handler to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/', {
        rcvdData1: rcvdData1,
        rcvdData2: rcvdData2,
        rcvdData3: rcvdData3,
        rcvdData4: rcvdData4,
        rcvdData5: rcvdData5,
      });
      console.log('Form submitted with data:');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // Axios GET request to '/test'
      axios.get('/test');

  // Event handlers to update state with received data
  const handleDataRcvd1 = (data) => setRcvdData1(data);
  const handleDataRcvd2 = (data) => setRcvdData2(data);
  const handleDataRcvd3 = (data) => setRcvdData3(data);
  const handleDataRcvd4 = (data) => setRcvdData4(data);
  const handleDataRcvd5 = (data) => setRcvdData5(data);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FirstQuestion onDataReceived={handleDataRcvd1} />
        <SecondQuestion onDataReceived={handleDataRcvd2} />
        <ThirdQuestion onDataReceived={handleDataRcvd3} />
        <FourthQuestion onDataReceived={handleDataRcvd4} />
        <FifthQuestion onDataReceived={handleDataRcvd5} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Survey;
