//import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList />

      {/* <CreateTodoButton /> */}
      <button>+</button>
    </>
  );
}

export default App;
