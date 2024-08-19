import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoTimeDate } from "./TodoTimeDate";
import { GetLocalStorage, SetLocalStorage } from "./TodoLocalStorage";

export const Todo = () => {
  const [task, setTask] = useState(()=>GetLocalStorage());
  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    /*to check the input field is empty or not.*/
    if (!content) return;

    /*to check this the data is already existing or not*/
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };
  
  //Add data to local storage 
  SetLocalStorage(task)

  //delted_Button
  const handleDeleteTodo = (value) => {
    const updatedTasks = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTasks);
  };

  //handle clear all button
  const handleCleartodo = () => {
    setTask([]);
  };
  
  //check_Button
  const handlecheckedTodo = (content) => {
    const upDatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(upDatedTask);
  };
  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
          <TodoTimeDate />
        </header>
        <TodoForm onAddtodo={handleFormSubmit} />
        <section className="myUnOrderList">
          <ul>
            {task.map((curTask) => {
              return (
                <TodoList
                  key={curTask.id}
                  data={curTask.content}
                  checked={curTask.checked}
                  onhandledelete={handleDeleteTodo}
                  onhandleCheck={handlecheckedTodo}
                />
              ); 
            })}
          </ul>
        </section>
        <section>
          <button className="clear-btn" onClick={handleCleartodo}>
            Clear all
          </button>
        </section>
      </section>
    </>
  );
};
