import Header from './components/Header';
import ProfileCard from "./components/ProfileCard";
import UserInfo from "./components/UserInfo";

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

      </div>
  );
}

export default App;