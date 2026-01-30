import { useState, useRef } from "react";
import { X } from "lucide-react";

const Todolist = () => {
  const inputTask = useRef();
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [strike, setStrike] = useState(false);

  //create

  const handleAddItem = () => {
    setError(null);
    const value = inputTask.current.value;

    if (value === "") {
      return setError("Please define a task");
    }
    //add to todo;
    setTodos((tds) => [
      ...tds,
      { id: Math.round(Math.random() * 1000), item: value, done: false },
    ]);
  };

  const toggleCheck = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const handleDeleteItem = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id));
  };

  return (
    <>
      <h1 className="text-2xl text-red/200">This is a practice To Do List </h1>
      <div className="border-2 border-gray-400 my-8 rounded-full inline-block w-fit h-fit">
        <input
          ref={inputTask}
          placeholder="Define a task"
          className="border-none rounded-full mr-4 py-3 px-6 focus:outline-none "
        ></input>
        <button
          onClick={handleAddItem}
          className="bg-gray-600 text-white py-3 px-8 rounded-full hover:bg-blue-400"
        >
          Add
        </button>
      </div>
      {error && <p className="text-red-700 mb-4">{error}</p>}
      <ul>
        {todos.map((todo) => (
          <li className="flex gap-3 items-center " key={todo.id}>
            <input
              className="w-6 h-6 border-2 border-gray-300 rounded-md checked:bg-blue-500 checked:border-blue-500 transition-colors duration-200"
              type="checkbox"
              checked={todo.done}
              value={todo.item}
              onChange={() => {
                toggleCheck(todo.id);
              }}
            ></input>
            <p
              className={
                todo.done ? "line-through mb-1 text-lg" : "mb-1 text-lg"
              }
            >
              {todo.item}
            </p>
            <X
              onClick={() => {
                handleDeleteItem(todo.id);
              }}
              className="w-5 h-5 text-gray-500 hover:text-red-500 cursor-pointer"
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todolist;
