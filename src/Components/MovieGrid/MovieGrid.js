import React from "react";
import MovieDetailsShort from "../MovieDetailsShort/MovieDetailsShort";
import styles from "./MovieGrid.module.css";

const MovieGrid = ({ items }) => (
  <div className={styles.grid}>
    {items.map(item => (
      <MovieDetailsShort {...item} key={item.id} />
    ))}
  </div>
);

export default MovieGrid;
