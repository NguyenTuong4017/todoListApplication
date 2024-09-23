import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./TodoListWithDelete.css";
function TodoListWithDelete() {
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

      <table id="list">
        {dateList.length > 0 ? (
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
        ) : null}

        <tbody>
          {dateList.map((date, index) => (
            <tr key={index}>
              <td>
                <p className="data">{date}</p>
              </td>
              <td>
                <p className="data">{descList[index]}</p>
              </td>
              <td>
                <button
                  className="icon-btn"
                  onClick={() => handleDelete(index)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoListWithDelete;
