import "./App.css";
import ProfileComponent from "./components/ProfileComponent";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProfileComponent />} />
      </Routes>
    </>
  );
}

export default App;
