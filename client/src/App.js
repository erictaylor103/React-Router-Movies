import React, { useState } from 'react';
import { BrowserRouter, Switch, Link } from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
        <SavedList list={savedList} />
        <div>
          <BrowserRouter exact path='/'>
            <MovieList />
          </BrowserRouter>
          
          <BrowserRouter path='/movies/:id'>
            <Movie addToSavedList= {addToSavedList}/>
          </BrowserRouter>

          </div>
      
    </div>
  );
};

export default App;
