import React from "react";
import "./App.css";
import Header from "./Header.js";
import ListMovies from "./ListMovies";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ListMovies />
      </div>
    );
  }
}
export default App;
