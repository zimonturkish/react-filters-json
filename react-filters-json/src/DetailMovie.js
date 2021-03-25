import React from "react";
import Card from "react-bootstrap";

const DetailMovie = (props) => {
  return (
    <div className="style-card">
      <Card style={{ width: "28rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <hr></hr>
          <Card.Text>
            <b>Original title</b>: {props.original_title}
            <br />
            <b>Original language</b>: {props.orignal_language}
            <br />
            <b>Release Date</b>: {props.release_date}
            <br />
            <b>Vote average</b>: {props.vote_avarage}
            <br />
            <b>Vote counts</b>: {props.vote_count}
            <br />
            <b>Overview</b>: {props.overview}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DetailMovie;
