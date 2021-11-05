import React from "react";
import styles from './InputTodo.module.scss'

export function InputTodo() {

  return (
      <form>
        <div className={styles.search}>
          <input type='text' placeholder='Enter the task'/>
          <button type='submit'> ✅ </button>
          <button > ❌ </button>
        </div>
      </form>
  );
}