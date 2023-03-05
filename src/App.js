import "./App.css";
import FullName from "./Components/fullName";
import Address from "./Components/Address";
import Photo from "./Components/Photo.jsx";

function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <Photo />
      <div style={{ marginLeft: 100 }}>
        <FullName />
        <Address />
      </div>
    </div>
  );
}

export default App;
