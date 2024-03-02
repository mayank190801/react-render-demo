import { useEffect, useState } from 'react';
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import axios from 'axios';

function App() {
    const [allTodos, setAllTodos] = useState([]);

    useEffect(() => {
        initialTodoSetup();
    }, []);

    const initialTodoSetup = async () => {
        try {
            const response = await axios.get("https://spring-render-api.onrender.com/todo");
            setAllTodos(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div>
                <p>-- Todo App --</p>
                <CreateTodo />
                <Todos allTodos={allTodos} />
            </div>
        </>
    )
}

export default App
