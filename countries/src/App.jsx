import "./App.css";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Country from "./pages/Country";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/country" element={<Country />} />
    </Routes>
  );
}

export default App;
