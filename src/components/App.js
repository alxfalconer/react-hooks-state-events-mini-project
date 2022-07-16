import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [text, setText] = useState("");
const [formCategory, setFormCategory] = useState("Code")

const [myTasks, setMyTasks] = useState(TASKS)
const [selectedCategory, setSelectedCategory] = useState("All")

const obj = {
  text: text,
  category: formCategory,
}

function onTaskFormSubmit(e) {
  e.preventDefault();
  setMyTasks([...myTasks, obj])
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}
      onSelectedCategory={selectedCategory}
      onHandleCategory={setSelectedCategory}/>
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList />
    </div>
  );
}

export default App;
