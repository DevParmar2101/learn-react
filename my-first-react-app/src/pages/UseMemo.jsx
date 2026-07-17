import UseMemoEx1 from "../components/UseMemo/UseMemoEx1";
function UseMemo() {
    return (
        <div>
            <h2>UseMemo</h2>
            <hr />
            <h2>Exercise 1 (Basic Example of useMemo. useMemo remembers the result of an expensive calculation and only recalculates it when its dependencies change, preventing unnecessary work on every re-render.)</h2>
            <UseMemoEx1 />
            <hr/>

        </div>
    );
}
export default UseMemo;