import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/ManageDashboard/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
