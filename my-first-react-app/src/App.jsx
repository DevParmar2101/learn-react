import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Components from "./pages/Components";
import Props from "./pages/Props";
import UseState from "./pages/UseState";
import Maps from "./pages/Maps";
import Layout from "./components/Layout";

function App() {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/components" element={ <Components /> } />
                    <Route path="/props" element={ <Props /> } />
                    <Route path="/map" element={ <Maps /> } />
                    <Route path="/use-state" element={ <UseState /> } />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;