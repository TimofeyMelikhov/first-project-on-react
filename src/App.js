import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}
export default App;
