// from https://www.w3schools.com/react/react_usecallback.asp
import { useState } from "react";
import Todos from "./Todos";

const App4 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <h2>My Todos (inline - wrong)</h2>
      <Todos
        todos={todos}
        addTodo={() => {
          setTodos((t) => [...t, "New Todo"]);
        }}
      />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default App4;
