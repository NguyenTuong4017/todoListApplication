import { useEffect, useState } from "react";
import "./TodoList.css";
function TodoList() {
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [descList, setDescList] = useState([]);
  const [dateList, setDateList] = useState([]);

  const handleInput = (e) => {
    e.preventDefault();
    setDateList([...dateList, date]);
    setDescList([...descList, desc]);
  };
  return (
    <div>
      <div id="header">
        <h1>Simple Todolist</h1>
        <h2>Add Date and Description</h2>
      </div>

      <div class="inputField">
        <div class="labelAndInput">
          <label htmlFor="desc">Description: </label>
          <input
            type="text"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            class="inputValue"
          />
        </div>

        <div class="labelAndInput">
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

      <div id="list">
        <div>
          <h3>Date</h3>
          {dateList.map((date, index) => (
            <p key={index}>{date}</p>
          ))}
        </div>

        <div>
          <h3>Description</h3>
          {descList.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
