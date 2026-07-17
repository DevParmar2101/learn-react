import UseMemoEx1 from "../components/UseMemo/UseMemoEx1";
import UseMemoEx2 from "../components/UseMemo/UseMemoEx2";
function UseMemo() {
    return (
        <div>
            <h2>UseMemo</h2>
            <hr />

            <h2>Exercise 1 (Basic Example of useMemo. useMemo remembers the result of an expensive calculation and only recalculates it when its dependencies change, preventing unnecessary work on every re-render.)</h2>
            <UseMemoEx1 />
            <hr/>

            <h2>Exercise 2 (Simulate an expensive calculation. Without useMemo the heavy calculation runs on every component re-render. With useMemo the calculated value is cached and recalculated only when the dependency changes)</h2>
            <UseMemoEx2 />
            <hr/>

        </div>
    );
}
export default UseMemo;