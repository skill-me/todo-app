import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import todo from "/Users/satyathacker/Downloads/assignments-master/01-js/timepass/To-Do list/frontend/to-do list/components/todo.jsx";
import Topbar from "/Users/satyathacker/Downloads/assignments-master/01-js/timepass/To-Do list/frontend/to-do list/components/topBar.jsx"
import axios from "axios";
import todoBox from './todoBox';



function App() {
  let [start, setStart] = useState([]);


  return (
    <div>
      <Topbar></Topbar>
      <todoBox></todoBox>
    </div>
  )
}

export default App
