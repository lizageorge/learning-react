import React from 'react'

const TodoList = (props) => {
    return (
        <ul>
            {props.list.map(item =>{
                return (
                <li key = {item.key}>
                    {item.text}
                    <button onClick = {() => props.deleteElem(item)}>DELETE</button>
                </li>
                )
            })}
        </ul>
    )
}

export default TodoList
