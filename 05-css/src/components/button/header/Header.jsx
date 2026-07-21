import React from "react";
import styles from './Header.module.css'

function Header() {
  return (
    <>
      <div  className={styles.header}>
        <h1>Suraj</h1>
        <button className={styles.btn}>Login</button>
      </div>
    </>
  );
}

export default Header;
