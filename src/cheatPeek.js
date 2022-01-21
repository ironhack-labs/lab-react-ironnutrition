import React from "react";
import "./App.css";

function App() {
  const initialState = { studentName: "", email: "" };
  const [state, setState] = React.useState(initialState);
  const [students, setStudents] = React.useState([]);

  const hanldeChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    const newState = { ...state, [inputName]: inputValue };
    setState(newState);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Students</h2>
          <ul>
            {students.map((student) => (
              <li
                style={{
                  border: "3px solid red",
                  margin: "5px",
                  padding: "2px",
                }}
                key={student.studentName}
              >
                <p>{student.studentName}</p>
                <p>{student.email}</p>
                <button
                  onClick={() => {
                    console.log("click student ", student.studentName);
                    const newStudentsName = students.filter((std) => {
                      return std.studentName !== student.studentName;
                    });
                    setStudents(newStudentsName);
                  }}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setStudents([...students, state]);
            setState(initialState);
          }}
        >
          <label htmlFor="studentName">student name </label>
          <input
            name="studentName"
            type="text"
            value={state.studentName}
            onChange={hanldeChange}
            style={{ display: "block" }}
          />
          <label htmlFor="email">email </label>
          <input
            name="email"
            type="email"
            value={state.email}
            onChange={hanldeChange}
            style={{ display: "block" }}
          />
          <button type="submit">Add</button>
        </form>
      </header>
    </div>
  );
}

export default App;
