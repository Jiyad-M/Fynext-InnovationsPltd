import './App.css';
import { Routes, Route, BrowserRouter, } from 'react-router-dom';
import Review from './pages/Review';
import Survey from './pages/Survey';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.withCredentials = true

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Toaster position='top-center' toastOptions={{ duration: 3000 }} />
        <Routes>
          <Route path='/' element={<Survey />} />
          <Route path='/review' element={<Review />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
