
import todo from "./todo";
import { useRef } from "react";



function Topbar(){
    const Title = useRef();
    const Description = useRef();


    function add_Todo(){
        let object = { "title" : Title.current.value,
        "description": Description.current.value, "status": "incompleted"
        }
        axios.post("http://localhost:3000/newtodo",{object});
        setStart(...start, object)
        return <todo key={object._id} props={object}/>
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
            <button onClick={add_Todo}> Add To-Do</button>
        </div>
    )
}


export default Topbar;