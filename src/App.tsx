import React from 'react';
import './App.css';
import ImageGenerator from './components/ImageGenerator';
import Navbar from './components/Navbar';
import Robot from './components/Robot';

function App() {
  return (
    <div className="App flex flex-col">
      <Navbar />
      <Robot />
      <ImageGenerator />
    </div>
  );
}

export default App;