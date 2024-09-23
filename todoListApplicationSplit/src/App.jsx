import { useState } from "react";

import TodoListWithDelete from "./TodoListWithDelete";
import "./TodoListWithDelete.css";
function App() {
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [descList, setDescList] = useState([]);
  const [dateList, setDateList] = useState([]);

  const handleInput = (e) => {
    e.preventDefault();
    setDateList([...dateList, date]);
    setDescList([...descList, desc]);
  };
  const handleDelete = (index) => {
    const newDateList = dateList.filter((_, i) => i !== index);
    const newDescList = descList.filter((_, i) => i !== index);
    setDateList(newDateList);
    setDescList(newDescList);
  };
  return (
    <div>
      <div id="header">
        <h1>Simple Todolist</h1>
        <h2>Add Date and Description</h2>
      </div>

      <div className="inputField">
        <div className="labelAndInput">
          <label htmlFor="desc">Description: </label>
          <input
            type="text"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            class="inputValue"
          />
        </div>

        <div className="labelAndInput">
          <label htmlFor="date">Date: </label>
          <input
            type="text"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            class="inputValue"
          />
        </div>
        <button type="submit" onClick={(e) => handleInput(e)} className="btn">
          Submit
        </button>
      </div>

      <TodoListWithDelete
        handleDelete={handleDelete}
        dateList={dateList}
        descList={descList}
      />
    </div>
  );
}

export default App;
