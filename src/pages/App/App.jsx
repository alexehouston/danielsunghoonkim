import { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
