import Header from './components/Header';
import ProfileCard from "./components/ProfileCard";
import UserInfo from "./components/UserInfo";
import FruitList from "./components/FruitListByMap";
function App() {
  return (
      <div>
        <Header />
        <p>Welcome Dev</p>

          <div style={{ marginTop: '25px' }}>
              <ProfileCard />
          </div>

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