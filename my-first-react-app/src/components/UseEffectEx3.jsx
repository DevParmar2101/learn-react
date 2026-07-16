import {useEffect, useState} from "react";

function UseEffectEx3() {
    const [count, setCount] = useState(0);
    const [name,setName] = useState("");

    function increaseCount()
    {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log("UseEffect Exercise 3 executed!");
    },[count]);

    return (
        <div>
            <p> Your current count: {count}</p>
            <button onClick={increaseCount}>Increase</button>
            <br/>
            <label style={{ marginTop: "10px"}} htmlFor="name">Name</label>
            <br/>
            <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
            {name && <p>Hello, {name}</p>}
        </div>
    );
}

export default UseEffectEx3;