import React from "react"
import axios from "axios";

export const Todos = ({ allTodos, setAllTodos }) => {

    const updateTodoToCompleted = async (id) => {
        const todo = allTodos.filter((todo) => todo.id == id)[0]
        todo.status = true;

        try {
            const response = await axios.put("http://localhost:8080/todo/" + id, todo)
            console.log(response);
            const newAllTodos = [...allTodos, response.data];
            setAllTodos(newAllTodos);

        } catch (error) {
            console.log(error)
        }

    }

    const filteredTodos = allTodos.filter(todo => todo.status == false)
    console.log(filteredTodos)

    return <>
        {filteredTodos.map((todo) => {
            return (<div key={todo.id} style={{ border: "1px solid black", padding: 10, margin: 10, display: "flex", justifyContent: "space-between" }}>
                <div>
                    <div>{todo.id}</div>
                    <div>{todo.heading}</div>
                    <div>{todo.description}</div>
                </div>
                <div>
                    <button onClick={() => updateTodoToCompleted(todo.id)}>Mark as completed</button>
                </div>
            </div>)
        })}
    </>
}