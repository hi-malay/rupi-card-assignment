import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./style/global.css";
import "./style/tailwind.css";
import "./style/app.css";
import "./style/animation.css";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/rupi-card-assignment" />} />
        <Route path="/rupi-card-assignment" element={<Home />} />
      </Routes>
    </Router>
  );
}
