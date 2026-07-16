import { useState } from "react";
import UseStateEx2 from "../components/UseState/UseStateEx2";
import UseStateEx3 from "../components/UseState/UseStateEx3";
import UseStateEx4 from "../components/UseState/UseStateEx4";
import UseStateEx5 from "../components/UseState/UseStateEx5";
import UseStateEx6 from "../components/UseState/UseStateEx6";
function UseState() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>UseState</h2>
            <hr />
            <h2>Counter Example</h2>
            <p>Current Count: {count}</p>

            <button style={{ marginBottom: "10px", marginTop: "10px" }} onClick={() => setCount(count + 1)}>
                Click Here
            </button>
            <hr/>

            <h2>Exercise 2(Increment & Decrement the count and resetButton, also stop the count to go below 0.)</h2>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <UseStateEx2 />
            </div>
            <hr/>

            <h2>Exercise 3 (Change Name like fron 1 to 2 and then fron 2 to 1 it is switching using useState in string)</h2>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <UseStateEx3 />
            </div>
            <hr/>

            <h2>Exercise 4 (Toggle action like hide/show by using useState in boolean form)</h2>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <UseStateEx4 />
            </div>
            <hr/>

            <h2>Exercise 5 (Change one key fron the object and without change others.)</h2>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <UseStateEx5 />
            </div>
            <hr/>

            <h2>Exercise 6 (Add new value in an array using useState as array.)</h2>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <UseStateEx6 />
            </div>
            <hr/>

        </div>
    );
}

export default UseState;