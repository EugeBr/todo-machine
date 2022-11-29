import React from "react";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Tomar el curso intro a React', completed: true },
//   { text: 'Llorar con la llorona', completed: false }
// ]

function App() {
  // Traemos nuestros TODOs almacenados
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    // Si existen TODOs en el localStorage los regresamos como nuestros todos
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length; //filtra los que son compeleted == true
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  };

//Persistir nuevas actualizaciones en LocalStorage
const saveTodos = (newTodos) => {
  const stringifiedTodos = JSON.stringify(newTodos);
  localStorage.setItem('TODOS_V1', stringifiedTodos);
  setTodos(newTodos);
};

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];

    //*una forma de hacerlo
    /* todos[todoIndex] = {
      text: todos[todoIndex].text,
      completed: true
    }*/

    //*mejor forma de hacerlo
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;