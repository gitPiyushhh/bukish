import React, { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./FormBook.module.scss";
import { addBook } from "../../features/book/bookSlice";

function FormBook() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState(null);

  function handleAddBook() {
    dispatch(addBook({name, description, author, price}))
    setName("")
    setDescription("")
    setAuthor("")
    setPrice(0)
  }

  return (
    <div className={styles.form}>
      <div className={styles.form__left}>
        &nbsp;
      </div>
      <div className={styles.form__right}>
        <div className={styles.formInput}>
          <label className={styles.formInput__label}>
            Name
          </label>
          <input type='text' className={styles.formInput__input} value={name} onChange={(e) => setName(e.target.value)}/>
        </div>

        <div className={styles.formInput}>
          <label className={styles.formInput__label}>
            Description
          </label>
          <input type='text' className={styles.formInput__input} value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div>

        <div className={styles.formInput}>
          <label className={styles.formInput__label}>
            Author
          </label>
          <input type='text' className={styles.formInput__input} value={author} onChange={(e) => setAuthor(e.target.value)}/>
        </div>

        <div className={styles.formInput}>
          <label className={styles.formInput__label}>
            Price
          </label>
          <input type='number' className={styles.formInput__input} value={price} onChange={(e) => setPrice(e.target.value)}/>
        </div>

        <button className={styles.form__cta} onClick={handleAddBook}>Add book</button>
      </div>
    </div>
  );
}

export default FormBook;
