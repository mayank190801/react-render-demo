export const Todos = ({ allTodos }) => {
    return <div>
        {allTodos.map((todo) => {
            return (<div key={todo.id} style={{ border: "1px solid black", padding: 10, margin: 10, display: "flex", justifyContent: "space-between" }}>
                <div>
                    <div>{todo.id}</div>
                    <div>{todo.heading}</div>
                    <div>{todo.description}</div>
                </div>
                <div>
                    <button>Mark as completed</button>
                </div>
            </div>)
        })}
    </div>
}