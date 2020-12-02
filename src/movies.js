const movies = [
  {
    title: "Let Him GO",
    duration: " 117 min",
    date: "2020",
    rate: 4,
    genre: "Drama",
    description:"A retired sheriff and his wife, grieving over the death of their son, set out to find their only grandson.",
    img:"http://cima4u.io/wp-content/uploads/0-1191.jpg",
  },
  {
    title: "300",
      duration: "149 min",
      date: "2012",
      rate: 5,
      genre: "Action, Drama ",
      description:"King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
      img:"http://cima4u.io/wp-content/uploads/0-2659.jpg",
  },
  {
    title: "Jumanji 2:The Next Level",
      duration: "123 min",
      date: "2019",
      rate: 5,
      genre: " Action, Adventure, Comedy",
      description:"In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
      img:"http://cima4u.io/wp-content/uploads/00-2300.jpg",
  },
];

<Card style={{ width: "16rem", margin: "15px 10px" }}>
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <StarRatingComponent name="rate1" starCount={5} value={movie.rate} />
    <Card.Text>{movie.description}</Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{movie.date}</ListGroupItem>
    <ListGroupItem>{movie.duration}</ListGroupItem>
  </ListGroup>
</Card>;
