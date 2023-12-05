import "./App.css";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Country from "./pages/Country";
import NotFound from "./pages/NotFount";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/country/:code" element={<Country />} />
        <Route path="*" element={<NotFound />} />
        {/*  *is wildcard */}
      </Routes>
    </Layout>
  );
}

export default App;
