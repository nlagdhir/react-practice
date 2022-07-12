function TodoForm (props) {

    return (
        <form onSubmit={props.onFormSubmit}>
            <label htmlFor="todo">Todos : </label>
            <input type="text" id="todo" name="todo" value={props.entry} onChange={props.onTodoChange} />
            <input type='submit' value="Save" />
        </form>
    )

}

export default TodoForm;