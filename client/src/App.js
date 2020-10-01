/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from "./Movies/MovieCard"
import MovieList from "./Movies/MovieList"

import SavedList from './Movies/SavedList';
import { Router } from 'express';

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (


    <div>
    <div>
      <switch>
        <Router path="/movies/:id" component={MovieCard} />
        <Router path="/">
          <MovieList movies={movieList} />
        </Router>
      </switch> 
    </div>
  </div>
  );
};

export default App;
