import React from "react";
import listMovies from "./list-movies.json";
import { Card } from "react-bootstrap";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        {listMovies.results.map((film, index) => {
          return (
            <div className="style-card" key={index}>
              <Card style={{ width: "28rem" }}>
                <Card.Img variant="top" src={film.backdrop_path} />
                <Card.Body>
                  <Card.Title>{film.title}</Card.Title>
                  <hr></hr>
                  <Card.Text>
                    <b>Original title</b>: {film.original_title}
                    <br />
                    <b>Original language</b>: {film.original_language}
                    <br />
                    <b>Release Date</b>: {film.release_date}
                    <br />
                    <b>Vote average</b>: {film.vote_average}
                    <br />
                    <b>Vote counts</b>: {film.vote_count}
                    <br />
                    <b>Overview</b>: {film.overview}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
