import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

const EditableTodo = () => {
  const inputRefs = useRef([]);

  const [todos, setTodos] = useState([
    {
      id: crypto.randomUUID(),
      item: "",
      done: false,
    },
  ]);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const lastInput = inputRefs.current[todos.length - 1];
  //     lastInput?.focus();
  //   }, [todos.length]);

  //   const handleAddItem = () => {
  //     setError(null);
  //     const value = inputTask.current.value;

  //     if (value === "") {
  //       return setError("Please define a task");
  //     }
  //     //add to todo;
  //     setTodos((tds) => [
  //       ...tds,
  //       { id: crypto.randomUUID(), item: value, done: false },
  //     ]);
  //     inputTask.current.value = "";
  //   };

  const toggleCheck = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const handleItemChange = (e, id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, item: e.target.value } : todo,
      ),
    );
  };

  const handleKeyDown = (e, currtodo) => {
    if (e.key === "Enter") {
      const newid = crypto.randomUUID();
      //create a new todo
      setTodos((prev) => [...prev, { id: newid, item: "", done: false }]);

      setTimeout(() => {
        inputRefs.current[newid]?.focus();
      });
    }

    if (e.key === "Backspace" && currtodo == "") {
      setTodos((prev) => prev.filter((t) => t.id !== currtodo.id));
    }
  };

  return (
    <>
      <h1 className="text-2xl text-red/200 my-4">
        This is a practice To Do List{" "}
      </h1>

      <ul className="my-8">
        {todos.map((todo) => (
          <li className="flex gap-3 items-center" key={todo.id}>
            <input
              className="w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-blue-500 checked:border-blue-500 transition-colors duration-200"
              type="checkbox"
              checked={todo.done}
              //   value={todo.item}
              onChange={() => {
                toggleCheck(todo.id);
              }}
            ></input>
            <input
              ref={(el) => (inputRefs.current[todo.id] = el)}
              className="text-lg focus:outline-none"
              autoFocus={todos.length === 1}
              value={todo.item}
              onKeyDown={(e) => handleKeyDown(e, todo)}
              onChange={(e) => handleItemChange(e, todo.id)}
            ></input>

            {/* <X
              onClick={() => {
                handleDeleteItem(todo.id);
              }}
              className="w-5 h-5 text-gray-500 hover:text-red-500 cursor-pointer"
            /> */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default EditableTodo;
