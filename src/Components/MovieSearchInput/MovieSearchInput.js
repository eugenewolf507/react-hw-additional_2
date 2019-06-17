import React from "react";
import styles from "./MovieSearchInput.module.css";

const MovieSearchInput = ({ changeInputValue, value }) => (
  <input
    type="text"
    name="movieSearchInput"
    value={value}
    onChange={changeInputValue}
    className={styles.input}
  />
);

export default MovieSearchInput;
