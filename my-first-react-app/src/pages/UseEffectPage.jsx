import {useEffect} from "react";
import UseEffectEx1 from '../components/UseEffectEx1' ;
import UseEffectEx2 from '../components/UseEffectEx2' ;
import UseEffectEx3 from '../components/UseEffectEx3';
import UseEffectEx4 from '../components/UseEffectEx4';
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
            <hr />

            <h2>Exercise 2 (Use useState & useEffect together and see what happen (on click of button the useState change the value and that how the component is reload so whenever component is reload the useEffect also run so if you see console you be get new log everytime you click on the increate button.)</h2>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <UseEffectEx2 />
            </div>
            <hr/>

            <h2>Exercise 3 (Use 1 useEffect and 2 useState and see what happen (As we added that [count] then the useEffect will render on page load and on state change of count only not on name))</h2>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <UseEffectEx3 />
            </div>
            <hr/>

            <h2>Exercise 4 (Use an free api to see the fetch example in useEffect.(see the code to understand better))</h2>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <UseEffectEx4 />
            </div>
            <hr/>

        </div>
    );
}

export default UseEffectPage;