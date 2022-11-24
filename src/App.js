import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./utils/PrivateRoute";
import RestrictedRoute from "./utils/RestrictedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute> <Home /> </PrivateRoute>} />
        <Route path='/login' element={<RestrictedRoute> <Login /> </RestrictedRoute>} />
        <Route path='/register' element={<RestrictedRoute><Register /> </RestrictedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
