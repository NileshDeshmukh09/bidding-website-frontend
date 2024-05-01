
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import SignupLanding from "./pages/SignupLanding";
import { useSelector } from "react-redux";
import ClientDashboard from "./pages/ClientDashboard";
import FreelancerDashboard from "./pages/FreelancerDashboard";


const AppRouter = () => {

  const userType = useSelector( state => state.user.userType);
  return (
    <div className="App">
      <Routes>
        <Route path="/signup/select-user" element={<SignupLanding/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<ProtectedRoutes />}>
          {userType === "CLIENT" ? <Route index element={<ClientDashboard />} /> : <Route index element={<FreelancerDashboard />} />}
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
