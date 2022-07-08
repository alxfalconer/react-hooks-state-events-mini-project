import React from "react";
import Task from "./Task";

function TaskList(tasks) {

  const displayTasks = tasks.map((task, index)=> (
    <Task 
      key={index} 
      text={task.text}
      category={task.category}
      />
  )
)

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
