import './App.css';
import { EgQuizLandingPage } from './components/EgQuizLandingPage';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    
        <Header />
        <Routes>
          <Route path='/' element={<EgQuizLandingPage />} />
        </Routes>
    
      {/* <Header />
      <Routes>
        <Route path='/' element={<EgQuizLandingPage />} />
      </Routes> */}
    </BrowserRouter>



  );
}

export default App;
