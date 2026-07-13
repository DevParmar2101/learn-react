import Header from './components/Header';
import ProfileCard from "./components/ProfileCard.jsx";

function App() {
  return (
      <div>
        <Header />
        <p>Welcome Dev</p>

          <div style={{ marginTop: '25px' }}>
              <ProfileCard />
          </div>
      </div>
  );
}

export default App;