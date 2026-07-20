import {useCallback, useState} from "react";

function UseCallbackEx1() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    const showMessage = useCallback(() => {
        console.log("Button Clicked!");
    }, []);

    function increaseCount()
    {
        setCount(count + 1);
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increaseCount}>Increase Count</button>
            <br/> <br/>
            <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value) }/>
            <br/> <br/>
            <button onClick={showMessage}>Show message</button>
        </div>
    );

}

export default UseCallbackEx1;