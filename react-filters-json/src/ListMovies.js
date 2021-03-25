import React from "react";
import listMovies from "./list-movies.json";
import "./App.css";
import DetailMovie from "./DetailMovie";

class ListMovies extends React.Component {
  render() {
    return (
      <div>
        {listMovies.results.map((film, index) => {
          return (
            <div value={index}>
              <DetailMovie
                image={film.backdrop_path}
                title={film.title}
                original_title={film.original_title}
                original_language={film.original_language}
                release_date={film.release_date}
                vote_everage={film.vote_average}
                vote_count={film.vote_count}
                overview={film.overview}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
export default ListMovies;
