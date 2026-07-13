import Header from './components/Header';
import ProfileCard from "./components/ProfileCard";
import UserInfo from "./components/UserInfo";
import FruitList from "./components/FruitListByMap";
function App() {
    const employees = [
        {
            id: 1,
            name: "Dev Parmar",
            position: "Full Stack Developer",
            city: "Ahmedabad",

        },
        {
            id: 2,
            name: "Rahul Sharma",
            position: "Frontend Developer",
            city: "Mumbai",

        },
        {
            id: 3,
            name: "Ritvik Pandya",
            position: "Trainee",
            city: "Bhopal",

        },
    ]
  return (
      <div>
        <Header />
        <p>Welcome Dev</p>

{/*
          Version 1
          <div style={{ marginTop: '25px' }}>
              <ProfileCard />
          </div>

          Version 2
          <ProfileCard
              name="Dev Parmar"
              position="Full Stack Developer"
          />

          <ProfileCard
              name="Rahul Sharma"
              position="Frontend Developer"
              city="Mumbai"
          />

          <ProfileCard
              name="Ritvik Pandya"
              position="Trainee"
              city="Bhopal"
          />
*/}

          <div style={{ marginTop: '25px' }}>
              <UserInfo />
          </div>

          <div style={{ marginTop: '25px' }}>
              <FruitList />
          </div>

      </div>
  );
}

export default App;