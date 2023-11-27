import "./App.css";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Country from "./pages/Country";
import NotFound from "./pages/NotFount";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/country" element={<Country />} />
      <Route path="*" element={<NotFound />} />
      {/*  *is wildcard */}
    </Routes>
  );
}

export default App;
