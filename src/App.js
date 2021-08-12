import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Programmer";
function App() {
 return (
  <div>
      <WordCard value={word}/>
  </div>
  );
}

export default App;
