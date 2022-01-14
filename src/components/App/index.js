import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import UserDisplay from '../UserDisplay';

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
  <Routes>
    <Route path="/" element={
      <div>
        <h2>Search GitHub username</h2>
        <input type="text" onChange={ handleChange }></input>
        <Link to="/user">
          <button onClick={ () => { fetchUser(inputText); } }>Search</button>
        </Link>
      </div>
    } />
    <Route path="/user" element={
      <UserDisplay userJson={ userJson } />
    }>
    </Route>
  </Routes>
  );
}

export default App;
