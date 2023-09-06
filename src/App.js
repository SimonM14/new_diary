import "./styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { useState } from "react";
import Profile from "./components/Dashboard";
import Myhome from "./components/homepage";
import About from "./components/about";
import Navbar from "./components/navig";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Myhome />} />

          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
