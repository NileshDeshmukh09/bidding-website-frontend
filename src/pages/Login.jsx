import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../services/user.services";
import { useNavigate , Link } from "react-router-dom";
import LoadingSpinner from "../common/Loading";
import { setUser, setToken } from "../redux/slices/Authslice";
import PrimaryButton from "../common/PrimaryButton";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const userType = useSelector( state => state.user.userType);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate form fields
    if (!formData.email || !formData.password) {
      setLoading(false);
      setError("Email and password are required.");
      return;
    }

    try {
      const res = await loginUser(formData);

      if (res.data && res.data.success) {
        setLoading(false);
        dispatch(setUser(res.data.user));
        dispatch(setToken(res.data.accessToken));
        navigate("/");
      } else {
        setLoading(false);
        setError(res.message || "Failed to log in.");
      }
    } catch (error) {
      setLoading(false);
      setError("An error occurred while logging in.");
      console.error("Error fetching data:", error);
    }
  };

  return (
    <form className="max-w-sm mx-auto mt-8">
      <div className="mb-4">
      <h1 className=" my-6 text-3xl text-center text-[#00B386]">{userType ==='CLIENT' ? `Login to hire talent` : `Login to find work for you`}</h1>
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 w-full"
          required
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <PrimaryButton
        onClick={handleSubmit}
        children={loading ? <LoadingSpinner /> : `Login`}
      />

      <p>
        Create a New Account ?{" "}
        <span>
          <Link
            to={"/signup/select-user"}
            className="font-medium text-xl text-[#00B386] hover:underline"
          >
            Signup
          </Link>
        </span>
      </p>
    </form>
  );
};

export default Login;
