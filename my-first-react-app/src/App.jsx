import Header from './components/Header';
import ProfileCard from "./components/ProfileCard";
import UserInfo from "./components/UserInfo";
import FruitList from "./components/FruitListByMap";
function App() {
  return (
      <div>
        <Header />
        <p>Welcome Dev</p>

{/*
          Version 1
          {/*<div style={{ marginTop: '25px' }}>
              <ProfileCard />
          </div>
*/}
          <ProfileCard
              name="Dev Parmar"
              position="Full Stack Developer"
              city="Ahmedabad"
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