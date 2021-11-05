import React from "react";
import styles from './ContainerLists.module.scss'
import {InputTodo} from "../InputTodo/InputTodo";

export function ContainerLists() {


  return (
      <div className={styles.container}>
         <InputTodo/>
        {/*<Todo />*/}
      </div>
  );
}