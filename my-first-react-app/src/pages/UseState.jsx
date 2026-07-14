import { useState } from "react";
import UseStateEx2 from "../components/UseStateEx2";
function UseState() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>UseState</h2>
            <hr />
            <h2>Counter Example</h2>
            <p>Current Count: {count}</p>

            <button onClick={() => setCount(count + 1)}>
                Click Here
            </button>
            <hr/>
            <h2>Exercise 2</h2>

            <UseStateEx2 />
        </div>
    );
}

export default UseState;