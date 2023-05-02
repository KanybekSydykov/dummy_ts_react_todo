import { useContext } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { TodosContextProvider,TodosContext } from "./store/todos-context";

// const todos = [
//   new Todo('Learn React'),
//   new Todo('Learn TypeScript')
// ]

function App() {
  const todosCtx = useContext(TodosContext)
  
  return (
    <TodosContextProvider>
      <NewTodo />
        <Todos  />
    </TodosContextProvider>
  );
}

export default App;
