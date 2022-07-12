function TodoList (props) {
    return (
        <ul> 
            {props.todos.map((todo,index) => <li key={index}>{todo}</li>)}
        </ul>
    )
}

export default TodoList;