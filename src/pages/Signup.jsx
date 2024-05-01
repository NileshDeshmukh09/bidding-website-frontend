// src/components/SignupForm.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../services/user.services";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../common/Loading";
import { setUser, setToken } from "../redux/slices/Authslice";
import PrimaryButton from "../common/PrimaryButton";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

 const userType =  useSelector( state => state.user.userType)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await createUser({...formData , userType});

      if (res.data && res.data.success) {
        setLoading(false);
        dispatch(setUser(res.data.user));
        dispatch(setToken(res.data.accessToken));
        navigate("/");
      } else {
        setLoading(false);
        setError(res.message);
      }

      console.log("res : ", res);
    } catch (error) {
      setLoading(false);
      setError("An error occurred while signing up.");
      console.error("Error fetching data:", error);
    }
  };

  return (
    <form  className="max-w-sm mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="username" className="block mb-2">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
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
      

      <PrimaryButton onClick={handleSubmit} children={loading ? <LoadingSpinner /> : `Sign Up`}/>

      <p>Already have an Account ? <span><Link to={'/login'} className="text-xl font-bold hover:underline">Sign In</Link></span></p>
    </form>
  );
};

export default Signup;
