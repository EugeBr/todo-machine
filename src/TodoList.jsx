import React from "react";

const todos = [
    { text: 'Cortar cebolla', completed: false },
    { text: 'Tomar el curso intro a React', completed: false },
    { text: 'Lllorar con la llorona', completed: false }
  ]

function TodoList() {
    return (
        todos.map(todo => (
            <></>
            // <TodoItem />
          ))
    );
}

export { TodoList };
