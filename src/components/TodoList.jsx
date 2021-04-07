import React, { useState } from 'react'
import { observer } from 'mobx-react';

const TodoList = observer(({ todoStore }) => {

    const [value, setValue] = useState('');
    const status = todoStore.status;

    return (
        <div>
            <input value={value} onChange={(event) => { setValue(event.target.value) }} type="text" />
            <button onClick={() => { todoStore.addTodo(value) }}>submit</button>
            <br />
            Completed: {status.completed}
            <br />
            Remaining:{status.remaining}
            <br />
            <ul>
                {
                    todoStore.todos.map(el => <li onClick={() => {
                        todoStore.toggleTodo(el.id);
                    }}>[{el.completed ? 'x' : ' '}] {el.title}</li>)
                }
            </ul>

        </div>
    )
})

export default TodoList;