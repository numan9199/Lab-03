import { random } from 'lodash';
import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = ["Programmer","Computer","Game","Lab"];
function App() {
 return (
  <div>
      <WordCard value = {word[random(0,word.length)]} />
  </div>
  );
}

export default App;
