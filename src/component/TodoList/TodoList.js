import React from 'react';
import TodoItem from './TodoItem'


function TodoList(props) {
    const {todoList, onDelete} = props

    return (
        <div>
            <ul>
                {todoList.map((item, index) => {
                    return <TodoItem item={item} onDelete={onDelete} key={item.id}/>
                })}
            </ul>
        </div>
    );
}

export default TodoList;