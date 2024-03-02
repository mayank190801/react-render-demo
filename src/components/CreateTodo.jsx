import axios from "axios";
import { useState } from "react"
import React from "react";

export const CreateTodo = ({ allTodos, setAllTodos }) => {

    const [inputTitle, setInputTitle] = useState("");
    const [inputDescription, setInputDescription] = useState("");

    const updateInputTitile = (event) => {
        setInputTitle(event.target.value);
    }

    const updateInputDescription = (event) => {
        setInputDescription(event.target.value);
    }

    const updateToInitialValues = () => {
        setInputTitle("");
        setInputDescription("");
    }

    const submitTodoToDatabase = async (event) => {
        event.preventDefault();
        try {
            const data = {
                heading: inputTitle,
                description: inputDescription,
                status: false
            }

            const response = await axios.post("http://localhost:8080/todo", data)
            console.log(response)
            const newAllTodos = [...allTodos, response.data];
            setAllTodos(newAllTodos);

            updateToInitialValues();
        } catch (error) {
            console.log(error);
        }
    }

    return <div>
        <input style={{ padding: 10, margin: 10 }} type="text" placeholder="title" value={inputTitle} onChange={updateInputTitile} /><br />
        <input style={{ padding: 10, margin: 10 }} type="text" placeholder="description" value={inputDescription} onChange={updateInputDescription} /><br />
        <button style={{ padding: 10, margin: 10 }} onClick={submitTodoToDatabase} >Add Todo</button>
    </div>
}

