import React, { Component } from "react";
import styles from "./App.module.css";
import MovieSearchInput from "../MovieSearchInput/MovieSearchInput";
import AppMenu from "../AppMenu/AppMenu";
import MovieGrid from "../MovieGrid/MovieGrid";
import MovieDetailsShort from "../MovieDetailsShort/MovieDetailsShort";
import movies from "../../Data/movies.json";

const INITIAL_STATE = {
  showAppMenu: true,
  movieSearchInput: ""
};

class App extends Component {
  state = { ...INITIAL_STATE };

  updateInputValue = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  ClickOnMovie = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  getFilteredMovies = searchMovieValue => {
    return movies.filter(movie => {
      const lowerMovieTitle = movie.title.toLowerCase().replace(/\s/g, "");
      const lowerMovieOverview = movie.overview
        .toLowerCase()
        .replace(/\s/g, "");
      return lowerMovieTitle.includes(searchMovieValue);
    });
  };

  render() {
    const { movieSearchInput, showAppMenu } = this.state;
    const moviesList = this.getFilteredMovies(movieSearchInput);
    return (
      <div className={styles.appWrapper}>
        {showAppMenu && <AppMenu />}
        <MovieSearchInput
          changeInputValue={this.updateInputValue}
          value={movieSearchInput}
        />
        <MovieGrid items={moviesList} />
      </div>
    );
  }
}

export default App;
