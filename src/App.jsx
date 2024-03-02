import { useEffect, useState } from 'react';
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import axios from 'axios';
import { Header } from './components/Header';

function App() {
    const [allTodos, setAllTodos] = useState([]);

    useEffect(() => {
        initialTodoSetup();
    }, []);

    const initialTodoSetup = async () => {
        try {
            const response = await axios.get("http://localhost:8080/todo");
            setAllTodos(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    const [title, setTitle] = useState("Mayank");
    const updateHeader = () => {
        setTitle(Math.random());
    }

    return (
        <>
            <div>
                <p>-- Todo App --</p>
                <CreateTodo allTodos={allTodos} setAllTodos={setAllTodos} />
                <Todos allTodos={allTodos} setAllTodos={setAllTodos} />

                <button onClick={updateHeader}>click and update the title</button>
                <Header title={title} />
                <Header title={"Hey testing"} />
                <Header title={"Hey testing"} />
                <Header title={"Hey testing"} />
                <Header title={"Hey testing"} />
            </div>
        </>
    )
}

export default App
