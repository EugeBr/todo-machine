//import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso intro a React', completed: false },
  { text: 'Lllorar con la llorona', completed: false }
]

function App() {
  return (
    <TodoCounter />
    <h2>Has Completado 2 de 3 TODOs</h2>

    <TodoSearch />
    <Input placeholder="Cebolla" />
    <TodoList>
      <TodoItem />
    </TodoList>

    <CreateTodoButton />
  );
}

export default App;
