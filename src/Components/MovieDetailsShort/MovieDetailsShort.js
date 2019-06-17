import React from "react";
import styles from "./MovieDetailsShort.module.css";

const MovieDetailsShort = ({ title, posterUrl }) => (
  <div className={styles.movieCard}>
    <img src={posterUrl} alt={title} className={styles.poster} />
    <div className={styles.content}>
      <h2 className={styles.header2}> {title} </h2>
    </div>
  </div>
);

export default MovieDetailsShort;
