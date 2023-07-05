import { useState, useEffect } from 'react';
import 'animate.css';
import Nav from '../../components/Nav/Nav';
import Booking from '../../pages/Booking/Booking';
import Dates from '../../pages/Dates/Dates';
import About from '../../pages/About/About';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 576);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} isSmallScreen={isSmallScreen} />
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
