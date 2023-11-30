import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Country from "./pages/Country";
import NotFound from "./pages/NotFount";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/country/:code" element={<Country />} />
        <Route path="*" element={<NotFound />} />
        {/*  *is wildcard */}
      </Routes>
      <div>
        <Link to={"/"}> Home </Link>
        <Link to={"/search"}> Search </Link>
        <Link to={"/country"}> Country </Link>
      </div>
    </>
  );
}

export default App;
