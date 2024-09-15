import { useState } from "react";
import axios from "axios";
import todo from "../components/todo";



function TodoBox({arr}) {
    if (arr.props) {
        return (
            <div>
                {arr.map((single) => (
            <div key={single._id}>
                <Todo props={single} />
            </div>
            ))}
        </div>
        );
    } else {
        return (
            <p> currently no-todos</p>
        );
    }
}

export default TodoBox;