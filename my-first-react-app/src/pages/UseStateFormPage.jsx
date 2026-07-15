import UseStateForm1 from "../components/UseStateForm1";
import UseStateForm2 from "../components/UseStateForm2";
import UseStateForm3 from "../components/UseStateForm3";
import UseStateForm4 from "../components/UseStateForm4";

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

            <h2>Exercise 2(Multiple Inputs)</h2>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <UseStateForm2 />
            </div>
            <hr/>

            <h2>Exercise 3(Multiple Inputs will handle by one state object.)</h2>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <UseStateForm3 />
            </div>
            <hr/>

            <h2>Exercise 4(Multiple Inputs will handle by one state object with submit button and form tag.)</h2>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <UseStateForm4 />
            </div>
            <hr/>
        </div>
    );
}

export default UseStateFormPage;