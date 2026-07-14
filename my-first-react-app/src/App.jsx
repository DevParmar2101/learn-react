import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Components from "./pages/Components";
import Props from "./pages/Props";
import Counter from "./pages/Counter";
import Maps from "./pages/Maps";
import {Component} from "react";
import Layout from "./components/Layout";

// import Header from './components/Header';
// import ProfileCard from "./components/ProfileCard";
// import UserInfo from "./components/UserInfo";
// import FruitList from "./components/FruitListByMap";

function App() {
    //   const employees = [
    //       {
    //           id: 1,
    //           name: "Dev Parmar",
    //           position: "Full Stack Developer",
    //           city: "Ahmedabad",
    //
    //       },
    //       {
    //           id: 2,
    //           name: "Rahul Sharma",
    //           position: "Frontend Developer",
    //           city: "Mumbai",
    //
    //       },
    //       {
    //           id: 3,
    //           name: "Ritvik Pandya",
    //           position: "Trainee",
    //           city: "Bhopal",
    //
    //       },
    //   ]
    // return (
    //     <div>
    //       <Header />
    //       <p>Welcome Dev</p>
    //
    //
    //         Version 1
    //         <div style={{ marginTop: '25px' }}>
    //             <ProfileCard />
    //         </div>
    //
    //         Version 2
    //         <ProfileCard
    //             name="Dev Parmar"
    //             position="Full Stack Developer"
    //         />
    //
    //         <ProfileCard
    //             name="Rahul Sharma"
    //             position="Frontend Developer"
    //             city="Mumbai"
    //         />
    //
    //         <ProfileCard
    //             name="Ritvik Pandya"
    //             position="Trainee"
    //             city="Bhopal"
    //         />
    //
    //         {employees.map((employee) => (
    //             <ProfileCard
    //                 key={employee.id}
    //                 name={employee.name}
    //                 position={employee.position}
    //                 city={employee.city}
    //             />
    //         ))}
    //         <div style={{ marginTop: '25px' }}>
    //             <UserInfo />
    //         </div>
    //
    //         <div style={{ marginTop: '25px' }}>
    //             <FruitList />
    //         </div>
    //
    //     </div>
    // );
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/components" element={ <Components /> } />
                    <Route path="/props" element={ <Props /> } />
                    <Route path="/map" element={ <Maps /> } />
                    <Route path="/counter" element={ <Counter /> } />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;