import React from "react";
import Header from "../components/Header";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Signup from "./Signup";

const FrontendHome = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  if(!isLoggedIn){
    return <Navigate to={"/signup"}/>
  }

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default FrontendHome;
