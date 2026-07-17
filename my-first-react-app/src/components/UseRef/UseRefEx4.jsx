import {useEffect, useRef, useState} from "react";

function UseRefEx4() {
    const [count, setCount] = useState(0);
    const previousCount = useRef(0);

    useEffect(() => {
        previousCount.current =  count;
    }, [count]);

    function increaseCount() {
        setCount(count + 1);
    }

    return (
        <div>
            <h3>Previous Count Example</h3>
            <p>Current Count: {count}</p>
            <p>Previous Count: {previousCount.current}</p>
            <button onClick={increaseCount}>Increase</button>
        </div>
    );
}

export default UseRefEx4;