import './App.css';
import { Routes, Route, BrowserRouter, } from 'react-router-dom';
import Review from './pages/Review';
import Survey from './pages/Survey';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Survey />} />
          <Route path='/review' element={<Review />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
