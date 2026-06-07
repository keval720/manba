import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage/HomePage';
import Aboutus from './About Us/Aboutus';
import Services from './Services/Services';
import Contactus from './Contact Us/Contactus';

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
