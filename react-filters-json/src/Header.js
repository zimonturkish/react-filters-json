import React from "react";
import listMovies from "./list-movies.json";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./App.css";

// This component is responsible for the two filters
class Header extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state.test = "";
  //   }

  render() {
    const titles = listMovies.results
      // return the whole list of titles
      .map((film) => film.title)
      // return each title in a <Dropdown.Item>
      .map((title, index) => (
        <Dropdown.Item key={index}>{title}</Dropdown.Item>
      ));

    // array with the original language of every film
    const languages = listMovies.results.map((e) => e.original_language);
    // array with all the possible original languages (without duplicates)
    const filteredLanguages = languages
      .filter((language, index) => languages.indexOf(language) === index)
      .map((language, index) => (
        <Dropdown.Item key={index}>{language}</Dropdown.Item>
      ));
    // console.log(filteredLanguages);
    return (
      <div className="header">
        {/* // FILTER TITLE */}
        <div className="filters">
          <label>Title:</label>
          <DropdownButton id="title" title="--">
            {titles}
          </DropdownButton>
        </div>
        <div className="filters">
          <label>Original language:</label>

          {/* FILTER LANGUAGE  */}
          <DropdownButton id="language" title="--">
            {filteredLanguages}
          </DropdownButton>
        </div>
      </div>
    );
  }
}

export default Header;
