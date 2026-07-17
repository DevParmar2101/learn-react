import {useMemo, useState} from "react";

function UseMemoEx1() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    // function calculateSquare() {
    //     console.log("Calculating Square...");
    //     return count * count;
    // }
    // const result = calculateSquare();

    const result = useMemo(() => {
        console.log("Calculating Square...");
        return count * count;
    }, [count]);

    return(
        <div>
            <h3>With useMemo</h3>
            <p>Count: {count}</p>
            <p>Square: {result}</p>
            <button onClick={() => setCount(count + 1)}>
                Increase Count
            </button>
            <br/> <br/>

            <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
            <p>Name: {name}</p>
        </div>
    );
}

export default UseMemoEx1;