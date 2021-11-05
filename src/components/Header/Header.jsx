import React from "react";
import styles from './Header.module.scss'

export function Header() {
  return (
      <div className={styles.header}>
        <div >
          <img className={styles.logo} src='/img/logo.svg' alt='logo'/>
        </div>
        <div className={styles.theme}>
          <img src='/img/moon-outline.svg' alt='icon'/>
        </div>
      </div>
  );
}