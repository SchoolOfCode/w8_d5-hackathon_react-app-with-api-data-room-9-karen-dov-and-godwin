import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [userJson, setUserJson] = useState('');

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function fetchUser(query) {
    console.log(query);
  }

  return (
  <div>
    <h2>Search GitHub username</h2>
    <input type="text" onChange={ handleChange }></input>
    <button onClick={ () => { fetchUser('Test'); } }>Search</button>
    <p>{userJson.length}</p>
  </div>);
}

export default App;
