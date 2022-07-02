import logo from "./logo.svg";
import "./App.css";
import Profile from "./Profile";
import "./Font.css";

function App() {
  return (
    <div className="App">
      <Profile img={logo} />
    </div>
  );
}

export default App;
