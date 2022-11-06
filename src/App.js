//import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList />
      <CreateTodoButton />
    </>
  );
}

export default App;
