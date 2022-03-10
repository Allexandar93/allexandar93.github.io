import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import AllProjects from "./components/AllProjects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/projects" element={<AllProjects />} />
    </Routes>
  );
}

export default App;
