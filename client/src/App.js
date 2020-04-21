import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom'
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
        <Route path="/movies/:id" component={Movie} />
        <h3>Movie List</h3>
        <Route path="/movies/:id"></Route>
        <Route exact path="/" component={MovieList}></Route>        
    </div>
      
    
  );
};

export default App;
