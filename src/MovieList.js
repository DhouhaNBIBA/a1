import React, { useState } from "react";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import { Link } from "react-router-dom";

const MovieList = ({ movies, addMovie }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div
        className="container"
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
        }}
      >
        {movies.map((el, i) => (
          <div>
            <MovieCard movie={el} key={i} />
            <Link to={`/movie/${el.id}`}>Movie Description</Link>
          </div>
        ))}
      </div>
      <div>
        <i
          className="far fa-plus-square fa-3x"
          style={{ color: "yellow", margin: "10px" }}
          onClick={handleShow}
        ></i>
        <AddMovie addMovie={addMovie} show={show} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default MovieList;
