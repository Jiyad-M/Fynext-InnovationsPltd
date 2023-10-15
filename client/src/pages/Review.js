import React, { useEffect, useState, } from 'react';
import axios from 'axios';

function Review() {
  const [rcvdData1, setRcvdData1] = useState(null);
  const [rcvdData2, setRcvdData2] = useState(null);
  const [rcvdData3, setRcvdData3] = useState(null);
  const [rcvdData4, setRcvdData4] = useState(null);
  const [rcvdData5, setRcvdData5] = useState(null);

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

  return (
    <div>
      <h1>{rcvdData1}</h1>

    </div>
  )
}

export default Review