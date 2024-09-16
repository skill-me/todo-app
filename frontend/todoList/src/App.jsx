import { useState } from 'react';
import {Todo} from "./components/todo.jsx"
import {Topbar} from "./components/topBar.jsx"
import axios from "axios";
import TodoBox from './todoBox.jsx';

import { createContext } from "react";




function App() {
  let [start, setStart] = useState(async ()=>{
    let response = await axios.get("http://localhost:3000/")
    return response.data});

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
