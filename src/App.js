import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./sections/login/Login";
import Dashboard from "./sections/dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
