// Homepage.js
import React from 'react';
import styles from './Homepage.module.scss';
import { Link } from 'react-router-dom';

const userJson = {
  name: 'Piyush',
  isAuthor: false
}

function Homepage() {
  return (
    <div className={styles.homepage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.textContainer}>
            <h1>Hey bukish 👋</h1>
            <p>Discover a world of great books that captivate your imagination.</p>
            <Link to="/allBooks" className={styles.exploreButton}>
              Explore Books
            </Link>
          </div>
          <div className={styles.imageContainer}>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
