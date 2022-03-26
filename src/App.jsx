import { useState } from 'react';
import './App.css';
import Question from './Components/Question/Question';
import Shop from './Components/Shop/Shop'

function App() {
  return (
    <div className="container">
       <Shop></Shop>
       <Question></Question>
    </div>
  );
}

export default App
