import {useEffect, useState} from "react";

function UseEffectEx2() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect executed");
    },
        // [] //if add this then it will only render the effect on page load and then stop and if we remove it then it render it everytime the component loads.
        );

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