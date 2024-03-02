import axios from "axios";
import { useState } from "react"

export const CreateTodo = () => {

    const [inputId, setInputId] = useState("");
    const [inputTitle, setInputTitle] = useState("");
    const [inputDescription, setInputDescription] = useState("");

    const updateInputId = (event) => {
        setInputId(event.target.value);
    }

    const updateInputTitile = (event) => {
        setInputTitle(event.target.value);
    }

    const updateInputDescription = (event) => {
        setInputDescription(event.target.value);
    }

    const updateToInitialValues = () => {
        setInputId("");
        setInputTitle("");
        setInputDescription("");
    }

    const submitTodoToDatabase = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("https://spring-render-api.onrender.com/todo", {
                id: inputId,
                heading: inputTitle,
                description: inputDescription,
                status: false
            })
            console.log(response);
            updateToInitialValues();
        } catch (error) {
            console.log(error);
        }
    }

    return <div>
        <input style={{ padding: 10, margin: 10 }} type="text" placeholder="id" value={inputId} onChange={updateInputId} /><br />
        <input style={{ padding: 10, margin: 10 }} type="text" placeholder="title" value={inputTitle} onChange={updateInputTitile} /><br />
        <input style={{ padding: 10, margin: 10 }} type="text" placeholder="description" value={inputDescription} onChange={updateInputDescription} /><br />
        <button style={{ padding: 10, margin: 10 }} onClick={submitTodoToDatabase} >Add Todo</button>
    </div>
}

