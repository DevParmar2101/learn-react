import {useEffect} from "react";

function UseEffectEx1() {
    useEffect(() => {
        console.log("Component mounted.");
    }, []);

    return (
        <div>
            <p>Open the browser console.</p>
            <p>Refresh the page.</p>
            <p>You should see "Component Loaded."</p>
        </div>
    );
}

export default UseEffectEx1;