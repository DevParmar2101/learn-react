import {useEffect} from "react";
import UseEffectEx1 from '../components/UseEffectEx1' ;
import UseEffectEx2 from '../components/UseEffectEx2' ;
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

            <h2>UseEffect</h2>
            <hr />
            <h2>Exercise 2 (Use useState & useEffect together and see what happen (on click of button the useState change the value and that how the component is reload so whenever component is reload the useEffect also run so if you see console you be get new log everytime you click on the increate button.)</h2>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <UseEffectEx2 />
            </div>

        </div>
    );
}

export default UseEffectPage;