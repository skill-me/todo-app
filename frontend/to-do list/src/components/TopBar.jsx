
import { useRef } from "react";
import axios from "axios";



function Topbar({using, get}){
    const Title = useRef();
    const Description = useRef();


    function addTodo(){
        console.log("hello world");
        let object = { "title" : Title.current.value,
        "description": Description.current.value, "status": "incompleted"
        };
        axios.post("http://localhost:3000/new",object);
        using(...get, object);
        }

    return (
        <div>
            <h1> Today's To-Do List</h1>
            <input 
                type="text" 
                placeholder='enter the task name' 
                ref={Title}
            />
            <input 
                type="text" 
                placeholder='enter the task name' 
                ref={Description}
            />
            <button onClick={addTodo}> Add To-Do</button>
        </div>
    )
}


export default Topbar;