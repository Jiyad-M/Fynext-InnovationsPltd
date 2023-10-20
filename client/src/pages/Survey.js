import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-hot-toast'
import './Survey.css'
import FirstQuestion from '../components/FirstQuestion';
import SecondQuestion from '../components/SecondQuestion';
import ThirdQuestion from '../components/ThirdQuestion';
import FourthQuestion from '../components/FourthQuestion';
import FifthQuestion from '../components/FifthQuestion';
import Header from '../components/Header/Header';

function Survey() {
  // Set up state variables to store data from child components
  const [rcvdData1, setRcvdData1] = useState("");
  const [rcvdData2, setRcvdData2] = useState("");
  const [rcvdData3, setRcvdData3] = useState("");
  const [rcvdData4, setRcvdData4] = useState("");
  const [rcvdData5, setRcvdData5] = useState("");
  const navigate = useNavigate();
  // Event handler to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(rcvdData1 === ""||rcvdData2 === ""||rcvdData3 === ""||rcvdData4 === ""||rcvdData5 === "" ){

        
        toast.error("Please fill out all the questions on the form.");
      }

     const {data} = await axios.post('/', {
        rcvdData1: rcvdData1,
        rcvdData2: rcvdData2,
        rcvdData3: rcvdData3,
        rcvdData4: rcvdData4,
        rcvdData5: rcvdData5,
      });
      console.log('Form submitted with data surCtrl:');
      await axios.post('/review', {
        rcvdData1: rcvdData1,
        rcvdData2: rcvdData2,
        rcvdData3: rcvdData3,
        rcvdData4: rcvdData4,
        rcvdData5: rcvdData5,
      });
      if(data.success){ 
        toast.success(data.message);
      }
      else{
        toast.error(data.message);
      }
      console.log('Form submitted with data revCtrl:');
      navigate('/review');


    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Error submitting form");
      
    }
  };

  // Axios GET request for testing...'
  //axios.get('/test');

  // Event handlers to update state with received data
  const handleDataRcvd1 = (data) => setRcvdData1(data);
  const handleDataRcvd2 = (data) => setRcvdData2(data);
  const handleDataRcvd3 = (data) => setRcvdData3(data);
  const handleDataRcvd4 = (data) => setRcvdData4(data);
  const handleDataRcvd5 = (data) => setRcvdData5(data);

  return (
    <div className='survey'>
      <Header />
      <div className="form-img" >
        <div className="form">
          <form onSubmit={handleSubmit}>
            <FirstQuestion onDataReceived1={handleDataRcvd1} />
            <SecondQuestion onDataReceived2={handleDataRcvd2} />
            <ThirdQuestion onDataReceived3={handleDataRcvd3} />
            <FourthQuestion onDataReceived4={handleDataRcvd4} />
            <FifthQuestion onDataReceived5={handleDataRcvd5} />
            <div className="btndiv">
              <button className='btn btn-primary' type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="pic"><img src="https://softr-prod.imgix.net/applications/6b9ae2da-ae61-4608-ac7e-d0dc40c6ea61/assets/f0fae348-b83b-4e41-8d71-6b39516a5eb3.svg" alt="" /></div>
      </div>
    </div>
  )
}

export default Survey;
