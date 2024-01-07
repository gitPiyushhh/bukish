import React, { useState } from "react";
import styles from "./Navbar.module.scss";

import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__inner}>
        <div className="navbar__left">
          <Link to="/" className={styles.navbar__link}>
            <p className={styles.navbar__logo}>Bukish.io</p>
          </Link>
        </div>

        <div className={styles.navbar__right}>
          <Link to="/books" className={styles.navbar__link}>
            <p style={{marginBottom: '0'}}>Books </p>
          </Link>

          <Link to="/users" className={styles.navbar__link}>
            <p style={{marginBottom: '0'}}>Users</p>
          </Link>

          <Link to="/books/new" className={styles.navbar__link}>
            <p style={{marginBottom: '0'}}>Add book</p>
          </Link>
          
          <Link to="/users/new" className={styles.navbar__link}>
            <p style={{marginBottom: '0'}}>Add user</p>
          </Link>
        </div>

        <span
          className={styles.navbar__close}
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? (
            <i class="uil uil-bars"></i>
          ) : (
            <i class="uil uil-times"></i>
          )}
        </span>
      </div>

      {isOpen && (
        <div className={styles.navbar__bottom}>
          <Link to="/books" className={styles.navbar__link}>
            <p style={{marginBottom: '0'}}>All books </p>
          </Link>

          <Link to="/books/new" className={styles.navbar__link}>
            <p style={{marginBottom: '0'}}>Add book</p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
