import {useState} from "react";

function UseStateEx2() {
    const [count, setCount] = useState(0);
    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count > 0 ? count - 1 : 0);
    }

    function reset() {
        setCount(0);
    }
    return (
        <div>
            <button onClick={increase}>Plus</button>
            <p>Count: {count}</p>
            <button onClick={decrease}>Minus</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default UseStateEx2;