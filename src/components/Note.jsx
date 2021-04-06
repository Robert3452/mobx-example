import React from 'react'

export default function Note({ task, onDelete }) {
    // const [note, setNote] = useState({});

    return (
        <div>
            <span>
                {task}
            </span>
            <button onClick={onDelete}>X</button>
        </div>
    )
}
