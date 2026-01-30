import { useState, useRef } from "react";

const Todolist = () => {
  const inputTask = useRef();
  //each todo structure
  //checkbox - itemname, is done or not

  /*<li>
  <checkbox checked = {todo.done} value={todo.name}>
  <p>{todo.name}</p>
  {
  id,
  name,
  done
  }
  */
  //const [task,setTask] = useState('lol');
  const [todos, setTodos] = useState([]);
  //create

  const handleAddItem = () => {
    const value = inputTask.current.value;
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
          className="bg-gray-600 text-white py-3 px-8 rounded-full"
        >
          Add
        </button>
      </div>

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
            <p className="mb-1 text-lg">{todo.item}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todolist;
