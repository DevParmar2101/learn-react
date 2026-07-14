import Sidebar from "./Sidebar";
import "../styles/layout.css";

function Layout ({ children })
{
    return (
        <div className="layout">
            <Sidebar />
            <main className="content">
                {children}
            </main>
        </div>
    );
}

export default Layout;