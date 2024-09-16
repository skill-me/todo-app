import { useEffect, useState } from 'react';
import Topbar from "./components/TopBar";
import axios from "axios";
import TodoBox from "./components/TodoBox";
import { createContext } from "react";




function App() {

  let [start, setStart] = useState([]);


  useEffect(()=>{
    async function fetch (){
      let response = await axios.get("http://localhost:3000/");
      setStart(response.data);
    } fetch()}, []);



  const giverContext = createContext(setStart);


  return (
    <div>
      <giverContext.Provider value={setStart}>
        <Topbar using={setStart} get={start}></Topbar>
      </giverContext.Provider>
      <TodoBox arr={start}></TodoBox>
    </div>
  )
}

export default App
