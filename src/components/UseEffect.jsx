import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

//this works pretty decently
//now all the sense in the world makes
const UseEffect = ({ id }) => {

    const [todo, setTodo] = useState({});

    useEffect(() => {
        axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
            .then(res => {
                console.log(res);
                setTodo(res.data.todo)
            })
    }, [id]);

    return <div>
        <h1>
            {todo.title}
        </h1>
        <h4>
            {todo.description}<br />
        </h4>
    </div>



}

export default UseEffect;
