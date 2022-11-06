//import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';

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
      <TodoList>
      {todos.map(todo => (
            <TodoItem  key={todo.text} text={todo.text} />
          ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
