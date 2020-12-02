import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

const Description = (props) => {
  console.log(props);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    setMovie(props.movies.filter((el) => el.id === props.match.params.id)[0]);
  });

  return (
    <div>
      {movie && (
        <Card style={{ width: "16rem", margin: "15px 10px" }}>
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={movie.rate}
            />
            <Card.Text>{movie.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{movie.date}</ListGroupItem>
            <ListGroupItem>{movie.duration}</ListGroupItem>
            <ListGroupItem>{movie.genre}</ListGroupItem>
          </ListGroup>
        </Card>
      )}
    </div>
  );
};

export default Description;
