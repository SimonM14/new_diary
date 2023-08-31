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

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Myhome />} />

          {/* Route for the profile page */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
