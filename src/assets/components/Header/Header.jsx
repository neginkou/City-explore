import React from "react";
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Header}>City Explorer!</h1>
    </div>
  );
}

export default Header;
