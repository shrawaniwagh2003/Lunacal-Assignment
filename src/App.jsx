import { useState } from 'react';
import './App.css';
import Card from '../src/components/Card';
import Gallery from '../src/components/Gallary';
import hr from './assets/hr.png'

function App() {
  const [selectedButton, setSelectedButton] = useState('');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="flex justify-end px-10">
      <div className="min-h-screen text-white flex flex-col items-center py-10">
        <Card selectedButton={selectedButton} onButtonClick={handleButtonClick} />
        <img src={hr} className="w-[96vh] pb-4" alt="hr" />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
