import {useMemo, useState} from "react";

function UseMemoEx3() {
    const employees = [
        "Dev Parmar",
        "Rahul Sharma",
        "Amit Patel",
        "Priya Shah",
        "Rohit Verma",
        "Neha Joshi",
        "Ankit Singh",
        "Pooja Mehta",
        "Vivek Kumar",
        "Riya Patel",
    ];

    const [search, setSearch] = useState("");
    const [count, setCount] = useState(0);

    const filteredEmployees = useMemo(() => {
        console.log("Filtering Employees....");

        return employees.filter(employee =>
        employee.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);
    return (
        <div>
            <h3>Employee Search</h3>
            <button onClick={() => setCount(count+1)}>Increase Count</button>
            <br/> <br/>
            <input type="text" placeholder="Search Employee" value={search} onChange={(e) => setSearch(e.target.value)} />
            <br/> <br/>
            <ul>
                {filteredEmployees.map((employee, index) => (
                    <li key={index}>{employee}</li>
                ))}
            </ul>
        </div>
    );
}
export default UseMemoEx3;