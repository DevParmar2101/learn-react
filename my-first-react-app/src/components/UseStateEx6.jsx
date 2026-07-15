import {useState} from "react";

function UseStateEx6() {
    const [employees, setEmployees] = useState([
        "Employee 1",
        "Employee 2",
    ])

    function addEmployee() {
        setEmployees([
            ...employees,
            `Employee ${employees.length + 1}`,
        ])
    }
    return (
      <div>
          <h3>Employee List</h3>
          <ul>
              {employees.map((employee, index) => (
                  <li key={index}>
                      {employee}
                  </li>
              ))}
          </ul>
          <button style={{ marginTop: "10px" }} onClick={addEmployee}>
              Add Employee
          </button>
      </div>
    );
}

export default UseStateEx6;