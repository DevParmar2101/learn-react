import { useState } from "react";

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
        </div>
    );
}

export default UseState;