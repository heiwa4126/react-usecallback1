// from https://www.w3schools.com/react/react_usecallback.asp
import { useState } from "react";
import Todos from "./Todos";

const App3 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <>
      <h2>My Todos (function - wrong)</h2>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );

  function increment() {
    setCount((c) => c + 1);
  }
  function addTodo() {
    setTodos((t) => [...t, "New Todo"]);
  }
};

export default App3;
