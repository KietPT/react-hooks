import React from 'react';

function TodoItem(props) {
    const { item, onDelete } = props
    const handleClick = (id) => {
        onDelete(id)
    }
    return (
        <li id={item.id} onClick={() => handleClick(item.id)}>{item.name}</li>
    );
}

export default TodoItem;