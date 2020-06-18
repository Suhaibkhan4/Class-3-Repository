import React from 'react';
import './App.css';
import Friends from './Friends';
function App() {
  return (
    <div classname='App'>
    <h1>Name of Faisal's Friends are</h1>
    <Friends friend1='Suhaib' friend2='Omer'/>
    <h1>
      _____________________
    </h1>
    <h1>Name of Abdullah's Friends are</h1>
    <Friends friend1='Uncle Hanif' friend2='Arabian Guy'/>
    </div>
  );
}

export default App;
