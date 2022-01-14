import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [userJson, setUserJson] = useState('');

  function handleChange(event) {
    setInputText(event.target.value);
  }

  async function fetchUser(query) {
    const fetchPromise = await fetch(`https://api.github.com/users/${query}`);
    const data = await fetchPromise.json();

    setUserJson(data);
  }

  return (
  <div>
    <h2>Search GitHub username</h2>
    <input type="text" onChange={ handleChange }></input>
    <button onClick={ () => { fetchUser(inputText); } }>Search</button>
  </div>);
}

export default App;
