import React from "react";
import { useSelector } from "react-redux";
import styles from "./Books.module.scss";
import Book from "../book/Book";

function Books() {
  const allBooks = useSelector((state) => state.book.allBooks);

  return (
    <div className={styles.books}>
      {allBooks.length
        ? allBooks.map((book) => <Book data={book} key={book.name} />)
        : "No book found"}
    </div>
  );
}

export default Books;
