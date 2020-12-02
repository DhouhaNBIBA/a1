import React from "react";
import { Card} from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Card style={{ width: "16rem", margin: "15px 10px" }}>
        <Card.Body>
          <Card.Img variant="top" src={movie.img} />
          <Card.Title>{movie.title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
