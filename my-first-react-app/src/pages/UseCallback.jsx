import UseCallbackEx1 from "../components/UseCallback/UseCallbackEx1";
function UseCallback() {
    return (
        <div>
            <h2>UseCallback</h2>
            <hr />

            <h2>Exercise 1 (Basic example of useCallback. It memorizes a function so React can reuse the same function reference until its dependencies change.)</h2>
            <UseCallbackEx1 />
            <hr/>
        </div>
    );

}
export default UseCallback;