import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import { Modal, Button, Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const AddMovie = ({ show, handleClose, addMovie }) => {
  const [newMovie, setnewMovie] = useState({
    title: "",
    img: "",
    duration: 0,
    genre: "",
    date: "",
    rate: 1,
    description: "",
    id: uuidv4(),
  });
  const onStarClick = (nextValue, prevValue, name) => {
    setnewMovie({ ...newMovie, rate: nextValue });
  };
  const handleChange = (e) => {
    setnewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Movie</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Title</Form.Label>
            <Form.Control onChange={handleChange} name="title" />
          </Form.Group>
          <Form.Group controlId="formGridAddress2">
            <Form.Label>Image URL</Form.Label>
            <Form.Control onChange={handleChange} name="img" />
          </Form.Group>
          <Form.Row>
            <Form.Group controlId="formGridCity">
              <Form.Label>Duration</Form.Label>
              <Form.Control onChange={handleChange} name="duration" />
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                as="select"
                onChange={handleChange}
                name="genre"
                defaultValue="Choose..."
              >
                <option>Choose...</option>
                <option>Action</option>
                <option>Drama</option>
                <option>Comedy</option>
                <option>Romantic</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formGridZip">
              <Form.Label>Year</Form.Label>
              <Form.Control onChange={handleChange} name="date" />
              <Form.Label>Rate Movie</Form.Label>
              <StarRatingComponent
                name="rate1"
                onChange={handleChange}
                starCount={5}
                value={newMovie.rate}
                onStarClick={onStarClick}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              onChange={handleChange}
              name="description"
            />
          </Form.Row>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {" "}
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              addMovie(newMovie);
              handleClose();
            }}
          >
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default AddMovie;
