import { useDispatch, useSelector } from "react-redux";
import React , { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { setUserType } from "../redux/slices/Authslice";
import PrimaryButton from "../common/PrimaryButton";

const SignupLanding = () => {
  const userType = useSelector((state) => state.user.userType);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleUserTypeChange = (type) => {
    dispatch(setUserType(type));
  };

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/Signup");
    }, 1000);
  };

  return (
    <div className="w-full mt-20 flex flex-col justify-center items-center">
      <h1 className="my-10 text-2xl font-medium text-black">
        Join as a Client or Freelancer
      </h1>

      <div id="userType" className="flex justify-between gap-4">
        <div
          className={`w-[200px] py-6 px-5 rounded-lg border-2 ${
            userType === "CLIENT"
              ? "border-[#00B386] text-[#00B386]"
              : "border-black-500 text-black-500"
          }`}
          onClick={() => handleUserTypeChange("CLIENT")}
        >
          <div className="my-1 flex justify-between items-center">
            <p className="font-bold uppercase">CLIENT</p>
            <input
              type="radio"
              value={userType}
              checked={userType === "CLIENT"}
              onChange={() => {}}
            />
          </div>
          <p className="mt-5">I'm Client hiring for a project</p>
        </div>

        <div
          className={`w-[200px]  py-6 px-5 rounded-lg border-2 ${
            userType === "FREELANCER"
              ? "border-[#00B386] text-[#00B386]"
              : "border-black-500 text-black-500"
          }`}
          onClick={() => handleUserTypeChange("FREELANCER")}
        >
          <div className="my-1 flex justify-between items-center">
            <p className="font-bold uppercase">FREELANCER</p>
            <input
              type="radio"
              value={userType}
              checked={userType === "FREELANCER"}
              onChange={() => {}}
            />
          </div>
          <p className="mt-5">I'm Freelancer looking for a work</p>
        </div>
      </div>

      <div className="mt-4 flex justify-center flex-col items-center">
        <PrimaryButton
          onClick={handleSubmit}
          children={
            userType === "FREELANCER"
              ? "Apply as a Freelancer"
              : userType === "CLIENT"
              ? "Join as a Client"
              : "Create Account"
          }
          loading={loading}
        />

        <p>
          Already have an Account ?{" "}
          <span>
            <Link
              to={"/login"}
              className="text-xl text-[#00B386] font-bold hover:underline"
            >
              Sign In
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupLanding;
