import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const addTodo = () => {
    if (todoText) {
      const todoObj = {
        id: (todos[todos.length - 1]?.id || 0) + 1,
        task: todoText,
        updatedTask: "",
        isCompleted: false,
        isEdit: false,
        isEditOkay: false,
        isEditCancelled: false,
      };
      let arr = [...todos];
      arr.push(todoObj);
      setTodos(arr);
      console.log(arr);
      setTodoText("");
    }
  };
  const handleEdit = (id, value) => {
    const arr = [...todos];
    let idx = arr.findIndex((ele) => ele.id === id);
    if (idx > -1) {
      let obj = { ...arr[idx] };
      obj.isEdit = true;
      obj.updatedTask = value;
      console.log(obj.updatedTask);

      arr[idx] = obj;
      setTodos(arr);
      console.log(arr);
    }
  };

  const cancelEdit = (id) => {
    let arr = [...todos];
    let idx = arr.findIndex((e) => e.id === id);
    if (idx > -1) {
      let obj = { ...arr[idx] };
      obj.isEdit = false;
      obj.isEditOkay = false;
      arr[idx] = obj;
      setTodos(arr);
      console.log(arr[idx]);
    }
  };
  const okayEdit = (id) => {
    let arr = [...todos];
    let idx = arr.findIndex((e) => e.id === id);
    if (idx > -1) {
      let obj = { ...arr[idx] };
      if (obj.updatedTask) {
        obj.task = obj.updatedTask;
        obj.isEdit = false;
        obj.isCompleted = false;
        obj.isEditOkay = true;
      }
      arr[idx] = obj;
      setTodos(arr);
    }
  };

  const taskComplete = (id) => {
    const arr = [...todos];
    let idx = arr.findIndex((ele) => ele.id === id);
    if (idx > -1) {
      let obj = { ...arr[idx] };
      obj.isCompleted = true;
      arr[idx] = obj;
      setTodos(arr);
      console.log(arr);
    }
  };

  const deleteTask = (id) => {
    const arr = [...todos];
    let idx = arr.findIndex((ele) => ele.id === id);
    if (idx > -1) {
      arr.splice(idx, 1);
      setTodos(arr);
      console.log(arr);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Todo List
        </h1>

        <div className="mb-4">
          <input
            value={todoText}
            type="text"
            id="todo-input"
            onChange={(e) => setTodoText(e.target.value)}
            placeholder="Add a new task"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            id="add-btn"
            onClick={addTodo}
            className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Todo
          </button>
        </div>

        <ul id="todo-list" className="space-y-3">
          {todos?.map((todo, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center p-4 bg-gray-100 rounded-lg"
            >
              {!todo?.isEdit ? (
                <span
                  className={`text-gray-700 ${
                    todo?.isCompleted ? "line-through" : ""
                  }`}
                >
                  {!todo?.isEditOkay ? todo.task : todo.updatedTask}
                </span>
              ) : (
                <input
                  type="text"
                  value={todo.updatedTask}
                  onChange={(e) => handleEdit(todo.id, e.target.value)}
                  placeholder={`Update - ${todo.task}`}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
              <div className="flex gap-4">
                {!todo?.isCompleted && !todo?.isEdit && (
                  <button
                    onClick={() => taskComplete(todo.id)}
                    className="text-green-500 hover:text-green-600 font-semibold"
                  >
                    Completed
                  </button>
                )}
                {!todo.isEdit ? (
                  <>
                    <button
                      onClick={() => deleteTask(todo.id)}
                      className="text-red-500 hover:text-red-600 font-semibold"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleEdit(todo.id)}
                      className="text-violet-500 hover:text-violet-600 font-semibold"
                    >
                      Edit
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        okayEdit(todo.id);
                      }}
                      className="text-violet-500 hover:text-violet-600 font-semibold"
                    >
                      Okay
                    </button>
                    <button
                      onClick={() => cancelEdit(todo.id)}
                      className="text-red-500 hover:text-red-600 font-semibold"
                    >
                      Cancel
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
