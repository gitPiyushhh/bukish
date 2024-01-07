// Homepage.js
import React from 'react';
import styles from './Homepage.module.scss';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className={styles.homepage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.textContainer}>
            <h1>Hey bukish 👋</h1>
            <p>Discover a world of great books that captivate your imagination.</p>
            <Link to="/books" className={styles.exploreButton}>
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
