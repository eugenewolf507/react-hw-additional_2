import React from "react";
import styles from "./MovieDetailsLong.module.css";

const MovieDetailsLong = ({ title, posterUrl, overview }) => (
  <div className={styles.movieCard}>
    <img src={posterUrl} alt={title} className={styles.poster} />
    <div className={styles.content}>
      <h2 className={styles.header2}> {title} </h2>
      <p className={styles.movieAbout}> {overview} </p>
    </div>
  </div>
);

export default MovieDetailsLong;
