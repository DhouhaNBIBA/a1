import "./App.css";
import React, { useState } from "react";
import MovieList from "./MovieList";
import Search from "./Search";
import Description from "./Description";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      title: "Let Him GO",
      duration: " 117 min",
      date: "2020",
      rate: 4,
      genre: "Drama",
      description:"A retired sheriff and his wife, grieving over the death of their son, set out to find their only grandson.",
      img:"http://cima4u.io/wp-content/uploads/0-1191.jpg",
    },
    {
      id: uuidv4(),
      title: "300",
      duration: "149 min",
      date: "2012",
      rate: 5,
      genre: "Action, Drama ",
      description:"King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
      img:"http://cima4u.io/wp-content/uploads/0-2659.jpg",
    },
    {
      id: uuidv4(),
      title: "Jumanji 2:The Next Level",
      duration: "123 min",
      date: "2019",
      rate: 5,
      genre: " Action, Adventure, Comedy",
      description:"In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
      img:"http://cima4u.io/wp-content/uploads/00-2300.jpg",
    },
  ]);
  const [keyword, setkeyword] = useState("");
  const [newRate, setNewRate] = useState(1);
  const search = (text) => {
    setkeyword(text);
  };
  const setRate = (rate) => {
    setNewRate(rate);
  };
  const addMovie = (movie) => {
    setMovies(movies.concat(movie));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Search search={search} setRate={setRate} newRate={newRate} />
        <MovieList
          addMovie={addMovie}
          movies={movies.filter(
            (movie) =>
              movie.rate >= newRate &&
              movie.title.toLowerCase().includes(keyword.toLowerCase().trim())
          )}
        />
        <Route
          path="/movie/:id"
          render={(props) => <Description {...props} movies={movies} />}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
