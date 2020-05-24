import React, {useRef} from 'react'

const NewTodo = (props) => {

    const textInputRef = useRef(null);

    const todoSubmitHandler = (event) => {
        event.preventDefault();
        const input = textInputRef.current.value;
        props.onAddTodo(input);
    }

    return (
        <form onSubmit = {todoSubmitHandler}>
            <div className = "form-control">
                <input type = "text" id = "todo-text" ref={textInputRef} />
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    )
}

export default NewTodo
