import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./Components/00-Navbar/Nav";
import Dashboard from "./Components/01-Dashboard/Dashboard";


import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Nav>
      </Router>
    </div>
  );
}

export default App;
