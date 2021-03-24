import React from "react";
import listMovies from "./list-movies.json";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./App.css";

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
    // console.log(titles);
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
        <div id="title">
          <DropdownButton id="dropdown-basic-button" title="Title">
            {titles}
          </DropdownButton>

          {/* FILTER LANGUAGE  */}
          <DropdownButton id="dropdown-basic-button" title="Original language">
            {filteredLanguages}
          </DropdownButton>
        </div>
      </div>
    );
  }
}

export default Header;
