import {useEffect, useState} from "react";

function UseEffectEx2() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect executed");
    });

    function increaseCount() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Current Count: {count}</p>
            <button onClick={increaseCount}>Increase</button>
        </div>
    );
}

export default UseEffectEx2;