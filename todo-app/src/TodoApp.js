import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp () {
    const [todos, setTodos] = useState([]);
    const [entry, setEntry] = useState('');

    // handle Todo input field change event
    function handleTodoChange(event) {
        setEntry(event.target.value);
    }

    // handle Form submit event
    function handleFormSubmit(event) {
        event.preventDefault();

        // set todos with new entry
        setTodos([...todos, entry]);
        
        // reset form
        setEntry('');
    }



    return (<>
            <TodoForm entry={entry} onTodoChange={handleTodoChange} onFormSubmit={handleFormSubmit} />
            <TodoList todos={todos} />
        
    </>
    )
}

export default TodoApp;