import React from "react";
import styles from "./Book.module.scss";

function Book({ data }) {
  return (
    <div className={styles.book}>
      <p className={styles.book__title}>{data.name}</p>
      <p className={styles.book__description}>{data.description}</p>

      <div className={styles.book__container}>
        <p className={styles.book__author}>By: {data.author}</p>
        <p className={styles.book__price}>{data.price} /-</p>
      </div>
    </div>
  );
}

export default Book;
