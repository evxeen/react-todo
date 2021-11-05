import React from "react";
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {ContainerLists} from "./components/ContainerLists/ContainerLists";

function App() {


  return (
      <div className='container'>
        <Header />
        <div className='work'>
          <Sidebar />
          <ContainerLists />
        </div>
      </div>
  );
}

export default App;
