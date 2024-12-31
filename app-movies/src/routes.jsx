import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./pages/Home/Home";
import Watch from "./pages/Watch/Watch";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </Router>
  );}

export default AppRoutes;
