import React from 'react';
import Joke from './Joke';

const JokeList = () => {
  return (
    <div className='joke-body'>
        <div className='header'>
            <h1>Joke Generator</h1>
            <a href="/">Refresh List</a>
        </div>
        <ul>
            <Joke />
        </ul>
    </div>
  )
}

export default JokeList