import {useEffect} from "react";
import UseEffectEx1 from '../components/UseEffectEx1' ;
function UseEffectPage() {
    useEffect(() => {
        console.log("Component mounted.");
    }, []);

    return (
        <div>
            <h2>UseEffect</h2>
            <hr />
            <h2>Exercise 1 (Basic example of useEffect see the console on page load.)</h2>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <UseEffectEx1 />
            </div>

        </div>
    );
}

export default UseEffectPage;