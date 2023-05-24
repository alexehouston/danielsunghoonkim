import { useState } from 'react';
import 'animate.css';
import Nav from '../../components/Nav/Nav';
import Booking from '../../pages/Booking/Booking';
import Dates from '../../pages/Dates/Dates';
import About from '../../pages/About/About';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'booking' ? ( <Booking /> )
      : currentPage === 'dates' ? ( <Dates /> )
      : currentPage === 'about' ? ( <About /> )
      : ( <div className="home">
            <img src="/assets/paint.png" alt="" />
            <p className="sunghoon">김성훈</p>
            <h1>Hair Stylist</h1>
          </div> )}
    </>
  );
}
