import React from "react";
import { AppUI } from "./AppUI";

// const defaultItem = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Tomar el curso intro a React', completed: true },
//   { text: 'Llorar con la llorona', completed: false }
// ];

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  //creamos un custom hook
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      // Traemos nuestros TODOs almacenados
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if (!localStorageItem) {
        // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        // Si existen TODOs en el localStorage los regresamos como nuestros todos
        parsedItem = JSON.parse(localStorageItem);
      };

      setItem(); //actualiza la info del estado con la info del localStorage (parsedItem)
      setLoading(false);
    }, 1000); //setTimeout es solo para simular la respuesta de un API
  });

  //Persistir nuevas actualizaciones en LocalStorage
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
  };
}

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
  } = useLocalStorage('TODOS_V1', []);
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
      loading={loading}
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