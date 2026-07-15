import UseStateForm1 from "../components/UseStateForm1";
import UseStateForm2 from "../components/UseStateForm2";

function UseStateFormPage() {
    return (
        <div>
            <h2>UseStateForm</h2>
            <hr />
            <h2>Exercise 1 (basic example of input with onChange)</h2>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <UseStateForm1 />
            </div>
            <hr/>

            <h2>Exercise 2(Increment & Decrement the count and resetButton, also stop the count to go below 0.)</h2>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <UseStateForm2 />
            </div>
            <hr/>
        </div>
    );
}

export default UseStateFormPage;