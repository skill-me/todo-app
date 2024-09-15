import { useState } from "react";



function todoBox (box){


useEffect( ()=> {
    const fetchData = async ()=>{
    let todos = await axios.get("http://localhost:3000/")
    setStart(todos)};
    fetchData()}, []);


    return (
    <div>
        {todos.map((single) => (
        <todo key={single._id} props={single} />))}
    </div>)
}

export default todoBox;