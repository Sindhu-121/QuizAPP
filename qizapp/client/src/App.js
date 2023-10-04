import './App.css';
import { EgQuizLandingPage } from './components/EgQuizLandingPage';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className='landing-page'>
        <Header />
        <Routes>
          <Route path='/' element={<EgQuizLandingPage />} />
        </Routes>
      </div>
      {/* <Header />
      <Routes>
        <Route path='/' element={<EgQuizLandingPage />} />
      </Routes> */}
    </BrowserRouter>



  );
}

export default App;
