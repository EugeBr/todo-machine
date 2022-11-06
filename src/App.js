//import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch'

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso intro a React', completed: false },
  { text: 'Lllorar con la llorona', completed: false }
]

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      
      {/* <TodoList>
        {todos.map(todo => (
          <TodoItem />
        ))}
      </TodoList> */}

      {/* <CreateTodoButton /> */}
      <button>+</button>
    </>
  );
}

export default App;
