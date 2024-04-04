import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Rewards from "./components/Rewards";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import PublicRoute from "./components/PublicRoute";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Contact />
      <Rewards />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/login" element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
