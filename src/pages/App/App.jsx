import { Routes, Route, useLocation } from "react-router-dom";
import Nav from '../../components/Nav/Nav';
import Home from '../../pages/Home/Home';
import Booking from '../../pages/Booking/Booking';
import Dates from '../../pages/Dates/Dates';
import About from '../../pages/About/About';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'animate.css';
import './App.css';

export default function App() {
  const location = useLocation();

  return (
    <div className="App container-fluid p-0 vh-100">
      <Nav />

      <Routes location={location} key={location.pathname}>
        <Route path="/" index element={<Home />} />
        <Route path="/booking" index element={<Booking />} />
        <Route path="/dates" index element={<Dates />} />
        <Route path="/about" index element={<About />} />
      </Routes>
    </div>
  );
}
