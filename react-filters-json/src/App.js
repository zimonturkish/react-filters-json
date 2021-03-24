import React from "react";
import listMovies from "./list-movies.json";
import { Card } from "react-bootstrap";
import "./App.css"

class App extends React.Component {
  render() {
    console.log(listMovies.results);
    return (
      <div>
        {listMovies.results.map((film) => {
          return (
            // style={{ alignItems: "center", backgroundColor: "black" }}
            <div class="style-card">
              <Card style={{ width: "28rem" }}>
                <Card.Img variant="top" src={film.backdrop_path} />
                <Card.Body>
                  <Card.Title>{film.title}</Card.Title>
                  <hr></hr>
                  <Card.Text>
                    <p>
                      <b>Original title</b>: {film.original_title}
                    </p>
                    <p>
                      <b>Original language</b>: {film.original_language}
                    </p>
                    <p>
                      <b>Release Date</b>: {film.release_date}
                    </p>
                    <p>
                      <b>Vote average</b>: {film.vote_average}
                    </p>
                    <p>
                      <b>Vote counts</b>: {film.vote_count}
                    </p>
                    <p>
                      <b>Overview</b>: {film.overview}
                    </p>
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
