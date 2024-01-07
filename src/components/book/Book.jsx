import React from "react";
import styles from "./Book.module.scss";
import { useDispatch } from "react-redux";
import { deleteBook } from "../../features/book/bookSlice";

function Book({ data }) {
  const dispatch = useDispatch();

  function handleDelete(e) {
    e.preventDefault()
    dispatch(deleteBook(data))
  } 

  return (
    <div className={styles.book}>
      <p className={styles.book__title}>{data.name}</p>
      <p className={styles.book__description}>{data.description}</p>

      <div className={styles.book__container}>
        <p className={styles.book__author}>By: {data.author}</p>
        <p className={styles.book__price}>{data.price} /-</p>
      </div>

      <button className="text-red-500" onClick={(e) => handleDelete(e, data.name)}>Delete</button>
    </div>
  );
}

export default Book;
