import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./modules/common/components/Navigation/Navigation";
import NotFound from "./modules/common/components/NotFound";
import UsersModule from "./modules/users/UsersModule";
import "./App.css";
function App() {
  return (
    <div className="container">
      <Router>
        <Navigation />
        <Routes>
          <Route path="" element={<h3>Home work #30</h3>} />
          <Route path="users/*" element={<UsersModule />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
