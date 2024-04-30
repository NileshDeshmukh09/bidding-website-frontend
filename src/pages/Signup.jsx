// src/components/SignupForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { signUp } from '../store/actions/authActions';
import { createUser } from "../services/user.services";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../common/Loading";
import { loginSuccess, setToken } from "../redux/slices/user.slice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      const res = await createUser(formData);

      if (res.data && res.data.success) {
        setLoading(false);
        dispatch(loginSuccess(res.data.user));
        dispatch(setToken(res.data.accessToken));
        navigate("/about");
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
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8">
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
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        {loading ? <LoadingSpinner /> : `Sign Up`}
      </button>
    </form>
  );
};

export default Signup;
