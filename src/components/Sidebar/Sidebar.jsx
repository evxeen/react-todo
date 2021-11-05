import React from "react";
import styles from './Sidebar.module.scss'

export function Sidebar({showInput}) {

  return (
      <div className={styles.sidebar}>
        <div className={styles.buttons}>
          <div className={styles.btnAdd} onClick={showInput}>
            <img src='/img/add-sidebar.svg' alt='alt'/>
            <span>add</span>
          </div>
        </div>
      </div>
  );
}