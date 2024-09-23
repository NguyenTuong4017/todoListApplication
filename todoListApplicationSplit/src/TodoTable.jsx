import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./TodoTable.css";
function TodoTable({ handleDelete, dateList, descList }) {
  return (
    <div>
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

export default TodoTable;
