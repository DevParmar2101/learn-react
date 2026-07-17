import {useMemo, useState} from "react";

function UseMemoEx2() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    function slowFunction(number) {
        console.log("Heavy Calculated Started...");

        //Simulate a heavy calculation
        for (let i =0; i < 5000000; i++) {}

        console.log("Heavy Calculation Finished.");
        return number * number;
    }

    const result = useMemo(() => {
        return slowFunction(count);
    }, [count]);

    return (
        <div>
            <h3>Expensive Calculation Example</h3>
            <p>Count: {count}</p>
            <p>Square: {result}</p>

            <button onClick={() => setCount(count + 1)}>Increase Count</button>
            <br/> <br/>

            <input type="text" placeholder="Type your name" value={name} onChange={(e) => setName(e.target.value)} />

            <p>Name: {name}</p>
        </div>
    );
}
export default UseMemoEx2;