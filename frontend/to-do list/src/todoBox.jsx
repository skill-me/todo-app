import { useState } from "react";
import axios from "axios";
import todo from "../components/todo";




function TodoBox (arr){
    if (arr){
    arr.map((single) => {
        return (
        <div>
            <todo key={single._id} props={single} />
        </div>)
    })}
}

export default TodoBox;