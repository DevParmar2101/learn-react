import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Components from "./pages/Components";
import Props from "./pages/Props";
import UseState from "./pages/UseState";
import Maps from "./pages/Maps";
import Layout from "./components/Layout";
import UseStateFormPage from "./pages/UseStateFormPage";
import UseEffectPage from "./pages/UseEffectPage";
import UseRef from "./pages/UseRef";
import UseMemo from "./pages/UseMemo";
import UseCallback from "./pages/UseCallback";

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
                    <Route path="/use-state-form" element={ <UseStateFormPage /> } />
                    <Route path="/use-effect" element={ <UseEffectPage /> } />
                    <Route path="/use-ref" element={ <UseRef /> } />
                    <Route path="/use-memo" element={ <UseMemo />} />
                    <Route path="/use-callback" element={ <UseCallback />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;