import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import todo from "/Users/satyathacker/Downloads/assignments-master/01-js/timepass/To-Do list/frontend/to-do list/components/todo.jsx";
import Topbar from "/Users/satyathacker/Downloads/assignments-master/01-js/timepass/To-Do list/frontend/to-do list/components/topBar.jsx"
import axios from "axios";
import TodoBox from './todoBox';
import { set } from 'mongoose';
import { createContext } from "react";




function App() {
  let [start, setStart] = useState(async ()=>{
    let response = await axios.get("http://localhost:3000/")
    return response});

  const giverContext = createContext(setStart);


  return (
    <div>
      <giverContext.Provider value={setStart}>
        <Topbar using={setStart} start={start}></Topbar>
      </giverContext.Provider>
      <TodoBox arr={start}></TodoBox>
    </div>
  )
}

export default App
