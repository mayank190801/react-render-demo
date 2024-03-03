import { useEffect, useState } from 'react';
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import axios from 'axios';
import { Header } from './components/Header';
import Normal from './components/Wrapper';
import UseEffect from './components/UseEffect';
import UseMemo from './components/UseMemo';

function App() {
    const [allTodos, setAllTodos] = useState([]);

    useEffect(() => {
        initialTodoSetup();

        console.log(import.meta.env.VITE_BACKEND_URL);

        //useEffect zindabad
        setInterval(() => {
            randomFreetier();
        }, 10000);
    }, []);

    const initialTodoSetup = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "todo");
            setAllTodos(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    //random delete call to the database with nothing inside it 
    const randomFreetier = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "todo/freetier");
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }


    const [title, setTitle] = useState("Mayank");
    const updateHeader = () => {
        setTitle(Math.random());
    }

    const [id, setId] = useState(1);

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

                <Normal />

                {/* Working on components, and getting better understanding for sure */}
                <button onClick={() => {
                    setId(1);
                }}>1</button>
                <button onClick={() => {
                    setId(2);
                }}>2</button>
                <button onClick={() => {
                    setId(3);
                }}>3</button>
                <button onClick={() => {
                    setId(4);
                }}>4</button>

                <UseEffect id={id} />

                <UseMemo />

            </div>
        </>
    )
}

export default App
