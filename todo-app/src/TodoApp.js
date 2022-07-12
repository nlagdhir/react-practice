import { useState } from "react";

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
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="todo">Todos : </label>
            <input type="text" id="todo" name="todo" value={entry} onChange={handleTodoChange} />
            <input type='submit' value="Save" />
        </form>

        <ul>
            {todos.map((todo,index) => <li key={index}>{todo}</li>)}
        </ul>
    </>
    )
}

export default TodoApp;