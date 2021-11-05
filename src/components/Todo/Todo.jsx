import React from "react";
import styles from './Todo.module.scss'

export function Todo({todo}) {

  return (
      <div className={styles.container}>
        <div className={styles.content}>
          <span>{todo}</span>
        </div>
      </div>
  );
}